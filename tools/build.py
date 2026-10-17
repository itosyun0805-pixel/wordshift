#!/usr/bin/env python3
"""Build the standalone web release of WORDSHIFT into docs/ (served by GitHub Pages).

The root index.html is written for the Claude artifact viewer, which adds its own
<!doctype>/<head> skeleton. This script wraps it into a complete page, adds PWA
files (manifest, service worker, icons) and SNS preview tags, and zips the result
for itch.io.

usage: python3 tools/build.py [--site https://example.github.io/wordshift/]
"""
import argparse, json, re, shutil, zipfile
from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'docs'
RELEASE = ROOT / 'release'

TITLE = 'WORDSHIFT ─ 言葉を装備するRPG'
DESC = '世界55の「訳しにくい言葉」を装備して旅する、16bit風のRPG。言葉で戦い、言葉で謎を解く。でも言葉は、ときにレッテルにもなる。ブラウザで無料で遊べます。'


def version():
    m = re.search(r"const VERSION = '([^']+)'", (ROOT / 'js/main.js').read_text())
    return m.group(1) if m else 'v0'


def pixel_icon(size, pad=0):
    """32x32 pixel-art icon (gold W + pink heart on night blue), scaled with nearest neighbour."""
    W = ["1100000000011", "1100000000011", "1100000000011", "1100001000011", "1100011100011", "1100111110011",
         "1101110111011", "1111100011111", "1111000001111", "1110000000111"]
    H = ["0110110", "1111111", "1111111", "0111110", "0011100", "0001000"]
    g = Image.new('RGBA', (32, 32), (11, 14, 32, 255))
    d = ImageDraw.Draw(g)
    for y in range(32):
        c = 11 + y // 3, 14 + y // 3, 40 + y
        d.line([(0, y), (31, y)], fill=c + (255,))
    for (x, y) in [(4, 4), (27, 6), (24, 26), (6, 27), (15, 3)]:
        d.point((x, y), fill=(255, 246, 208, 255))

    def blit(bm, ox, oy, col, edge):
        for j, row in enumerate(bm):
            for i, ch in enumerate(row):
                if ch == '1':
                    for dx, dy in ((-1, 0), (1, 0), (0, -1), (0, 1)):
                        X, Y = ox + i + dx, oy + j + dy
                        if 0 <= Y - oy < len(bm) and 0 <= X - ox < len(row) and bm[Y - oy][X - ox] == '1':
                            continue
                        d.point((X, Y), fill=edge)
        for j, row in enumerate(bm):
            for i, ch in enumerate(row):
                if ch == '1':
                    shade = (255, 236, 160) if j < 3 else (255, 207, 90) if j < 7 else (201, 138, 32)
                    d.point((ox + i, oy + j), fill=col or (shade + (255,)))
    blit(W, 9, 13, None, (58, 34, 8, 255))
    blit(H, 20, 5, (245, 160, 180, 255), (60, 20, 40, 255))
    big = g.resize((size - 2 * pad, size - 2 * pad), Image.NEAREST)
    if not pad:
        return big
    canvas = Image.new('RGBA', (size, size), (11, 14, 32, 255))
    canvas.paste(big, (pad, pad))
    return canvas


def build(site):
    ver = version()
    if OUT.exists():
        shutil.rmtree(OUT)
    (OUT / 'icons').mkdir(parents=True)
    shutil.copytree(ROOT / 'js', OUT / 'js')

    src = (ROOT / 'index.html').read_text()
    src = re.sub(r'^<meta charset="utf-8">\n', '', src)
    src = re.sub(r'^<title>.*?</title>\n', '', src)
    src = src.replace('.js" charset="utf-8"></script>', f'.js?{ver}" charset="utf-8"></script>')
    head, body = src.split('<div id="app">', 1)
    og = site + 'og.png' if site else 'og.png'
    page = f'''<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{TITLE}</title>
<meta name="description" content="{DESC}">
<meta name="theme-color" content="#070912">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" type="image/png" href="icons/icon-192.png">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta property="og:type" content="website">
<meta property="og:title" content="{TITLE}">
<meta property="og:description" content="{DESC}">
<meta property="og:image" content="{og}">
{f'<meta property="og:url" content="{site}">' if site else ''}
<meta name="twitter:card" content="summary_large_image">
<style>html{{-webkit-text-size-adjust:100%}}:root{{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}}body{{margin:0}}</style>
{head.strip()}
</head>
<body>
<div id="app">{body.rstrip()}
<script>if ('serviceWorker' in navigator && location.protocol === 'https:') addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {{}}));</script>
</body>
</html>
'''
    (OUT / 'index.html').write_text(page)

    pixel_icon(192).save(OUT / 'icons/icon-192.png')
    pixel_icon(512).save(OUT / 'icons/icon-512.png')
    pixel_icon(512, pad=64).save(OUT / 'icons/icon-maskable-512.png')
    pixel_icon(180).convert('RGB').save(OUT / 'icons/apple-touch-icon.png')

    (OUT / 'manifest.webmanifest').write_text(json.dumps({
        'name': TITLE, 'short_name': 'WORDSHIFT', 'description': DESC, 'lang': 'ja',
        'start_url': './', 'scope': './', 'display': 'standalone', 'orientation': 'any',
        'background_color': '#070912', 'theme_color': '#070912',
        'icons': [{'src': 'icons/icon-192.png', 'sizes': '192x192', 'type': 'image/png'},
                  {'src': 'icons/icon-512.png', 'sizes': '512x512', 'type': 'image/png'},
                  {'src': 'icons/icon-maskable-512.png', 'sizes': '512x512', 'type': 'image/png', 'purpose': 'maskable'}],
    }, ensure_ascii=False, indent=2))

    files = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png'] + \
            [f'js/{p.name}?{ver}' for p in sorted((OUT / 'js').glob('*.js'))]
    (OUT / 'sw.js').write_text(f'''// WORDSHIFT service worker: precache the game so it starts offline.
const CACHE = 'wordshift-{ver}';
const FILES = {json.dumps(files)};
self.addEventListener('install', e => {{ e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); }});
self.addEventListener('activate', e => {{ e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('wordshift-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); }});
self.addEventListener('fetch', e => {{
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  if (u.origin === location.origin) {{ e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))); return; }}
  if (/fonts\\.(googleapis|gstatic)\\.com$/.test(u.hostname)) {{
    e.respondWith(caches.open(CACHE).then(c => c.match(e.request).then(r => r || fetch(e.request).then(res => {{ c.put(e.request, res.clone()); return res; }}))));
  }}
}});
''')
    (OUT / '.nojekyll').write_text('')
    og_src = ROOT / 'promo/og.png'
    if og_src.exists():
        shutil.copy(og_src, OUT / 'og.png')

    RELEASE.mkdir(exist_ok=True)
    zpath = RELEASE / f'wordshift-web-{ver}.zip'
    with zipfile.ZipFile(zpath, 'w', zipfile.ZIP_DEFLATED) as z:
        for p in sorted(OUT.rglob('*')):
            if p.is_file():
                z.write(p, p.relative_to(OUT))
    print(f'built {OUT} ({ver}) and {zpath.name}')


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('--site', default='https://itosyun0805-pixel.github.io/wordshift/')
    build(ap.parse_args().site)
