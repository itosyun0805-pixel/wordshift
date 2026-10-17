// WORDSHIFT — tiny chiptune engine (WebAudio). BGM per area + SFX.
const Audio8 = (() => {
  let ctx = null, master, mus, sfxG, noiseBuf = null;
  let bgmOn = true, seOn = true, pending = null;
  let cur = null, timer = null, step = 0, nextT = 0;
  const SEMI = { C: 0, 'C#': 1, Db: 1, D: 2, 'D#': 3, Eb: 3, E: 4, F: 5, 'F#': 6, Gb: 6, G: 7, 'G#': 8, Ab: 8, A: 9, 'A#': 10, Bb: 10, B: 11 };
  const hz = n => { const m = /^([A-G][#b]?)(\d)$/.exec(n); if (!m) return 0; return 440 * Math.pow(2, ((+m[2] + 1) * 12 + SEMI[m[1]] - 69) / 12); };

  const SONGS = {
    town: { bpm: 112, ch: [
      { wave: 'square', vol: 0.075, gate: 0.85, n:
        'A5 - C6 - F5 - A5 G5 | F5 - - - C5 - D5 E5 | F5 - A5 - C6 - D6 C6 | A5 - - - G5 - - - | Bb5 - A5 - G5 - F5 G5 | A5 - F5 - D5 - F5 - | G5 - E5 - C5 - E5 G5 | F5 - - - - - . .' },
      { wave: 'square', vol: 0.028, gate: 0.5, n:
        'F4 A4 C5 A4 F4 A4 C5 A4 | F4 A4 C5 A4 F4 A4 C5 A4 | D4 F4 A4 F4 D4 F4 A4 F4 | C4 E4 G4 E4 C4 E4 G4 E4 | Bb3 D4 F4 D4 Bb3 D4 F4 D4 | D4 F4 A4 F4 D4 F4 A4 F4 | C4 E4 G4 E4 C4 E4 G4 E4 | F4 A4 C5 A4 F4 . . .' },
      { wave: 'triangle', vol: 0.17, gate: 0.8, n:
        'F3 . C4 . F3 . C4 . | F3 . C4 . A3 . C4 . | D3 . A3 . D3 . A3 . | C3 . G3 . C3 . E3 . | Bb2 . F3 . Bb2 . F3 . | D3 . A3 . D3 . F3 . | C3 . G3 . C3 . G3 . | F3 . C4 . F3 . . .' },
      { wave: 'noise', vol: 0.025, n:
        'x . x x x . x x | x . x x x . x x | x . x x x . x x | x . x x x . x x | x . x x x . x x | x . x x x . x x | x . x x x . x x | x . x x x . . .' },
    ] },
    inn: { bpm: 84, ch: [
      { wave: 'triangle', vol: 0.16, gate: 0.9, vib: true, n:
        'E5 - G5 - C6 - B5 - | A5 - - - G5 - - - | F5 - A5 - G5 - E5 - | D5 - - - - - . . | E5 - G5 - C6 - D6 - | E6 - D6 - C6 - A5 - | G5 - E5 - D5 - E5 - | C5 - - - - - . .' },
      { wave: 'square', vol: 0.022, gate: 0.6, n:
        'C4 E4 G4 E4 C4 E4 G4 E4 | F4 A4 C5 A4 F4 A4 C5 A4 | D4 F4 A4 F4 G4 B4 D5 B4 | G3 B3 D4 B3 G3 B3 D4 B3 | C4 E4 G4 E4 E4 G4 B4 G4 | A3 C4 E4 C4 F4 A4 C5 A4 | G3 B3 D4 B3 G3 B3 D4 B3 | C4 E4 G4 E4 C4 . . .' },
      { wave: 'triangle', vol: 0.12, gate: 0.8, n:
        'C3 . G3 . C3 . G3 . | F3 . C4 . F3 . C4 . | D3 . A3 . G3 . B3 . | G2 . D3 . G2 . D3 . | C3 . G3 . E3 . G3 . | A2 . E3 . F3 . C4 . | G2 . D3 . G2 . B2 . | C3 . G3 . C3 . . .' },
    ] },
    corridor: { bpm: 76, ch: [
      { wave: 'triangle', vol: 0.15, gate: 0.95, vib: true, n:
        'E5 - - - D5 - C5 - | B4 - - - - - . . | C5 - - - D5 - E5 - | A4 - - - - - . . | F5 - - - E5 - D5 - | C5 - - - B4 - A4 - | G#4 - - - B4 - E5 - | A4 - - - - - . .' },
      { wave: 'square', vol: 0.022, gate: 0.55, n:
        'A3 C4 E4 A4 E4 C4 A3 C4 | E3 G3 B3 E4 B3 G3 E3 G3 | F3 A3 C4 F4 C4 A3 F3 A3 | A3 C4 E4 A4 E4 C4 A3 C4 | D3 F3 A3 D4 A3 F3 D3 F3 | A3 C4 E4 A4 E4 C4 A3 C4 | E3 G#3 B3 E4 B3 G#3 E3 G#3 | A3 C4 E4 A4 E4 C4 A3 .' },
      { wave: 'triangle', vol: 0.14, gate: 0.95, n:
        'A2 - - - - - - - | E2 - - - - - - - | F2 - - - - - - - | A2 - - - - - - - | D2 - - - - - - - | A2 - - - - - - - | E2 - - - - - - - | A2 - - - - - - -' },
    ] },
    ruins: { bpm: 96, ch: [
      { wave: 'square', vol: 0.06, gate: 0.85, vib: true, n:
        'D5 - F5 - G5 - A5 - | C6 - A5 - G5 - - - | A5 - G5 - F5 - D5 - | E5 - - - - - . . | D5 - F5 - G5 - A5 C6 | D6 - C6 - A5 - G5 - | F5 - G5 - E5 - C5 - | D5 - - - - - . .' },
      { wave: 'triangle', vol: 0.16, gate: 0.7, n:
        'D3 . D3 A2 D3 . D3 A2 | C3 . C3 G2 C3 . C3 G2 | Bb2 . Bb2 F2 Bb2 . Bb2 F2 | A2 . A2 E2 A2 . A2 E2 | D3 . D3 A2 D3 . D3 A2 | Bb2 . Bb2 F2 Bb2 . Bb2 F2 | C3 . C3 G2 C3 . C3 G2 | D3 . D3 A2 D3 . . .' },
      { wave: 'noise', vol: 0.03, n:
        'x . . x . . x . | x . . x . . x . | x . . x . . x . | x . . x . . x . | x . . x . . x . | x . . x . . x . | x . . x . . x . | x . . x . . . .' },
    ] },
  };
  SONGS.woods = { bpm: 100, ch: [
      { wave: 'triangle', vol: 0.15, gate: 0.9, vib: true, n:
        'G5 - D5 - B4 - D5 - | E5 - - - D5 - - - | C5 - E5 - G5 - E5 - | D5 - - - - - . . | G5 - A5 - B5 - D6 - | C6 - B5 - A5 - G5 - | A5 - F#5 - D5 - F#5 - | G5 - - - - - . .' },
      { wave: 'square', vol: 0.022, gate: 0.5, n:
        'G3 B3 D4 B3 G3 B3 D4 B3 | C4 E4 G4 E4 C4 E4 G4 E4 | A3 C4 E4 C4 A3 C4 E4 C4 | D4 F#4 A4 F#4 D4 F#4 A4 F#4 | G3 B3 D4 B3 G3 B3 D4 B3 | A3 C4 E4 C4 E4 G4 B4 G4 | D4 F#4 A4 F#4 D4 F#4 A4 F#4 | G3 B3 D4 B3 G3 . . .' },
      { wave: 'triangle', vol: 0.12, gate: 0.95, n:
        'G2 - - - D3 - - - | C3 - - - G2 - - - | A2 - - - E3 - - - | D3 - - - A2 - - - | G2 - - - D3 - - - | A2 - - - C3 - - - | D3 - - - F#2 - - - | G2 - - - - - . .' },
    ] };
  SONGS.battle = { bpm: 150, ch: [
      { wave: 'square', vol: 0.07, gate: 0.8, n:
        'A4 . C5 . E5 . A5 G5 | F5 . E5 . D5 . E5 . | A4 . C5 . E5 . A5 B5 | C6 . B5 . A5 . E5 . | F5 . A5 . C6 . A5 . | G5 . B5 . D6 . B5 . | E5 . G#5 . B5 . E6 D6 | C6 . B5 . G#5 . E5 .' },
      { wave: 'triangle', vol: 0.18, gate: 0.7, n:
        'A2 A3 A2 A3 A2 A3 A2 A3 | F2 F3 F2 F3 G2 G3 G2 G3 | A2 A3 A2 A3 A2 A3 A2 A3 | F2 F3 F2 F3 E2 E3 E2 E3 | D2 D3 D2 D3 D2 D3 D2 D3 | G2 G3 G2 G3 G2 G3 G2 G3 | E2 E3 E2 E3 E2 E3 E2 E3 | E2 E3 E2 E3 G#2 G#3 B2 B3' },
      { wave: 'noise', vol: 0.035, n:
        'x . x . x x x . | x . x . x x x . | x . x . x x x . | x . x . x x x . | x . x . x x x . | x . x . x x x . | x . x . x x x . | x . x x x x x x' },
    ] };
  SONGS.boss = { bpm: 132, ch: [
      { wave: 'square', vol: 0.07, gate: 0.85, vib: true, n:
        'D5 - - A4 D5 - F5 - | E5 - - C5 E5 - G5 - | F5 - E5 - D5 - C5 - | A4 - - - - - . . | Bb4 - - F5 Bb5 - A5 - | G5 - - E5 C#5 - E5 - | D5 - F5 - A5 - D6 - | C#6 - - - A5 - . .' },
      { wave: 'triangle', vol: 0.2, gate: 0.7, n:
        'D2 D2 D3 D2 D2 D2 D3 D2 | C2 C2 C3 C2 C2 C2 C3 C2 | Bb1 Bb1 Bb2 Bb1 Bb1 Bb1 Bb2 Bb1 | A1 A1 A2 A1 A1 A1 A2 A1 | Bb1 Bb1 Bb2 Bb1 Bb1 Bb1 Bb2 Bb1 | A1 A1 A2 A1 A1 A1 A2 A1 | D2 D2 D3 D2 D2 D2 D3 D2 | A1 A1 A2 A1 A1 A1 A2 C#2' },
      { wave: 'noise', vol: 0.04, n:
        'x . . x x . x . | x . . x x . x . | x . . x x . x . | x . . x x . x . | x . . x x . x . | x . . x x . x . | x . . x x . x . | x . x x x x x x' },
    ] };
  SONGS.isle = { bpm: 116, ch: [
      { wave: 'triangle', vol: 0.15, gate: 0.85, n:
        'E5 - G5 E5 C5 - D5 E5 | F5 - A5 - G5 - E5 - | D5 - F5 D5 B4 - C5 D5 | E5 - - - G5 - - - | E5 - G5 E5 C5 - D5 E5 | F5 - A5 - C6 - A5 - | G5 - E5 - D5 - B4 - | C5 - - - - - . .' },
      { wave: 'square', vol: 0.024, gate: 0.45, n:
        'C4 E4 G4 E4 C4 E4 G4 E4 | F4 A4 C5 A4 F4 A4 C5 A4 | G3 B3 D4 B3 G3 B3 D4 B3 | C4 E4 G4 E4 C4 E4 G4 E4 | C4 E4 G4 E4 C4 E4 G4 E4 | F4 A4 C5 A4 F4 A4 C5 A4 | G3 B3 D4 B3 G3 B3 D4 F4 | C4 E4 G4 E4 C4 . . .' },
      { wave: 'triangle', vol: 0.15, gate: 0.7, n:
        'C3 . . C3 G2 . . . | F2 . . F2 C3 . . . | G2 . . G2 D3 . . . | C3 . . C3 G2 . . . | C3 . . C3 G2 . . . | F2 . . F2 C3 . . . | G2 . . G2 B2 . . . | C3 . . . . . . .' },
      { wave: 'noise', vol: 0.03, n: 'x . . x . . x . | x . . x . . x . | x . . x . . x . | x . . x . . x . | x . . x . . x . | x . . x . . x . | x . . x . . x . | x . . x . . . .' },
    ] };
  SONGS.valley = { bpm: 92, ch: [
      { wave: 'triangle', vol: 0.16, gate: 0.95, vib: true, n:
        'A4 - C5 - D5 - - - | E5 - D5 - C5 - A4 - | G4 - A4 - C5 - D5 - | A4 - - - - - . . | C5 - D5 - E5 - G5 - | A5 - G5 - E5 - D5 - | E5 - D5 - C5 - A4 - | A4 - - - - - . .' },
      { wave: 'square', vol: 0.02, gate: 0.5, n:
        'A3 E4 A4 E4 A3 E4 A4 E4 | C4 G4 C5 G4 C4 G4 C5 G4 | G3 D4 G4 D4 G3 D4 G4 D4 | A3 E4 A4 E4 A3 E4 A4 E4 | C4 G4 C5 G4 C4 G4 C5 G4 | D4 A4 D5 A4 D4 A4 D5 A4 | C4 G4 C5 G4 G3 D4 G4 D4 | A3 E4 A4 E4 A3 . . .' },
      { wave: 'triangle', vol: 0.12, gate: 0.95, n:
        'A2 - - - E3 - - - | C3 - - - G2 - - - | G2 - - - D3 - - - | A2 - - - - - - - | C3 - - - G2 - - - | D3 - - - A2 - - - | C3 - - - G2 - - - | A2 - - - - - . .' },
    ] };
  SONGS.archive = { ...SONGS.corridor, bpm: 68 };
  SONGS.origin = { ...SONGS.ruins, bpm: 74 };
  SONGS.sanctum = { ...SONGS.corridor, bpm: 60 };
  SONGS.title = { ...SONGS.inn, bpm: 76 };
  SONGS.ending = { ...SONGS.inn, bpm: 66 };

  function compile(s) {
    s.byStep = []; s.len = 0;
    s.ch.forEach(c => {
      const toks = c.n.split(/\s+/).filter(t => t && t !== '|');
      s.len = Math.max(s.len, toks.length);
      let last = null;
      toks.forEach((t, i) => {
        if (t === '-') { if (last) last.len++; return; }
        if (t === '.') { last = null; return; }
        last = { len: 1, f: c.wave === 'noise' ? 0 : hz(t), c };
        (s.byStep[i] ||= []).push(last);
      });
    });
  }

  function osc(dest, type, f, t, dur, vol, vib, slide) {
    if (!f) return;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(slide, t + dur);
    if (vib) {
      const l = ctx.createOscillator(), lg = ctx.createGain();
      l.frequency.value = 5; lg.gain.setValueAtTime(0, t); lg.gain.linearRampToValueAtTime(f * 0.012, t + Math.min(dur, 0.4));
      l.connect(lg).connect(o.frequency); l.start(t); l.stop(t + dur + 0.05);
    }
    const a = 0.006, r = Math.min(0.08, dur * 0.4);
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol, t + a);
    g.gain.setValueAtTime(vol, t + Math.max(a, dur - r)); g.gain.linearRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(dest); o.start(t); o.stop(t + dur + 0.02);
  }
  function hit(dest, t, dur, vol, hp = 6000) {
    if (!noiseBuf) {
      noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
      const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    }
    const s = ctx.createBufferSource(); s.buffer = noiseBuf;
    const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = hp;
    const g = ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f).connect(g).connect(dest); s.start(t, Math.random() * 0.5); s.stop(t + dur + 0.02);
  }
  function seq(wave, vol, t, notes, vib) { let tt = t; for (const [n, d] of notes) { if (n !== '.') osc(sfxG, wave, hz(n), tt, d * 0.95, vol, vib); tt += d; } return tt; }

  const SFX = {
    blip: t => osc(sfxG, 'square', 820 + Math.random() * 260, t, 0.025, 0.035),
    cursor: t => osc(sfxG, 'square', 1046, t, 0.04, 0.08),
    ok: t => { osc(sfxG, 'square', 784, t, 0.05, 0.09); osc(sfxG, 'square', 1175, t + 0.05, 0.08, 0.09); },
    cancel: t => osc(sfxG, 'square', 520, t, 0.09, 0.08, false, 260),
    bump: t => osc(sfxG, 'triangle', 110, t, 0.07, 0.22),
    door: t => { hit(sfxG, t, 0.2, 0.25, 700); osc(sfxG, 'square', 220, t, 0.22, 0.07, false, 110); },
    wind: t => { hit(sfxG, t, 1.0, 0.2, 300); hit(sfxG, t + 0.2, 0.8, 0.12, 900); },
    lens: t => { [1319, 1568, 2093, 2637].forEach((f, i) => osc(sfxG, 'triangle', f, t + i * 0.06, 0.2, 0.12)); },
    chime: t => { [1047, 1319, 1568, 2093].forEach((f, i) => osc(sfxG, 'square', f, t + i * 0.07, 0.16, 0.06)); },
    wrong: t => { osc(sfxG, 'square', 233, t, 0.12, 0.09); osc(sfxG, 'square', 175, t + 0.13, 0.24, 0.09); },
    stamp: t => { hit(sfxG, t, 0.3, 0.5, 120); osc(sfxG, 'square', 140, t, 0.32, 0.16, false, 45); osc(sfxG, 'triangle', 70, t, 0.4, 0.35); },
    peel: t => { hit(sfxG, t, 0.35, 0.22, 2500); osc(sfxG, 'square', 300, t, 0.32, 0.06, false, 1700); osc(sfxG, 'triangle', 600, t + 0.3, 0.3, 0.12, false, 1200); },
    fanfare: t => {
      seq('square', 0.08, t, [['C5', .1], ['E5', .1], ['G5', .1], ['C6', .3], ['A5', .12], ['B5', .12], ['C6', .7]]);
      seq('square', 0.04, t, [['E4', .3], ['.', .0], ['F4', .3], ['G4', .24], ['E5', .7]]);
      seq('triangle', 0.2, t, [['C3', .3], ['F3', .3], ['G3', .24], ['C4', .7]]);
    },
    clear: t => {
      seq('square', 0.07, t, [['G4', .08], ['C5', .08], ['E5', .08], ['G5', .08], ['C6', .08], ['E6', .08], ['G6', .5]]);
      seq('triangle', 0.2, t, [['C3', .48], ['C4', .5]]);
    },
    rest: t => { seq('triangle', 0.16, t, [['C5', .3], ['E5', .3], ['G5', .3], ['E5', .3], ['C5', .3], ['G4', .3], ['C5', .9]], true); },
    encounter: t => { for (let i = 0; i < 6; i++) osc(sfxG, 'square', 300 + i * 140, t + i * 0.035, 0.05, 0.08); hit(sfxG, t + 0.2, 0.25, 0.2, 1500); },
    hit: t => { hit(sfxG, t, 0.12, 0.35, 900); osc(sfxG, 'square', 180, t, 0.12, 0.1, false, 60); },
    hurt: t => { hit(sfxG, t, 0.18, 0.4, 300); osc(sfxG, 'triangle', 110, t, 0.2, 0.3, false, 50); },
    word: t => { [880, 1175, 1568].forEach((f, i) => osc(sfxG, 'triangle', f, t + i * 0.05, 0.25, 0.12)); hit(sfxG, t + 0.15, 0.2, 0.15, 3000); },
    heal: t => { [784, 988, 1175, 1568].forEach((f, i) => osc(sfxG, 'triangle', f, t + i * 0.08, 0.3, 0.1, true)); },
    absorb: t => { osc(sfxG, 'square', 900, t, 0.4, 0.07, false, 120); hit(sfxG, t, 0.4, 0.15, 400); },
    victory: t => { seq('square', 0.08, t, [['E5', .1], ['G5', .1], ['C6', .1], ['E6', .1], ['D6', .1], ['E6', .5]]); seq('triangle', 0.2, t, [['C3', .3], ['G3', .2], ['C4', .5]]); },
    levelup: t => { seq('square', 0.07, t, [['C5', .07], ['E5', .07], ['G5', .07], ['C6', .07], ['G5', .07], ['C6', .07], ['E6', .4]]); },
    res1: t => { [988, 1319].forEach((f, i) => osc(sfxG, 'square', f, t + i * 0.05, 0.12, 0.07)); },
    res2: t => { [1175, 1568, 1976].forEach((f, i) => osc(sfxG, 'square', f, t + i * 0.045, 0.12, 0.07)); },
    res3: t => { [1319, 1760, 2217, 2637].forEach((f, i) => osc(sfxG, 'square', f, t + i * 0.04, 0.14, 0.07)); hit(sfxG, t + 0.12, 0.2, 0.12, 4000); },
    perfect: t => { seq('square', 0.07, t, [['E6', .06], ['G6', .06], ['C7', .25]]); seq('triangle', 0.12, t, [['C5', .12], ['G5', .25]]); },
    spark: t => { [1568, 2093, 2637, 3136].forEach((f, i) => osc(sfxG, 'triangle', f, t + i * 0.05, 0.18, 0.1)); },
    found: t => { seq('square', 0.06, t, [['A5', .08], ['C#6', .08], ['E6', .08], ['A6', .3]]); },
  };

  function tick() {
    if (!cur || !ctx) return;
    const s = cur, spb = 60 / s.bpm / 2;
    if (nextT < ctx.currentTime - 0.3) nextT = ctx.currentTime + 0.05;
    while (nextT < ctx.currentTime + 0.2) {
      const evs = s.byStep[step];
      if (evs) for (const e of evs) {
        const d = e.len * spb;
        if (e.c.wave === 'noise') hit(mus, nextT, 0.04, e.c.vol);
        else osc(mus, e.c.wave, e.f, nextT, d * (e.c.gate || 0.9), e.c.vol, e.c.vib);
      }
      nextT += spb; step = (step + 1) % s.len;
    }
  }

  return {
    init() {
      if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
      const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
      ctx = new AC();
      master = ctx.createGain(); master.gain.value = 0.55; master.connect(ctx.destination);
      mus = ctx.createGain(); mus.gain.value = bgmOn ? 0.9 : 0; mus.connect(master);
      sfxG = ctx.createGain(); sfxG.gain.value = seOn ? 0.9 : 0; sfxG.connect(master);
      if (pending) { const p = pending; pending = null; this.play(p); }
    },
    play(name) {
      if (!ctx) { pending = name; return; }
      if (cur && cur.name === name) return;
      const s = SONGS[name]; if (!s) return;
      if (!s.byStep) compile(s);
      s.name = name; cur = s; step = 0; nextT = ctx.currentTime + 0.1;
      if (!timer) timer = setInterval(tick, 25);
    },
    stop() { cur = null; },
    stream() { if (!ctx) this.init(); if (!ctx) return null; const d = ctx.createMediaStreamDestination(); master.connect(d); return d.stream; },
    sfx(name) { if (!ctx || !seOn || !SFX[name]) return; SFX[name](ctx.currentTime + 0.01); },
    duck(sec) {
      if (!ctx || !bgmOn) return; const t = ctx.currentTime;
      mus.gain.cancelScheduledValues(t); mus.gain.setValueAtTime(mus.gain.value, t); mus.gain.linearRampToValueAtTime(0.0001, t + 0.08);
      mus.gain.setValueAtTime(0.0001, t + sec); mus.gain.linearRampToValueAtTime(0.9, t + sec + 0.6);
    },
    setBgm(on) { bgmOn = on; if (mus) mus.gain.value = on ? 0.9 : 0; },
    setSe(on) { seOn = on; if (sfxG) sfxG.gain.value = on ? 0.9 : 0; },
  };
})();
