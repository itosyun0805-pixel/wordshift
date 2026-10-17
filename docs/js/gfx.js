// WORDSHIFT — procedural 16-bit pixel art: tiles, characters, objects, mini font, icons.
const TS = 16, SW = 256, SH = 192;

function mk(w, h, fn) { const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d'); fn && fn(g); return c; }
function R(g, c, x, y, w = 1, h = 1) { g.fillStyle = c; g.fillRect(x, y, w, h); }
function rng(seed) { let s = (seed >>> 0) || 1; return () => { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; }; }
function hash(x, y) { let h = (x * 374761393 + y * 668265263) | 0; h = Math.imul(h ^ (h >>> 13), 1274126177); return (h ^ (h >>> 16)) >>> 0; }
function shade(hex, k) {
  const n = parseInt(hex.slice(1), 16); const r = n >> 16 & 255, g = n >> 8 & 255, b = n & 255;
  const f = v => Math.max(0, Math.min(255, Math.round(k < 0 ? v * (1 + k) : v + (255 - v) * k)));
  return '#' + ((1 << 24) | (f(r) << 16) | (f(g) << 8) | f(b)).toString(16).slice(1);
}
function outline(c, col = '#141020') {
  const g = c.getContext('2d'), w = c.width, h = c.height; const d = g.getImageData(0, 0, w, h).data;
  const op = (x, y) => x >= 0 && y >= 0 && x < w && y < h && d[(y * w + x) * 4 + 3] > 0; const m = [];
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { if (op(x, y)) continue; if (op(x - 1, y) || op(x + 1, y) || op(x, y - 1) || op(x, y + 1)) m.push(x, y); }
  g.fillStyle = col; for (let i = 0; i < m.length; i += 2) g.fillRect(m[i], m[i + 1], 1, 1); return c;
}

/* ---------- tiles ---------- */
function tGrass(seed, flowers) {
  return mk(16, 16, g => {
    const r = rng(seed); R(g, '#5b9b44', 0, 0, 16, 16);
    for (let i = 0; i < 14; i++) R(g, '#4e8a3a', r() * 16 | 0, r() * 16 | 0);
    for (let i = 0; i < 7; i++) { const x = r() * 15 | 0, y = 1 + r() * 14 | 0; R(g, '#76b555', x, y); R(g, '#76b555', x + 1, y - 1); }
    for (let i = 0; i < 3; i++) R(g, '#8fcb66', r() * 16 | 0, r() * 16 | 0);
    if (flowers) {
      const cols = ['#f26b6b', '#fff5c0', '#f7c948', '#c890f0'];
      for (let i = 0; i < 3; i++) { const x = 2 + r() * 11 | 0, y = 2 + r() * 11 | 0, c = cols[r() * 4 | 0]; R(g, c, x - 1, y); R(g, c, x + 1, y); R(g, c, x, y - 1); R(g, c, x, y + 1); R(g, '#fff8d0', x, y); }
    }
  });
}
function tCobble(seed) {
  return mk(16, 16, g => {
    const r = rng(seed); R(g, '#857559', 0, 0, 16, 16);
    const st = [[0, 0, 7, 8], [7, 0, 9, 8], [0, 8, 4, 8], [4, 8, 7, 8], [11, 8, 5, 8]];
    for (const [x, y, w, h] of st) {
      const c = ['#b9a888', '#b09e7e', '#c3b293'][r() * 3 | 0];
      R(g, c, x + 1, y + 1, w - 1, h - 1); R(g, '#d8cbab', x + 1, y + 1, w - 2, 1); R(g, '#9a8a6c', x + 1, y + h - 1, w - 1, 1);
    }
  });
}
function tSand(seed) {
  return mk(16, 16, g => { const r = rng(seed); R(g, '#e2cc92', 0, 0, 16, 16); for (let i = 0; i < 10; i++) R(g, '#cfb67a', r() * 16 | 0, r() * 16 | 0); for (let i = 0; i < 6; i++) R(g, '#f2e3b6', r() * 16 | 0, r() * 16 | 0); });
}
function tDock() {
  return mk(16, 16, g => {
    R(g, '#9b6b3e', 0, 0, 16, 16);
    for (let y = 0; y < 16; y += 4) { R(g, '#b98552', 0, y, 16, 1); R(g, '#6b4425', 0, y + 3, 16, 1); const s = (y / 4) % 2 ? 11 : 4; R(g, '#6b4425', s, y, 1, 3); R(g, '#3f2614', 1, y + 1); R(g, '#3f2614', 14, y + 1); }
  });
}
function tWall() {
  return mk(16, 16, g => {
    R(g, '#e9ddc1', 0, 0, 16, 16);
    for (let y = 0; y < 12; y += 4) { R(g, '#dccfb0', 0, y + 3, 16, 1); const off = (y / 4) % 2 ? 4 : 0; for (let x = off; x < 16; x += 8) R(g, '#dccfb0', x, y, 1, 3); }
    R(g, '#a3957a', 0, 12, 16, 4); R(g, '#8b7e66', 0, 12, 16, 1); R(g, '#b9ab8e', 0, 13, 16, 1); for (let x = 2; x < 16; x += 6) R(g, '#8b7e66', x, 13, 1, 3);
  });
}
function tWindow() {
  const c = tWall(), g = c.getContext('2d');
  R(g, '#5c3d22', 3, 2, 10, 10); R(g, '#9ed0ee', 4, 3, 8, 8); R(g, '#ffd98a', 8, 7, 4, 4); R(g, '#d8f0ff', 5, 4, 2, 1); R(g, '#d8f0ff', 5, 5);
  R(g, '#5c3d22', 7, 3, 1, 8); R(g, '#5c3d22', 4, 6, 8, 1);
  R(g, '#a5502c', 2, 11, 12, 2); [3, 6, 9, 12].forEach((x, i) => R(g, i % 2 ? '#f5d04a' : '#e85a5a', x, 10));
  return c;
}
function tDoor() {
  const c = tWall(), g = c.getContext('2d');
  R(g, '#4a2e18', 3, 3, 10, 13); R(g, '#7d4f2b', 4, 4, 8, 12); R(g, '#e9ddc1', 3, 3); R(g, '#e9ddc1', 12, 3);
  R(g, '#94603a', 4, 4, 8, 1); R(g, '#5c3a1e', 6, 5, 1, 11); R(g, '#5c3a1e', 9, 5, 1, 11); R(g, '#f2c14e', 10, 10); R(g, '#8b7e66', 2, 15, 12, 1);
  return c;
}
function tRoof(base, dk, hl) {
  return mk(16, 16, g => { R(g, base, 0, 0, 16, 16); for (let y = 0; y < 16; y += 4) { R(g, hl, 0, y, 16, 1); R(g, dk, 0, y + 3, 16, 1); const off = (y / 4) % 2 ? 0 : 4; for (let x = off; x < 16; x += 8) R(g, dk, x, y, 1, 3); } });
}
function tTree(v) {
  const c = mk(16, 16, g => {
    g.fillStyle = 'rgba(20,50,20,.35)'; g.fillRect(2, 12, 12, 3); g.fillRect(4, 15, 8, 1);
    R(g, '#5b3a1f', 7, 10, 2, 5); R(g, '#7a5030', 7, 10, 1, 5);
    const r = rng(77 + v * 9);
    for (let y = 0; y < 13; y++) for (let x = 0; x < 16; x++) {
      const dx = (x + 0.5 - 8) / 7.2, dy = (y + 0.5 - 6.5) / 6.3, dd = dx * dx + dy * dy; if (dd > 1) continue;
      let col = '#2f6e34'; const l = dx * 0.6 + dy * 0.8;
      if (l < -0.2) col = '#428c3f'; if (l < -0.6) col = '#5fae4e'; if (dd > 0.75 && dy > 0.1) col = '#245a2a';
      R(g, col, x, y);
    }
    for (let i = 0; i < 5; i++) R(g, '#7cc862', 3 + r() * 8 | 0, 2 + r() * 5 | 0);
    if (v) { R(g, '#e8503a', 4, 6); R(g, '#e8503a', 10, 4); R(g, '#e8503a', 8, 9); }
  });
  return outline(c, '#173d1c');
}
function tFence() { return mk(16, 16, g => { R(g, '#a87244', 0, 7, 16, 2); R(g, '#a87244', 0, 11, 16, 2); R(g, '#8a5a32', 1, 5, 2, 10); R(g, '#8a5a32', 13, 5, 2, 10); R(g, '#c48c58', 1, 5, 2, 1); R(g, '#c48c58', 13, 5, 2, 1); R(g, 'rgba(0,0,0,.18)', 0, 15, 16, 1); }); }
function tCrate() {
  return mk(16, 16, g => { R(g, 'rgba(0,0,0,.2)', 3, 14, 12, 2); R(g, '#6e4523', 2, 3, 12, 12); R(g, '#b07a42', 3, 4, 10, 10); for (let i = 0; i < 10; i++) { R(g, '#8a5a30', 3 + i, 4 + i); R(g, '#8a5a30', 12 - i, 4 + i); } R(g, '#d09a5c', 3, 4, 10, 1); R(g, '#6e4523', 2, 8, 12, 1); });
}
function tLamp() {
  return mk(16, 16, g => { R(g, 'rgba(0,0,0,.2)', 5, 15, 7, 1); R(g, '#33333f', 7, 5, 2, 10); R(g, '#4a4a58', 6, 14, 4, 2); R(g, '#2a2a36', 5, 1, 6, 5); R(g, '#ffe08a', 6, 2, 4, 3); R(g, '#fff6cf', 7, 2, 1, 1); R(g, '#2a2a36', 6, 0, 4, 1); });
}
function tRock() {
  const c = mk(16, 16, g => { R(g, 'rgba(0,0,0,.18)', 2, 13, 13, 3); R(g, '#6b6b78', 2, 6, 12, 8); R(g, '#7f7f8c', 3, 4, 10, 8); R(g, '#9a9aa8', 4, 4, 6, 3); R(g, '#b9b9c6', 5, 4, 3, 1); R(g, '#55555f', 3, 12, 11, 2); });
  return outline(c, '#33333d');
}
function tWater(f) {
  return mk(16, 16, g => {
    R(g, '#2a62ad', 0, 0, 16, 16); R(g, '#2d68b5', 0, 4, 16, 3); R(g, '#275ba3', 0, 11, 16, 2);
    for (const [y, x0] of [[3, 2], [9, 9], [14, 5]]) {
      const x = (x0 + f * 2) % 16;
      for (const xx of [x, x - 16]) { R(g, '#4f8ad6', xx, y, 4, 1); R(g, '#4f8ad6', xx + 1, y - 1, 2, 1); R(g, '#9cc9f2', xx + 1, y - 1, 1, 1); }
    }
    if (f === 1 || f === 2) R(g, '#e4f5ff', 12, 6); if (f === 5) R(g, '#e4f5ff', 4, 12);
  });
}
function tWood(v) {
  return mk(16, 16, g => { R(g, '#a8733f', 0, 0, 16, 16); for (let y = 0; y < 16; y += 4) { R(g, '#bd8a52', 0, y, 16, 1); R(g, '#86592e', 0, y + 3, 16, 1); R(g, '#86592e', ((y / 4 + v) % 2) ? 5 : 12, y, 1, 3); } });
}
function tIWall() { return mk(16, 16, g => { R(g, '#d8b98c', 0, 0, 16, 10); for (let x = 1; x < 16; x += 4) R(g, '#cba677', x, 0, 1, 10); R(g, '#7a4f2a', 0, 10, 16, 6); R(g, '#5a3a1e', 0, 10, 16, 1); R(g, '#946238', 0, 11, 16, 1); R(g, '#5a3a1e', 7, 12, 1, 4); }); }
function tITop() { return mk(16, 16, g => { R(g, '#3b2a1c', 0, 0, 16, 16); R(g, '#2a1d13', 0, 5, 16, 1); R(g, '#2a1d13', 0, 11, 16, 1); R(g, '#4a3624', 0, 15, 16, 1); }); }
function tCounter() { const c = tWood(0), g = c.getContext('2d'); R(g, '#6a4224', 0, 3, 16, 13); R(g, '#8a5a32', 0, 2, 16, 8); R(g, '#b07a42', 0, 2, 16, 2); R(g, '#4a2e18', 0, 10, 16, 1); R(g, '#5a3a1e', 4, 11, 1, 5); R(g, '#5a3a1e', 11, 11, 1, 5); return c; }
function tTable() { const c = tWood(1), g = c.getContext('2d'); R(g, 'rgba(0,0,0,.2)', 2, 12, 13, 3); R(g, '#6a4224', 6, 9, 4, 5); R(g, '#9a6234', 1, 3, 14, 7); R(g, '#b67a44', 2, 3, 12, 2); R(g, '#7a4a26', 1, 9, 14, 1); R(g, '#f4efe4', 5, 4, 3, 2); R(g, '#e85a5a', 10, 4, 2, 2); return c; }
function tRug() { return mk(16, 16, g => { R(g, '#9c3b34', 0, 0, 16, 16); R(g, '#b34a40', 2, 2, 12, 12); R(g, '#e0b060', 7, 3, 2, 10); R(g, '#e0b060', 3, 7, 10, 2); R(g, '#7a2a24', 0, 0, 16, 1); }); }
function tShelf() { const c = tIWall(), g = c.getContext('2d'); R(g, '#5a3a1e', 1, 4, 14, 1); R(g, '#5a3a1e', 1, 9, 14, 1); [['#3a8a5a', 2], ['#c84a3a', 5], ['#d8c04a', 9], ['#4a6ab8', 12]].forEach(([c2, x]) => { R(g, c2, x, 1, 2, 3); R(g, c2, x + 1, 6, 1, 3); }); return c; }
function tDFloor(v) {
  return mk(16, 16, g => { R(g, '#2b3256', 0, 0, 16, 16); for (const o of [0, 8]) { R(g, '#1b2038', o, 0, 1, 16); R(g, '#1b2038', 0, o, 16, 1); R(g, '#2f3760', o + 1, 1, 6, 1); R(g, '#2f3760', o + 1, 9, 6, 1); } if (v === 2) { R(g, '#1b2038', 3, 11, 1, 1); R(g, '#1b2038', 4, 12, 1, 1); R(g, '#1b2038', 5, 12, 2, 1); } if (v === 1) R(g, '#3a4880', 12, 4); });
}
function tDWall() { return mk(16, 16, g => { R(g, '#121731', 0, 0, 16, 16); for (let y = 0; y < 16; y += 4) { const off = (y / 4) % 2 ? 4 : 0; for (let x = -4 + off; x < 16; x += 8) { R(g, '#1f2647', x + 1, y + 1, 7, 3); R(g, '#2e386a', x + 1, y + 1, 7, 1); } } R(g, 'rgba(0,0,10,.4)', 0, 13, 16, 3); }); }
function tDTop() { return mk(16, 16, g => { R(g, '#0a0d1d', 0, 0, 16, 16); R(g, '#161b36', 0, 14, 16, 2); R(g, '#141a33', 3, 4, 2, 2); R(g, '#141a33', 11, 9, 2, 2); }); }
function tRFloor(v) {
  return mk(16, 16, g => { R(g, '#c7a36b', 0, 0, 16, 16); for (const o of [0, 8]) { R(g, '#a6834e', o, 0, 1, 16); R(g, '#a6834e', 0, o, 16, 1); R(g, '#dcbd88', o + 1, 1, 6, 1); R(g, '#dcbd88', o + 1, 9, 6, 1); } if (v === 1) { R(g, '#a6834e', 10, 3, 1, 3); R(g, '#a6834e', 11, 5, 1, 2); } if (v === 2) { R(g, '#d9b97f', 2, 11, 4, 2); R(g, '#d9b97f', 3, 10, 2, 1); } });
}
function tRWall(v) {
  return mk(16, 16, g => {
    R(g, '#76552f', 0, 0, 16, 16); for (let y = 0; y < 16; y += 5) { const off = (y / 5) % 2 ? 4 : 0; for (let x = -4 + off; x < 16; x += 8) { R(g, '#9a7346', x + 1, y + 1, 7, 4); R(g, '#b08a58', x + 1, y + 1, 7, 1); } }
    if (v) { R(g, '#5e4224', 5, 5, 6, 1); R(g, '#5e4224', 4, 6, 1, 2); R(g, '#5e4224', 11, 6, 1, 2); R(g, '#5e4224', 5, 8, 6, 1); R(g, '#5e4224', 7, 6, 2, 2); }
    R(g, 'rgba(40,20,0,.35)', 0, 14, 16, 2);
  });
}
function tRTop() { return mk(16, 16, g => { R(g, '#5a4126', 0, 0, 16, 16); R(g, '#4a331c', 0, 6, 16, 1); R(g, '#4a331c', 0, 12, 16, 1); R(g, '#6b4e2e', 0, 15, 16, 1); }); }
function tPillar() { const c = tRFloor(0), g = c.getContext('2d'); R(g, 'rgba(40,20,0,.3)', 3, 14, 12, 2); R(g, '#d8b980', 4, 0, 8, 16); R(g, '#ecd29c', 4, 0, 2, 16); R(g, '#a8854f', 10, 0, 2, 16); R(g, '#bfa06a', 3, 0, 10, 2); R(g, '#bfa06a', 3, 13, 10, 2); return c; }

const TL = {};
function buildTiles() {
  TL.grass = [0, 1, 2, 3].map(i => tGrass(11 + i * 97, false));
  TL.flower = [0, 1, 2].map(i => tGrass(501 + i * 31, true));
  TL.cobble = [0, 1].map(i => tCobble(7 + i * 13));
  TL.sand = [0, 1, 2].map(i => tSand(3 + i * 17));
  TL.dock = tDock(); TL.wall = tWall(); TL.window = tWindow(); TL.door = tDoor();
  TL.roofR = tRoof('#b9493a', '#8c3127', '#d8684f'); TL.roofB = tRoof('#3d6aa8', '#284a7c', '#5a8bcc');
  TL.tree = [0, 1].map(tTree); TL.fence = tFence(); TL.crate = tCrate(); TL.lamp = tLamp(); TL.rock = tRock();
  TL.water = [...Array(8)].map((_, f) => tWater(f));
  TL.wood = [0, 1].map(tWood); TL.iwall = tIWall(); TL.itop = tITop(); TL.counter = tCounter(); TL.table = tTable(); TL.rug = tRug(); TL.shelf = tShelf();
  TL.dfloor = [0, 1, 2].map(tDFloor); TL.dwall = tDWall(); TL.dtop = tDTop();
  TL.rfloor = [0, 1, 2].map(tRFloor); TL.rwall = [0, 1].map(tRWall); TL.rtop = tRTop(); TL.pillar = tPillar();
}

const SOLID = new Set('TWODRBFXLMkKhctJHqQC_~P'.split(''));
const isWater = c => c === '~' || c === 'P';
const isRoof = c => c === 'R' || c === 'B';
function tileAt(M, x, y) { return (x < 0 || y < 0 || x >= M.w || y >= M.h) ? '_' : M.grid[y][x]; }

function paintLayer(M) {
  return mk(M.w * 16, M.h * 16, g => {
    for (let y = 0; y < M.h; y++) for (let x = 0; x < M.w; x++) {
      const ch = tileAt(M, x, y), X = x * 16, Y = y * 16, h = hash(x, y), d = im => g.drawImage(im, X, Y);
      switch (ch) {
        case '.': d(TL.grass[h % 4]); break;
        case ',': d(TL.flower[h % 3]); break;
        case ':': d(TL.cobble[h % 2]); break;
        case 's': d(TL.sand[h % 3]); break;
        case '=': d(TL.dock); break;
        case '~': case 'P': d(TL.water[0]); break;
        case 'T': d(TL.grass[h % 4]); d(TL.tree[h % 5 === 0 ? 1 : 0]); break;
        case 'W': d(TL.wall); break;
        case 'O': d(TL.window); break;
        case 'D': d(TL.door); break;
        case 'R': case 'B': {
          const pal = ch === 'R' ? ['#d8684f', '#8c3127'] : ['#5a8bcc', '#284a7c'];
          d(ch === 'R' ? TL.roofR : TL.roofB);
          if (!isRoof(tileAt(M, x, y - 1))) { R(g, pal[0], X, Y, 16, 2); R(g, pal[1], X, Y + 2, 16, 1); }
          if (!isRoof(tileAt(M, x, y + 1))) { R(g, 'rgba(30,10,10,.55)', X, Y + 13, 16, 3); R(g, pal[0], X, Y + 12, 16, 1); }
          if (!isRoof(tileAt(M, x - 1, y))) R(g, 'rgba(255,255,255,.18)', X, Y, 1, 16);
          if (!isRoof(tileAt(M, x + 1, y))) R(g, 'rgba(0,0,0,.25)', X + 15, Y, 1, 16);
          break;
        }
        case 'F': d(TL.grass[h % 4]); d(TL.fence); break;
        case 'X': d(TL.sand[h % 3]); d(TL.crate); break;
        case 'L': d(TL.grass[h % 4]); d(TL.lamp); break;
        case 'M': d(TL.sand[h % 3]); d(TL.rock); break;
        case 'w': d(TL.wood[h % 2]); break;
        case 'u': d(TL.rug); break;
        case 'K': d(TL.iwall); break;
        case 'k': d(TL.itop); break;
        case 'c': d(TL.counter); break;
        case 't': d(TL.table); break;
        case 'h': d(TL.shelf); break;
        case 'g': d(TL.dfloor[h % 3]); break;
        case 'H': d(TL.dwall); break;
        case 'J': d(TL.dtop); break;
        case 'r': d(TL.rfloor[h % 3]); break;
        case 'Q': d(TL.rwall[h % 4 === 0 ? 1 : 0]); break;
        case 'q': d(TL.rtop); break;
        case 'C': d(TL.pillar); break;
        default: R(g, '#05060c', X, Y, 16, 16);
      }
      if ('WOD'.includes(ch) && isRoof(tileAt(M, x, y - 1))) R(g, 'rgba(60,30,10,.28)', X, Y, 16, 3);
      if ((ch === 'g' && tileAt(M, x, y - 1) === 'H') || (ch === 'r' && tileAt(M, x, y - 1) === 'Q')) R(g, 'rgba(0,0,0,.28)', X, Y, 16, 3);
      if (ch === 'w' && tileAt(M, x, y - 1) === 'K') R(g, 'rgba(0,0,0,.22)', X, Y, 16, 2);
    }
  });
}

function drawWater(ctx, M, camX, camY, t) {
  const x0 = Math.max(0, Math.floor(camX / 16)), y0 = Math.max(0, Math.floor(camY / 16));
  const x1 = Math.min(M.w - 1, Math.floor((camX + SW) / 16)), y1 = Math.min(M.h - 1, Math.floor((camY + SH) / 16));
  const ft = Math.floor(t * 5), fo = Math.floor(t * 7);
  for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
    const ch = M.grid[y][x]; if (!isWater(ch)) continue;
    const sx = x * 16 - camX, sy = y * 16 - camY, h = hash(x, y);
    ctx.drawImage(TL.water[(ft + h) % 8], sx, sy);
    if (M.deep && y >= M.deep) { ctx.fillStyle = 'rgba(8,18,60,.2)'; ctx.fillRect(sx, sy, 16, 16); }
    const up = tileAt(M, x, y - 1);
    if (!isWater(up) && up !== '_') {
      if (up === '=') { ctx.fillStyle = 'rgba(0,20,50,.45)'; ctx.fillRect(sx, sy, 16, 4); }
      else { for (let i = 0; i < 16; i++) { if ((i + fo + h) % 6) R(ctx, '#e6f3ff', sx + i, sy); if ((i + fo + 3) % 4) R(ctx, '#8fc0ee', sx + i, sy + 1); } }
    }
    const lf = tileAt(M, x - 1, y), rt = tileAt(M, x + 1, y);
    if (!isWater(lf) && lf !== '_') { ctx.fillStyle = lf === '=' ? 'rgba(0,20,50,.35)' : '#bfe0ff'; for (let j = 0; j < 16; j += 2) if ((j + fo) % 6) ctx.fillRect(sx, sy + j, 1, 1); }
    if (!isWater(rt) && rt !== '_') { ctx.fillStyle = rt === '=' ? 'rgba(0,20,50,.35)' : '#bfe0ff'; for (let j = 1; j < 16; j += 2) if ((j + fo) % 6) ctx.fillRect(sx + 15, sy + j, 1, 1); }
    if (ch === 'P') { R(ctx, '#4a2e18', sx + 6, sy + 1, 4, 12); R(ctx, '#9b6b3e', sx + 6, sy, 4, 2); R(ctx, '#6b4425', sx + 9, sy + 2, 1, 10); const b = Math.sin(t * 3 + x) > 0 ? 1 : 0; R(ctx, '#e6f3ff', sx + 4, sy + 12 + b, 8, 1); }
  }
}

