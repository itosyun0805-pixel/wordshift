// WORDSHIFT — engine: state, maps, movement, labels, battle, NEXT tracker, rendering, input, boot.
const cv = document.getElementById('cv'), ctx = cv.getContext('2d');
ctx.imageSmoothingEnabled = false;
const DIRV = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };
const OPP = { up: 'down', down: 'up', left: 'right', right: 'left' };
const SPEED = 88;
const SAVE_KEY = 'wordshift.save.v1';
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const rnd = ([a, b]) => a + Math.floor(Math.random() * (b - a + 1));

function newState() {
  return { v: 2, map: 'town', x: 24, y: 22, dir: 'up', ch: 1, words: [], equipped: [], fix: {}, decay: {}, labels: {}, flags: {},
    stats: { pasted: 0, peeled: 0, wins: 0 }, titles: [], log: {}, cor: 0, ruin: 0, bgm: true, se: true, steps: 0, lv: 1, exp: 0, hp: 30, maxhp: 30,
    mast: {}, box: {}, last: {}, seen: {}, bn: 0, combo: 0, bestCombo: 0, frag: 0, dojo: { runs: 0, q: 0, ok: 0, best: 0 }, quiz: { q: 0, ok: 0 },
    tts: true, cards: [], refl: {}, notes: {}, daily: { last: null, streak: 0, total: 0 } };
}
let S = newState();
const P = { x: 0, y: 0, px: 0, py: 0, fx: 0, fy: 0, dir: 'up', moving: false, mt: 0, walkT: 0, bumpT: 0 };
let MAP = null, ents = [], busy = false, titleMode = true, T = 0, camX = 0, camY = 0, BT = null;
let AMB = { gulls: [], motes: [] };
const DEFEATED = new Set();
const isTouch = () => document.body.classList.contains('touch');
const maxSlots = () => S.lv >= 3 ? 4 : 3;
const expNeed = lv => 10 + lv * 4 + (lv - 1) * lv * 6;

/* ---------- save ---------- */
function save() { if (titleMode || !MAP || BT) return; S.map = MAP.id; S.x = P.x; S.y = P.y; S.dir = P.dir; try { localStorage.setItem(SAVE_KEY, JSON.stringify(S)); } catch (e) { } }
function loadSave() { try { const s = localStorage.getItem(SAVE_KEY); return s ? JSON.parse(s) : null; } catch (e) { return null; } }
function eraseSave() { try { localStorage.removeItem(SAVE_KEY); } catch (e) { } }

/* ---------- maps & entities ---------- */
function makeEnt(d) {
  const e = { ...d, px: d.x * 16, py: d.y * 16, fx: 0, fy: 0, moving: false, mt: 0, walkT: 0, timer: 1 + Math.random() * 2, home: { x: d.x, y: d.y }, cool: 0 };
  e.look = d.look ? LOOK[d.look] : null; return e;
}
function buildEnts(id) {
  const M = MAPS[id]; const defs = NPCS.filter(n => n.map === id && (!n.when || n.when()));
  if (M.dyn) defs.push(...M.dyn());
  return defs.filter(d => !(d.kind === 'foe' && DEFEATED.has(id + ':' + d.id)) && !(d.kind === 'sparkle' && flag(d.id))).map(makeEnt);
}
function loadMap(id, x, y, dir) {
  const M = MAPS[id]; M.id = id;
  if (!M.grid) { M.grid = M.build ? M.build() : gridFrom(M.rows); M.h = M.grid.length; M.w = M.grid[0].length; M.layer = paintLayer(M); }
  if (!MAP || MAP.id !== id) DEFEATED.clear();
  MAP = M; S.map = id; ents = buildEnts(id); placePlayer(x, y, dir);
  Audio8.play(titleMode ? 'title' : M.bgm); if (!titleMode) showLoc(M.label ? M.label() : M.name);
  initAmbient(); renderHUD();
}
function refreshEnts() { ents = buildEnts(MAP.id); }
function syncEnts() {
  if (!MAP || titleMode) return;
  const want = buildEnts(MAP.id), wantIds = new Set(want.map(e => e.id)), have = new Set(ents.map(e => e.id));
  ents = ents.filter(e => wantIds.has(e.id)); for (const e of want) if (!have.has(e.id)) ents.push(e);
}
function placePlayer(x, y, dir) { P.x = x; P.y = y; P.px = x * 16; P.py = y * 16; P.dir = dir || P.dir; P.moving = false; }
async function transfer(id, x, y, dir) { await fadeOut(300); loadMap(id, x, y, dir); await fadeIn(300); if (MAP.onEnter) await MAP.onEnter(); }
const hidden = e => !!(e.hidden && e.hidden());
const covers = (e, x, y) => x >= e.x && x < e.x + (e.w || 1) && y >= e.y && y < e.y + (e.h || 1);
function entAt(x, y, ignore) { return ents.find(e => e !== ignore && !hidden(e) && e.solid !== false && covers(e, x, y)); }
function talkAt(x, y) { return ents.find(e => !hidden(e) && e.talk && covers(e, x, y)); }
function findWarp(x, y) {
  const ws = MAP.warps || []; const w = ws.find(w => w.x === x && w.y === y); if (!w) return null;
  return w.alias != null ? ws[w.alias] : w;
}

/* ---------- movement ---------- */
function heldDir() { if (lastDir && held[lastDir]) return lastDir; for (const k of ['up', 'down', 'left', 'right']) if (held[k]) return k; return null; }
function clearHeld() { for (const k in held) held[k] = 0; }
function tryMove(dir) {
  const [dx, dy] = DIRV[dir], nx = P.x + dx, ny = P.y + dy;
  const w = findWarp(nx, ny);
  if (w) {
    if (w.cond && !w.cond()) { clearHeld(); run(w.blocked); return; }
    if (w.run) { clearHeld(); run(w.run); return; }
    if (w.to) { run(async () => { w.pre && w.pre(); await transfer(...w.to); }); return; }
  }
  const occ = entAt(nx, ny);
  if (occ && occ.kind === 'foe' && occ.cool <= 0) { encounter(occ); return; }
  if (nx < 0 || ny < 0 || nx >= MAP.w || ny >= MAP.h || SOLID.has(MAP.grid[ny][nx]) || occ) {
    if (P.bumpT <= 0) { Audio8.sfx('bump'); P.bumpT = 0.3; } return;
  }
  P.fx = P.px; P.fy = P.py; P.x = nx; P.y = ny; P.moving = true; P.mt = 0;
}
function onStep() {
  S.steps++;
  const sp = ents.find(e => e.kind === 'sparkle' && e.x === P.x && e.y === P.y);
  if (sp) run(() => collectSparkle(sp));
  if (S.steps % 5 === 0 && S.hp < S.maxhp) { S.hp++; renderHUD(); }
  for (const w of S.words) {
    if ((S.fix[w] || 0) > 0 && !eq(w)) {
      S.decay[w] = (S.decay[w] || 0) + 1;
      if (S.decay[w] >= 120) { S.fix[w]--; S.decay[w] = 0; toast(`«${NM(w)}» の思い込みが少し薄れた`); renderHUD(); }
    }
  }
}
function updPlayer(dt) {
  P.bumpT -= dt;
  if (P.moving) {
    P.mt += dt * SPEED / 16; P.walkT += dt;
    if (P.mt >= 1) { P.moving = false; P.px = P.x * 16; P.py = P.y * 16; onStep(); }
    else { P.px = P.fx + (P.x * 16 - P.fx) * P.mt; P.py = P.fy + (P.y * 16 - P.fy) * P.mt; return; }
  }
  if (titleMode || busy || UIST.length) return;
  const d = heldDir(); if (!d) return; P.dir = d; tryMove(d);
}
function updEnt(e, dt) {
  if (e.cool > 0) e.cool -= dt;
  if (e.moving) {
    e.mt += dt * (e.kind === 'foe' ? 40 : 44) / 16; e.walkT += dt; if (e.mt >= 1) { e.mt = 1; e.moving = false; }
    e.px = e.fx + (e.x * 16 - e.fx) * e.mt; e.py = e.fy + (e.y * 16 - e.fy) * e.mt; return;
  }
  if (!e.wander || busy || UIST.length || titleMode || S.labels[e.id]) return;
  e.timer -= dt; if (e.timer > 0) return;
  const foe = e.kind === 'foe';
  e.timer = foe ? 0.6 + Math.random() * 1.2 : 1.2 + Math.random() * 2.8;
  let d = ['up', 'down', 'left', 'right'][Math.random() * 4 | 0];
  const dxp = P.x - e.x, dyp = P.y - e.y;
  if (foe && e.cool <= 0 && Math.abs(dxp) + Math.abs(dyp) <= 4 && Math.random() < 0.65) d = Math.abs(dxp) > Math.abs(dyp) ? (dxp > 0 ? 'right' : 'left') : (dyp > 0 ? 'down' : 'up');
  e.dir = d;
  if (!foe && Math.random() < 0.3) return;
  const [dx, dy] = DIRV[d], nx = e.x + dx, ny = e.y + dy;
  if (foe && nx === P.x && ny === P.y && e.cool <= 0 && !P.moving) { encounter(e); return; }
  const lim = foe ? e.wander + 2 : e.wander;
  if (Math.abs(nx - e.home.x) > lim || Math.abs(ny - e.home.y) > lim) return;
  if (nx < 0 || ny < 0 || nx >= MAP.w || ny >= MAP.h || SOLID.has(MAP.grid[ny][nx]) || entAt(nx, ny, e) || (nx === P.x && ny === P.y) || findWarp(nx, ny)) return;
  e.fx = e.px; e.fy = e.py; e.x = nx; e.y = ny; e.moving = true; e.mt = 0;
}

