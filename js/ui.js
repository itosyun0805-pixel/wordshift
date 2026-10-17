// WORDSHIFT — JRPG windows: dialogue, choices, lens hints, menu, overlays.
const $ = s => document.querySelector(s);
const UIST = [];
function pushUI(fn) { UIST.push(fn); return () => { const i = UIST.lastIndexOf(fn); if (i >= 0) UIST.splice(i, 1); }; }
const pushTap = fn => { fn.tap = true; return pushUI(fn); };
const sleep = ms => new Promise(r => setTimeout(r, ms));
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* rich text: «word» = gold, ⟨text⟩ = red */
function parseRich(text) {
  const out = []; let cls = '';
  for (const ch of String(text)) {
    if (ch === '«') { cls = 'w'; continue; } if (ch === '»') { cls = ''; continue; }
    if (ch === '⟨') { cls = 'r'; continue; } if (ch === '⟩') { cls = ''; continue; }
    out.push([ch, cls]);
  }
  return out;
}
function richHTML(segs, n = segs.length) {
  let h = '', cur = null, buf = '';
  const flush = () => { if (!buf) return; h += cur ? `<span class="${cur}">${esc(buf)}</span>` : esc(buf).replace(/\n/g, '<br>'); buf = ''; };
  for (let i = 0; i < n; i++) { const [c, k] = segs[i]; if (k !== cur) { flush(); cur = k; } buf += c; }
  flush(); return h;
}
const rich = t => richHTML(parseRich(t));
/* pixel-font names: Press Start 2P draws É/İ/Ş as small lowercase-looking glyphs, so those letters use the JP pixel font */
const pxn = n => esc(n).replace(/[^\x00-\x7F]/g, c => `<span class="acc">${c}</span>`);

/* ---------- dialogue ---------- */
function speakerInfo(spk) {
  if (!spk) return { name: '', look: null };
  if (typeof spk === 'string') return { name: spk, look: null };
  return { name: spk.name, look: spk.look || null };
}
function say(spk, text, o = {}) {
  return new Promise(res => {
    const m = $('#msg'), nm = m.querySelector('.name'), tx = m.querySelector('.txt'), nx = m.querySelector('.next'), face = $('#face');
    const info = speakerInfo(spk);
    m.hidden = false; m.classList.toggle('narr', !info.name);
    nm.hidden = !info.name; nm.textContent = info.name;
    if (info.look) { face.hidden = false; const g = face.getContext('2d'); g.clearRect(0, 0, 16, 20); g.drawImage(charSprite(info.look, 'down', 0), 0, 0); m.classList.add('hasface'); }
    else { face.hidden = true; m.classList.remove('hasface'); }
    const segs = parseRich(text); let i = o.instant ? segs.length : 0, done = false, iv = null;
    nx.hidden = true;
    const finish = () => {
      clearInterval(iv); i = segs.length; tx.innerHTML = richHTML(segs); done = true;
      if (o.keep) { pop(); res(); } else nx.hidden = false;
    };
    const pop = pushTap(b => {
      if (b !== 'A' && b !== 'B') return;
      if (!done) { finish(); return; }
      Audio8.sfx('cursor'); pop(); nx.hidden = true; res();
    });
    tx.innerHTML = richHTML(segs, i);
    if (i >= segs.length) finish();
    else iv = setInterval(() => {
      i++; tx.innerHTML = richHTML(segs, i);
      if (i % 2 === 0 && segs[i - 1] && segs[i - 1][0].trim()) Audio8.sfx('blip');
      if (i >= segs.length) finish();
    }, 32);
  });
}
const narr = (t, o) => say(null, t, o);
function hideMsg() { $('#msg').hidden = true; $('#choice').hidden = true; }