/* ---------- characters ---------- */
const SPR = new Map();
function charSprite(L, dir, fr) {
  const key = L.key + dir + fr; let c = SPR.get(key); if (c) return c;
  c = L.kind === 'cat' ? makeCat(L, dir, fr) : makeChar(L, dir, fr); SPR.set(key, c); return c;
}
function makeChar(L, dir, fr) {
  const c = mk(16, 20, g => {
    const P = (col, x, y, w = 1, h = 1) => { g.fillStyle = col; g.fillRect(x, y, w, h); };
    const side = dir === 'left' || dir === 'right';
    if (dir === 'right') { g.translate(16, 0); g.scale(-1, 1); }
    const skin = L.skin || '#f2c9a0', hair = L.hair || '#5a3a20', body = L.body || '#4a6ab8', b2 = L.body2 || shade(body, -0.3);
    const legs = L.legs || '#3a3040', shoe = '#2a2018', eye = '#2a1e2e';
    const lA = fr === 1 ? -1 : 0, lB = fr === 2 ? -1 : 0;
    // legs
    if (side) {
      const xa = fr === 1 ? 5 : fr === 2 ? 9 : 7, xb = fr === 1 ? 9 : fr === 2 ? 5 : 7;
      P(shade(legs, -0.25), xb, 17, 2, 2); P(shoe, xb, 19, 2, 1); P(legs, xa, 17, 2, 2); P(shoe, xa, 19, 2, 1);
    } else if (!L.dress) { P(legs, 6, 17 + lA, 2, 2); P(shoe, 6, 19 + lA, 2, 1); P(legs, 8, 17 + lB, 2, 2); P(shoe, 8, 19 + lB, 2, 1); }
    else { P(skin, 6, 18 + lA, 2, 1); P(shoe, 6, 19 + lA, 2, 1); P(skin, 8, 18 + lB, 2, 1); P(shoe, 8, 19 + lB, 2, 1); }
    // pack (behind when facing down)
    if (L.pack && dir === 'down') { P('#6a4020', 4, 12, 1, 3); P('#6a4020', 11, 12, 1, 3); }
    // body
    if (side) {
      P(body, 6, 12, 5, 5); P(b2, 6, 15, 5, 1);
      if (L.dress) { P(body, 5, 14, 7, 4); P(b2, 5, 17, 7, 1); }
      if (L.pack) { P('#8a5a2e', 10, 11, 3, 5); P('#6a4020', 10, 11, 3, 1); }
      const ax = fr === 1 ? 6 : fr === 2 ? 9 : 7; P(shade(body, -0.15), ax, 12, 2, 3); P(skin, ax, 15, 2, 1);
    } else {
      P(body, 5, 12, 6, 5); P(b2, 5, 15, 6, 1);
      if (L.dress) { P(body, 4, 14, 8, 4); P(b2, 4, 17, 8, 1); if (L.apron) P(L.apron, 6, 13, 4, 4); }
      else if (L.apron) P(L.apron, 6, 13, 4, 3);
      const aL = fr === 1 ? 1 : fr === 2 ? -1 : 0;
      P(shade(body, -0.15), 4, 12 + aL, 1, 3); P(skin, 4, 15 + aL, 1, 1); P(shade(body, -0.15), 11, 12 - aL, 1, 3); P(skin, 11, 15 - aL, 1, 1);
      if (L.pack && dir === 'up') { P('#8a5a2e', 5, 11, 6, 5); P('#a8703c', 5, 11, 6, 1); P('#6a4020', 7, 13, 2, 1); }
    }
    if (L.scarf) { P(L.scarf, 5, 11, 6, 2); if (dir === 'down') P(L.scarf, 9, 13, 2, 2); }
    // head
    P(skin, 4, 5, 8, 7);
    const st = L.style || 'short';
    if (dir === 'down') {
      if (st !== 'bald') { P(hair, 4, 4, 8, 3); P(hair, 4, 7, 1, 2); P(hair, 11, 7, 1, 2); P(hair, 5, 7, 2, 1); P(hair, 9, 7, 1, 1); }
      else { P(hair, 4, 7, 1, 3); P(hair, 11, 7, 1, 3); }
      if (st === 'long') { P(hair, 3, 6, 1, 7); P(hair, 12, 6, 1, 7); P(hair, 4, 9, 1, 4); P(hair, 11, 9, 1, 4); }
      P(eye, 6, 9, 1, 2); P(eye, 9, 9, 1, 2);
      if (L.blush) { P('#f0a090', 5, 11); P('#f0a090', 10, 11); }
      if (L.beard) { P(L.beard, 5, 10, 6, 2); P(L.beard, 6, 12, 4, 1); P(eye, 7, 10, 2, 1); }
    } else if (dir === 'up') {
      if (st !== 'bald') P(hair, 4, 4, 8, 8); else P(hair, 4, 8, 8, 3);
      if (st === 'long') P(hair, 3, 6, 10, 8);
    } else {
      if (st !== 'bald') { P(hair, 4, 4, 8, 3); P(hair, 8, 7, 4, 3); P(hair, 4, 7, 1, 1); } else P(hair, 9, 7, 3, 3);
      if (st === 'long') { P(hair, 8, 7, 4, 7); P(hair, 12, 6, 1, 7); }
      P(eye, 5, 9, 1, 2); P(shade(skin, -0.15), 4, 10, 1, 1);
      if (L.beard) { P(L.beard, 4, 10, 4, 2); P(L.beard, 5, 12, 2, 1); }
    }
    if (st === 'bun') { P(hair, 6, 2, 4, 2); P(shade(hair, 0.2), 7, 2, 2, 1); }
    // hats
    const hat = L.hat, hd = hat && shade(hat, -0.3);
    if (L.hatStyle === 'wide') { P(hat, 2, 5, 12, 1); P(hat, 5, 1, 6, 4); P(hd, 5, 4, 6, 1); P(shade(hat, 0.2), 5, 1, 6, 1); }
    else if (L.hatStyle === 'cap') { P(hat, 4, 3, 8, 3); P(hd, 4, 5, 8, 1); P(shade(hat, 0.25), 6, 2, 4, 1); }
    else if (L.hatStyle === 'chef') { P('#ffffff', 5, 0, 6, 5); P('#dcdcdc', 5, 4, 6, 1); P('#ffffff', 4, 1, 8, 2); }
    else if (L.hatStyle === 'beret') { P(hat, 3, 3, 9, 2); P(hat, 6, 2, 4, 1); P(hd, 3, 4, 9, 1); }
  });
  return outline(c);
}
function makeCat(L, dir, fr) {
  const c = mk(16, 20, g => {
    const P = (col, x, y, w = 1, h = 1) => { g.fillStyle = col; g.fillRect(x, y, w, h); };
    const b = L.body || '#e0a050', s = shade(b, -0.25);
    if (L.sleep) { P(b, 3, 14, 10, 5); P(b, 2, 15, 12, 3); P(s, 5, 15, 1, 3); P(s, 9, 15, 1, 3); P(b, 2, 12, 4, 3); P(b, 2, 11); P(b, 5, 11); P('#2a1e2e', 3, 13, 2, 1); P(s, 11, 17, 3, 1); return; }
    if (dir === 'right') { g.translate(16, 0); g.scale(-1, 1); }
    P(b, 5, 14, 8, 4); P(s, 7, 14, 1, 4); P(s, 10, 14, 1, 4); P(b, 3, 10, 5, 5); P(b, 3, 9); P(b, 7, 9);
    P('#2a1e2e', 4, 12); P('#2a1e2e', 6, 12); P('#f0a090', 5, 13);
    P(b, 12, 11 + (fr % 2), 1, 4); P(b, 6, 18, 1, 1); P(b, 11, 18, 1, 1);
  });
  return outline(c);
}