/* ---------- scripts ---------- */
async function run(fn) {
  if (busy || !fn) return; busy = true;
  try { await fn(); } catch (err) { console.error(err); }
  finally { hideMsg(); hideBoard(); busy = false; syncEnts(); renderHUD(); save(); }
}
function interactFront() {
  const [dx, dy] = DIRV[P.dir], tx = P.x + dx, ty = P.y + dy;
  let e = talkAt(tx, ty);
  if (!e && tileAt(MAP, tx, ty) === 'c') e = talkAt(tx + dx, ty + dy);
  if (e) { run(() => interact(e)); return; }
  const fe = entAt(tx, ty); if (fe && fe.kind === 'foe' && fe.cool <= 0) { encounter(fe); return; }
  const ch = tileAt(MAP, tx, ty);
  if (ch === 'D') run(() => narr('鍵がかかっている。'));
  else if (MAP.id === 'corridor' && S.cor === 2 && ch === 'H' && tx === 7 && eq('goluboy')) run(() => narr('冷たい壁だ。……青くもない。だから、何もない。'));
  else if (isWater(ch) && MAP.id === 'town') run(() => narr('海が、きらきらと光っている。'));
}
async function interact(e) {
  if (e.look && !(e.look.kind === 'cat' && e.look.sleep)) e.dir = OPP[P.dir];
  if (S.labels[e.id]) return labeledTalk(e);
  if (e.hello) await greet(e);
  const ft = topFix();
  if (e.labelable && ft && S.fix[ft] >= 2 && Math.random() < (S.fix[ft] >= 3 ? 1 : 0.6)) { if (await tempt(e, ft)) return; }
  await e.talk(e);
}

/* ---------- words, fixation, labels ---------- */
function topFix() { let best = null, bf = 0; for (const w of S.equipped) { const f = S.fix[w] || 0; if (f > bf) { bf = f; best = w; } } return best; }
async function acquire(id, who, where) {
  if (has(id)) return;
  S.words.push(id); S.log[id] = { who, where }; S.mast[id] = 0; S.box[id] = 1; S.last[id] = S.bn; save();
  hideMsg(); speakWord(id); await showAcq(id);
  toast(`集めた言葉 ${S.words.length} / ${WORD_ORDER.length}`);
  if (S.equipped.length < maxSlots()) {
    if (await yesno(`«${NM(id)}» を装備しますか？`, '装備する', 'あとで')) { S.equipped.push(id); renderHUD(); toast(`«${NM(id)}» を装備した`); }
    else await narr('（MENU→ことば で、いつでも装備できる）');
  } else await narr('（スロットがいっぱいだ。MENU→ことば で入れ替えよう）');
  for (const n of [4, 8, 12]) if (S.words.length >= n && !flag('ms' + n)) {
    setf('ms' + n); await popBanner('COLLECTION BONUS', `言葉を ${n} 語あつめた！`, 'gold'); await giveHeart('コレクションボーナス');
  }
  checkTitles();
}

/* ---------- mastery ★ / spaced review ---------- */
const MST = [0, 2, 5, 9, 14];
const UNLOCK = { 2: '読み方と例文', 3: '豆知識', 4: '似ている言葉とのちがい', 5: '金の装丁（バトルで響きが1.25倍）' };
function stars(w) { const x = S.mast[w] || 0; let st = 1; for (let i = 1; i < MST.length; i++) if (x >= MST[i]) st = i + 1; return st; }
async function addMastery(w, n, why) {
  if (!w || !has(w)) return;
  const before = stars(w); S.mast[w] = (S.mast[w] || 0) + n; const after = stars(w);
  toast(`«${NM(w)}» 熟練度 +${n}${why ? '（' + why + '）' : ''}`);
  if (after > before) { Audio8.sfx('levelup'); await popBanner(`${WORDS[w].name}  ${'★'.repeat(after)}`, `「${UNLOCK[after]}」のページが開いた！（MENU→ことば）`, 'star'); }
}
async function masteryUse(w, key) { if (flag('mu_' + key)) return; setf('mu_' + key); await addMastery(w, 1, '使いこなし'); }
const INTERVAL = [0, 0, 1, 3, 6, 12];
const quizWords = () => S.words.filter(w => WORDS[w].quiz);
const dueness = w => S.bn - (S.last[w] ?? -99) - INTERVAL[S.box[w] || 1];
const pickRand = a => a[Math.random() * a.length | 0];
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
function pickQuizWord(def) {
  const qs = quizWords(); const weak = def ? def.weak.filter(w => qs.includes(w)) : [];
  if (weak.length && Math.random() < 0.5) return pickRand(weak);
  return shuffle(qs.slice()).sort((a, b) => dueness(b) - dueness(a))[0];
}
function decoysFor(t, n = 2) {
  const qs = quizWords().filter(w => w !== t), pref = [];
  if (WORDS[t].vs && qs.includes(WORDS[t].vs.w)) pref.push(WORDS[t].vs.w);
  for (const w of qs) if (WORDS[w].vs && WORDS[w].vs.w === t && !pref.includes(w)) pref.push(w);
  return [...pref, ...shuffle(qs.filter(w => !pref.includes(w)))].slice(0, n);
}
function explain(t, picked) {
  const T = WORDS[t]; let s = `正解は «${T.name}»（${T.lang}）。${T.desc}`;
  if (picked && picked !== t) { const P = WORDS[picked]; s += '\n' + ((T.vs && T.vs.w === picked) ? T.vs.t : (P.vs && P.vs.w === t) ? P.vs.t : `«${P.name}» は「${P.desc}」`); }
  return s;
}
/* one timed "which word fits?" question. returns {ok, perfect, t} */
async function quizOnce(target, head, limit = 9) {
  const opts = shuffle([target, ...decoysFor(target)]);
  Audio8.sfx('lens');
  await say(head, `「${pickRand(WORDS[target].quiz)}」\nこの気持ちに、いちばん近い言葉は？`, { keep: true });
  const t0 = performance.now();
  const i = await choose(opts.map(w => ({ t: WORDS[w].name, icon: w })), { timer: limit });
  const t = (performance.now() - t0) / 1000, ok = i >= 0 && opts[i] === target, perfect = ok && t < 5;
  S.quiz.q++; if (ok) S.quiz.ok++;
  const wasDue = dueness(target) >= 0;
  S.box[target] = ok ? Math.min(5, (S.box[target] || 1) + 1) : 1; S.last[target] = S.bn;
  return { ok, perfect, t, picked: i >= 0 ? opts[i] : null, wasDue };
}
async function hirameki(def) {
  const target = pickQuizWord(def); if (!target) return;
  const r = await quizOnce(target, 'ひらめきチャンス！');
  if (r.ok) {
    Audio8.sfx(r.perfect ? 'perfect' : 'chime'); S.combo++; S.bestCombo = Math.max(S.bestCombo, S.combo); BT.comboT = 1;
    await popBanner(r.perfect ? 'PERFECT!' : 'ひらめき！', `${r.t.toFixed(1)} 秒`, r.perfect ? 'gold' : 'star');
    const dmg = Math.round((r.perfect ? 14 : 10) * (1 + (S.lv - 1) * 0.08)); hurtFoe(dmg);
    await narr(`«${NM(target)}» の意味が、モヤに先回りして届いた。わだかまりが ${dmg} 晴れた。`);
    await addMastery(target, r.perfect ? 3 : 2, 'ひらめき');
  } else {
    Audio8.sfx('wrong'); if (S.combo >= 2) await narr('（響きの連鎖が途切れた……）'); S.combo = 0;
    await narr(r.picked ? 'ひらめかなかった……' : '時間切れ……！');
    await lens(target, explain(target, r.picked));
  }
}