/* ---------- choices ---------- */
function choose(items, o = {}) {
  return new Promise(res => {
    const box = $('#choice'); box.innerHTML = ''; box.hidden = false; box.className = 'win' + (o.side ? ' side' : '');
    const bd = $('#board'), beside = !bd.hidden && !o.side; if (beside) { box.classList.add('beside'); bd.classList.add('narrow'); }
    const fin = () => bd.classList.remove('narrow');
    const fx = o.talk ? topFix() : null, fxl = fx ? (S.fix[fx] || 0) : 0;
    let idx = o.def ?? 0;
    if (fxl >= 2) { const k = items.findIndex(it => it.word === fx); if (k >= 0) idx = k; }
    const els = items.map((it, i) => {
      const d = document.createElement('button'); d.type = 'button'; d.className = 'opt';
      if (it.word) d.classList.add('lens'); if (it.trap) d.classList.add('trap'); if (it.special) d.classList.add('special');
      if (it.word && it.word === fx && fxl >= 2) d.classList.add('pull');
      const t = it.t;
      const body = (fxl >= 3 && !it.word)
        ? [...t].map((c, j) => (hash(j, t.length) % 5 < 2 && /[^\s「」、。！？…（）«»]/.test(c)) ? `<span class="sm">${esc(c)}</span>` : esc(c)).join('')
        : rich(t);
      if (fxl >= 3 && !it.word) d.classList.add('smudged');
      d.innerHTML = `<span class="cur">▶</span>${it.icon ? `<img class="oi" alt="" src="${ICONS[it.icon]}">` : ''}<span class="ot">${body}</span>` + (it.word ? `<span class="chip"><img alt="" src="${ICONS[it.word]}">${pxn(WORDS[it.word].name)}</span>` : '');
      d.addEventListener('pointerenter', () => { idx = i; paint(); });
      d.addEventListener('click', e => { e.stopPropagation(); idx = i; pick(); });
      box.appendChild(d); return d;
    });
    if (fxl >= 3 && items.some(it => !it.word)) { const n = document.createElement('div'); n.className = 'fixnote'; n.innerHTML = `思い込み度MAX：«${pxn(WORDS[fx].name)}» 以外の言葉がかすれている`.replace('«', '<b>').replace('»', '</b>'); box.prepend(n); }
    const paint = () => els.forEach((e, i) => e.classList.toggle('sel', i === idx));
    let tm = null;
    if (o.timer) {
      const bar = document.createElement('div'); bar.className = 'qtimer'; bar.innerHTML = '<i></i>'; box.appendChild(bar);
      const fill = bar.firstChild; fill.style.transitionDuration = o.timer + 's'; requestAnimationFrame(() => requestAnimationFrame(() => { fill.style.width = '0%'; }));
      tm = setTimeout(() => { fin(); pop(); box.hidden = true; res(-1); }, o.timer * 1000);
    }
    const pick = () => { clearTimeout(tm); fin(); Audio8.sfx('ok'); pop(); box.hidden = true; res(idx); };
    const pop = pushUI(b => {
      if (b === 'UP') { idx = (idx + items.length - 1) % items.length; Audio8.sfx('cursor'); paint(); }
      else if (b === 'DOWN') { idx = (idx + 1) % items.length; Audio8.sfx('cursor'); paint(); }
      else if (b === 'A') pick();
      else if (b === 'B' && o.cancel != null) { clearTimeout(tm); fin(); idx = o.cancel; Audio8.sfx('cancel'); pop(); box.hidden = true; res(idx); }
    });
    paint();
  });
}
async function pick(spk, text, opts, o = {}) {
  opts = opts.filter(Boolean);
  if (text) await say(spk, text, { keep: true, instant: o.instant });
  const ci = opts.findIndex(x => x.cancel);
  const i = await choose(opts, { cancel: o.cancel ?? (ci >= 0 ? ci : null), talk: true });
  const op = opts[i];
  const snap = S.stats.pasted + '|' + JSON.stringify(S.fix);
  if (op.go) await op.go();
  if (op.word && !op.trap && snap === S.stats.pasted + '|' + JSON.stringify(S.fix)) await masteryUse(op.word, op.word + ':' + op.t);
  return op;
}
async function yesno(text, yes = 'はい', no = 'いいえ') { await say(null, text, { keep: true }); return (await choose([{ t: yes }, { t: no }], { cancel: 1 })) === 0; }

/* ---------- lens hint ---------- */
function lens(wid, text) {
  return new Promise(res => {
    const b = $('#lensbox'); const W = WORDS[wid];
    b.innerHTML = `<div class="lh"><img alt="" src="${ICONS[wid]}"><span>LENS · ${pxn(W.name)}</span></div><div class="lt">${rich(text)}</div><div class="next">▼</div>`;
    b.hidden = false; Audio8.sfx('lens');
    const pop = pushTap(k => { if (k === 'A' || k === 'B') { Audio8.sfx('cursor'); pop(); b.hidden = true; res(); } });
  });
}

