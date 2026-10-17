// Record promo/promo.html as a vertical 1080x1920 video using headless Chrome (DevTools screencast).
// usage: node tools/capture_promo.mjs [baseUrl] ; needs tools/promo_server.py running and ffmpeg on PATH.
import { spawn, execFileSync } from 'node:child_process';
import { mkdirSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'promo', 'out');
const FR = join(OUT, 'frames');
const BASE = process.argv[2] || 'http://127.0.0.1:8790';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9333;
const sleep = ms => new Promise(r => setTimeout(r, ms));

rmSync(FR, { recursive: true, force: true }); mkdirSync(FR, { recursive: true });
if (existsSync(join(OUT, 'audio.webm'))) rmSync(join(OUT, 'audio.webm'));
const prof = join(tmpdir(), 'wordshift-promo-chrome');
const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${prof}`, '--autoplay-policy=no-user-gesture-required',
  '--window-size=540,960', '--hide-scrollbars', '--no-first-run', '--no-default-browser-check', 'about:blank'], { stdio: 'ignore' });

let targets;
for (let i = 0; i < 50; i++) { try { targets = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json(); if (targets.length) break; } catch { } await sleep(200); }
const page = targets.find(t => t.type === 'page');
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise(r => ws.addEventListener('open', r));
let id = 0; const pending = new Map(); const handlers = {};
ws.addEventListener('message', ev => {
  const m = JSON.parse(ev.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
  else if (m.method && handlers[m.method]) handlers[m.method](m.params);
});
const send = (method, params = {}) => new Promise(r => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const evalJs = async expr => (await send('Runtime.evaluate', { expression: expr, awaitPromise: false, returnByValue: true })).result?.result?.value;

await send('Page.enable'); await send('Runtime.enable');
handlers['Runtime.consoleAPICalled'] = p => { if (p.type === 'error' || p.type === 'warning') console.log('[page]', p.type, p.args.map(a => a.value ?? a.description).join(' ')); };
handlers['Runtime.exceptionThrown'] = p => console.log('[page exception]', p.exceptionDetails?.exception?.description || p.exceptionDetails?.text);
await send('Emulation.setDeviceMetricsOverride', { width: 540, height: 960, deviceScaleFactor: 2, mobile: false });
await send('Page.navigate', { url: `${BASE}/promo/promo.html` });
for (let i = 0; i < 100 && !(await evalJs('window.__ready === true')); i++) await sleep(150);
await evalJs('document.fonts.ready.then(() => window.__fonts = true)');
for (let i = 0; i < 60 && !(await evalJs('window.__fonts === true')); i++) await sleep(150);
await sleep(1200);

const frames = [];
handlers['Page.screencastFrame'] = p => {
  const n = frames.length; const f = join(FR, `f${String(n).padStart(5, '0')}.jpg`);
  writeFileSync(f, Buffer.from(p.data, 'base64')); frames.push({ f, t: p.metadata.timestamp });
  send('Page.screencastFrameAck', { sessionId: p.sessionId });
};
await send('Page.startScreencast', { format: 'jpeg', quality: 90, maxWidth: 1080, maxHeight: 1920, everyNthFrame: 1 });
await sleep(300);
const t0 = Date.now() / 1000;
await evalJs('startDemo()');
for (let i = 0; i < 400 && !(await evalJs('window.__done === true')); i++) await sleep(200);
const t1 = Date.now() / 1000;
const marks = await evalJs('JSON.stringify(window.__marks || {})');
writeFileSync(join(OUT, 'marks.json'), marks || '{}');
await send('Page.stopScreencast');
await sleep(300);
ws.close(); chrome.kill();

const used = frames.filter(fr => fr.t >= t0 - 0.05 && fr.t <= t1);
console.log(`frames: ${frames.length} total, ${used.length} in demo, ${(t1 - t0).toFixed(1)}s, ~${(used.length / (t1 - t0)).toFixed(1)} fps`);
let list = '';
for (let i = 0; i < used.length; i++) {
  const d = (i + 1 < used.length ? used[i + 1].t : t1) - Math.max(used[i].t, t0);
  list += `file '${used[i].f}'\nduration ${Math.max(d, 0.001).toFixed(4)}\n`;
}
list += `file '${used[used.length - 1].f}'\n`;
writeFileSync(join(OUT, 'frames.txt'), list);
const audio = join(OUT, 'audio.webm');
const mp4 = join(OUT, 'wordshift_story_1080x1920.mp4');
const args = ['-y', '-f', 'concat', '-safe', '0', '-i', join(OUT, 'frames.txt')];
if (existsSync(audio)) args.push('-i', audio);
args.push('-vf', 'fps=30,scale=1080:1920:flags=lanczos,format=yuv420p', '-c:v', 'libx264', '-preset', 'slow', '-crf', '18', '-movflags', '+faststart');
if (existsSync(audio)) args.push('-c:a', 'aac', '-b:a', '160k', '-af', 'afade=t=out:st=' + Math.max(0, t1 - t0 - 1.2).toFixed(2) + ':d=1.2', '-shortest');
args.push(mp4);
execFileSync('ffmpeg', args, { stdio: 'inherit' });
console.log('wrote', mp4);