/* ---------- sparkles / banners ---------- */
async function popBanner(title, sub, kind) {
  const b = $('#pop'); b.className = kind || ''; b.innerHTML = `<div class="pt">${esc(title)}</div>${sub ? `<div class="ps2">${rich(sub)}</div>` : ''}`;
  b.hidden = false; void b.offsetWidth; b.classList.add('go'); await sleep(1500); b.hidden = true; b.classList.remove('go');
}
async function collectSparkle(e) {
  setf(e.id); ents = ents.filter(x => x !== e); Audio8.sfx('spark');
  const r = Math.random(), owned = S.words.filter(w => w !== 'blank');
  if (r < 0.06) { await popBanner('金のしずく！', 'とても珍しいきらめきだ', 'gold'); await gainExp(30); if (owned.length) await addMastery(pickRand(owned), 3, '金のしずく'); }
  else if (r < 0.2) { S.frag = (S.frag || 0) + 1; await narr(`「ことばのかけら」を拾った！（${(S.frag - 1) % 3 + 1} / 3）`); if (S.frag % 3 === 0) { await narr('かけらが3つそろって、光りはじめた――'); await giveHeart(); } }
  else if (r < 0.33) { S.hp = S.maxhp; renderHUD(); await narr('やわらかな光に包まれた。こころが満ちた！'); }
  else if (r < 0.6 && owned.length) { const w = pickRand(owned); await narr(`きらめきの中に、«${NM(w)}» の響きがあった。`); await addMastery(w, 2, 'きらめき'); }
  else { await narr('きらめきを拾った！'); await gainExp(rnd([6, 12])); }
}

/* ---------- dojo (practice) ---------- */
async function dojo() {
  if (quizWords().length < 3) { await narr('（言葉を3つ以上集めると、ひらめき練習ができる）'); return; }
  S.dojo.runs++; let ok = 0, streak = 0, exp = 0;
  await narr('ひらめき練習 ── 全5問。場面に、いちばん近い言葉を選ぼう。（復習どきの言葉から出題）');
  S.bn++;
  for (let q = 1; q <= 5; q++) {
    const target = pickQuizWord(null);
    const r = await quizOnce(target, `第${q}問 / 5${streak >= 2 ? `　連続正解 ×${streak}` : ''}`, 12);
    S.dojo.q++;
    if (r.ok) {
      ok++; streak++; S.dojo.ok++; S.dojo.best = Math.max(S.dojo.best, streak);
      Audio8.sfx(streak >= 3 ? 'res3' : streak >= 2 ? 'res2' : 'chime');
      const g = (r.perfect ? 4 : 3) + (r.wasDue ? 2 : 0); exp += g;
      await narr(`${r.perfect ? 'PERFECT！' : '正解！'}（${r.t.toFixed(1)}秒）${r.wasDue ? '　復習どきの言葉だった！' : ''}`);
      if (r.wasDue) await addMastery(target, 1, '復習');
    } else { streak = 0; Audio8.sfx('wrong'); await narr(r.picked ? 'ざんねん……' : '時間切れ……'); await lens(target, explain(target, r.picked)); }
  }
  if (ok === 5) { exp += 10; await popBanner('ALL CLEAR!', '5問すべて正解', 'gold'); }
  await narr(`5問中 ${ok} 問正解！`);
  await gainExp(exp);
}
async function bumpFix(w) {
  if (eq('blank')) { await narr('（«（　　）» を装備していたので、思い込みは深まらなかった）'); return; }
  const f = Math.min(3, (S.fix[w] || 0) + 1); S.fix[w] = f; S.decay[w] = 0; renderHUD(); Audio8.sfx('wrong');
  toast(`思い込み度 UP：«${NM(w)}» ${'●'.repeat(f)}${'○'.repeat(3 - f)}`, 'warn');
  if (f === 1) await narr(`（なんだか、町の人がみんな «${NM(w)}» に見えてきた……）`);
  else if (f === 2) await narr(`（«${NM(w)}» の選択肢が、やけに目に入るようになった）`);
  else await narr(`（«${NM(w)}» 以外の言葉が、かすれて読めない……。言葉を外して歩くか、宿屋で休もう）`);
}
const QUIPS = {
  any: ['あなたは、{n}を理解した気になった。', '言葉が、{n}の顔を覆った。', '名前をつけると、なぜか安心する。', 'わかった。……わかった、ということにした。'],
  saudade: ['これで{n}も「切ない人」の仲間入りだ。'], goluboy: ['{n}は、明るい青に分類された。'], nayra: ['{n}の「前」は、あなたの「過去」になった。'],
  ergk: ['{n}に、「やった側」の印がついた。'], mis: ['{n}の言葉すべてに「〜らしい」がついた。'], depaysement: ['{n}は、あなたの旅の「珍しい景色」になった。'],
  toska: ['{n}の退屈は、魂の苦しみに格上げされた。'], mononoaware: ['{n}は、まだここにいるのに、思い出になった。'],
};
const TITLES = [['わかったつもり', () => S.stats.pasted >= 1], ['レッテル職人', () => S.stats.pasted >= 3], ['名づけの暴君', () => S.stats.pasted >= 6],
  ['聞く人', () => S.stats.peeled >= 1], ['ラベル剥がしの達人', () => S.stats.peeled >= 4], ['モヤ晴らし', () => (S.stats.wins || 0) >= 5],
  ['ことばの収集家', () => S.words.length >= 10], ['辞書を超えた人', () => S.words.length >= 16],
  ['響きの連鎖', () => (S.bestCombo || 0) >= 5], ['ひらめきの人', () => (S.quiz.ok || 0) >= 10], ['ことばの達人', () => S.words.some(w => stars(w) >= 5)]];
if (typeof EXTRA_TITLES !== 'undefined') TITLES.push(...EXTRA_TITLES);
function checkTitles() { for (const [t, f] of TITLES) if (f() && !S.titles.includes(t)) { S.titles.push(t); Audio8.sfx('found'); toast(`称号『${t}』を手に入れた`, 'title'); } }
async function label(e, w) {
  for (const l of (e.labelReact && e.labelReact[w]) || ['……え？']) await say(e, l);
  await showStamp(w, e.name);
  S.labels[e.id] = w; S.stats.pasted++;
  const pool = [...(QUIPS[w] || []), ...QUIPS.any];
  await narr(pool[Math.random() * pool.length | 0].replace(/\{n\}/g, e.name));
  await bumpFix(w); checkTitles();
}
async function tempt(e, w) {
  await say(null, `（${e.name}も、きっと «${NM(w)}» だ……）`, { keep: true });
  const i = await choose([{ t: `「あなたは ${NM(w)} ですね」`, word: w, trap: true }, { t: '……ちゃんと話を聞く' }]);
  if (i === 0) { await label(e, w); return true; }
  return false;
}
async function labeledTalk(e) {
  const w = S.labels[e.id], N = NM(w);
  await say({ name: `『${N}』`, look: e.look }, `「${N}……${N}……」`);
  await narr(`（${e.name}の顔が見えない。何を言っても、«${N}» にしか聞こえない）`);
  if (eq(w)) {
    await pick(null, null, [
      { t: `やっぱり、${N} なんだね`, word: w, go: async () => { await narr('あなたは満足した。……何も変わらなかった。'); } },
      { t: '立ち去る', cancel: true },
    ]);
    await narr(`（«${N}» を装備しているかぎり、このラベルは剥がれない気がする）`);
  } else {
    await pick(null, null, [{ t: 'ラベルを剥がして、ただ聞く', special: true, go: () => peel(e) }, { t: '立ち去る', cancel: true }]);
  }
}
async function peel(e) {
  const w = S.labels[e.id];
  await showPeel(w); delete S.labels[e.id]; S.stats.peeled++; S.fix[w] = Math.max(0, (S.fix[w] || 0) - 1); renderHUD();
  for (const l of e.truth || ['……。']) await say(e, l);
  await narr(`ラベルが剥がれた。${e.name}は、ただの${e.name}だった。`);
  if (e.onPeel) await e.onPeel(e);
  await gainExp(4); checkTitles();
}
async function clearChapter(n) {
  hideMsg(); Audio8.duck(2.6); Audio8.sfx('clear');
  const lab = k => k === 5 ? 'EPILOGUE' : `CHAPTER ${String(k).padStart(2, '0')}`;
  await showCard(lab(n), 'CLEAR', CHAPTERS[n]);
  S.ch = n + 1; save();
  if (CHAPTERS[n + 1] && n + 1 !== 6) await showCard(lab(n + 1), CHAPTERS[n + 1], '');
  renderHUD(); pulseTracker();
}
async function gainExp(n) {
  if (!n) return;
  S.exp += n; toast(`けいけんち +${n}`);
  while (S.exp >= expNeed(S.lv)) {
    S.exp -= expNeed(S.lv); S.lv++; S.maxhp += 6; S.hp = S.maxhp; Audio8.sfx('levelup'); renderHUD();
    await popBanner('LEVEL UP!', `Lv${S.lv}　こころ +6`, 'gold');
    if (S.lv === 3) await narr('ことばの装備スロットが 4つに増えた！');
  }
  renderHUD(); checkTitles();
}