/* ---------- toasts / banners ---------- */
function toast(text, kind) {
  const t = document.createElement('div'); t.className = 'toast' + (kind ? ' ' + kind : ''); t.innerHTML = rich(text);
  $('#toasts').appendChild(t); setTimeout(() => t.classList.add('out'), 2800); setTimeout(() => t.remove(), 3400);
}
let locTimer = null;
function showLoc(name) { const l = $('#loc'); l.textContent = name; l.hidden = false; l.classList.remove('out'); clearTimeout(locTimer); locTimer = setTimeout(() => l.classList.add('out'), 2400); }

function setFade(v) { const f = $('#fade'); f.style.transition = 'none'; f.style.opacity = v; void f.offsetWidth; f.style.transition = ''; }
function fadeTo(v, ms = 300) { return new Promise(r => { const f = $('#fade'); f.style.transitionDuration = ms + 'ms'; f.style.opacity = v; setTimeout(r, ms + 20); }); }
const fadeOut = ms => fadeTo(1, ms), fadeIn = ms => fadeTo(0, ms);

async function showCard(top, title, sub) {
  const c = $('#card'); c.innerHTML = `<div class="ct">${esc(top)}</div><div class="cn">${esc(title)}</div>${sub ? `<div class="cs">${esc(sub)}</div>` : ''}`;
  c.hidden = false; c.classList.remove('out'); void c.offsetWidth; c.classList.add('in');
  await sleep(2300); c.classList.add('out'); await sleep(500); c.hidden = true; c.classList.remove('in', 'out');
}

/* ---------- NEW WORD ACQUIRED ---------- */
function showAcq(id) {
  return new Promise(res => {
    const W = WORDS[id], a = $('#acq');
    a.innerHTML = `<div class="rays"></div><div class="ac">
      <div class="ah">NEW WORD ACQUIRED!</div>
      <img class="ai" alt="" src="${ICONS[id]}">
      <div class="an">${pxn(W.name)}</div><div class="al">${esc(W.lang)}</div>
      <div class="ad">${rich(W.desc)}</div>
      <div class="ae"><span class="k good">効果</span>${rich(W.lens)}</div>
      <div class="ae"><span class="k bad">副作用</span>${rich(W.curse)}</div>
      <div class="next">▼</div></div>`;
    a.hidden = false; a.classList.remove('show'); void a.offsetWidth; a.classList.add('show');
    Audio8.duck(2.2); Audio8.sfx('fanfare');
    const t0 = performance.now();
    const pop = pushTap(k => { if ((k === 'A' || k === 'B') && performance.now() - t0 > 900) { Audio8.sfx('cursor'); pop(); a.hidden = true; res(); } });
  });
}

/* ---------- LABELED! / PEELED ---------- */
async function showStamp(wid, who) {
  const s = $('#stamp'); const W = WORDS[wid];
  s.innerHTML = `<div class="sb">LABELED!</div><div class="ss">${esc(who)}に «${pxn(W.name)}» のラベルを貼った</div>`.replace(/«/g, '<b>').replace(/»/g, '</b>');
  s.hidden = false; s.classList.remove('go'); void s.offsetWidth; s.classList.add('go');
  const sc = $('#screen'); sc.classList.remove('shake'); void sc.offsetWidth; sc.classList.add('shake');
  Audio8.sfx('stamp'); await sleep(1700); s.hidden = true;
}
async function showPeel(wid) {
  const s = $('#peel'); const W = WORDS[wid];
  s.innerHTML = `<div class="tag">${pxn(W.name)}</div><div class="ps">LABEL PEELED</div>`;
  s.hidden = false; s.classList.remove('go'); void s.offsetWidth; s.classList.add('go');
  Audio8.sfx('peel'); await sleep(1500); s.hidden = true;
}