/* ---------- objects ---------- */
const OBJ = {
  fountain(ctx, sx, sy, t) {
    R(ctx, 'rgba(0,0,0,.2)', sx + 2, sy + 28, 28, 3);
    R(ctx, '#8a8476', sx + 2, sy + 12, 28, 16); R(ctx, '#c9c1b0', sx + 1, sy + 10, 30, 4); R(ctx, '#e0d9c8', sx + 2, sy + 10, 28, 1); R(ctx, '#a49c8c', sx + 1, sy + 26, 30, 3);
    R(ctx, '#3f86d0', sx + 4, sy + 14, 24, 11);
    for (let i = 0; i < 4; i++) { const xx = (i * 7 + t * 10) % 22 | 0; R(ctx, '#8cc4f4', sx + 5 + xx, sy + 16 + i * 2, 3, 1); }
    R(ctx, '#b4ac9c', sx + 14, sy + 6, 4, 14); R(ctx, '#d6cfbf', sx + 10, sy + 4, 12, 3); R(ctx, '#3f86d0', sx + 12, sy + 4, 8, 1);
    for (let i = 0; i < 10; i++) { const p = (t * 0.9 + i / 10) % 1, dr = i % 2 ? 1 : -1; R(ctx, i % 3 ? '#cfe8ff' : '#ffffff', sx + 16 + dr * (1 + p * 10) | 0, sy + 3 - Math.sin(p * Math.PI) * 6 + p * 11 | 0); }
  },
  stall(ctx, sx, sy, t) {
    R(ctx, '#6b4425', sx + 1, sy - 4, 2, 20); R(ctx, '#6b4425', sx + 45, sy - 4, 2, 20);
    R(ctx, '#8a5a32', sx + 2, sy + 8, 44, 6); R(ctx, '#b07a42', sx + 2, sy + 8, 44, 1); R(ctx, '#5a3a1e', sx + 2, sy + 14, 44, 2);
    [['#e0a030', 4], ['#c84a2a', 12], ['#6aa040', 20], ['#d8c040', 28], ['#8a4ab0', 36]].forEach(([c, x]) => { R(ctx, '#f0e6d0', sx + x, sy + 5, 6, 4); R(ctx, c, sx + x + 1, sy + 3, 4, 3); R(ctx, shade(c, .3), sx + x + 1, sy + 3, 2, 1); });
    for (let i = 0; i < 8; i++) { R(ctx, i % 2 ? '#f4efe4' : '#d84a4a', sx + i * 6, sy - 10, 6, 8); R(ctx, i % 2 ? '#f4efe4' : '#d84a4a', sx + i * 6 + 1, sy - 2, 4, 1); }
    R(ctx, 'rgba(0,0,0,.25)', sx, sy - 2, 48, 1);
  },
  easel(ctx, sx, sy, t, flat) {
    R(ctx, '#6b4425', sx + 3, sy + 2, 1, 14); R(ctx, '#6b4425', sx + 12, sy + 2, 1, 14); R(ctx, '#6b4425', sx + 7, sy, 2, 14);
    R(ctx, '#3a2a1a', sx + 2, sy - 7, 12, 10); R(ctx, '#f6f0e0', sx + 3, sy - 6, 10, 8);
    if (flat) { R(ctx, '#78c4f5', sx + 3, sy - 6, 10, 8); }
    else { R(ctx, '#f6c27a', sx + 3, sy - 6, 10, 3); R(ctx, '#3cbfae', sx + 3, sy - 3, 10, 2); R(ctx, '#3a7ad0', sx + 3, sy - 1, 10, 3); R(ctx, '#ffffff', sx + 8, sy - 4, 2, 1); }
  },
  sign(ctx, sx, sy) { R(ctx, 'rgba(0,0,0,.2)', sx + 5, sy + 14, 6, 2); R(ctx, '#6b4425', sx + 7, sy + 6, 2, 9); R(ctx, '#5a3a1e', sx + 2, sy + 1, 12, 7); R(ctx, '#b07a42', sx + 3, sy + 2, 10, 5); R(ctx, '#7a4a26', sx + 4, sy + 3, 8, 1); R(ctx, '#7a4a26', sx + 4, sy + 5, 6, 1); },
  boat(ctx, sx, sy, t, small) {
    const b = Math.round(Math.sin(t * 1.6) * 1);
    sy += b;
    R(ctx, 'rgba(10,30,70,.35)', sx + 2, sy + 14, 28, 2);
    R(ctx, '#5a3418', sx + 3, sy + 8, 26, 5); R(ctx, '#7a4a26', sx + 2, sy + 7, 28, 3); R(ctx, '#a8703c', sx + 1, sy + 6, 30, 1); R(ctx, '#4a2a12', sx + 5, sy + 13, 22, 1);
    if (!small) {
      R(ctx, '#4a2e18', sx + 15, sy - 16, 2, 23);
      for (let i = 0; i < 18; i++) R(ctx, i % 6 === 5 ? '#d8d0bc' : '#f2ecd8', sx + 17, sy - 15 + i, Math.floor(i * 0.62) + 1, 1);
      for (let i = 0; i < 12; i++) R(ctx, '#e4dcc8', sx + 14 - Math.floor(i * 0.5), sy - 10 + i, Math.floor(i * 0.5) + 1, 1);
      R(ctx, '#d84a4a', sx + 17, sy - 18, 4, 2);
    }
  },
  ship(ctx, sx, sy, t) {
    R(ctx, '#3a2414', sx, sy + 6, 30, 4); R(ctx, '#5a3a20', sx + 2, sy + 10, 26, 2); R(ctx, '#2a1a0e', sx + 13, sy - 14, 2, 20);
    for (let i = 0; i < 14; i++) R(ctx, '#e8e2d0', sx + 15, sy - 13 + i, Math.floor(i * 0.7) + 1, 1);
    for (let i = 0; i < 10; i++) R(ctx, '#d8d0bc', sx + 12 - Math.floor(i * 0.6), sy - 8 + i, Math.floor(i * 0.6) + 1, 1);
    R(ctx, 'rgba(230,245,255,.6)', sx - 4 + (t * 20 % 4), sy + 11, 4, 1);
  },
  lighthouse(ctx, sx, sy, t, lit) {
    R(ctx, 'rgba(0,0,0,.25)', sx - 2, sy + 13, 20, 3);
    for (let yy = 0; yy < 50; yy++) { const w = 8 + Math.floor(yy * 6 / 50), x = sx + 8 - w / 2; const col = Math.floor(yy / 8) % 2 ? '#c8403a' : '#f0ece0'; R(ctx, col, Math.round(x), sy - 36 + yy, w, 1); R(ctx, 'rgba(0,0,0,.18)', Math.round(x) + w - 2, sy - 36 + yy, 2, 1); }
    R(ctx, '#3a3a48', sx + 2, sy - 38, 12, 2); R(ctx, '#2a2a36', sx + 4, sy - 46, 8, 8);
    const pulse = 0.6 + 0.4 * Math.sin(t * 2.4); R(ctx, lit ? '#ffe9a0' : '#c8b070', sx + 5, sy - 45, 6, 6);
    R(ctx, '#3a3a48', sx + 3, sy - 49, 10, 3); R(ctx, '#3a3a48', sx + 6, sy - 52, 4, 3);
    R(ctx, '#5a3a20', sx + 6, sy + 6, 4, 8); R(ctx, '#f2c14e', sx + 9, sy + 10);
    if (lit) { ctx.save(); ctx.globalCompositeOperation = 'lighter'; const gr = ctx.createRadialGradient(sx + 8, sy - 42, 1, sx + 8, sy - 42, 26); gr.addColorStop(0, `rgba(255,220,140,${0.45 * pulse})`); gr.addColorStop(1, 'rgba(255,220,140,0)'); ctx.fillStyle = gr; ctx.fillRect(sx - 20, sy - 70, 56, 56); ctx.restore(); }
  },
  window(ctx, sx, sy, t) {
    R(ctx, '#5c3d22', sx + 2, sy + 1, 12, 12); R(ctx, '#9ed0ee', sx + 3, sy + 2, 10, 10); R(ctx, '#ffffff', sx + 4, sy + 3, 3, 1);
    for (let i = 0; i < 4; i++) { const sw = Math.round(Math.sin(t * 3.2 + i * 0.7) * 1.5); R(ctx, '#ece4f4', sx + 3 + i + Math.max(0, sw), sy + 2, 1, 9); R(ctx, '#ece4f4', sx + 12 - i - Math.max(0, -sw), sy + 2, 1, 9); }
    R(ctx, '#5c3d22', sx + 1, sy + 12, 14, 2);
  },
  shards(ctx, sx, sy) { R(ctx, 'rgba(120,180,240,.45)', sx + 2, sy + 9, 12, 5); [[3, 8, '#f4f4f8'], [8, 10, '#4a6ab8'], [11, 7, '#f4f4f8'], [6, 12, '#f4f4f8'], [12, 11, '#4a6ab8'], [5, 10, '#4a6ab8']].forEach(([x, y, c]) => { R(ctx, c, sx + x, sy + y, 2, 1); R(ctx, shade(c, -.3), sx + x, sy + y + 1, 1, 1); }); },
  tablet(ctx, sx, sy, t, stone) {
    const c = stone || '#7a7f8c';
    R(ctx, 'rgba(0,0,0,.3)', sx + 2, sy + 13, 28, 3); R(ctx, shade(c, -.35), sx + 3, sy + 2, 26, 12); R(ctx, c, sx + 4, sy + 1, 24, 11); R(ctx, shade(c, .25), sx + 4, sy + 1, 24, 1);
    for (let i = 0; i < 3; i++) for (let j = 0; j < 6; j++) R(ctx, shade(c, -.4), sx + 6 + j * 4, sy + 3 + i * 3, 2 + (hash(i, j) % 2), 1);
  },
  statue(ctx, sx, sy, t, face) {
    ctx.save(); if (face === 'E') { ctx.translate(sx * 2 + 32, 0); ctx.scale(-1, 1); }
    R(ctx, 'rgba(0,0,0,.3)', sx + 4, sy + 14, 24, 3); R(ctx, '#6e6a60', sx + 4, sy + 6, 24, 9); R(ctx, '#8a8478', sx + 5, sy + 5, 22, 3);
    R(ctx, '#2e2b26', sx + 10, sy - 15, 13, 21); R(ctx, '#a8a294', sx + 11, sy - 14, 11, 20); R(ctx, '#c4beb0', sx + 11, sy - 14, 3, 20);
    R(ctx, '#2e2b26', sx + 9, sy - 25, 13, 11); R(ctx, '#b4ae9f', sx + 10, sy - 24, 11, 9); R(ctx, '#d0cabc', sx + 10, sy - 24, 11, 2);
    R(ctx, '#b4ae9f', sx + 8, sy - 20, 2, 2); R(ctx, '#3a362f', sx + 11, sy - 21, 2, 1);
    R(ctx, '#2e2b26', sx + 3, sy - 10, 10, 4); R(ctx, '#a8a294', sx + 4, sy - 9, 8, 2);
    ctx.restore();
  },
  door(ctx, sx, sy, t, color, open) {
    R(ctx, '#2a325a', sx + 1, sy + 1, 14, 15); R(ctx, '#3c4677', sx + 2, sy + 1, 12, 1);
    if (open) { R(ctx, '#03040a', sx + 3, sy + 3, 10, 13); return; }
    R(ctx, color, sx + 3, sy + 3, 10, 13); R(ctx, color, sx + 4, sy + 2, 8, 1);
    R(ctx, shade(color, -.28), sx + 4, sy + 5, 3, 9); R(ctx, shade(color, -.28), sx + 9, sy + 5, 3, 9); R(ctx, shade(color, .3), sx + 4, sy + 3, 8, 1);
    R(ctx, '#e0c060', sx + 11, sy + 10);
  },
  doorGlow(ctx, sx, sy, t, color) {
    const p = 0.5 + 0.5 * Math.sin(t * 2 + sx * 0.1);
    ctx.save(); ctx.globalCompositeOperation = 'lighter'; const gr = ctx.createRadialGradient(sx + 8, sy + 14, 2, sx + 8, sy + 14, 22); gr.addColorStop(0, hexA(color, 0.16 * p + 0.06)); gr.addColorStop(1, hexA(color, 0)); ctx.fillStyle = gr; ctx.fillRect(sx - 16, sy - 8, 48, 46); ctx.restore();
  },
  crystal(ctx, sx, sy, t) { const p = 0.5 + 0.5 * Math.sin(t * 1.7 + sx); R(ctx, '#4a7ad0', sx + 6, sy + 6, 3, 8); R(ctx, '#7ab0f0', sx + 7, sy + 4, 2, 9); R(ctx, '#3a5ab0', sx + 9, sy + 9, 3, 5); R(ctx, '#cfe4ff', sx + 7, sy + 5, 1, 2); ctx.save(); ctx.globalCompositeOperation = 'lighter'; const gr = ctx.createRadialGradient(sx + 8, sy + 9, 1, sx + 8, sy + 9, 16); gr.addColorStop(0, `rgba(110,170,255,${0.25 * p + .1})`); gr.addColorStop(1, 'rgba(110,170,255,0)'); ctx.fillStyle = gr; ctx.fillRect(sx - 10, sy - 10, 36, 36); ctx.restore(); },
  foe(ctx, sx, sy, t, col, cool) {
    const b = Math.round(Math.sin(t * 3 + sx * 0.07) * 1.5), y0 = sy + b - 2;
    ctx.save(); if (cool) ctx.globalAlpha = 0.45 + 0.2 * Math.sin(t * 20);
    R(ctx, 'rgba(0,0,0,.22)', sx + 3, sy + 14, 10, 2);
    const dk = shade(col, -.35), lt = shade(col, .4);
    for (let y = 0; y < 13; y++) { const w = Math.round(Math.sqrt(Math.max(0, 1 - ((y - 6) / 6.5) ** 2)) * 7 + Math.sin(t * 4 + y) * 0.6); if (w <= 0) continue; R(ctx, dk, sx + 8 - w, y0 + y, w * 2, 1); R(ctx, col, sx + 9 - w, y0 + y, w * 2 - 2, 1); }
    for (let i = 0; i < 3; i++) R(ctx, col, sx + 4 + i * 3 + Math.round(Math.sin(t * 5 + i) * 1), y0 + 13, 2, 2);
    R(ctx, lt, sx + 4, y0 + 2, 3, 2);
    R(ctx, '#ffffff', sx + 4, y0 + 5, 3, 3); R(ctx, '#ffffff', sx + 9, y0 + 5, 3, 3); R(ctx, '#1a1020', sx + 5, y0 + 6, 2, 2); R(ctx, '#1a1020', sx + 10, y0 + 6, 2, 2);
    ctx.restore();
  },
  chest(ctx, sx, sy, t, open) {
    R(ctx, 'rgba(0,0,0,.25)', sx + 2, sy + 13, 13, 3);
    R(ctx, '#4a2a12', sx + 1, sy + 5, 14, 10); R(ctx, '#8a5428', sx + 2, sy + 6, 12, 8); R(ctx, '#d8a040', sx + 1, sy + 9, 14, 1); R(ctx, '#d8a040', sx + 7, sy + 6, 2, 8);
    if (open) { R(ctx, '#2a1608', sx + 2, sy + 2, 12, 4); R(ctx, '#6a4020', sx + 1, sy + 1, 14, 2); return; }
    R(ctx, '#4a2a12', sx + 1, sy + 2, 14, 4); R(ctx, '#a86a34', sx + 2, sy + 3, 12, 2); R(ctx, '#d8a040', sx + 1, sy + 5, 14, 1);
    const p = 0.5 + 0.5 * Math.sin(t * 3); R(ctx, '#3a2a10', sx + 6, sy + 8, 4, 4); R(ctx, `rgba(255,220,120,${0.5 + 0.5 * p})`, sx + 7, sy + 9, 2, 2);
    if (p > 0.85) R(ctx, '#fff6d0', sx + 12, sy + 1);
  },
  spring(ctx, sx, sy, t) {
    R(ctx, '#6a6a78', sx + 1, sy + 4, 14, 11); R(ctx, '#8a8a98', sx + 1, sy + 4, 14, 2); R(ctx, '#5fb8e8', sx + 3, sy + 6, 10, 7);
    for (let i = 0; i < 3; i++) R(ctx, '#bfe8ff', sx + 4 + ((i * 4 + t * 6) % 8 | 0), sy + 7 + i * 2, 2, 1);
    const p = 0.5 + 0.5 * Math.sin(t * 2.2); ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = `rgba(140,220,255,${0.12 + 0.1 * p})`; ctx.fillRect(sx - 2, sy + 2, 20, 15); ctx.restore();
    for (let i = 0; i < 2; i++) { const k = (t * 0.6 + i * 0.5) % 1; R(ctx, `rgba(220,250,255,${1 - k})`, sx + 5 + i * 5, sy + 4 - k * 10 | 0); }
  },
  sparkle(ctx, sx, sy, t) {
    const p = 0.5 + 0.5 * Math.sin(t * 4 + sx), y = sy + 6 + Math.round(Math.sin(t * 2 + sx) * 1.5), x = sx + 8;
    ctx.save(); ctx.globalCompositeOperation = 'lighter'; const g = ctx.createRadialGradient(x, y, 1, x, y, 10); g.addColorStop(0, `rgba(255,240,170,${0.35 + 0.3 * p})`); g.addColorStop(1, 'rgba(255,240,170,0)'); ctx.fillStyle = g; ctx.fillRect(x - 11, y - 11, 22, 22); ctx.restore();
    const l = 2 + Math.round(p * 2); R(ctx, '#fff6d0', x, y - l, 1, l * 2 + 1); R(ctx, '#fff6d0', x - l, y, l * 2 + 1, 1); R(ctx, '#ffffff', x - 1, y - 1, 3, 3);
    if (p > 0.8) { R(ctx, '#ffe9a0', x + 4, y - 5); R(ctx, '#ffe9a0', x - 5, y + 3); }
  },
  mural(ctx, sx, sy, t) {
    R(ctx, '#4a331c', sx, sy, 64, 16); R(ctx, '#b08850', sx + 1, sy + 1, 62, 14); R(ctx, '#d8b878', sx + 1, sy + 1, 62, 6);
    R(ctx, '#e88a3a', sx + 6, sy + 3, 4, 3);
    for (let i = 0; i < 5; i++) { const x = sx + 16 + i * 9; R(ctx, '#5a3a1e', x, sy + 6, 3, 3); R(ctx, '#5a3a1e', x, sy + 9, 3, 5); R(ctx, '#3a2412', x - 1, sy + 7, 1, 1); }
    R(ctx, '#8a6a3a', sx + 1, sy + 13, 62, 1);
    const p = 0.5 + 0.5 * Math.sin(t * 1.5); ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = `rgba(255,200,110,${0.12 * p})`; ctx.fillRect(sx - 4, sy - 2, 72, 22); ctx.restore();
  },
};
function hexA(hex, a) { const n = parseInt(hex.slice(1), 16); return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${a})`; }

/* ---------- 3x5 mini font for in-world labels ---------- */
const MINI = (() => {
  const src = {
    A: '010101111101101', B: '110101110101110', C: '011100100100011', D: '110101101101110', E: '111100110100111', F: '111100110100100',
    G: '011100101101011', H: '101101111101101', I: '111010010010111', J: '001001001101010', K: '101101110101101', L: '100100100100111',
    M: '101111111101101', N: '110101101101101', O: '010101101101010', P: '110101110100100', Q: '010101101110011', R: '110101110101101',
    S: '011100010001110', T: '111010010010010', U: '101101101101111', V: '101101101101010', W: '101101111111101', X: '101101010101101',
    Y: '101101010010010', Z: '111001010100111', '?': '110001010000010', '!': '010010010000010', '-': '000000111000000',
    ' ': '000000000000000', '.': '000000000000010', '(': '010100100100010', ')': '010001001001010', '+': '000010111010000',
    0: '111101101101111', 1: '010110010010111', 2: '111001111100111', 3: '111001111001111', 4: '101101111001001',
    5: '111100111001111', 6: '111100111101111', 7: '111001010010010', 8: '111101111101111', 9: '111101111001111',
  };
  return src;
})();
function miniW(s) { return s.length * 4 - 1; }
function drawMini(ctx, s, x, y, col, k = 1) {
  ctx.fillStyle = col; s = String(s).toUpperCase().replace(/İ/g, 'I').replace(/Ş/g, 'S').replace(/É/g, 'E');
  for (let i = 0; i < s.length; i++) { const gl = MINI[s[i]] || MINI['?']; for (let j = 0; j < 15; j++) if (gl[j] === '1') ctx.fillRect(x + (i * 4 + (j % 3)) * k, y + (j / 3 | 0) * k, k, k); }
}
function drawTag(ctx, s, cx, y, style) {
  const w = miniW(s) + 4, x = Math.round(cx - w / 2);
  if (style === 'label') {
    R(ctx, 'rgba(0,0,0,.35)', x + 1, y + 1, w, 9); R(ctx, '#f1e8cf', x, y, w, 9); R(ctx, '#c0392b', x, y, w, 1); R(ctx, '#c0392b', x, y + 8, w, 1); R(ctx, '#c0392b', x, y, 1, 9); R(ctx, '#c0392b', x + w - 1, y, 1, 9);
    R(ctx, 'rgba(200,200,190,.8)', x - 1, y - 1, 3, 2); R(ctx, 'rgba(200,200,190,.8)', x + w - 2, y + 8, 3, 2);
    drawMini(ctx, s, x + 2, y + 2, '#c0392b');
  } else {
    R(ctx, 'rgba(0,0,0,.3)', x + 1, y + 1, w, 7); R(ctx, '#f1e8cf', x, y, w, 7); R(ctx, '#8a7a5a', x, y + 6, w, 1);
    drawMini(ctx, s, x + 2, y + 1, '#5a3a20'); R(ctx, '#8a7a5a', Math.round(cx), y + 7, 1, 3);
  }
}

/* ---------- word icons ---------- */
const ICON_PAT = {
  heart: ['01100110', '11111111', '11111111', '11111111', '01111110', '00111100', '00011000', '00000000'],
  drop: ['00011000', '00011000', '00111100', '01111110', '01111110', '11111111', '01111110', '00111100'],
  eye: ['00000000', '00111100', '01100110', '11011011', '11011011', '01100110', '00111100', '00000000'],
  arrow: ['00010000', '00011000', '11111100', '11111110', '11111100', '00011000', '00010000', '00000000'],
  bubble: ['01111110', '11111111', '11111111', '11111111', '01111110', '00011000', '00110000', '00000000'],
  blank: ['11111111', '10000001', '10000001', '10000001', '10000001', '10000001', '10000001', '11111111'],
  ring: ['00011000', '00111100', '01100110', '11011011', '11011011', '01100110', '00111100', '00011000'],
  cup: ['00100100', '01001000', '00000000', '11111100', '11111110', '11111010', '11111100', '01111000'],
  sun: ['10010010', '01010100', '00111000', '11111110', '00111000', '01010100', '10010010', '00000000'],
  rain: ['00111100', '01111110', '11111111', '01111110', '00000000', '01001010', '10010100', '00100100'],
  ship: ['00010000', '00011000', '00011100', '00011110', '00010000', '11111111', '01111110', '00111100'],
  bowl: ['00000000', '00000000', '11110111', '11101111', '01111110', '01111110', '00111100', '00011000'],
  flower: ['01100110', '11111111', '01111110', '11100111', '01111110', '11111111', '01100110', '00000000'],
  people: ['01100110', '01100110', '00000000', '11111111', '11111111', '11011011', '11011011', '11011011'],
  eyes: ['00000000', '01100110', '11111111', '10111101', '11111111', '01100110', '00000000', '00000000'],
  window: ['11111111', '10011001', '10011001', '11111111', '10011001', '10011001', '11111111', '00000000'],
};
function makeIcon(pat, col) {
  const c = mk(10, 10, g => { const p = ICON_PAT[pat]; for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) if (p[y][x] === '1') { g.fillStyle = y < 3 ? shade(col, .35) : y > 5 ? shade(col, -.2) : col; g.fillRect(x + 1, y + 1, 1, 1); } });
  return outline(c, '#120c1c');
}

/* ---------- battle ---------- */
const BG = {
  town: ['#f6b070', '#9a5a92', '#2c4c8c', '#14284e'], woods: ['#b4dc98', '#4a8a52', '#2a5230', '#16301c'], blue: ['#34488e', '#141c46', '#1c2856', '#0a1030'],
  ruins: ['#f0c480', '#a8703c', '#6e4826', '#3a2412'], night: ['#20204a', '#06061a', '#161c40', '#080a1e'], inn: ['#e8b070', '#8a5a3a', '#5a3a22', '#2a1a0e'],
};
function drawBattleBG(ctx, area, t) {
  const p = BG[area] || BG.town;
  let g = ctx.createLinearGradient(0, 0, 0, 112); g.addColorStop(0, p[0]); g.addColorStop(1, p[1]); ctx.fillStyle = g; ctx.fillRect(0, 0, SW, 112);
  g = ctx.createLinearGradient(0, 112, 0, SH); g.addColorStop(0, p[2]); g.addColorStop(1, p[3]); ctx.fillStyle = g; ctx.fillRect(0, 112, SW, SH - 112);
  if (area === 'town') { R(ctx, '#ffe6a8', 40, 70, 22, 22); R(ctx, '#ffd890', 36, 74, 30, 14); for (let i = 0; i < 18; i++) R(ctx, 'rgba(255,220,170,.5)', (i * 37 + t * 12) % 256 | 0, 116 + (i % 6) * 9, 8, 1); }
  if (area === 'woods') for (let i = 0; i < 9; i++) { const x = i * 31 - 8; R(ctx, 'rgba(20,50,25,.55)', x + 6, 40, 6, 72); for (let y = 0; y < 36; y++) R(ctx, 'rgba(25,70,35,.6)', x + 9 - (y >> 1), 20 + y, y + 1, 1); }
  if (area === 'woods') { ctx.save(); ctx.globalCompositeOperation = 'lighter'; for (let i = 0; i < 6; i++) { ctx.fillStyle = `rgba(255,250,200,${0.05 + 0.04 * Math.sin(t + i)})`; ctx.beginPath(); ctx.moveTo(30 + i * 40, 0); ctx.lineTo(50 + i * 40, 0); ctx.lineTo(80 + i * 40, 112); ctx.lineTo(55 + i * 40, 112); ctx.fill(); } ctx.restore(); }
  if (area === 'blue') for (let i = 0; i < 6; i++) { const x = 14 + i * 42; R(ctx, '#0c1230', x, 50, 22, 62); R(ctx, ['#8fd0ff', '#1f3f9a', '#3cbfae', '#2a4bb0', '#a9dcff', '#16307a'][i], x + 3, 54, 16, 58); }
  if (area === 'ruins') for (let i = 0; i < 5; i++) { const x = 10 + i * 56; R(ctx, '#c8a068', x, 30, 16, 82); R(ctx, '#e0c088', x, 30, 5, 82); R(ctx, '#8a6438', x + 12, 30, 4, 82); R(ctx, '#b89058', x - 3, 26, 22, 5); }
  if (area === 'night') { for (let i = 0; i < 40; i++) R(ctx, `rgba(255,255,255,${0.3 + 0.5 * ((Math.sin(t * 2 + i * 7) + 1) / 2)})`, hash(i, 1) % 256, hash(i, 2) % 100, 1, 1); R(ctx, '#e8e4d8', 210, 40, 10, 72); R(ctx, '#c8403a', 210, 56, 10, 8); R(ctx, '#c8403a', 210, 80, 10, 8); }
  for (let i = 0; i < 12; i++) R(ctx, 'rgba(255,255,255,.07)', 0, 112 + i * 7, SW, 1);
  ctx.fillStyle = 'rgba(0,0,0,.3)'; ctx.beginPath(); ctx.ellipse(128, 118, 46, 7, 0, 0, Math.PI * 2); ctx.fill();
}
function drawFoeBig(ctx, cx, cy, t, def, st) {
  const col = def.col, dk = shade(col, -.4), lt = shade(col, .45), Rr = def.boss ? 40 : 30;
  for (let y = -Rr; y <= Rr; y++) {
    const k = y / Rr; let w = Math.sqrt(Math.max(0, 1 - k * k)) * Rr * (1 + 0.07 * Math.sin(t * 3 + y * 0.25));
    if (y > Rr * 0.55) w *= 0.85 + 0.15 * Math.sin(t * 5 + y);
    w = Math.round(w); if (w <= 0) continue;
    R(ctx, dk, cx - w, cy + y, w * 2, 1); R(ctx, col, cx - w + 2, cy + y, w * 2 - 4, 1);
    if (y < -Rr * 0.3 && y > -Rr * 0.85) R(ctx, lt, cx - w + 4, cy + y, Math.max(1, w * 0.5 | 0), 1);
  }
  for (let i = 0; i < 5; i++) { const x = cx - Rr * 0.7 + i * Rr * 0.35; R(ctx, col, Math.round(x + Math.sin(t * 4 + i) * 2), cy + Rr - 2, 5, 6 + Math.round(Math.sin(t * 3 + i) * 2)); }
  const blink = (t % 3.2) < 0.12, ey = cy - Rr * 0.18 | 0, ex = Rr * 0.36 | 0, es = def.boss ? 7 : 5;
  if (blink) { R(ctx, '#1a1020', cx - ex - es, ey, es * 2, 1); R(ctx, '#1a1020', cx + ex - es, ey, es * 2, 1); }
  else { R(ctx, '#ffffff', cx - ex - es, ey - es, es * 2, es * 2 + 2); R(ctx, '#ffffff', cx + ex - es, ey - es, es * 2, es * 2 + 2); R(ctx, '#1a1020', cx - ex - 2, ey - 1, 4, 5); R(ctx, '#1a1020', cx + ex - 2, ey - 1, 4, 5); }
  const mw = st.labeled ? 4 : 8; for (let i = 0; i < mw * 2; i++) R(ctx, '#1a1020', cx - mw + i, cy + Rr * 0.3 + Math.round(Math.sin(i * 0.9 + t * 4)) | 0, 1, 1);
  if (def.key === 'nameless') for (let i = 0; i < 4; i++) { const a = t * 0.8 + i * 1.57; drawMini(ctx, '?', cx + Math.cos(a) * (Rr + 14) | 0, cy - 10 + Math.sin(a) * 18 | 0, '#cfe0ff', 2); }
  if (def.key === 'keeper') { R(ctx, '#6a4a1a', cx - 8, cy - Rr - 14, 16, 2); R(ctx, '#6a4a1a', cx - 8, cy - Rr - 2, 16, 2); for (let i = 0; i < 5; i++) { R(ctx, '#ffe8b0', cx - 6 + i, cy - Rr - 12 + i, 12 - i * 2, 1); R(ctx, '#ffe8b0', cx - 2 + i - 2, cy - Rr - 7 + i, 4 + (i - 2) * 2 > 0 ? 4 + (i - 2) * 2 : 1, 1); } }
  if (def.key === 'norm') { R(ctx, '#2a2a3a', cx - ex - es - 2, ey - es - 2, es * 2 + 4, 2); R(ctx, '#2a2a3a', cx + ex - es - 2, ey - es - 2, es * 2 + 4, 2); R(ctx, '#2a2a3a', cx - ex + es, ey - 2, ex * 2 - es * 2, 1); R(ctx, '#e03a2a', cx + Rr - 6, cy - 6, 3, 22); R(ctx, '#f0d040', cx + Rr - 6, cy - 9, 3, 3); }
  if (def.key === 'babel') { for (let i = 0; i < 5; i++) { const w = 26 - i * 4; R(ctx, i % 2 ? '#8a7ac8' : '#5a4aa0', cx - w / 2, cy - Rr - 6 - i * 7, w, 7); R(ctx, '#3a2a70', cx - w / 2, cy - Rr - 6 - i * 7, w, 1); } }
  if (def.key === 'king') {
    for (let i = 0; i < 5; i++) R(ctx, '#f2c14e', cx - 18 + i * 8, cy - Rr - 10 + (i % 2 ? 0 : -4), 5, 10 + (i % 2 ? 0 : 4)); R(ctx, '#f2c14e', cx - 18, cy - Rr - 2, 37, 4);
    const ws = st.tags || []; ws.forEach((w, i) => { const a = t * 0.5 + i * (Math.PI * 2 / ws.length); drawTag(ctx, w, cx + Math.cos(a) * (Rr + 6) | 0, cy - 4 + Math.sin(a) * (Rr * 0.75) | 0, 'label'); });
  }
  if (st.labeled) { ctx.save(); ctx.translate(cx, ey - 9); ctx.rotate(-0.12); ctx.scale(2, 2); drawTag(ctx, st.labeled, 0, 0, 'label'); ctx.restore(); }
  if (st.flash > 0) { ctx.save(); ctx.globalCompositeOperation = 'lighter'; const fg = ctx.createRadialGradient(cx, cy, 2, cx, cy, Rr + 8); fg.addColorStop(0, `rgba(255,255,255,${Math.min(1, st.flash) * 0.7})`); fg.addColorStop(1, 'rgba(255,255,255,0)'); ctx.fillStyle = fg; ctx.beginPath(); ctx.ellipse(cx, cy, Rr + 8, Rr + 8, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore(); }
}
function drawMarker(ctx, x, y, t) {
  const b = Math.round(Math.abs(Math.sin(t * 4)) * 3);
  R(ctx, '#3a2408', x - 4, y - 9 - b, 9, 6); R(ctx, '#3a2408', x - 3, y - 4 - b, 7, 2); R(ctx, '#3a2408', x - 2, y - 2 - b, 5, 2); R(ctx, '#3a2408', x - 1, y - b, 3, 1);
  R(ctx, '#ffcf5a', x - 3, y - 8 - b, 7, 4); R(ctx, '#ffcf5a', x - 2, y - 4 - b, 5, 2); R(ctx, '#ffcf5a', x - 1, y - 2 - b, 3, 1); R(ctx, '#fff2c0', x - 2, y - 8 - b, 2, 1);
}
function drawEdgeArrow(ctx, x, y, ang, t) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(ang); const p = 0.7 + 0.3 * Math.sin(t * 6);
  ctx.fillStyle = 'rgba(20,12,0,.6)'; ctx.beginPath(); ctx.moveTo(8, 0); ctx.lineTo(-5, -7); ctx.lineTo(-5, 7); ctx.fill();
  ctx.fillStyle = `rgba(255,207,90,${p})`; ctx.beginPath(); ctx.moveTo(6, 0); ctx.lineTo(-4, -5); ctx.lineTo(-4, 5); ctx.fill(); ctx.restore();
}
function drawOffer(ctx, x, y, t) {
  const b = Math.round(Math.sin(t * 3)); R(ctx, '#1a1020', x - 6, y - 8 + b, 12, 7); R(ctx, '#ffffff', x - 5, y - 7 + b, 10, 5); R(ctx, '#ffffff', x - 2, y - 2 + b, 2, 2);
  R(ctx, '#3a4aa0', x - 3, y - 5 + b, 1, 1); R(ctx, '#3a4aa0', x, y - 5 + b, 1, 1); R(ctx, '#3a4aa0', x + 3, y - 5 + b, 1, 1);
}