/* ---------- battle ---------- */
function encounter(e) {
  run(async () => {
    const r = await battle(e.foe);
    if (r === 'win') { DEFEATED.add(MAP.id + ':' + e.id); ents = ents.filter(x => x !== e); }
    else if (r === 'flee') { e.cool = 3; }
  });
}
function renderBattleUI() {
  if (!BT) return; const b = $('#bui');
  b.querySelector('.bename').textContent = BT.def.name + (BT.labeled ? '（LABELED）' : '');
  b.querySelector('.bbar i').style.width = Math.max(0, BT.hp / BT.max * 100) + '%';
  b.querySelector('.bslv').textContent = S.lv;
  b.querySelector('.hpbar i').style.width = Math.max(0, S.hp / S.maxhp * 100) + '%';
  b.querySelector('.hpt').textContent = `こころ ${Math.max(0, S.hp)} / ${S.maxhp}`;
  b.querySelector('.bwords').innerHTML = S.equipped.map(w => `<img alt="" title="${esc(NM(w))}" src="${ICONS[w]}">`).join('');
}
function bNum(v, col) { BT.nums.push({ v: String(v), t: 0, col, x: 128 + (Math.random() * 30 - 15) }); }
async function battle(key, opt = {}) {
  const def = FOES[key];
  const max = key === 'king' ? def.hp + 15 * S.stats.pasted : def.hp;
  BT = { key, def, hp: max, max, listen: 0, calm: false, guard: false, labeled: null, shake: 0, flash: 0, nums: [], area: opt.area || MAP.tint, fade: 1, tags: [] };
  if (key === 'king') BT.tags = [...new Set(Object.values(S.labels).concat(S.words))].filter(w => w !== 'blank').slice(0, 6).map(w => WORDS[w].mini);
  if (key === 'king' && !BT.tags.length) BT.tags = ['LABEL'];
  hideMsg(); clearHeld();
  const sc = $('#screen'); Audio8.sfx('encounter'); sc.classList.add('enc'); await sleep(450); sc.classList.remove('enc');
  sc.classList.add('inbattle'); $('#bui').hidden = false; renderBattleUI();
  Audio8.play(def.boss ? 'boss' : 'battle');
  await narr(def.boss ? `${def.name}が 立ちはだかった！` : `${def.name}が あらわれた！`);
  if (!flag('tutBattle')) {
    setf('tutBattle');
    await narr('（バトル：モヤは、言葉にならない気持ちのかたまり。言葉をかけて「わだかまり」を晴らそう）');
    await narr('（「ことば」：装備した言葉をかける。相手に合う言葉は大きく響き、合わない言葉は……ラベルになることも）');
    await narr('（「きく」：相手の気持ちを探る。何が響くかのヒントになり、相手も少し落ち着く）');
  }
  S.bn++;
  if (quizWords().length >= 3 && (def.boss || Math.random() < 0.6)) await hirameki(def);
  let result = BT.hp <= 0 ? 'win' : null;
  while (!result) {
    const r = await playerTurn();
    if (r === 'flee') { result = 'flee'; break; }
    renderBattleUI();
    if (BT.hp <= 0) { result = 'win'; break; }
    await enemyTurn(); renderBattleUI();
    if (S.hp <= 0) { result = 'lose'; break; }
  }
  if (result === 'win') {
    Audio8.sfx('victory'); const t0 = performance.now();
    const fadeAnim = () => { if (!BT) return; BT.fade = Math.max(0, 1 - (performance.now() - t0) / 900); if (BT.fade > 0) requestAnimationFrame(fadeAnim); }; fadeAnim();
    await narr(`${def.name}は、晴れていった。`);
    S.stats.wins = (S.stats.wins || 0) + 1; checkTitles();
    await gainExp(def.exp);
  }
  if (result === 'lose') { Audio8.sfx('hurt'); await narr('こころが、疲れきってしまった……'); }
  sc.classList.remove('inbattle'); $('#bui').hidden = true; BT = null; hideMsg();
  if (result === 'lose') {
    await fadeOut(600); S.hp = S.maxhp; loadMap('inn', 5, 7, 'up'); await fadeIn(600);
    await narr('……宿屋「かもめ亭」で目を覚ました。こころは回復している。');
    await narr('（ヒント：「きく」で相手に響く言葉を探り、MENU で言葉を組みかえてから再挑戦しよう）');
  } else Audio8.play(MAP.bgm);
  renderHUD();
  return result;
}
async function playerTurn() {
  for (;;) {
    await say(null, '……どうする？', { keep: true, instant: true });
    const c = await choose([{ t: 'ことば' }, { t: BT.labeled ? 'きく（ラベルを剥がす）' : 'きく' }, { t: 'そばにいる' }, { t: BT.def.boss ? 'にげる（できない）' : 'にげる' }]);
    if (c === 0) {
      if (!S.equipped.length) { await narr('装備している言葉がない。（MENU で装備しておこう）'); continue; }
      await say(null, 'どの言葉を かける？', { keep: true, instant: true });
      const list = S.equipped.map(w => ({ t: WORDS[w].name, icon: w }));
      list.push({ t: 'もどる', cancel: true });
      const i = await choose(list, { cancel: list.length - 1 });
      if (i === list.length - 1) continue;
      await useWord(S.equipped[i]); return;
    }
    if (c === 1) { await listen(); return; }
    if (c === 2) { BT.guard = true; S.hp = Math.min(S.maxhp, S.hp + 4); renderBattleUI(); Audio8.sfx('heal'); await narr('何も言わず、そばにいることにした。（こころが 4 回復。次のダメージが半分に）'); return; }
    if (c === 3) {
      if (BT.def.boss) { await narr('にげられない！'); continue; }
      if (Math.random() < 0.75) { Audio8.sfx('cancel'); await narr('そっと、その場をはなれた。'); return 'flee'; }
      await narr('にげられなかった！'); return;
    }
  }
}
function hurtFoe(dmg) { BT.hp = Math.max(0, BT.hp - dmg); BT.shake = 0.4; BT.flash = 0.8; bNum(dmg, '#ffffff'); Audio8.sfx('hit'); renderBattleUI(); }
async function useWord(w) {
  const d = BT.def, W = WORDS[w], lvk = 1 + (S.lv - 1) * 0.08;
  Audio8.sfx('word');
  await narr(`«${W.name}» ── ${W.cast}`);
  if (d.weak.includes(w)) {
    S.combo++; S.bestCombo = Math.max(S.bestCombo, S.combo); BT.comboT = 1;
    const mult = Math.min(2, 1 + 0.15 * (S.combo - 1)), crit = Math.random() < 0.12, gold = stars(w) >= 5;
    let dmg = Math.round(rnd([16, 22]) * lvk * (d.boss ? 1.15 : 1) * mult * (crit ? 1.5 : 1) * (gold ? 1.25 : 1)); if (BT.labeled) dmg = Math.round(dmg * 0.6);
    hurtFoe(dmg); Audio8.sfx(S.combo >= 4 ? 'res3' : S.combo >= 2 ? 'res2' : 'res1');
    if (crit) { BT.flash = 1.4; await popBanner('CRITICAL!', 'こころの奥まで届いた', 'star'); }
    await narr(`言葉が 響いた！ わだかまりが ${dmg} 晴れた。${S.combo >= 2 ? `（響きの連鎖 ×${S.combo}）` : ''}${BT.labeled ? '（ラベル越しで、少し届きにくい）' : ''}`);
    if ([3, 5, 10].includes(S.combo)) await popBanner(`RESONANCE ×${S.combo}`, '響きの連鎖がつづいている！', 'gold');
    await addMastery(w, 1, '響いた');
    if (W.heal) { S.hp = Math.min(S.maxhp, S.hp + W.heal); renderBattleUI(); Audio8.sfx('heal'); await narr(`あたたかい気持ちになった。こころが ${W.heal} 回復した。`); }
    return;
  }
  if (S.combo >= 2) await narr('（響きの連鎖が途切れた……）');
  S.combo = 0;
  if (d.absorb && w !== 'blank') {
    BT.hp = Math.min(BT.max + 40, BT.hp + 12); BT.max = Math.max(BT.max, BT.hp); bNum('+12', '#ff8a8a'); Audio8.sfx('absorb'); renderBattleUI();
    await narr(d.key === 'king' ? `«${W.name}» は、ラベルになって王に貼りついた……！ わだかまりが 12 ふくらんだ。` : '言葉は、影に吸いこまれた……！ わだかまりが 12 ふくらんだ。');
  } else if ((d.trap || []).includes(w)) {
    BT.labeled = W.mini; Audio8.sfx('stamp'); const sc = $('#screen'); sc.classList.remove('shake'); void sc.offsetWidth; sc.classList.add('shake'); renderBattleUI();
    await narr('⟨レッテルを貼ってしまった！⟩');
    await narr('モヤは「わかったつもりか」と、ふくれあがった。（攻撃が強くなった。「きく」で剥がせる）');
    S.stats.pasted++; await bumpFix(w); checkTitles();
  } else if (w === 'blank') {
    const dmg = Math.round(rnd([8, 11]) * lvk); hurtFoe(dmg); await narr(`言葉にせず、ただ、そばにいた。わだかまりが ${dmg} 晴れた。`);
  } else {
    const dmg = Math.round(rnd([4, 7]) * lvk); hurtFoe(dmg); await narr(`少しだけ、届いた。わだかまりが ${dmg} 晴れた。`);
  }
  if (W.heal) { S.hp = Math.min(S.maxhp, S.hp + W.heal); renderBattleUI(); Audio8.sfx('heal'); await narr(`あたたかい気持ちになった。こころが ${W.heal} 回復した。`); }
}
async function listen() {
  const d = BT.def;
  if (BT.labeled) { BT.labeled = null; Audio8.sfx('peel'); renderBattleUI(); await narr('じっと耳をかたむけた。……ラベルが剥がれ、モヤの声がまた聞こえる。'); return; }
  BT.listen++; BT.calm = true;
  await narr('じっと耳をかたむけた。');
  await narr(d.hint[Math.min(BT.listen - 1, d.hint.length - 1)]);
  const dmg = d.key === 'king' ? rnd([11, 14]) : d.key === 'nameless' ? rnd([9, 12]) : d.boss ? rnd([5, 7]) : rnd([2, 4]);
  hurtFoe(dmg); await narr(`聞いてもらえて、わだかまりが ${dmg} ほどけた。（相手が少し落ち着いた）`);
  if (BT.listen >= 2) {
    const known = d.weak.filter(has);
    if (known.length) await narr(`（${known.map(w => '«' + NM(w) + '»').join(' や ')} が、響きそうだ。${known.some(eq) ? '' : '……でも、いまは装備していない'}）`);
    else await narr('（まだ知らない言葉が要るのかもしれない。それでも、聞きつづければ少しずつ近づける）');
  }
  if (BT.listen >= 3 && d.trap) { const tr = d.trap.filter(has); if (tr.length) await narr(`（«${NM(tr[0])}» は、ラベルになってしまいそうだ）`); }
}
async function enemyTurn() {
  const d = BT.def;
  let dmg = rnd(d.atk); if (BT.labeled) dmg *= 1.4; if (BT.calm) dmg *= 0.5; if (BT.guard) dmg *= 0.5;
  dmg = Math.max(1, Math.round(dmg)); BT.calm = false; BT.guard = false;
  let line = d.lines[Math.random() * d.lines.length | 0];
  if (d.key === 'king') { const pool = S.words.length ? S.words : ['saudade']; line = line.replace('○○', NM(pool[Math.random() * pool.length | 0])); }
  await say(d.name, line);
  S.hp -= dmg; Audio8.sfx('hurt'); const sc = $('#screen'); sc.classList.remove('hurt'); void sc.offsetWidth; sc.classList.add('hurt'); renderBattleUI();
  await narr(`こころに ${dmg} のダメージ！`);
}
function renderBattle() {
  drawBattleBG(ctx, BT.area, T);
  const sh = BT.shake > 0 ? Math.round(Math.sin(T * 60) * 4 * BT.shake) : 0;
  ctx.save(); ctx.globalAlpha = BT.fade;
  drawFoeBig(ctx, 128 + sh, 76 + Math.round(Math.sin(T * 1.8) * 3), T, BT.def, { flash: BT.flash, labeled: BT.labeled, tags: BT.tags });
  ctx.restore();
  if (S.combo >= 2) {
    const k = BT.comboT || 0, sc = 2 + (k > 0 ? 1 : 0), x = 236, y = 38;
    ctx.save(); ctx.globalCompositeOperation = 'lighter'; const g = ctx.createRadialGradient(x - 10, y + 6, 2, x - 10, y + 6, 26); g.addColorStop(0, `rgba(255,200,90,${0.35 + 0.15 * Math.sin(T * 6)})`); g.addColorStop(1, 'rgba(255,200,90,0)'); ctx.fillStyle = g; ctx.fillRect(x - 40, y - 20, 60, 50); ctx.restore();
    drawMini(ctx, 'RESONANCE', x - 36, y - 8, '#ffe6a6');
    const txt = 'X' + S.combo; drawMini(ctx, txt, x - txt.length * 4 * sc + 1, y + 1, '#3a2008', sc); drawMini(ctx, txt, x - txt.length * 4 * sc, y, '#ffcf5a', sc);
  }
  for (const n of BT.nums) { const a = Math.max(0, 1 - n.t / 1.1); if (a <= 0) continue; ctx.globalAlpha = a; const x = Math.round(n.x - n.v.length * 4), y = Math.round(52 - n.t * 22); drawMini(ctx, n.v, x + 1, y + 1, '#1a1020', 2); drawMini(ctx, n.v, x, y, n.col, 2); ctx.globalAlpha = 1; }
}
function updBattle(dt) { if (!BT) return; BT.comboT = Math.max(0, (BT.comboT || 0) - dt * 3); BT.shake = Math.max(0, BT.shake - dt); BT.flash = Math.max(0, BT.flash - dt * 3); for (const n of BT.nums) n.t += dt; BT.nums = BT.nums.filter(n => n.t < 1.2); }