/* ---------- HUD ---------- */
function renderHUD() {
  const h = $('#hud'); if (!S || !S.equipped || titleMode) { h.innerHTML = ''; return; }
  const hpw = Math.max(0, S.hp / S.maxhp * 100);
  h.innerHTML = `<div class="hhp"><span>Lv${S.lv}</span><span class="hpbar${hpw < 30 ? ' low' : ''}"><i style="width:${hpw}%"></i></span><span class="hn">${S.hp}/${S.maxhp}</span></div>` + S.equipped.map(w => {
    const f = S.fix[w] || 0;
    return `<div class="hchip${f >= 2 ? ' hot' : ''}"><img alt="" src="${ICONS[w]}"><span>${pxn(WORDS[w].name)}</span>${f ? `<i>${'●'.repeat(f)}</i>` : ''}</div>`;
  }).join('');
  if (typeof updateTracker === 'function') updateTracker();
}

/* ---------- MENU ---------- */
const TABS = ['ことば', '思考', '記録', '道場', '設定'];
const MENU = { tab: 0, sel: 0, confirmErase: false };
const tabName = () => TABS[MENU.tab];
function openMenu() {
  if (busy) return; busy = true; Audio8.sfx('ok');
  MENU.tab = 0; MENU.sel = 0; MENU.confirmErase = false; $('#menu').hidden = false; renderMenu();
  MENU.pop = pushUI(menuKey);
}
function closeMenu() { Audio8.sfx('cancel'); $('#menu').hidden = true; MENU.pop && MENU.pop(); busy = false; renderHUD(); save(); }
function leaveMenu() { $('#menu').hidden = true; MENU.pop && MENU.pop(); busy = false; }
function menuKey(b) {
  const n = menuCount();
  if (b === 'LEFT' || b === 'RIGHT') { MENU.tab = (MENU.tab + (b === 'LEFT' ? TABS.length - 1 : 1)) % TABS.length; MENU.sel = 0; MENU.confirmErase = false; Audio8.sfx('cursor'); renderMenu(); }
  else if (b === 'UP' && n) { MENU.sel = (MENU.sel + n - 1) % n; Audio8.sfx('cursor'); renderMenu(); }
  else if (b === 'DOWN' && n) { MENU.sel = (MENU.sel + 1) % n; Audio8.sfx('cursor'); renderMenu(); }
  else if (b === 'A') menuAct();
  else if (b === 'B' || b === 'MENU') closeMenu();
}
function menuCount() { const t = tabName(); return t === 'ことば' ? S.words.length : t === '思考' ? S.cards.length : t === '道場' ? 1 : t === '設定' ? 5 : 0; }
function toggleEquip(w) {
  const i = S.equipped.indexOf(w);
  if (i >= 0) { S.equipped.splice(i, 1); Audio8.sfx('cancel'); toast(`«${WORDS[w].name}» を外した`); }
  else if (S.equipped.length >= maxSlots()) { Audio8.sfx('wrong'); toast(`スロットがいっぱい（${maxSlots()}つまで）。どれかを外そう`, 'warn'); }
  else { S.equipped.push(w); Audio8.sfx('ok'); toast(`«${WORDS[w].name}» を装備した`); }
  renderHUD();
}
function menuAct() {
  const t = tabName();
  if (t === 'ことば') { const w = S.words[MENU.sel]; if (w) { toggleEquip(w); renderMenu(); } }
  else if (t === '道場') { leaveMenu(); run(dojo); }
  else if (t === '設定') {
    const k = MENU.sel;
    if (k === 0) { S.bgm = !S.bgm; Audio8.setBgm(S.bgm); }
    else if (k === 1) { S.se = !S.se; Audio8.setSe(S.se); }
    else if (k === 2) { S.tts = !S.tts; if (S.tts) speak('こんにちは', 'ja-JP'); }
    else if (k === 3) { save(); leaveMenu(); toTitle(); return; }
    else if (k === 4) { if (!MENU.confirmErase) { MENU.confirmErase = true; Audio8.sfx('wrong'); } else { eraseSave(); leaveMenu(); toTitle(); return; } }
    Audio8.sfx('ok'); renderMenu();
  }
}
function pips(f) { return '<span class="pips">' + [0, 1, 2].map(i => `<i class="${i < f ? 'on' : ''}"></i>`).join('') + '</span>'; }
function renderMenu() {
  const m = $('#menu'), t = tabName();
  let body = '';
  if (t === 'ことば') {
    const slots = [...Array(maxSlots()).keys()].map(i => { const w = S.equipped[i]; return `<div class="slot${w ? ' on' : ''}">${w ? `<img alt="" src="${ICONS[w]}"><span>${pxn(WORDS[w].name)}</span>` : '<span class="em">— 空き —</span>'}</div>`; }).join('');
    if (!S.words.length) body = `<div class="slots"><div class="sh">EQUIPPED WORDS 0/${maxSlots()}</div>${slots}</div><p class="empty">まだ言葉を持っていない。<br>人と話して、言葉を集めよう。</p>`;
    else {
      const list = S.words.map((w, i) => `<button type="button" class="wrow${i === MENU.sel ? ' sel' : ''} r${WORDS[w].rar}${stars(w) >= 5 ? ' gold' : ''}" data-i="${i}"><img alt="" src="${ICONS[w]}"><span class="wn">${pxn(WORDS[w].name)}</span>${stars(w) > (S.seen[w] || 1) ? '<span class="new">NEW</span>' : ''}${S.equipped.includes(w) ? '<span class="eq">E</span>' : ''}<span class="st">${'★'.repeat(stars(w))}</span>${S.fix[w] ? pips(S.fix[w]) : ''}</button>`).join('');
      const w = S.words[MENU.sel], W = WORDS[w], lg = S.log[w] || {}, on = S.equipped.includes(w), st = stars(w);
      S.seen[w] = Math.max(S.seen[w] || 1, st);
      const nx = st < 5 ? MST[st] : null, px = S.mast[w] || 0;
      const lock = n => `<div class="lock">？？？ ── ★${n} で「${UNLOCK[n]}」が開く</div>`;
      const study = `<div class="mast"><span class="rar r${W.rar}">${RARITY[W.rar]}</span>${W.tag ? `<span class="wtag">${esc(W.tag)}</span>` : ''}<span class="stars">${'★'.repeat(st)}<i>${'★'.repeat(5 - st)}</i></span>${nx ? `<span class="mx">熟練 ${px} / ${nx}</span>` : '<span class="mx gold">MASTER</span>'}</div>`
        + `<div class="wbtns">${W.tts ? '<button type="button" class="mini" id="ttsbtn">♪ 発音を聞く</button>' : ''}<button type="button" class="mini" id="notebtn">${S.notes[w] ? '例文を書きなおす' : '自分の例文をつくる'}</button></div>`
        + (S.notes[w] ? `<div class="sec mynote"><span class="k sk">わたしの例文</span><div>${esc(S.notes[w])}</div></div>` : '')
        + (st >= 2 ? `<div class="sec"><span class="k sk">読み・例文</span><div><b class="kana">${esc(W.kana)}</b><div class="ex">${esc(W.ex[0])}</div><div class="exj">${esc(W.ex[1])}</div></div></div>` : lock(2))
        + (st >= 3 ? `<div class="sec"><span class="k sk">豆知識</span><div>${rich(W.fact)}</div></div>` : st >= 2 ? lock(3) : '')
        + (st >= 4 && W.vs ? `<div class="sec"><span class="k sk">ちがい</span><div>${rich(W.vs.t)}</div></div>` : st === 3 ? lock(4) : '')
        + (st < 5 ? '<div class="hintm">熟練度は、バトルで響かせる・ひらめきに正解・会話で使いこなす・錠前を開ける・例文をつくる、で上がる</div>' : '');
      body = `<div class="mgrid"><div class="mleft"><div class="coll"><span>COLLECTION ${S.words.length}/${WORD_ORDER.length}</span><span class="cbar"><i style="width:${S.words.length / WORD_ORDER.length * 100}%"></i></span></div><div class="slots"><div class="sh">EQUIPPED WORDS ${S.equipped.length}/${maxSlots()}</div>${slots}</div><div class="wlist">${list}</div></div>
        <div class="mright"><div class="dh"><img alt="" src="${ICONS[w]}"><div><div class="dn">${pxn(W.name)}</div><div class="dl">${esc(W.lang)}</div></div><button type="button" class="eqbtn${on ? ' off' : ''}" id="eqbtn">${on ? '外す' : '装備する'}</button></div>
        ${study}
        <div class="dd">${rich(W.desc)}</div>
        <div class="de"><span class="k good">効果</span>${rich(W.lens)}</div>
        <div class="de"><span class="k bad">副作用</span>${rich(W.curse)}</div>
        <div class="df">思い込み度 ${pips(S.fix[w] || 0)}</div>
        <div class="dm">出会った人：${esc(lg.who || '—')}<br>出会った場所：${esc(lg.where || '—')}</div>
</div></div>`;
    }
  } else if (t === '思考') {
    if (!S.cards.length) body = `<p class="empty">まだ思考実験カードを持っていない。<br>旅の中で、ことばの不思議に出会うと手に入る。</p>`;
    else {
      const id = S.cards[Math.min(MENU.sel, S.cards.length - 1)], C = CARDS[id], my = S.refl[id];
      const list = S.cards.map((c, i) => `<button type="button" class="wrow crow${i === MENU.sel ? ' sel' : ''}" data-i="${i}"><span class="fld f${CARDS[c].f}">${esc(FIELDS[CARDS[c].f])}</span><span class="wn">${esc(CARDS[c].t)}</span>${S.refl[c] == null ? '<span class="new">?</span>' : ''}</button>`).join('');
      body = `<div class="mgrid"><div class="mleft"><div class="coll"><span>THOUGHT CARDS ${S.cards.length}/${Object.keys(CARDS).length}</span><span class="cbar"><i style="width:${S.cards.length / Object.keys(CARDS).length * 100}%"></i></span></div><div class="wlist">${list}</div></div>
        <div class="mright"><div class="ctitle">${esc(C.t)}</div><div class="cfield"><span class="fld f${C.f}">${esc(FIELDS[C.f])}</span>${C.who ? `<span class="cwho">${esc(C.who)}</span>` : ''}</div>
        <div class="cbody">${rich(C.b)}</div>
        <div class="sec qsec"><span class="k sk">あなたはどう思う？</span><div><div class="cq">${rich(C.q)}</div><div class="copts">${C.o.map((o, k) => `<button type="button" class="mini refl${my === k ? ' on' : ''}" data-k="${k}">${esc(o[0])}</button>`).join('')}</div>${my != null ? `<div class="cans">${rich(C.o[my][1])}</div>` : ''}</div></div></div></div>`;
    }
  } else if (t === '記録') {
    const labs = Object.entries(S.labels).map(([id, w]) => `<li>${esc(npcName(id))} … <b class="lab">${pxn(WORDS[w].name)}</b></li>`).join('') || '<li class="dim">いまは、誰にもラベルを貼っていない</li>';
    const chs = Object.keys(CHAPTERS).map(Number).map(n => `<li class="${S.ch > n ? 'done' : S.ch === n ? 'now' : 'dim'}">${n === 5 ? 'EPILOGUE' : 'CHAPTER ' + String(n).padStart(2, '0')}　${S.ch >= n ? esc(CHAPTERS[n]) : '？？？'}${S.ch > n ? ' ✓' : ''}</li>`).join('');
    const ob = objective();
    body = `<div class="rec"><div class="obj"><span class="k">NEXT</span><div>${rich(ob.t)}<div class="oh">${rich(ob.h || '')}</div></div></div>
      <div class="rcols"><div><div class="sh">CHAPTERS</div><ul class="chl">${chs}</ul>
      <div class="sh">STATS</div><ul class="stl"><li>レベル <b>${S.lv}</b>（次まで ${expNeed(S.lv) - S.exp}）</li><li>こころ <b>${S.hp} / ${S.maxhp}</b></li><li>晴らしたモヤ <b>${S.stats.wins || 0}</b></li><li>集めた言葉 <b>${S.words.length} / ${WORD_ORDER.length}</b></li><li>思考実験カード <b>${S.cards.length} / ${Object.keys(CARDS).length}</b></li><li>ログイン <b>${S.daily.total || 0}日</b>（連続 ${S.daily.streak || 0}日）</li><li>貼ったラベル <b>${S.stats.pasted}</b></li><li>剥がしたラベル <b>${S.stats.peeled}</b></li></ul></div>
      <div><div class="sh">町の人に貼ったラベル</div><ul class="labl">${labs}</ul>
      <div class="sh">称号</div><ul class="ttl">${S.titles.map(t => `<li>『${esc(t)}』</li>`).join('') || '<li class="dim">まだない</li>'}</ul></div></div>
      <div class="sh">まだ知らない言葉（ヒント）</div><ul class="miss">${WORD_ORDER.filter(w => !has(w)).map(w => `<li><span class="q">？？？</span>${esc(WORDS[w].hint)}</li>`).join('') || '<li class="dim">すべての言葉を集めた！</li>'}</ul></div>`;
  } else if (t === '道場') {
    const due = quizWords().filter(w => dueness(w) >= 0).length, acc = S.dojo.q ? Math.round(S.dojo.ok / S.dojo.q * 100) : 0;
    body = `<div class="dojo"><div class="dh2">ひらめき道場</div>
      <p>場面を読んで、いちばん近い言葉を選ぶ5問の練習。忘れかけている言葉ほど、よく出題される（間隔反復）。速く正解するほど PERFECT、全問正解でボーナス。</p>
      <div class="dstats"><div><b>${due}</b><span>復習どきの言葉</span></div><div><b>${acc}%</b><span>正答率</span></div><div><b>×${S.dojo.best}</b><span>最高連続正解</span></div><div><b>×${S.bestCombo || 0}</b><span>最大コンボ</span></div></div>
      <button type="button" class="srow sel dgo" data-i="0"><span class="cur">▶</span>${quizWords().length >= 3 ? 'ひらめき練習をはじめる（5問）' : '言葉を3つ集めると挑戦できる'}</button></div>`;
  } else {
    const rows = [`BGM　${S.bgm ? 'ON' : 'OFF'}`, `効果音　${S.se ? 'ON' : 'OFF'}`, `発音の読み上げ　${S.tts ? 'ON' : 'OFF'}`, 'タイトルにもどる（自動セーブ済み）', MENU.confirmErase ? 'もう一度押すと、データを消去します' : 'データを消去する'];
    body = `<div class="set">${rows.map((r, i) => `<button type="button" class="srow${i === MENU.sel ? ' sel' : ''}${i === 4 && MENU.confirmErase ? ' warn' : ''}" data-i="${i}"><span class="cur">▶</span>${esc(r)}</button>`).join('')}
      <p class="help">操作：矢印/WASD 移動・選択 ／ Z・Enter 決定 ／ X・Esc もどる ／ C メニュー ／ H ヒント<br>スマホ：十字キー・A・B・MENU、選択肢は直接タップ<br>発音は、お使いの端末の音声合成で読み上げます。端末に入っていない言語は再生されません。</p></div>`;
  }
  m.innerHTML = `<div class="mtabs">${TABS.map((tb, i) => `<button type="button" class="mtab${i === MENU.tab ? ' on' : ''}" data-t="${i}">${tb}</button>`).join('')}<button type="button" class="mclose" aria-label="閉じる">✕</button></div><div class="mbody">${body}</div>`;
  m.querySelectorAll('.mtab').forEach(b => b.onclick = () => { MENU.tab = +b.dataset.t; MENU.sel = 0; MENU.confirmErase = false; Audio8.sfx('cursor'); renderMenu(); });
  m.querySelector('.mclose').onclick = closeMenu;
  m.querySelectorAll('.wrow').forEach(b => b.onclick = () => { const i = +b.dataset.i; if (MENU.sel === i && t === 'ことば') menuAct(); else { MENU.sel = i; Audio8.sfx('cursor'); renderMenu(); } });
  m.querySelectorAll('.srow').forEach(b => b.onclick = () => { MENU.sel = +b.dataset.i; menuAct(); });
  m.querySelectorAll('.refl').forEach(b => b.onclick = () => reflect(S.cards[MENU.sel], +b.dataset.k));
  const eb = m.querySelector('#eqbtn'); if (eb) eb.onclick = () => menuAct();
  const tb = m.querySelector('#ttsbtn'); if (tb) tb.onclick = () => speakWord(S.words[MENU.sel], true);
  const nb = m.querySelector('#notebtn'); if (nb) nb.onclick = () => composeNote(S.words[MENU.sel]);
  const sel = m.querySelector('.wrow.sel'); if (sel) sel.scrollIntoView({ block: 'nearest' });
}
/* ---------- testimony board ---------- */
function showBoard(html) { const b = $('#board'); b.innerHTML = html; b.hidden = false; }
function hideBoard() { $('#board').hidden = true; }