/* ---------- NEXT tracker & marker ---------- */
let OBJ_CACHE = null;
function routeTarget(g) {
  if (!g || !MAP) return null;
  if (g.map === MAP.id) { const e = g.id && ents.find(x => x.id === g.id); return e ? { x: e.px / 16, y: e.py / 16, ent: e } : { x: g.x, y: g.y }; }
  const prev = { [MAP.id]: null }, q = [MAP.id];
  while (q.length) { const m = q.shift(); if (m === g.map) break; for (const l of LINKS) if (l[0] === m && !(l[1] in prev)) { prev[l[1]] = l; q.push(l[1]); } }
  if (!(g.map in prev)) return null;
  let l = prev[g.map]; while (l && l[0] !== MAP.id) l = prev[l[0]];
  return l ? { x: l[2], y: l[3], exit: true } : null;
}
function drawGuide() {
  if (titleMode || BT || !OBJ_CACHE || !OBJ_CACHE.g) return;
  const tg = routeTarget(OBJ_CACHE.g); if (!tg) return;
  const sx = tg.x * 16 - camX + 8, sy = tg.y * 16 - camY;
  if (sx >= 6 && sx <= SW - 6 && sy >= 14 && sy <= SH - 4) drawMarker(ctx, sx, sy - (tg.ent ? 6 : -2), T);
  else {
    const cx = P.px - camX + 8, cy = P.py - camY + 8, ang = Math.atan2(sy - cy, sx - cx);
    const k = Math.min(Math.abs((ang > -Math.PI / 2 && ang < Math.PI / 2 ? SW - 10 - cx : cx - 10) / (Math.cos(ang) || 1e-6)), Math.abs((Math.sin(ang) > 0 ? SH - 10 - cy : cy - 34) / (Math.sin(ang) || 1e-6)));
    drawEdgeArrow(ctx, clamp(cx + Math.cos(ang) * k, 10, SW - 10), clamp(cy + Math.sin(ang) * k, 34, SH - 10), ang, T);
  }
}
function updateTracker() {
  const el = $('#track');
  if (titleMode || !MAP) { el.hidden = true; return; }
  OBJ_CACHE = objective(); el.hidden = false;
  el.querySelector('.tt').innerHTML = rich(OBJ_CACHE.t);
}
function pulseTracker() { updateTracker(); const el = $('#track'); el.classList.remove('pulse'); void el.offsetWidth; el.classList.add('pulse'); }
function showHint() {
  if (busy || UIST.length || titleMode) return;
  run(async () => { const o = objective(); Audio8.sfx('lens'); await say('NEXT', `«${o.t}»\n${o.h || ''}`); });
}

/* ---------- ambient ---------- */
function initAmbient() {
  AMB = { gulls: [], motes: [] };
  if (MAP.id === 'town') for (let i = 0; i < 3; i++) AMB.gulls.push({ x: Math.random() * 640, y: 120 + i * 110 + Math.random() * 60, v: 16 + Math.random() * 10, ph: Math.random() * 6 });
  if (MAP.tint === 'blue' || MAP.tint === 'ruins' || MAP.tint === 'woods') for (let i = 0; i < 34; i++) AMB.motes.push({ x: Math.random() * 256, y: Math.random() * 192, v: 3 + Math.random() * 8, ph: Math.random() * 6 });
}
function updAmbient(dt) {
  for (const g of AMB.gulls) { g.x += g.v * dt; if (g.x > 700) { g.x = -60; g.y = 80 + Math.random() * 360; } }
  for (const m of AMB.motes) { m.y -= m.v * dt; m.x += Math.sin(T + m.ph) * dt * 4; if (m.y < -4) { m.y = 196; m.x = Math.random() * 256; } }
}
function ambientBelow() {
  if (MAP.id === 'town') {
    const sx = ((T * 9) % 760) - 60 - camX, sy = 28 * 16 + 4 - camY; OBJ.ship(ctx, Math.round(sx), sy, T);
    for (const g of AMB.gulls) R(ctx, 'rgba(0,0,0,.18)', Math.round(g.x - camX), Math.round(g.y - camY + 22), 4, 1);
  }
}
function komorebiLight() {
  if (MAP.id !== 'woods' || !eq('komorebi')) return;
  ctx.save(); ctx.globalCompositeOperation = 'lighter';
  const spots = [];
  for (let y = 13; y <= 22; y++) spots.push([WOODS_RIGHT[0], y]);
  for (let y = 4; y <= 8; y++) spots.push([WOODS_RIGHT[1], y]); spots.push([5, 3], [6, 3]);
  for (const [x, y] of spots) {
    const a = 0.26 + 0.12 * Math.sin(T * 1.5 + x + y * 1.3), px = x * 16 - camX + 8 + Math.sin(T * 0.7 + y) * 2, py = y * 16 - camY + 8;
    if (py < -20 || py > SH + 20) continue;
    const g = ctx.createRadialGradient(px, py, 1, px, py, 14); g.addColorStop(0, `rgba(255,246,180,${a})`); g.addColorStop(1, 'rgba(255,246,180,0)');
    ctx.fillStyle = g; ctx.fillRect(px - 13, py - 13, 26, 26);
  }
  ctx.restore();
}
function drawFog() {
  if (MAP.id !== 'woods') return;
  for (const [y0, y1] of [[12.5, 16.5], [3, 6.5]]) {
    const top = y0 * 16 - camY, bot = y1 * 16 - camY; if (bot < 0 || top > SH) continue;
    const g = ctx.createLinearGradient(0, top, 0, bot); g.addColorStop(0, 'rgba(225,232,236,0)'); g.addColorStop(0.35, 'rgba(225,232,236,.72)'); g.addColorStop(0.65, 'rgba(225,232,236,.72)'); g.addColorStop(1, 'rgba(225,232,236,0)');
    ctx.fillStyle = g; ctx.fillRect(0, top, SW, bot - top);
    for (let i = 0; i < 7; i++) { const x = ((i * 53 + T * (8 + i)) % 320) - 40, y = top + (bot - top) * (0.3 + 0.4 * ((i * 37) % 10) / 10); ctx.fillStyle = 'rgba(240,244,246,.35)'; ctx.beginPath(); ctx.ellipse(x, y, 34, 9, 0, 0, Math.PI * 2); ctx.fill(); }
  }
}
function ambientAbove() {
  for (const g of AMB.gulls) {
    const x = Math.round(g.x - camX), y = Math.round(g.y - camY + Math.sin(T * 2 + g.ph) * 3), up = Math.sin(T * 9 + g.ph) > 0;
    R(ctx, '#f8f8f8', x + 2, y, 1, 1); R(ctx, '#f8f8f8', x, up ? y - 1 : y + 1, 2, 1); R(ctx, '#f8f8f8', x + 3, up ? y - 1 : y + 1, 2, 1); R(ctx, '#3a3a48', x + 2, y + 1, 1, 1);
  }
  if (AMB.motes.length) {
    const col = MAP.tint === 'blue' ? '160,200,255' : MAP.tint === 'woods' ? '230,255,190' : '255,220,150';
    for (const m of AMB.motes) { ctx.fillStyle = `rgba(${col},${0.25 + 0.25 * Math.sin(T * 2 + m.ph)})`; ctx.fillRect(Math.round(m.x), Math.round(m.y), 1, 1); }
  }
}
function vignette(col, r0 = 40, r1 = 180) {
  const px = P.px - camX + 8, py = P.py - camY + 8;
  const g = ctx.createRadialGradient(px, py, r0, px, py, r1); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, col); ctx.fillStyle = g; ctx.fillRect(0, 0, SW, SH);
}
function tint() {
  const t = MAP.tint;
  if (t === 'town') { const g = ctx.createLinearGradient(0, 0, 0, SH); g.addColorStop(0, 'rgba(255,190,120,0.16)'); g.addColorStop(0.55, 'rgba(255,190,120,0.03)'); g.addColorStop(1, 'rgba(40,60,140,0.10)'); ctx.fillStyle = g; ctx.fillRect(0, 0, SW, SH); }
  else if (t === 'inn') { ctx.fillStyle = 'rgba(255,170,80,0.07)'; ctx.fillRect(0, 0, SW, SH); vignette('rgba(20,10,0,0.55)', 50, 170); }
  else if (t === 'blue') { const g = ctx.createRadialGradient(SW / 2, SH / 2, 60, SW / 2, SH / 2, 180); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(2,4,22,0.5)'); ctx.fillStyle = g; ctx.fillRect(0, 0, SW, SH); }
  else if (t === 'ruins') vignette('rgba(30,14,0,0.6)', 36, 175);
  else if (t === 'fest') {
    ctx.fillStyle = 'rgba(20,10,50,0.42)'; ctx.fillRect(0, 0, SW, SH);
    ctx.save(); ctx.globalCompositeOperation = 'lighter';
    for (let y = 0; y < MAP.h; y++) for (let x = 0; x < MAP.w; x++) if (MAP.grid[y][x] === 'L') { const lx = x * 16 - camX + 8, ly = y * 16 - camY + 4, p = 0.8 + 0.2 * Math.sin(T * 3 + x); const g = ctx.createRadialGradient(lx, ly, 2, lx, ly, 40 * p); g.addColorStop(0, 'rgba(255,170,90,0.35)'); g.addColorStop(1, 'rgba(255,170,90,0)'); ctx.fillStyle = g; ctx.fillRect(lx - 44, ly - 44, 88, 88); }
    ctx.restore();
  }
  else if (t === 'future') { const g = ctx.createLinearGradient(0, 0, 0, SH); g.addColorStop(0, 'rgba(120,180,255,0.16)'); g.addColorStop(1, 'rgba(40,60,120,0.12)'); ctx.fillStyle = g; ctx.fillRect(0, 0, SW, SH); }
  else if (t === 'isle') { const g = ctx.createLinearGradient(0, 0, 0, SH); g.addColorStop(0, 'rgba(255,230,160,0.14)'); g.addColorStop(1, 'rgba(60,140,220,0.08)'); ctx.fillStyle = g; ctx.fillRect(0, 0, SW, SH); }
  else if (t === 'cave') {
    ctx.fillStyle = 'rgba(14,6,0,0.42)'; ctx.fillRect(0, 0, SW, SH); vignette('rgba(6,2,0,0.7)', 30, 140); const f = ents.find(e => e.draw === 'fire');
    if (f) { const fx = f.px - camX + 8, fy = f.py - camY + 8, p = 0.85 + 0.15 * Math.sin(T * 9); ctx.save(); ctx.globalCompositeOperation = 'lighter'; const g = ctx.createRadialGradient(fx, fy, 4, fx, fy, 90 * p); g.addColorStop(0, 'rgba(255,150,60,0.32)'); g.addColorStop(1, 'rgba(255,150,60,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, SW, SH); ctx.restore(); }
  }
  else if (t === 'woods') { ctx.fillStyle = 'rgba(20,60,30,0.10)'; ctx.fillRect(0, 0, SW, SH); vignette('rgba(5,20,10,0.5)', 60, 190); }
}

/* ---------- render ---------- */
function drawEnt(e) {
  const sx = Math.round(e.px - camX), sy = Math.round(e.py - camY);
  if (sx < -70 || sx > SW + 70 || sy < -90 || sy > SH + 40) return;
  if (e.kind === 'foe') { OBJ.foe(ctx, sx, sy, T, FOES[e.foe].col, e.cool > 0); return; }
  if (e.kind === 'sparkle') { OBJ.sparkle(ctx, sx, sy, T); return; }
  const L = e === P ? LOOK.hero : e.look;
  if (L) {
    const fr = e.moving ? (Math.floor(e.walkT * 8) % 2 ? 1 : 2) : 0;
    ctx.fillStyle = 'rgba(0,0,0,.26)'; ctx.fillRect(sx + 4, sy + 14, 8, 2); ctx.fillRect(sx + 5, sy + 16, 6, 1);
    ctx.drawImage(charSprite(L, e.dir || 'down', fr), sx, sy - 4);
    if (L.kind === 'cat' && L.sleep && !S.labels[e.id]) { const k = (T * 0.8) % 1; drawMini(ctx, 'Z', sx + 9 + Math.round(k * 3), sy + 4 - Math.round(k * 8), `rgba(255,255,255,${1 - k})`); }
    if (e !== P && S.labels[e.id]) drawTag(ctx, WORDS[S.labels[e.id]].mini, sx + 8, sy + (L.kind === 'cat' ? 8 : 1), 'label');
    else if (e !== P && e.offer && e.offer() && !(OBJ_CACHE && OBJ_CACHE.g && OBJ_CACHE.g.id === e.id)) drawOffer(ctx, sx + 8, sy - 6, T);
    return;
  }
  switch (e.draw) {
    case 'fountain': OBJ.fountain(ctx, sx, sy, T); break;
    case 'boat': OBJ.boat(ctx, sx, sy, T); break;
    case 'rowboat': OBJ.boat(ctx, sx, sy, T, true); break;
    case 'stall': OBJ.stall(ctx, sx, sy, T); break;
    case 'easel': OBJ.easel(ctx, sx, sy, T, S.labels.ines === 'goluboy'); break;
    case 'sign': OBJ.sign(ctx, sx, sy); break;
    case 'lighthouse': OBJ.lighthouse(ctx, sx, sy, T, S.ch >= 5); break;
    case 'window': OBJ.window(ctx, sx, sy, T); break;
    case 'shards': OBJ.shards(ctx, sx, sy); break;
    case 'tablet': OBJ.tablet(ctx, sx, sy, T, e.stone); break;
    case 'statue': OBJ.statue(ctx, sx, sy, T, e.face); break;
    case 'door': OBJ.door(ctx, sx, sy, T, e.color, e.open); break;
    case 'crystal': OBJ.crystal(ctx, sx, sy, T); break;
    case 'mural': OBJ.mural(ctx, sx, sy, T); break;
    case 'chest': OBJ.chest(ctx, sx, sy, T, flag('open_' + e.id)); break;
    case 'spring': OBJ.spring(ctx, sx, sy, T); break;
    default: if (OBJ[e.draw]) OBJ[e.draw](ctx, sx, sy, T, e);
  }
}
function fixTags() {
  if (titleMode) return; const w = topFix(); if (!w) return; const f = S.fix[w]; let i = 0;
  for (const e of ents) {
    if (!e.labelable || S.labels[e.id]) continue; i++;
    if (!(f >= 3 || (f === 2 && i % 2 === 1) || (f === 1 && i % 3 === 1))) continue;
    drawTag(ctx, WORDS[w].mini + '?', Math.round(e.px - camX) + 8, Math.round(e.py - camY) - 15 + Math.round(Math.sin(T * 3 + i)), 'q');
  }
}
function render() {
  ctx.fillStyle = '#05060c'; ctx.fillRect(0, 0, SW, SH);
  if (BT) { renderBattle(); return; }
  if (!MAP) return;
  const mw = MAP.w * 16, mh = MAP.h * 16;
  const cx = titleMode ? 230 + Math.sin(T * 0.11) * 170 : P.px + 8 - SW / 2, cy = titleMode ? 300 : P.py + 8 - SH / 2;
  camX = mw <= SW ? -Math.floor((SW - mw) / 2) : Math.round(clamp(cx, 0, mw - SW));
  camY = mh <= SH ? -Math.floor((SH - mh) / 2) : Math.round(clamp(cy, 0, mh - SH));
  ctx.drawImage(MAP.layer, -camX, -camY);
  drawWater(ctx, MAP, camX, camY, T);
  ambientBelow();
  const list = ents.filter(e => !hidden(e));
  if (!titleMode) list.push(P);
  list.sort((a, b) => (a.py + (a.h ? (a.h - 1) * 16 : 0)) - (b.py + (b.h ? (b.h - 1) * 16 : 0)));
  for (const e of list) drawEnt(e);
  drawFog(); ambientAbove(); tint(); komorebiLight();
  if (MAP.id === 'corridor') for (const e of list) if (e.draw === 'door' && !e.open) OBJ.doorGlow(ctx, Math.round(e.px - camX), Math.round(e.py - camY), T, e.color);
  fixTags(); drawGuide();
}

/* ---------- input ---------- */
const held = { up: 0, down: 0, left: 0, right: 0 }; let lastDir = null;
const KEY = { ArrowUp: 'up', KeyW: 'up', ArrowDown: 'down', KeyS: 'down', ArrowLeft: 'left', KeyA: 'left', ArrowRight: 'right', KeyD: 'right',
  KeyZ: 'A', Enter: 'A', Space: 'A', KeyX: 'B', Escape: 'B', Backspace: 'B', KeyC: 'MENU', KeyM: 'MENU', Tab: 'MENU', KeyH: 'HINT', KeyQ: 'HINT' };
addEventListener('keydown', e => {
  if (e.target && /^(TEXTAREA|INPUT)$/.test(e.target.tagName)) return;
  const k = KEY[e.code]; if (!k) return; e.preventDefault();
  if (DIRV[k]) { if (!held[k]) { held[k] = 1; lastDir = k; } press(k.toUpperCase()); }
  else { if (e.repeat) return; press(k); }
});
addEventListener('keyup', e => { const k = KEY[e.code]; if (k && DIRV[k]) held[k] = 0; });
addEventListener('blur', clearHeld);
function press(b) {
  Audio8.init();
  if (UIST.length) { UIST[UIST.length - 1](b); return; }
  if (busy || titleMode || !MAP) return;
  if (b === 'A') interactFront();
  else if (b === 'HINT') showHint();
  else if (b === 'MENU' || b === 'B') openMenu();
}
function tapAdvance() { const top = UIST[UIST.length - 1]; if (top && top.tap) { Audio8.init(); top('A'); } }

/* ---------- title / intro / ending ---------- */
function showTitle() {
  titleMode = true; busy = false; UIST.length = 0; BT = null;
  ['#msg', '#choice', '#menu', '#board', '#acq', '#ending', '#loc', '#lensbox', '#bui', '#track'].forEach(s => $(s).hidden = true);
  $('#screen').classList.remove('inbattle');
  $('#hud').innerHTML = ''; loadMap('town', 24, 22, 'up'); setFade(0);
  const sv = loadSave(); const items = [];
  if (sv) items.push(['つづきから', () => continueGame(sv)]);
  items.push(['はじめから', startNew]);
  items.push(['あそびかた・クレジット', showCredits, true]);
  const t = $('#title'); t.hidden = false; let idx = 0;
  t.querySelector('.tmenu').innerHTML = items.map(([l], i) => `<button type="button" class="tb" data-i="${i}"><span class="cur">▶</span>${l}</button>`).join('');
  const btns = [...t.querySelectorAll('.tb')];
  const paint = () => btns.forEach((b, i) => b.classList.toggle('sel', i === idx));
  const go = () => { Audio8.init(); Audio8.sfx('ok'); if (items[idx][2]) { items[idx][1](); return; } pop(); t.hidden = true; items[idx][1](); };
  const pop = pushUI(b => {
    if (b === 'UP' || b === 'DOWN') { idx = (idx + (b === 'UP' ? items.length - 1 : 1)) % items.length; Audio8.sfx('cursor'); paint(); }
    else if (b === 'A') go();
  });
  btns.forEach((b, i) => { b.onclick = () => { idx = i; go(); }; b.onpointerenter = () => { idx = i; paint(); }; });
  paint();
}
function toTitle() { showTitle(); }
const VERSION = 'v1.0.0';
const REPO_URL = 'https://github.com/itosyun0805-pixel/wordshift';
function showCredits() {
  const c = $('#compose');
  c.innerHTML = `<div class="cbox win credits"><div class="chd">あそびかた・クレジット <span class="ver">${VERSION}</span></div>
    <div class="sec"><span class="k sk">あそびかた</span><div>移動：矢印キー / WASD（スマホは十字キー）　話す・決定：Z / Enter（A）　もどる：X / Esc（B）　メニュー：C（MENU）　ヒント：H（左上の NEXT をタップ）<br>人と話して言葉を集め、MENU の「ことば」で装備しよう。装備した言葉で、会話やバトルの選択肢が変わる。合わない場面で言葉を使うと、相手に「ラベル」が貼られてしまう。</div></div>
    <div class="sec"><span class="k sk">セーブ</span><div>自動でセーブされる。セーブデータは、この端末のこのブラウザの中にだけ保存される。ブラウザのデータを消したり、別の端末・ブラウザで開いたりすると、引き継げない。</div></div>
    <div class="sec"><span class="k sk">発音</span><div>言葉やあいさつの発音は、お使いの端末の音声合成で読み上げる。端末に入っていない言語は再生されない（設定で OFF にできる）。</div></div>
    <div class="sec"><span class="k sk">内容について</span><div>言語や言語学の解説は、わかりやすさを優先して紹介している。方言や各言語の表現は、専門家の監修を受けたものではない。誤りに気づいたら、ぜひ教えてほしい。<br><span class="url">${REPO_URL}/issues</span></div></div>
    <div class="sec"><span class="k sk">クレジット</span><div>グラフィック・音楽・効果音：すべてプログラムで生成<br>フォント：DotGothic16（Fontworks／SIL Open Font License 1.1）、Press Start 2P（CodeMan38／SIL Open Font License 1.1）<br>制作協力：Claude（Anthropic）<br>ソースコード：<span class="url">${REPO_URL}</span></div></div>
    <div class="cbtns"><button type="button" class="tb sel" id="credclose"><span class="cur">▶</span>タイトルにもどる</button></div></div>`;
  c.hidden = false;
  const close = () => { pop(); c.hidden = true; Audio8.sfx('cancel'); };
  const pop = pushUI(b => { if (b === 'A' || b === 'B') close(); });
  c.querySelector('#credclose').onclick = close;
}
function applySettings() { Audio8.setBgm(S.bgm !== false); Audio8.setSe(S.se !== false); }
function startNew() { S = newState(); applySettings(); titleMode = false; run(intro); }
function continueGame(sv) {
  S = Object.assign(newState(), sv); S.stats = Object.assign({ pasted: 0, peeled: 0, wins: 0 }, S.stats); applySettings(); titleMode = false;
  for (const w of S.words) { if (S.mast[w] == null) S.mast[w] = 0; if (S.box[w] == null) S.box[w] = 1; }
  if (!MAPS[S.map]) S.map = 'town';
  S.daily = Object.assign({ last: null, streak: 0, total: 0 }, S.daily);
  loadMap(S.map, S.x, S.y, S.dir); renderHUD(); pulseTracker();
  if (typeof applyMyWord === 'function') applyMyWord();
  run(async () => { if (S.ch >= 6 && !flag('act2')) await startAct2(); if (typeof act3Resume === 'function') await act3Resume(); await checkDaily(); });
}
async function intro() {
  setFade(1); loadMap('town', 24, 22, 'up'); $('#loc').hidden = true; $('#track').hidden = true;
  await narr('知らない言葉が、'); await narr('まだ見ぬ世界への扉になる。'); hideMsg();
  await showCard('CHAPTER 01', CHAPTERS[1], '');
  await fadeIn(800); showLoc(MAP.name);
  await narr('船は、港町ソルテアに着いた。');
  await narr('潮風が、どこか懐かしい匂いを運んでくる。');
  await narr(isTouch() ? '（十字キーで移動、A で話す・調べる、MENU で言葉の装備）' : '（矢印キー / WASD で移動、Z で話す・調べる、C で言葉の装備メニュー）');
  pulseTracker();
  await narr(isTouch() ? '（左上の「NEXT」に、次にやることが出る。金色の矢印が目的地。NEXT をタップすると詳しいヒント）' : '（左上の「NEXT」に、次にやることが出る。金色の矢印が目的地。H キーかクリックで詳しいヒント）');
  await checkDaily();
}
async function showEnding(sub = 'THE END', lead = '知らない言葉が、まだ見ぬ世界への扉になる。<br>そして時々、扉の前で、言葉を置いてみる。') {
  hideMsg(); Audio8.play('ending');
  const el = $('#ending');
  el.innerHTML = `<div class="ebox"><div class="elogo">WORDSHIFT</div><div class="eth">${sub}</div>
    <p class="elead">${lead}</p>
    <dl class="est"><dt>レベル</dt><dd>${S.lv}</dd><dt>集めた言葉</dt><dd>${S.words.length} / ${WORD_ORDER.length}</dd><dt>晴らしたモヤ</dt><dd>${S.stats.wins || 0}</dd><dt>最大コンボ</dt><dd>×${S.bestCombo || 0}</dd><dt>ひらめき正答率</dt><dd>${S.quiz.q ? Math.round(S.quiz.ok / S.quiz.q * 100) : 0}%</dd><dt>★5の言葉</dt><dd>${S.words.filter(w => stars(w) >= 5).length}</dd><dt>思考実験カード</dt><dd>${S.cards.length} / ${Object.keys(CARDS).length}</dd><dt>貼ったラベル</dt><dd>${S.stats.pasted}</dd><dt>剥がしたラベル</dt><dd>${S.stats.peeled}</dd><dt>称号</dt><dd>${S.titles.length ? S.titles.map(t => '『' + esc(t) + '』').join(' ') : '—'}</dd></dl>
    <button type="button" class="tb sel" id="endgo"><span class="cur">▶</span>港を歩きつづける</button></div>`;
  el.hidden = false;
  await new Promise(res => { const pop = pushUI(b => { if (b === 'A') { pop(); res(); } }); $('#endgo').onclick = () => { pop(); res(); }; });
  el.hidden = true; Audio8.play(MAP.bgm); pulseTracker();
}

/* ---------- layout ---------- */
function fit() {
  const touch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
  document.body.classList.toggle('touch', touch);
  const padH = touch ? Math.min(210, innerHeight * 0.34) : 34;
  let w = Math.min(innerWidth - 32, 800, (innerHeight - padH - 30) * 4 / 3);
  w = Math.max(240, Math.floor(w));
  const sc = $('#screen'); sc.style.width = w + 'px'; sc.style.height = Math.round(w * 0.75) + 'px'; sc.style.setProperty('--u', (w / 256) + 'px');
}

/* ---------- boot ---------- */
function setupPad() {
  const dp = $('#dpad'); let id = null;
  const set = e => {
    const r = dp.getBoundingClientRect(), x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
    clearHeld(); if (Math.hypot(x, y) < r.width * 0.1) { dp.dataset.d = ''; return; }
    const k = Math.abs(x) > Math.abs(y) ? (x > 0 ? 'right' : 'left') : (y > 0 ? 'down' : 'up');
    if (dp.dataset.d !== k) press(k.toUpperCase());
    held[k] = 1; lastDir = k; dp.dataset.d = k;
  };
  dp.addEventListener('pointerdown', e => { e.preventDefault(); dp.setPointerCapture(e.pointerId); id = e.pointerId; set(e); });
  dp.addEventListener('pointermove', e => { if (e.pointerId === id) set(e); });
  const end = e => { if (e.pointerId !== id) return; id = null; clearHeld(); dp.dataset.d = ''; };
  dp.addEventListener('pointerup', end); dp.addEventListener('pointercancel', end);
  document.querySelectorAll('#pad [data-b]').forEach(b => b.addEventListener('pointerdown', e => { e.preventDefault(); b.classList.add('down'); press(b.dataset.b); }));
  document.querySelectorAll('#pad [data-b]').forEach(b => ['pointerup', 'pointercancel', 'pointerleave'].forEach(ev => b.addEventListener(ev, () => b.classList.remove('down'))));
  ['#msg', '#lensbox', '#acq'].forEach(s => $(s).addEventListener('click', tapAdvance));
  $('#hud').addEventListener('click', () => { if (!busy && !UIST.length && !titleMode) openMenu(); });
  $('#track').addEventListener('click', showHint);
  document.addEventListener('pointerdown', () => Audio8.init(), { once: true });
}
function boot() {
  buildTiles(); buildIcons(); fit(); addEventListener('resize', fit); setupPad();
  showTitle();
  let last = performance.now();
  const frame = now => {
    const dt = Math.min(0.05, (now - last) / 1000); last = now; T += dt;
    if (!BT) { for (const e of ents) updEnt(e, dt); updPlayer(dt); }
    updAmbient(dt); updBattle(dt); render();
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}
boot();
