// WORDSHIFT — words, maps, characters, enemies and story scripts.

/* ===================== WORDS (16) ===================== */
const WORDS = {
  saudade: { name: 'SAUDADE', mini: 'SAUDADE', lang: 'ポルトガル語', icon: 'heart', color: '#f5a0b4',
    desc: '大切なものが遠くにあることへの、甘く切ない想い。',
    lens: '悲しさの奥にある「恋しさ」に注目できる。郷愁のモヤによく響く。',
    curse: 'レッテル：海を見ている人が、みんな「切ない人」に見えてくる。',
    cast: '「遠くにあるから、大切なんだね」', hint: '東の桟橋の商人が知っている（第1章）' },
  depaysement: { name: 'DÉPAYSEMENT', mini: 'DEPAYSEMENT', lang: 'フランス語', icon: 'ring', color: '#a8d8c0',
    desc: '故郷を離れ、見知らぬ土地にいるときの、居心地の悪さと新鮮さが混ざった感覚。',
    lens: '「よそ者」の戸惑いと、わくわくに注目できる。迷子のモヤに響く。',
    curse: '観光客目線：住んでいる人の日常まで「珍しいもの」に見えてしまう。',
    cast: '「知らない場所って、こわいけど、少しわくわくするよね」', hint: '浜辺にいるフランスの旅人が知っている' },
  hygge: { name: 'HYGGE', mini: 'HYGGE', lang: 'デンマーク語', icon: 'cup', color: '#f0b070',
    desc: 'あたたかな灯り、親しい人、くつろいだ時間がつくる、心地よさ。',
    lens: 'バトルで使うと、自分のこころが回復する。郷愁や孤独のモヤに響く。',
    curse: 'ぬるま湯：重い悲しみまで「お茶でも飲めば」で済ませたくなる。',
    cast: '「あったかいもの、一緒に飲もうか」', heal: 10, hint: 'パン屋のロロが若いころに覚えた言葉（第2章〜）' },
  goluboy: { name: 'GOLUBOY', mini: 'GOLUBOY', lang: 'ロシア語', icon: 'drop', color: '#8fd0ff',
    desc: '明るい青。ロシア語では、濃い青（«siniy»）とは別の基本色として扱われる。',
    lens: '青の明暗を、別々のカテゴリーとして見分けられる。青のモヤに響く。',
    curse: '分類癖：goluboyにもsiniyにも入らない色が、目に入らなくなる。',
    cast: '「その青は、明るい青。濃い青とは、別の色」', hint: '北の門の旅人が知っている（第2章）' },
  komorebi: { name: 'KOMOREBI', mini: 'KOMOREBI', lang: '日本語', icon: 'sun', color: '#c8e070',
    desc: '木々の葉のあいだから、こぼれ落ちる日の光。',
    lens: '霧の森で、光の落ちる道が見えるようになる。青のモヤに響く。',
    curse: 'まぶしさ：光の当たらない場所を、見なくなってしまう。',
    cast: '「ほら、葉っぱのすきまから、光が落ちてる」', hint: '霧の森の入口にいる森番が知っている（第2章）' },
  blank: { name: '（　　）', mini: '( )', lang: '— 言語なし —', icon: 'blank', color: '#f4f1e6',
    desc: '名づけないこと。言葉の手前で、ただ見ること。',
    lens: '装備中は思い込み度が上がらない。どんな相手にも、そっと届く。',
    curse: 'なし。ただし、何かを「わかった」気にはなれない。',
    cast: '（何も言わず、ただ、そこにいた）', hint: '青の回廊の奥、名前のない扉の向こう（第2章）' },
  toska: { name: 'TOSKA', mini: 'TOSKA', lang: 'ロシア語', icon: 'rain', color: '#8a9ad0',
    desc: '理由のはっきりしない、深くて鈍い心の痛み。満たされない何かを求める気持ち。',
    lens: '名前のない重さに、寄り添える。憂いのモヤに響く。',
    curse: '重力：ちょっとした退屈まで、魂の苦しみに見えてしまう。',
    cast: '「理由がなくても、重いものは重いよね」', hint: '霧の森の「ことばの錠前」の箱の中' },
  nayra: { name: 'NAYRA', mini: 'NAYRA', lang: 'アイマラ語', icon: 'eye', color: '#f0c878',
    desc: '「目」「前」、そして「過去」。もう見えている過去は前に、まだ見えない未来は背中の側にある。',
    lens: '時間の「前」と「後ろ」を、別の向きから読み直せる。時のモヤに響く。',
    curse: '逆行：「前を向いて」が「過去を見つめて」に聞こえてしまう。',
    cast: '「過ぎた日々は、目の前に見えているんだね」', hint: '東の道の学者が知っている（第3章）' },
  fernweh: { name: 'FERNWEH', mini: 'FERNWEH', lang: 'ドイツ語', icon: 'ship', color: '#78b8e8',
    desc: 'まだ行ったことのない遠い場所への、胸の痛むような憧れ。',
    lens: '「ここではないどこか」への憧れに注目できる。SAUDADE との違いが見えてくる。',
    curse: '上の空：目の前の場所が、色あせて見えてしまう。',
    cast: '「まだ見ぬ場所に、呼ばれているんだね」', hint: '北東の家の前にいる地図職人が知っている（第3章〜）' },
  wabisabi: { name: 'WABI-SABI', mini: 'WABI-SABI', lang: '日本語', icon: 'bowl', color: '#c0a080',
    desc: '不完全なもの、古びたもの、移ろうものの中に見出す美しさ。',
    lens: '欠けや傷を、価値として見直せる。完璧のモヤに響く。',
    curse: '達観：直せるものまで「これも味」で済ませたくなる。',
    cast: '「欠けているところも、きれいだよ」', hint: '宿屋の西にいる陶芸家が知っている（第3章〜）' },
  mononoaware: { name: 'MONO NO AWARE', mini: 'AWARE', lang: '日本語', icon: 'flower', color: '#f0b8d0',
    desc: '移ろいゆくものに触れたときの、しみじみとした感慨。',
    lens: '過ぎゆく時間への哀しみに寄り添える。時や憂いのモヤに響く。',
    curse: '詠嘆：今この瞬間まで、もう失われたもののように眺めてしまう。',
    cast: '「散っていくから、こんなにきれいなんだね」', hint: '時の遺跡の最奥で、番人を晴らすと手に入る（第3章）' },
  ergk: { name: '-K', mini: '-K', lang: 'バスク語（能格）', icon: 'arrow', color: '#ff8a6a',
    desc: '何かを「した」側につく印。文法のほうが「誰が？」と問いかけてくる。',
    lens: '出来事の「行為者」に注目できる。',
    curse: '犯人探し：ただの事故にも、誰かのせいを求めてしまう。',
    cast: '「それは、誰が“した”の？」', hint: '西の桟橋のバスクの船乗りが知っている（第4章）' },
  mis: { name: '-MİŞ', mini: '-MIS', lang: 'トルコ語（伝聞）', icon: 'bubble', color: '#9be28a',
    desc: '自分の目で見ていない出来事を語るときの語尾。「〜したらしい」。',
    lens: 'その話が「見た」ものか「聞いた」ものかを区別できる。噂のモヤに響く。',
    curse: '疑心：目の前の人の話まで「〜らしい」に聞こえてしまう。',
    cast: '「それ、自分の目で見た話？」', hint: '広場の香辛料商が知っている（第4章）' },
  ubuntu: { name: 'UBUNTU', mini: 'UBUNTU', lang: 'ズールー語ほか（ングニ諸語）', icon: 'people', color: '#e0a060',
    desc: '「人は、他の人を通して人になる」。わたしたちがいるから、わたしがいる。',
    lens: 'つながりと孤独に注目できる。迷子・孤独・すれ違いのモヤに響く。',
    curse: '同調：ひとりでいたい人まで、輪に入れたくなる。',
    cast: '「あなたがいるから、わたしもここにいる」', hint: '広場の楽師が知っている（第2章〜）' },
  mamihlapinatapai: { name: 'MAMIHLAPINATAPAI', mini: 'MAMIHLAPI', lang: 'ヤーガン語', icon: 'eyes', color: '#d0a0f0',
    desc: '互いに、相手が言い出すのを待ちながら交わされる、言葉にならない目配せ。',
    lens: 'すれ違う二人の、沈黙の意味に気づける。すれ違いや噂のモヤに響く。',
    curse: '深読み：ただの沈黙まで、何かの合図に見えてしまう。',
    cast: '「……先に言っていいよ。ぼくも、待ってたから」', hint: '西の桟橋の先にいる南の船乗りが知っている（第4章）' },
  iktsuarpok: { name: 'IKTSUARPOK', mini: 'IKTSUARPOK', lang: 'イヌクティトゥット語', icon: 'window', color: '#a0c8e8',
    desc: '誰か来ないかと、何度も外に出て見てしまう、そわそわした期待。',
    lens: '「待つ人」の気持ちに注目できる。孤独のモヤに響く。',
    curse: 'そわそわ：誰も来ない場所でも、何かを待ってしまう。',
    cast: '「誰かを待って、何度も外をのぞいてたんだね」', hint: '宿屋の「ことばの錠前」の箱の中（第4章〜）' },
};
/* ===================== WORD STUDY (unlocked by mastery ★) ===================== */
// rar: C=COMMON R=RARE L=LEGEND / kana: 読み / ex: [原語の例, 訳] / fact: 豆知識 / vs: 似ている言葉とのちがい / quiz: ひらめき問題の場面
const WORD_STUDY = {
  saudade: { rar: 'R', kana: 'サウダーデ／サウダージ', ex: ['Tenho saudade de você.', 'あなたが恋しい（あなたへのサウダーデがある）'],
    fact: 'ポルトガルの民謡ファドや、ブラジルのボサノヴァで繰り返し歌われるテーマ。ブラジルでは1月30日が「サウダージの日」とされている。',
    vs: { w: 'fernweh', t: 'SAUDADE は「知っている大切なもの」が遠くにある痛み。FERNWEH は「まだ知らない遠く」への憧れ。向きが逆。' },
    quiz: ['大切な人がいなくなった。思い出すと、嬉しいのに切ない。', '遠く離れたふるさとの台所の匂いが、ふと恋しくなる。'] },
  depaysement: { rar: 'C', kana: 'デペイズマン', ex: ['Quel dépaysement !', 'なんて別世界なんだ！'],
    fact: 'pays（国・土地）から「ずれる」という成り立ち。フランスの旅行広告では「非日常」という前向きな意味でもよく使われる。',
    vs: { w: 'saudade', t: 'DÉPAYSEMENT は「いま見知らぬ場所にいる」感覚。SAUDADE は「ここにない大切なもの」を想う気持ち。' },
    quiz: ['知らない国の駅に降りた。言葉も匂いも違って、心細いけど少しわくわくする。', '引っ越した町で、いつもの景色がない。落ち着かないのに、新鮮でもある。'] },
  hygge: { rar: 'C', kana: 'ヒュッゲ', ex: ['Det er så hyggeligt!', 'すごく居心地がいいね！'],
    fact: '形容詞 hyggelig はデンマークの日常会話でとてもよく使われる。冬の長い北欧で、ろうそくや温かい飲み物と結びつけて語られることが多い。',
    vs: { w: 'toska', t: 'HYGGE は「くつろぎで満たされる」心地よさ。理由のない重さ（TOSKA）に「まあ一杯」と差し出しても、かえって届かないことがある。' },
    quiz: ['雨の夜、ろうそくを灯して、友だちとスープを分け合う。特別じゃないけど満たされる。', '毛布にくるまって、温かいココアを飲みながら、家族とのんびり話す。'] },
  goluboy: { rar: 'R', kana: 'ガルボーイ', ex: ['голубое небо（galubóye nyéba）', '明るい青の空'],
    fact: 'ロシア語話者は、goluboy と siniy の境目をまたぐ2つの青を、同じ側の2つの青より少し速く見分けたという実験がある（Winawer ら, 2007）。言葉は「見え方」を決めるのではなく、区別の手がかりになる。',
    vs: { w: 'komorebi', t: 'GOLUBOY は「色の区分」の名前。KOMOREBI は「光の現れ方」の名前。どちらも、そこに注意を向けさせる。' },
    quiz: ['晴れた日の、明るい空の青。濃い紺色とは別の色として呼びたい。', '水色のリボン。ネイビーの服とは、ちがう色の仲間だ。'] },
  komorebi: { rar: 'C', kana: 'こもれび', ex: ['木漏れ日の中を歩く。', 'Walking in the sunlight filtering through the leaves.'],
    fact: '「木（こ）＋漏れ（もれ）＋日（び）」。英語には一語で対応する言葉がなく、海外では「訳しにくい日本語」としてよく紹介される。',
    vs: { w: 'mononoaware', t: 'KOMOREBI は光そのものの名前。MONO NO AWARE は、移ろうものに心が動くこと。' },
    quiz: ['森の小道に、葉のすきまから日の光がまだらに落ちている。', '公園のベンチ。風が吹くたび、足もとの光の模様がゆれる。'] },
  blank: { rar: 'L', kana: '（読みはない）', ex: ['……', '（ことばにしない）'],
    fact: '言葉は、注意の向け方に影響しうる。だからこそ、ときどき言葉を外して見ることにも意味がある。',
    vs: { w: 'goluboy', t: 'GOLUBOY で分けられるのは「明るい青」と「濃い青」。そのあいだの色は、名前を外したときに見えてくる。' }, quiz: null },
  toska: { rar: 'R', kana: 'タスカー', ex: ['Меня охватила тоска.', '言いようのない憂いに包まれた'],
    fact: '作家ナボコフは「英語で一語に訳せる言葉はない」と書き、理由のない魂の痛みから、ただの退屈まで、その幅を説明した。',
    vs: { w: 'saudade', t: 'SAUDADE には恋しい「対象」がある。TOSKA は、何を求めているのかさえはっきりしない重さ。' },
    quiz: ['何も悪いことは起きていない。なのに、胸の奥がずっと鈍く重い。', '灰色の空を見ていると、理由もなく、何かが足りない気がする。'] },
  nayra: { rar: 'R', kana: 'ナイラ', ex: ['nayra pacha', '前の時＝過ぎた時代'],
    fact: 'アイマラ語話者は、過去の話をするとき前方を、未来の話をするとき後方を身ぶりで示す傾向があると報告されている（Núñez & Sweetser, 2006）。',
    vs: { w: 'mononoaware', t: 'NAYRA は時間の「向き」の言葉。MONO NO AWARE は、過ぎゆくものへの「感じ方」の言葉。' },
    quiz: ['もう起きたことは、目の前に見えている。だから過去は「前」にある。', 'まだ見えない明日は、背中の側にある。'] },
  fernweh: { rar: 'C', kana: 'フェルンヴェー', ex: ['Ich habe Fernweh.', '遠くへ行きたくてたまらない'],
    fact: 'Heimweh（ホームシック）と対になる言葉。fern（遠い）＋ Weh（痛み）。',
    vs: { w: 'saudade', t: 'FERNWEH は「まだ知らない遠く」への憧れ。SAUDADE は「知っている大切なもの」が遠くにある痛み。' },
    quiz: ['地図を広げると、行ったこともない島の名前に胸が痛む。', '出ていく船を見るたび、まだ見ぬ国へ行きたくてたまらなくなる。'] },
  wabisabi: { rar: 'R', kana: 'わびさび', ex: ['侘び寂びを感じる茶室', 'a tea room that feels wabi-sabi'],
    fact: 'もとは「侘び」と「寂び」という別々の美意識で、茶の湯や俳諧の世界で深められた。割れた器を漆と金で継ぐ「金継ぎ」と一緒に紹介されることも多い。',
    vs: { w: 'mononoaware', t: 'WABI-SABI は「欠けや古び」に美を見る。MONO NO AWARE は「移ろい」に心が動くこと。' },
    quiz: ['ひびの入った古い茶碗のほうが、新品よりも愛おしい。', '色あせた木の柱や、苔むした石に、静かな美しさを感じる。'] },
  mononoaware: { rar: 'R', kana: 'もののあはれ', ex: ['散る桜に、もののあはれを感じる。', 'feeling the pathos of things in falling cherry blossoms'],
    fact: '江戸時代の国学者・本居宣長が、『源氏物語』の本質として論じたことで知られる。',
    vs: { w: 'wabisabi', t: 'MONO NO AWARE は「移ろい」に心が動くこと。WABI-SABI は「欠けや古び」に美を見ること。' },
    quiz: ['満開の桜が、風に散っていく。きれいで、少しさびしい。', '夏の終わりの夕暮れ。もう戻らない一日が、しみじみと胸にしみる。'] },
  ergk: { rar: 'R', kana: '（能格の）ク', ex: ['Gizonak loreontzia hautsi du.', '男「が」花瓶を割った'],
    fact: 'バスク語は能格言語。他動詞の主語（何かを「する」側）に -k がつき、「花瓶が割れた」のような自動詞の主語にはつかない。',
    vs: { w: 'mis', t: '-K は「誰が“した”か」に注目する。-MİŞ は「誰が“見た”か」に注目する。' },
    quiz: ['「彼が花瓶を割った」。文が、行為をした人に印をつけている。', '事故の話なのに、つい「誰がやったの？」と聞きたくなる。'] },
  mis: { rar: 'R', kana: 'ミシュ', ex: ['Vazo kırılmış.', '花瓶が割れたらしい'],
    fact: 'トルコ語では、自分で見た過去（-di）と、聞いた・推測した過去（-miş）を動詞の形で言い分ける。こうした文法を「証拠性（エヴィデンシャリティ）」と呼ぶ。',
    vs: { w: 'ergk', t: '-MİŞ は「その話の出どころ」に注目する。-K は「その行為をした人」に注目する。' },
    quiz: ['自分は見ていない。人から聞いた話として「〜したらしい」と伝える。', '「彼女、引っ越したらしいよ」。見たのではなく、噂で聞いた。'] },
  ubuntu: { rar: 'R', kana: 'ウブントゥ', ex: ['Umuntu ngumuntu ngabantu.', '人は、人々を通して人になる'],
    fact: '南アフリカのデズモンド・ツツ大主教が、この考え方を世界に広めたことで知られる。',
    vs: { w: 'mamihlapinatapai', t: 'UBUNTU は「互いに支え合う」つながり。MAMIHLAPINATAPAI は「互いに待っている」沈黙。' },
    quiz: ['あなたが元気だと、わたしも元気になれる。わたしたちは互いを通して生きている。', '困っている隣人を助けるのは、自分自身のためでもある。'] },
  mamihlapinatapai: { rar: 'L', kana: 'マミラピナタパイ', ex: ['（二人が目を合わせ、どちらも口を開かない）', '—'],
    fact: '南米最南端ティエラ・デル・フエゴのヤーガン語として知られ、「世界でいちばん簡潔な言葉」としてギネスブックに載ったこともある。ただし本来の意味には異論もある。',
    vs: { w: 'ubuntu', t: 'MAMIHLAPINATAPAI は「互いに待っている」沈黙。UBUNTU は「互いに支え合う」つながり。' },
    quiz: ['二人とも、相手が先に「ごめん」と言うのを待って、目だけが合っている。', 'どちらも誘いたいのに、相手が言い出すのを待って黙っている。'] },
  iktsuarpok: { rar: 'L', kana: 'イクツアルポク', ex: ['（何度も外に出て、誰か来ないかのぞく）', '—'],
    fact: 'イヌクティトゥット語はカナダ北部などで話されるイヌイットの言語。いくつもの要素をつないで、一語で文のような意味を表せるのが特徴。',
    vs: { w: 'saudade', t: 'IKTSUARPOK は「これから来る誰か」を待つそわそわ。SAUDADE は「もう遠い誰か」を想う切なさ。' },
    quiz: ['友だちが来る約束。まだ時間じゃないのに、何度も窓の外を見てしまう。', '届くはずの手紙が待ちきれず、何度も玄関の外をのぞく。'] },
};
for (const k in WORD_STUDY) Object.assign(WORDS[k], WORD_STUDY[k]);
const RARITY = { C: 'COMMON', R: 'RARE', L: 'LEGEND' };
const WORD_ORDER = Object.keys(WORDS);
const CHAPTERS = { 1: '港町の少女', 2: '青の回廊', 3: '時の遺跡', 4: '割れた花瓶', 5: '灯台守' };
const ICONS = {};
function buildIcons() { for (const [k, W] of Object.entries(WORDS)) ICONS[k] = makeIcon(W.icon, W.color).toDataURL(); }

/* ===================== ENEMIES ===================== */
const FOES = {
  homesick: { name: '郷愁のモヤ', col: '#e8a0b8', hp: 26, atk: [3, 5], exp: 6, weak: ['saudade', 'hygge'], trap: ['fernweh'],
    hint: ['……遠くの誰かを、想っているようだ。', '帰りたい場所が、あるらしい。'], lines: ['「もう もどれない」', '「あのころは……」'] },
  lost: { name: '迷子のモヤ', col: '#a8d8a0', hp: 24, atk: [3, 5], exp: 6, weak: ['depaysement', 'ubuntu'], trap: ['saudade'],
    hint: ['……ここがどこか、わからないようだ。', '知らない場所で、ひとりぼっちらしい。'], lines: ['「ここは どこ？」', '「だれも しらない」'] },
  gloom: { name: '憂いのモヤ', col: '#8890c8', hp: 32, atk: [4, 6], exp: 8, weak: ['toska', 'mononoaware'], trap: ['hygge'],
    hint: ['……理由のない重さを抱えているようだ。', '励ましの言葉は、かえって重くなりそうだ。'], lines: ['「なにもかもが うすい」', '「げんきだせ なんて いうな」'] },
  lonely: { name: '孤独のモヤ', col: '#b8a8e0', hp: 32, atk: [4, 6], exp: 8, weak: ['ubuntu', 'iktsuarpok', 'hygge'], trap: ['depaysement'],
    hint: ['……誰かが来るのを、待っているようだ。', 'ひとりでいることに、疲れているらしい。'], lines: ['「だれも こない」', '「ひとりで いい」'] },
  blue: { name: '青のモヤ', col: '#70b8f0', hp: 34, atk: [4, 7], exp: 9, weak: ['goluboy', 'komorebi'], trap: ['toska'],
    hint: ['……明るい青と濃い青が、混ざりあっている。', '光と色の境目で、揺れているようだ。'], lines: ['「わたしは なにいろ？」', '「あおい だけじゃ いや」'] },
  time: { name: '時のモヤ', col: '#e0c070', hp: 40, atk: [5, 7], exp: 11, weak: ['nayra', 'mononoaware'], trap: ['fernweh'],
    hint: ['……過ぎた日々を、ずっと見つめているようだ。', '未来の話をすると、怯えるらしい。'], lines: ['「むかしは よかった」', '「さきのことは みえない」'] },
  perfect: { name: '完璧のモヤ', col: '#e4e4ee', hp: 40, atk: [5, 8], exp: 11, weak: ['wabisabi', 'mononoaware'], trap: ['ergk'],
    hint: ['……小さな欠けを、ひどく気にしているようだ。', '誰のせいでもない傷に、苦しんでいるらしい。'], lines: ['「ひびが ゆるせない」', '「かんぺきで なきゃ」'] },
  rumor: { name: '噂のモヤ', col: '#a8e890', hp: 44, atk: [5, 8], exp: 13, weak: ['mis', 'mamihlapinatapai'], trap: ['ergk'],
    hint: ['……誰かから聞いた話で、できているようだ。', '本当に見た者は、いないらしい。'], lines: ['「〜らしいよ」', '「みんな いってる」'] },
  miss: { name: 'すれ違いのモヤ', col: '#f0b070', hp: 44, atk: [5, 8], exp: 13, weak: ['mamihlapinatapai', 'ubuntu'], trap: ['mis'],
    hint: ['……ふたつの影が、互いに背を向けている。', 'どちらも、相手が先に話すのを待っているらしい。'], lines: ['「そっちが さきに」', '「どうせ わかって くれない」'] },
  nameless: { name: '名を欲しがる影', col: '#5a7ae0', hp: 80, atk: [5, 8], exp: 30, boss: true, weak: ['blank'], absorb: true,
    hint: ['……「名前をちょうだい」と繰り返している。', 'どんな名前をあげても、満たされないようだ。名前の「外」なら、あるいは……'], lines: ['「なまえを ちょうだい」', '「それじゃない」', '「わたしは だれ？」'] },
  keeper: { name: '時の番人', col: '#d8a040', hp: 100, atk: [6, 9], exp: 40, boss: true, weak: ['nayra', 'mononoaware'], trap: ['fernweh', 'saudade'],
    hint: ['……背中を、未来に向けて立っている。', '過去を「前」として見ているようだ。その向きで語りかければ……'], lines: ['「まえを みよ」', '「うしろは まだ こない」', '「ときは もどらぬ」'] },
  king: { name: 'レッテルの王', col: '#c0392b', hp: 100, atk: [6, 10], exp: 0, boss: true, weak: ['blank'], absorb: true,
    hint: ['……無数のラベルでできている。あなたが貼ったものも、混ざっている。', '言葉を投げるほど、大きくなるようだ。言葉を手放して、ただ聞くしかない。'], lines: ['「おまえは ○○だ」', '「わかった わかった」', '「なまえを つけて あんしん しよう」'] },
};
for (const k in FOES) FOES[k].key = k;

/* ===================== LOOKS ===================== */
const LOOK = {};
function look(key, o) { LOOK[key] = { key, ...o }; return LOOK[key]; }
look('hero', { skin: '#f2c9a0', hair: '#6b3d1f', body: '#3d6bb3', body2: '#26457a', legs: '#4a3a2a', pack: true });
look('lina', { skin: '#f5d0ac', hair: '#c0703a', style: 'long', body: '#e8e4d8', body2: '#5a7ab8', apron: '#5a7ab8', dress: true, blush: true });
look('marco', { skin: '#d9a679', hair: '#2b2018', body: '#5a5068', legs: '#3a3030', hat: '#3a3550', hatStyle: 'wide', beard: '#2b2018' });
look('gil', { skin: '#e0b088', hair: '#e8e8e8', style: 'bald', beard: '#e0e0e0', body: '#8a6a4a', hat: '#b04040', hatStyle: 'cap' });
look('ines', { skin: '#f2d2b0', hair: '#2a2a3a', style: 'bun', body: '#c86a8a', apron: '#f0e8d8', legs: '#3a3a5a' });
look('vera', { skin: '#f6dcc8', hair: '#f0e0b0', style: 'long', body: '#5a7aa0', scarf: '#f0f0f0', legs: '#2a3040' });
look('wilka', { skin: '#c8956a', hair: '#1a1a1a', style: 'long', body: '#b84a3a', body2: '#e8b84a', hat: '#6a3a22', hatStyle: 'cap', legs: '#3a2a2a' });
look('teo', { skin: '#f0c49a', hair: '#3a2a1a', body: '#e8a040', legs: '#4a5a8a' });
look('iker', { skin: '#e8b890', hair: '#2a2a2a', body: '#d8d8e0', body2: '#1a2a5a', hat: '#1a2a5a', hatStyle: 'beret', beard: '#2a2a2a', legs: '#2a2a3a' });
look('selin', { skin: '#e2b48c', hair: '#4a2a1a', style: 'long', body: '#2f8a7a', apron: '#f0d080', legs: '#3a2a3a' });
look('rolo', { skin: '#f0c49a', hair: '#8a5a2a', body: '#f0f0e8', apron: '#f8f8f8', hatStyle: 'chef', legs: '#5a4a3a' });
look('nora', { skin: '#f2d0b0', hair: '#a83a2a', style: 'bun', body: '#6aa86a', dress: true });
look('pepe', { skin: '#f6d0a8', hair: '#f0c040', body: '#d84a4a', legs: '#3a4a7a' });
look('marta', { skin: '#f0c8a8', hair: '#5a3a2a', style: 'bun', body: '#8a5ab0', apron: '#f0e8d8', dress: true });
look('tom', { skin: '#f2c9a0', hair: '#c08040', body: '#4a8a4a', legs: '#4a3a2a' });
look('mira', { skin: '#f5d6b8', hair: '#2a1a1a', style: 'long', body: '#d8a84a', dress: true, blush: true });
look('olga', { skin: '#ecc8a8', hair: '#d8d8d8', style: 'long', body: '#2a3a5a', scarf: '#c84a3a', legs: '#2a2a3a' });
look('louis', { skin: '#f2d0b0', hair: '#c89a50', body: '#3a5a8a', scarf: '#d84a4a', hat: '#2a2a3a', hatStyle: 'beret', legs: '#3a3a4a' });
look('thandi', { skin: '#8a5a3a', hair: '#1a1210', style: 'bun', body: '#e8c040', body2: '#2a8a6a', dress: true });
look('sakuya', { skin: '#f0d0b0', hair: '#1a1a20', style: 'long', body: '#4a7a4a', body2: '#2a4a2a', legs: '#3a3020' });
look('hanna', { skin: '#f4d8c0', hair: '#e0b860', style: 'bun', body: '#7a5a3a', apron: '#e8dcc0', legs: '#3a3030' });
look('haruka', { skin: '#f0d0b0', hair: '#2a1a1a', body: '#5a6a8a', apron: '#c8b090', legs: '#2a2a3a' });
look('pata', { skin: '#b07a50', hair: '#1a1a1a', style: 'long', body: '#7a3a2a', scarf: '#d8c070', legs: '#2a2a2a', beard: '#1a1a1a' });
look('pico', { kind: 'cat', body: '#e0a050', sleep: true });
look('cat', { kind: 'cat', body: '#8a8a96' });

/* ===================== MAPS ===================== */
function gridFrom(rows) { return rows.map(r => r.split('')); }
function buildTown() {
  const W = 40, H = 30, g = []; for (let y = 0; y < H; y++) g.push(Array(W).fill('.'));
  const set = (x, y, c) => { if (x >= 0 && y >= 0 && x < W && y < H) g[y][x] = c; };
  const rect = (x, y, w, h, c) => { for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) set(x + i, y + j, c); };
  const r = rng(2024);
  for (let y = 2; y < 20; y++) for (let x = 2; x < 38; x++) if (r() < 0.07) set(x, y, ',');
  rect(0, 0, W, 2, 'T'); rect(0, 0, 2, 20, 'T'); rect(38, 0, 2, 20, 'T');
  [[2, 2], [3, 2], [12, 2], [13, 2], [16, 2], [17, 3], [23, 2], [24, 3], [35, 2], [36, 2], [36, 3], [2, 9], [2, 10], [13, 6], [14, 7], [25, 7],
   [35, 8], [36, 16], [2, 16], [2, 17], [12, 18], [13, 18], [24, 18], [25, 18], [36, 18]].forEach(([x, y]) => set(x, y, 'T'));
  rect(0, 21, W, 1, 's'); rect(0, 22, W, 8, '~');
  rect(19, 0, 2, 21, ':'); rect(2, 12, 38, 2, ':'); rect(15, 10, 10, 6, ':');
  rect(3, 4, 8, 2, 'R'); rect(3, 6, 8, 3, 'W'); set(4, 7, 'O'); set(9, 7, 'O'); set(5, 7, 'O'); set(7, 8, 'D'); rect(7, 9, 1, 3, ':');
  [3, 4, 5, 9, 10].forEach(x => set(x, 9, ','));
  rect(27, 4, 7, 2, 'B'); rect(27, 6, 7, 3, 'W'); set(28, 7, 'O'); set(32, 7, 'O'); set(30, 8, 'D'); rect(30, 9, 1, 3, ':'); rect(34, 9, 3, 1, 'F');
  rect(4, 15, 6, 2, 'B'); rect(4, 17, 6, 2, 'W'); set(5, 17, 'O'); set(9, 17, 'O'); set(7, 18, 'D'); rect(7, 19, 1, 2, ':');
  rect(28, 15, 6, 2, 'R'); rect(28, 17, 6, 2, 'W'); set(29, 17, 'O'); set(32, 17, 'O'); set(31, 18, 'D'); rect(31, 19, 1, 2, ':');
  rect(26, 19, 2, 1, 'F');
  [[14, 10], [25, 10], [14, 15], [25, 15]].forEach(([x, y]) => set(x, y, 'L'));
  rect(8, 21, 2, 6, '='); rect(10, 25, 6, 1, '='); rect(24, 21, 2, 5, '='); rect(33, 22, 1, 3, '=');
  rect(32, 25, 5, 3, 's'); set(32, 27, 'M'); set(36, 25, 'M'); set(36, 27, 'M');
  [[10, 26], [15, 26], [23, 24], [23, 22]].forEach(([x, y]) => set(x, y, 'P'));
  set(2, 21, 'M'); set(37, 21, 'M'); set(6, 21, 'X'); set(11, 21, 'X'); set(22, 21, 'X'); set(27, 21, 'X'); set(28, 21, 'X');
  return g;
}
const WOODS_RIGHT = [18, 4]; // correct path x for fork 1 (lower) and fork 2 (upper)
function buildWoods() {
  const W = 24, H = 34, g = []; for (let y = 0; y < H; y++) g.push(Array(W).fill('T'));
  const rect = (x, y, w, h, c) => { for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) if (x + i >= 0 && x + i < W && y + j >= 0 && y + j < H) g[y + j][x + i] = c; };
  const r = rng(77);
  rect(11, 29, 2, 5, ':');
  rect(3, 23, 18, 6, '.');
  rect(5, 14, 1, 9, ':'); rect(12, 14, 1, 9, ':'); rect(18, 14, 1, 9, ':');
  rect(3, 9, 18, 5, '.');
  rect(4, 4, 1, 5, ':'); rect(11, 4, 1, 5, ':'); rect(19, 4, 1, 5, ':');
  rect(7, 1, 10, 3, '.'); rect(4, 3, 3, 1, ':'); rect(11, 0, 2, 1, ':');
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (g[y][x] === '.' && r() < 0.12) g[y][x] = ',';
  return g;
}

const mistBack = (x, y, txt) => async () => {
  Audio8.sfx('wind'); await fadeOut(500); placePlayer(x, y, 'up'); await fadeIn(500);
  await narr(txt || '濃い霧に包まれ――気がつくと、さっきの広場に戻っていた。');
  if (!eq('komorebi')) await narr(has('komorebi') ? '（KOMOREBI を装備すれば、光の落ちる道が見えるはずだ）' : '（森番なら、この霧の抜け方を知っているかもしれない）');
};
const MAPS = {
  town: { name: '港町ソルテア', bgm: 'town', tint: 'town', deep: 26, build: buildTown,
    warps: [
      { x: 19, y: -1, to: ['woods', 11, 32, 'up'], cond: () => S.ch >= 2 && has('goluboy'),
        blocked: async () => { await narr(S.ch < 2 ? '北の道は、深い霧に包まれている。……今は進めない。' : '霧の向こうに森が見える。（門のそばの旅人が、何か知っていそうだ）'); } },
      { x: 20, y: -1, alias: 0 },
      { x: 40, y: 12, to: ['ruins', 7, 10, 'up'], cond: () => S.ch >= 3 && has('nayra'), pre: () => { S.ruin = 0; },
        blocked: async () => { await narr(S.ch < 3 ? '東の道は、古い封印の石でふさがれている。' : '（遺跡に入る前に、そばにいる学者の話を聞いてみよう）'); } },
      { x: 40, y: 13, alias: 2 },
      { x: 7, y: 8, to: ['inn', 5, 7, 'up'] },
      { x: 33, y: 22, cond: () => S.ch >= 5, blocked: async () => { await narr('灯台への桟橋には、ロープが張られている。「立入禁止」'); } },
    ] },
  inn: { name: '宿屋「かもめ亭」', bgm: 'inn', tint: 'inn',
    rows: ['kkkkkkkkkkkk', 'kKhKKKKKKKKk', 'kwwwwwwwwwwk', 'kcccwwwwwwwk', 'kwwwwwtwwwwk', 'kwwuuuuuwwwk', 'kwwuuuuuwwwk', 'kwwwwwwwwwwk', 'kkkkkwkkkkkk'],
    warps: [{ x: 5, y: 9, to: ['town', 7, 9, 'down'] }],
    onEnter: async () => { if (S.ch === 4 && !flag('caseStarted')) await caseIntro(); } },
  woods: { name: '霧の森', bgm: 'woods', tint: 'woods', build: buildWoods,
    warps: [
      { x: 11, y: 34, to: ['town', 19, 1, 'down'] }, { x: 12, y: 34, alias: 0 },
      { x: 11, y: -1, to: ['corridor', 7, 10, 'up'], pre: () => { S.cor = 0; setf('woodsDone'); } }, { x: 12, y: -1, alias: 2 },
      { x: 5, y: 15, run: mistBack(12, 24) }, { x: 12, y: 15, run: mistBack(12, 24) },
      { x: 11, y: 5, run: mistBack(11, 10) }, { x: 19, y: 5, run: mistBack(11, 10) },
    ] },
  corridor: { name: '青の回廊', label: () => `青の回廊 — 第${S.cor + 1}の間`, bgm: 'corridor', tint: 'blue',
    rows: ['JJJJJJJJJJJJJJJJ', 'JHHHHHHHHHHHHHHJ', ...Array(9).fill('JggggggggggggggJ'), 'JJJJJJJggJJJJJJJ'],
    warps: [{ x: 7, y: 12, to: ['woods', 11, 1, 'down'] }, { x: 8, y: 12, alias: 0 }],
    dyn: () => corridorEnts() },
  ruins: { name: '時の遺跡', label: () => `時の遺跡 — ${['一', '二', '三'][S.ruin]}の間`, bgm: 'ruins', tint: 'ruins',
    rows: ['qqqqqqqqqqqqqqqq', 'QQQQQQQQQQQQQQQQ', 'qrrrrrrrrrrrrrrq', 'qrrCrrrrrrrrCrrq', 'qrrrrrrrrrrrrrrq', 'rrrrrrrrrrrrrrrr', 'rrrrrrrrrrrrrrrr',
      'qrrrrrrrrrrrrrrq', 'qrrrrrrrrrrrrrrq', 'qrrCrrrrrrrrCrrq', 'qrrrrrrrrrrrrrrq', 'qqqqqqqrrqqqqqqq'],
    warps: [
      { x: 7, y: 12, to: ['town', 37, 12, 'left'] }, { x: 8, y: 12, alias: 0 },
      { x: -1, y: 5, run: () => ruinJudge('W') }, { x: -1, y: 6, alias: 2 },
      { x: 16, y: 5, run: () => ruinJudge('E') }, { x: 16, y: 6, alias: 4 },
    ],
    dyn: () => ruinEnts() },
  sanctum: { name: '時の遺跡 — 最奥', bgm: 'sanctum', tint: 'ruins',
    rows: ['qqqqqqqqqqqqqqqq', 'QQQQQQQQQQQQQQQQ', 'qrrrrrrrrrrrrrrq', 'qrrCrrrrrrrrCrrq', ...Array(5).fill('qrrrrrrrrrrrrrrq'), 'qrrCrrrrrrrrCrrq', 'qrrrrrrrrrrrrrrq', 'qqqqqqqrrqqqqqqq'],
    warps: [{ x: 7, y: 12, to: ['town', 37, 12, 'left'] }, { x: 8, y: 12, alias: 0 }] },
};
/* route graph for the NEXT marker: [from, to, tile in `from` that leads to `to`] */
const LINKS = [['town', 'inn', 7, 8], ['inn', 'town', 5, 8], ['town', 'woods', 19, 0], ['woods', 'town', 11, 33], ['woods', 'corridor', 11, 0],
  ['corridor', 'woods', 7, 11], ['town', 'ruins', 39, 12], ['ruins', 'town', 7, 11], ['sanctum', 'town', 7, 11]];

/* ===================== STORY HELPERS ===================== */
const has = id => S.words.includes(id);
const eq = id => S.equipped.includes(id);
const flag = k => !!S.flags[k];
const setf = (k, v = 1) => { S.flags[k] = v; };
const lensOpt = (w, t, go, extra) => eq(w) ? { t, word: w, go, ...extra } : null;
const quietOpt = e => lensOpt('blank', '（何も言わず、となりにいる）', () => quiet(e));
const NM = w => WORDS[w].name;
async function quiet(e) {
  await narr('あなたは何も言わず、となりに立った。');
  for (const l of e.truth || ['……。']) await say(e, l);
  if (!flag('quiet_' + e.id)) { setf('quiet_' + e.id); await narr('（ラベルを貼らずに、ちゃんと聞けた）'); await gainExp(5); }
}
async function giveHeart(src) {
  S.maxhp += 6; S.hp = S.maxhp; Audio8.sfx('found');
  await narr(`${src ? src + '：' : ''}「こころの実」を手に入れた！ こころの最大値が 6 増えた。`); renderHUD();
}

/* ===================== NEXT (quest tracker) ===================== */
const npcAt = id => { const n = NPCS.find(n => n.id === id); return { map: n.map, x: n.x, y: n.y, id }; };
function objective() {
  const ch = S.ch, m = MAP ? MAP.id : 'town';
  if (ch === 1) {
    if (!flag('linaMet')) return { t: '桟橋の先にいる少女に話しかけよう', h: '港の南西、木の桟橋をいちばん先まで歩くと、海を見つめる少女がいる。A（Z）で話しかけよう。', g: npcAt('lina') };
    if (!has('saudade')) return { t: '東の桟橋の商人マルコに、少女のことを聞こう', h: '少女の「嬉しいのに悲しい」気持ちを表す言葉を、海の向こうから来た人なら知っているかもしれない。', g: npcAt('marco') };
    if (!eq('saudade')) return { t: 'MENU→ことば で SAUDADE を装備しよう', h: 'C キー（スマホは MENU）でメニューを開き、「ことば」から SAUDADE を選んで装備する。装備した言葉で、会話の選択肢が増える。', g: npcAt('lina') };
    return { t: 'SAUDADE を装備して、少女と話そう', h: '言葉の名前を教えるだけでは、気持ちは受け取れないかもしれない。「恋しさ」に目を向けた選択肢を選ぼう。', g: npcAt('lina') };
  }
  if (ch === 2) {
    if (!has('goluboy')) return { t: '北の門のそばにいる旅人ヴェーラと話そう', h: '広場から北へまっすぐ。門の右側に旅人が立っている。', g: npcAt('vera') };
    if (m === 'corridor') {
      if (S.cor < 2) return { t: '石碑を読み、言葉で正しい扉を選ぼう', h: 'GOLUBOY を装備して扉を調べると、明るい青（Goluboy）か濃い青（Siniy）かがわかる。石碑の指示どおりの扉を開けよう。', g: { map: 'corridor', x: 11, y: 6 } };
      return { t: '「名の外」にある扉を探そう', h: 'Goluboy でも Siniy でもない扉は、言葉を装備していると見えないのかもしれない。GOLUBOY を外してみよう。', g: { map: 'corridor', x: 7, y: 1 } };
    }
    if (!has('komorebi')) return { t: '北の『霧の森』に入り、森番サクヤと話そう', h: '森の入口の広場に森番がいる。霧の抜け方を知っているはずだ。', g: npcAt('sakuya') };
    if (m === 'woods' && !eq('komorebi')) return { t: 'KOMOREBI を装備して、霧の小道へ', h: '装備すると、正しい道に木漏れ日が落ちて見える。間違った道は、霧で入口に戻される。', g: { map: 'woods', x: 11, y: 0 } };
    return { t: '霧の森を抜け、北の『青の回廊』へ', h: '光の落ちる道をたどろう。森を抜けた先に回廊の入口がある。', g: { map: 'corridor', x: 11, y: 6 } };
  }
  if (ch === 3) {
    if (!has('nayra')) return { t: '東の道のそばにいる学者ウィルカと話そう', h: '大通りを東の端まで。遺跡への道の手前に学者がいる。', g: npcAt('wilka') };
    if (m === 'ruins') return { t: '碑文を読み、像の向きから「過去」と「未来」を見極めよう', h: 'NAYRA を装備して碑文を読もう。像の視線の先が「過去」、背中の先が「未来」。左右の出口のどちらかへ。', g: { map: 'ruins', x: 7, y: 7 } };
    if (m === 'sanctum') return { t: '最奥の壁画を調べよう', h: '壁画の前には番人がいる。NAYRA が響くはずだ。', g: { map: 'sanctum', x: 7, y: 1 } };
    return { t: '東の『時の遺跡』の奥へ進もう', h: '遺跡では、自分の「前」という常識を疑ってみよう。', g: { map: 'ruins', x: 7, y: 7 } };
  }
  if (ch === 4) {
    if (!flag('caseStarted')) return { t: '宿屋「かもめ亭」に行ってみよう', h: '町の北西、赤い屋根の宿屋。何か騒ぎが起きているようだ。', g: npcAt('marta') };
    if (!has('ergk')) return { t: '西の桟橋のバスクの船乗りに話を聞こう', h: '「誰がやったか」に注目する言葉を知っているらしい。', g: npcAt('iker') };
    if (!has('mis')) return { t: '広場の香辛料商セリンに話を聞こう', h: '「見た話」と「聞いた話」を分ける言葉を知っているらしい。', g: npcAt('selin') };
    if (!(eq('ergk') && eq('mis'))) return { t: '-K と -MİŞ を両方装備しよう', h: '2つの言葉を同時に装備すると、証言の新しい見方が開ける。', g: npcAt('marta') };
    const need = !flag('m_tom') ? 'tom' : !flag('m_mira') ? 'mira' : null;
    if (need) return { t: `${npcName(need)}に、その話を「見た」のか聞こう`, h: '-MİŞ の選択肢で、情報源を確かめよう。', g: npcAt(need) };
    if (!flag('windowSeen')) return { t: '宿の窓を調べよう', h: '花瓶のあった棚の上、開いた窓を調べてみよう。', g: { map: 'inn', x: 9, y: 2 } };
    if (!(flag('k_marta') && flag('m_marta'))) return { t: '女将マルタに -K と -MİŞ で質問しよう', h: '「誰が」と「見たのか」を、両方たずねよう。', g: npcAt('marta') };
    return { t: '女将に結論を伝えよう（証言ボード）', h: '目撃者は誰？ 行為者はいる？ 開いた窓は？', g: npcAt('marta') };
  }
  if (ch === 5) return { t: '南東の灯台へ行こう', h: '灯台の桟橋は、東の浜から南へ。灯台守が待っている。言葉を投げるほど強くなる相手もいるらしい……。', g: npcAt('olga') };
  const left = Object.keys(S.labels);
  if (left.length) return { t: `町に残ったラベルを剥がそう（あと${left.length}人）`, h: 'その言葉を外して話しかけ、「ただ聞く」を選ぼう。', g: npcAt(left[0]) };
  const miss = WORD_ORDER.filter(w => !has(w));
  if (miss.length) return { t: `まだ知らない言葉がある（${S.words.length}/${WORD_ORDER.length}）`, h: 'ヒント：' + WORDS[miss[0]].hint, g: null };
  return { t: 'すべての言葉を集めた！ 港を自由に歩こう', h: 'ありがとう、旅人さん。', g: null };
}

/* ===================== CHARACTERS ===================== */
const NPCS = [
  /* ---------- CHAPTER 1 ---------- */
  { id: 'lina', name: '少女リナ', map: 'town', x: 9, y: 26, dir: 'down', look: 'lina',
    talk: async e => {
      if (S.ch > 1) {
        const l = S.ch > 4 ? '灯台のおばあさん、ずっと港を見てるんだって。わたしと同じだね。' : 'おじいちゃんが見てた海、今日もきれい。……ありがとう、旅人さん。';
        await say(e, l);
        await pick(e, l, [
          lensOpt('iktsuarpok', '毎朝、誰か来ないか見に来ちゃうんだね', async () => { await say(e, '……うん。来ないってわかってるのに、ね。'); await say(e, 'でも、海を見てると、来るかもって思える。それが好きなの。'); }),
          { t: 'またね', cancel: true },
        ], { instant: true });
        return;
      }
      if (!flag('linaMet')) await narr('少女が、ひとりで海を見つめている。');
      const q = 'どうして、あの人のことを思い出すと、嬉しいのに悲しくなるんだろう……？';
      await say(e, q);
      if (eq('saudade')) await lens('saudade', 'この感情を、単なる悲しさではなく、大切なものへの「恋しさ」として捉えてみよう。');
      await pick(e, q, [
        { t: '悲しいんだね', go: async () => { await say(e, '……悲しい、のかな。でも、それだけじゃない気がするの。'); } },
        { t: '寂しいんだね', go: async () => { await say(e, '寂しい……うん。でも、思い出すと少しあったかいの。変だよね。'); } },
        { t: '忘れた方がいいよ', go: async () => { await say(e, '……忘れたくなんか、ない。'); await narr('少女は背を向けてしまった。'); } },
        lensOpt('fernweh', 'どこか遠くへ、行きたいんだね', async () => { await say(e, '……ちがうよ。わたし、ここにいたいの。'); await narr('（遠くへの憧れと、遠くにあるものへの恋しさ。似ているようで、向きが逆だった）'); await bumpFix('fernweh'); }, { trap: true }),
        lensOpt('saudade', 'それは «Saudade» って言うんだよ', async () => {
          await say(e, 'さうだーで……？'); await say(e, '……そっか。名前があるんだね。');
          await narr('少女はうなずいて、それきり黙ってしまった。');
          await narr('言葉を渡すことと、気持ちを受け取ることは、違うのかもしれない。');
          await bumpFix('saudade');
        }, { trap: true }),
        lensOpt('saudade', 'その人との時間が、今も大切なんだね', async () => {
          setf('linaDone');
          await say(e, '……そうかもしれない。');
          await say(e, 'いなくなったのは寂しい。でも、一緒に過ごした時間が大切だったから、こんな気持ちになるんだ。');
          await say(e, 'おじいちゃんね、毎朝この桟橋で海を見てたの。……明日から、わたしが代わりに見てみる。');
          await narr('言葉が答えをくれたわけじゃない。言葉は、どこを見ればいいかを教えてくれただけだ。');
          await gainExp(10);
          await clearChapter(1);
        }),
      ], { instant: true });
      if (!flag('linaDone') && !flag('linaMet')) {
        setf('linaMet');
        await narr('（少女の気持ちにぴったりの言葉が、見つからない……）');
        await narr('港には、海の向こうから来た人たちがいる。誰か知っているかもしれない。');
      }
    } },
  { id: 'marco', name: '旅の商人マルコ', map: 'town', x: 25, y: 24, dir: 'right', look: 'marco', offer: () => flag('linaMet') && !has('saudade'),
    talk: async e => {
      if (S.ch >= 6) return travelMenu(e);
      if (!has('saudade')) {
        if (!flag('linaMet')) { await say(e, 'やあ、旅人さん。この港には、海の向こうの言葉がたくさん流れ着くんだ。'); await say(e, '困ったことがあったら、言葉を探してみるといい。言葉は地図みたいなものさ。'); return; }
        await say(e, '桟橋の女の子の話かい？ ……嬉しいのに、悲しい、か。');
        await say(e, 'それはね……ポルトガルの言葉で «Saudade» って言うんだ。');
        await say(e, '大切なものが遠くにあることへの、甘く切ない想い。船乗りはみんな、胸にひとつは持ってるもんさ。');
        await acquire('saudade', '旅の商人マルコ', '港町ソルテア 東の桟橋');
        await say(e, 'ただ、気をつけな。いい言葉ほど、何にでも当てはめたくなるもんだ。');
        await say(e, 'それと……最近、港に「モヤ」が出る。言葉にならない気持ちのかたまりさ。ぶつかったら、言葉で晴らしてやってくれ。');
        return;
      }
      const t = ['モヤには、それぞれ響く言葉がある。わからなけりゃ、まず「きく」んだ。', 'いい言葉は道具だ。だが道具ってのは、持ってるだけで使いたくなる。', '言葉は装備できるのは3つまで。相手に合わせて組みかえな。'];
      await say(e, t[S.ch % 3]);
    } },
  { id: 'louis', name: '旅人ルイ', map: 'town', x: 21, y: 21, dir: 'down', look: 'louis', offer: () => !has('depaysement'),
    talk: async e => {
      if (!has('depaysement')) {
        await say(e, 'Bonjour！ きみも船で来たの？ この港に着いたとき、胸がざわっとしなかった？');
        await say(e, '知らない匂い、知らない言葉。ちょっとこわくて、でも、わくわくする。');
        await say(e, 'フランス語では、それを «Dépaysement» って言うんだ。「国がずれる」感じ、かな。');
        await acquire('depaysement', '旅人ルイ', '港町ソルテア 浜辺');
        await say(e, '迷子のモヤに出会ったら、この言葉をかけてあげて。あいつらも、よそ者なんだ。');
        return;
      }
      await say(e, ['この町の人にとっては、ぼくらこそ珍しい生きものなんだろうね。', 'Dépaysement は、旅人だけのものじゃないよ。毎日の中にも、ずれはあるんだ。'][S.ch % 2]);
    } },
  { id: 'gil', name: '漁師ギル', map: 'town', x: 13, y: 25, dir: 'down', look: 'gil', labelable: true,
    labelReact: { saudade: ['……は？'], nayra: ['過ぎた日々？ ……わしゃ、波を見とるんじゃが。'], mononoaware: ['しみじみ……？ ただの波じゃ。'], toska: ['……わしは別に、苦しんどらんぞ。'] },
    truth: ['わしか？ 波の音を数えとるだけじゃ。千まで数えたら、晩飯にする。', '……理由がないと、海を見ちゃいかんのか？'],
    talk: async e => {
      await say(e, '……海は、いい。');
      await pick(e, '……海は、いい。', [
        { t: '何を見ているんですか？', go: async () => { await say(e, '波じゃよ。'); } },
        lensOpt('saudade', 'あなたも、誰かを恋しく想っているんですね', () => label(e, 'saudade')),
        lensOpt('nayra', '過ぎた日々を見つめているんですね', () => label(e, 'nayra')),
        lensOpt('toska', '言葉にできない痛みを、抱えているんですね', () => label(e, 'toska')),
        quietOpt(e),
        { t: 'そっとしておく', cancel: true },
      ], { instant: true });
    } },
  { id: 'rolo', name: 'パン屋のロロ', map: 'town', x: 12, y: 13, dir: 'down', look: 'rolo', wander: 3, labelable: true, offer: () => S.ch >= 2 && !has('hygge'),
    labelReact: { mis: ['……はあ？ 疑ってんのか？'], saudade: ['パンに切なさなんかねえよ！'], ergk: ['オレだよ！ オレが焼いたんだよ！'] },
    truth: ['焼いたさ、この手でな！ ……まあ、ばあさんのレシピだけどな。', '疑われると、パンもしぼむってもんだ。'],
    talk: async e => {
      if (S.ch >= 2 && !has('hygge')) {
        await say(e, 'よう、旅人。今日は冷えるな。……焼きたて、ひとつ食ってけ。');
        await say(e, 'オレは若いころ、デンマークでパンを習ってな。あっちには «Hygge» って言葉があるんだ。');
        await say(e, 'あったかい灯り、気の置けない仲間、焼きたてのパン。そういう、くつろいだ心地よさのことさ。');
        await acquire('hygge', 'パン屋のロロ', '港町ソルテア 大通り');
        await say(e, '戦いで疲れたら、そいつを思い出しな。こころがあったまる。……ただし、なんでもかんでも「まあ一杯」じゃダメだぞ。');
        return;
      }
      const l = S.ch >= 4 ? '花瓶が割れたって？ うちのパンは割れないぞ！' : '今朝焼いたパン、うまいぞ！ 港いちばんさ。';
      await say(e, l);
      await pick(e, l, [
        { t: 'おいしそう', go: async () => { await say(e, 'だろう？'); } },
        lensOpt('mis', 'それ、本当に自分で焼いたんですか？', () => label(e, 'mis')),
        lensOpt('saudade', 'このパンには Saudade の味がしますね', () => label(e, 'saudade')),
        quietOpt(e),
        { t: 'またね', cancel: true },
      ], { instant: true });
    } },
  { id: 'nora', name: '洗濯のノラ', map: 'town', x: 31, y: 12, dir: 'down', look: 'nora', wander: 3, labelable: true,
    labelReact: { saudade: ['……風に？ 私が？'], ergk: ['私が干したのよ。悪い？'], mis: ['……私が嘘ついてるって言いたいの？'], goluboy: ['……ふうん。青でいいと思うけど。'], depaysement: ['……私、生まれも育ちもこの町だけど？'] },
    truth: ['私？ 洗濯物が乾くのを待ってるだけよ。', '人のこと、勝手に決めつけないでちょうだい。'],
    talk: async e => {
      const l = '今日は風が強いから、洗濯物がよく乾くわ。';
      await say(e, l);
      await pick(e, l, [
        { t: 'いい天気ですね', go: async () => { await say(e, 'ほんとにね。'); } },
        lensOpt('saudade', '風に、Saudade を感じているんですね', () => label(e, 'saudade')),
        lensOpt('goluboy', '今日の空は Goluboy ですね', () => label(e, 'goluboy')),
        lensOpt('depaysement', 'この町、珍しいものばかりですね', () => label(e, 'depaysement')),
        lensOpt('hygge', '洗濯物の匂いって、Hygge ですよね', async () => { await say(e, 'あら、わかる？ お日さまの匂いよね。'); await narr('ノラは少しだけ笑った。'); }),
        quietOpt(e),
        { t: 'またね', cancel: true },
      ], { instant: true });
    } },
  { id: 'pepe', name: 'ペペ', map: 'town', x: 21, y: 17, dir: 'down', look: 'pepe', wander: 3, labelable: true,
    labelReact: { saudade: ['こいしい？ よくわかんない！'], nayra: ['うしろ？ ……ボク、前に走りたいんだけど'] },
    truth: ['ボク、ただ走るのが好きなだけだよ！', '……でもね、いつか、海の向こうまで走っていきたいんだ。'],
    talk: async e => {
      const l = S.ch >= 3 ? 'ボク、いつも海の向こうばっかり見ちゃうんだ。' : 'かけっこしよー！ ……あ、だめ？';
      await say(e, l);
      await pick(e, l, [
        { t: 'あとでね', go: async () => { await say(e, 'ちぇー。'); } },
        lensOpt('saudade', '何かが恋しくて、海を見てるんだね', () => label(e, 'saudade')),
        lensOpt('nayra', '知ってる？ 未来は後ろにあるんだよ', () => label(e, 'nayra')),
        lensOpt('fernweh', 'まだ見ぬ海の向こうに、憧れてるんだね', async () => {
          await say(e, 'そう！ それ！ 行ったことないのに、行きたくてむずむずするの！');
          await say(e, 'へへ、言葉があるんだね。ボクだけじゃなかったんだ。');
          if (!flag('pepeFern')) { setf('pepeFern'); await say(e, 'これ、あげる！ 浜で拾った、きらきらの実！'); await giveHeart(); }
        }),
        quietOpt(e),
        { t: 'またね', cancel: true },
      ], { instant: true });
    } },
  { id: 'cat', name: 'のら猫', map: 'town', x: 17, y: 8, dir: 'left', look: 'cat', wander: 4, talk: async () => { await narr('ニャー。'); } },
  { id: 'sign_inn', map: 'town', x: 11, y: 8, kind: 'obj', draw: 'sign', talk: async () => { await narr('宿屋「かもめ亭」── やすらぎの一夜を。（休むと、こころが全回復する）'); } },
  { id: 'sign_road', map: 'town', x: 21, y: 20, kind: 'obj', draw: 'sign', talk: async () => { await narr('↑ 北：霧の森・青の回廊　　→ 東：時の遺跡　　↓ 南：桟橋'); } },
  { id: 'fountain', map: 'town', x: 19, y: 12, w: 2, h: 2, kind: 'obj', draw: 'fountain',
    talk: async () => { await narr('噴水の水が、陽の光を受けてきらきらと光っている。'); if (S.stats.pasted >= 3 && !flag('fountainQuip')) { setf('fountainQuip'); await narr('水面に映ったあなたの顔にも、小さなラベルが貼ってある気がした。'); } } },
  { id: 'boat', map: 'town', x: 26, y: 24, w: 2, kind: 'obj', draw: 'boat', talk: async () => { await narr('マルコの船だ。帆に、いくつもの港の名前が縫いつけてある。'); } },
  { id: 'rowboat', map: 'town', x: 5, y: 23, w: 2, kind: 'obj', draw: 'rowboat' },
  { id: 'chest_town', map: 'town', x: 36, y: 10, kind: 'obj', draw: 'chest',
    chest: { riddle: '「まだ行ったことのない場所が、なぜか恋しい」', ans: 'fernweh', trap: ['saudade'], reward: 'heart' }, talk: e => chestTalk(e) },
  { id: 'f_t1', map: 'town', x: 4, y: 11, kind: 'foe', foe: 'lost', wander: 3, when: () => S.words.length > 0 },
  { id: 'f_t2', map: 'town', x: 34, y: 14, kind: 'foe', foe: 'homesick', wander: 3, when: () => S.words.length > 0 },
  { id: 'f_t3', map: 'town', x: 12, y: 16, kind: 'foe', foe: 'rumor', wander: 3, when: () => S.ch >= 4 },
  { id: 'f_t4', map: 'town', x: 26, y: 17, kind: 'foe', foe: 'miss', wander: 2, when: () => S.ch >= 4 },

  /* ---------- CHAPTER 2 ---------- */
  { id: 'ines', name: '画家イネス', map: 'town', x: 4, y: 20, dir: 'down', look: 'ines', labelable: true,
    labelReact: { goluboy: ['……そう。Goluboy。', '（キャンバスが、一色の明るい青に塗りつぶされていく）'], saudade: ['……そういうことに、しておくわ。'], komorebi: ['……光の話は、してないわ。'] },
    truth: ['名前がつかない色だから、描きたかったの。', '名前がついた瞬間、わたし、その色を見なくなる気がして。', '……北の回廊にも、そういう色の扉があるらしいわよ。'],
    talk: async e => {
      const l = 'この海の色、なんて呼べばいいのかしら。ずっと探してるの。';
      await say(e, l);
      await pick(e, l, [
        { t: 'きれいな青ですね', go: async () => { await say(e, '青……そうね。青、なんだけど。'); } },
        lensOpt('goluboy', 'それは Goluboy。明るい青ですよ', () => label(e, 'goluboy')),
        lensOpt('saudade', 'この海に、Saudade を感じているんですね', () => label(e, 'saudade')),
        lensOpt('wabisabi', '色あせたところも、きれいですね', async () => { await say(e, '……ふふ。そう、日に焼けた舟の色とかね。わかるわ。'); }),
        { t: '名前、なくてもいいのでは？', go: async () => { await say(e, '……ふふ。そうかもね。'); if (S.ch >= 2) await say(e, '北の回廊の噂、知ってる？ 名前のない色の扉があるんだって。'); } },
        quietOpt(e),
      ], { instant: true });
    } },
  { id: 'easel', map: 'town', x: 5, y: 20, kind: 'obj', draw: 'easel',
    talk: async () => { if (S.labels.ines === 'goluboy') await narr('キャンバスは、明るい青一色に塗りつぶされている。'); else await narr('描きかけの海。夕焼けと、緑がかった青と、深い青が溶けあっている。'); } },
  { id: 'vera', name: '北の旅人ヴェーラ', map: 'town', x: 21, y: 2, dir: 'left', look: 'vera', offer: () => S.ch >= 2 && !has('goluboy'),
    talk: async e => {
      if (S.ch < 2) { await say(e, 'この先は『霧の森』と『青の回廊』。……今は霧が深いわね。'); await say(e, '港で、あなたにしかできないことがあるんじゃない？'); return; }
      if (!has('goluboy')) {
        await say(e, '霧が晴れたわ。森の向こうは『青の回廊』。扉がたくさんあって、ぜんぶ青いの。');
        await say(e, '私の国の言葉ではね、明るい青は «Goluboy»、濃い青は «Siniy»。別々の色なの。');
        await say(e, 'あなたたちが、赤とピンクを別の色だと思うのと同じよ。');
        await acquire('goluboy', '北の旅人ヴェーラ', '港町ソルテア 北の門');
        await say(e, '森には森番がいるわ。霧の抜け方は、彼女に聞いて。');
        await say(e, '言葉は地図みたいなもの。……でもね、地図に載っていない場所もあるのよ。');
        return;
      }
      if (S.ch === 2) await say(e, '回廊の扉は、言葉で選ぶの。……迷ったら、言葉を外して見てごらんなさい。');
      else await say(e, '名前のない色、見つけられた？ ふふ。……ロシアにはもうひとつ、«Toska» って言葉もあるの。森のどこかに、手紙を置いてきたわ。');
    } },
  { id: 'thandi', name: '楽師タンディ', map: 'town', x: 17, y: 11, dir: 'down', look: 'thandi', when: () => S.ch >= 2, offer: () => !has('ubuntu'),
    talk: async e => {
      if (!has('ubuntu')) {
        await say(e, 'ひとりで弾く歌は、なんだか半分しか聞こえないの。誰かが聞いてくれて、はじめて歌になる。');
        await say(e, 'わたしの国の言葉に «Ubuntu» っていうのがあるわ。');
        await say(e, '「人は、他の人を通して人になる」。わたしたちがいるから、わたしがいる、ってこと。');
        await acquire('ubuntu', '楽師タンディ', '港町ソルテア 広場');
        await say(e, 'ひとりぼっちのモヤには、きっと響くわ。……でも、ひとりでいたい人もいる。それも忘れないで。');
        return;
      }
      await say(e, ['♪ 港の歌を作ってるの。あなたの足音も、拍子に入れていい？', 'ひとりの時間と、みんなの時間。どっちも、歌には要るのよ。'][S.ch % 2]);
    } },
  { id: 'sakuya', name: '森番サクヤ', map: 'woods', x: 14, y: 26, dir: 'down', look: 'sakuya', offer: () => !has('komorebi'),
    talk: async e => {
      if (!has('komorebi')) {
        await say(e, '回廊へ行くのか。……この先の小道は、霧が人を迷わせる。');
        await say(e, '霧の中では、目に頼っても無駄だ。木々のあいだから落ちる光をたどるといい。');
        await say(e, 'わたしの祖母の国では、その光を «Komorebi» と呼ぶ。木漏れ日、だ。');
        await acquire('komorebi', '森番サクヤ', '霧の森 入口の広場');
        await say(e, '装備して歩けば、光の落ちる道が見えるはずだ。……光ばかり見て、影を忘れるなよ。');
        await say(e, 'そこの泉で、こころを休めていくといい。');
        return;
      }
      await say(e, ['光の落ちる道を行け。霧は、正しい道を隠しはしない。ただ、見えにくくするだけだ。', '森のモヤは、言葉にならない気持ちの吹きだまりだ。手荒にするなよ。'][S.ch % 2]);
    } },
  { id: 'spring', map: 'woods', x: 5, y: 24, kind: 'obj', draw: 'spring',
    talk: async () => { S.hp = S.maxhp; Audio8.sfx('heal'); renderHUD(); await narr('澄んだ泉の水をすくって飲んだ。……こころが全回復した。'); } },
  { id: 'sign_w1', map: 'woods', x: 9, y: 23, kind: 'obj', draw: 'sign', talk: async () => { await narr('「霧の小道 ── 光の落ちる道を行け。迷えば、森が入口へ戻す」'); } },
  { id: 'sign_w2', map: 'woods', x: 8, y: 9, kind: 'obj', draw: 'sign', talk: async () => { await narr('「第二の霧 ── 光は、ときに端をゆく」'); } },
  { id: 'chest_woods', map: 'woods', x: 19, y: 24, kind: 'obj', draw: 'chest',
    chest: { riddle: '「知らない土地で、自分だけ浮いている。でも少し、わくわくする」', ans: 'depaysement', trap: ['saudade'], reward: 'word:toska', rewardText: '箱の中に、古い手紙が入っていた。ロシア語で、ある言葉の説明が書かれている。' }, talk: e => chestTalk(e) },
  { id: 'f_w1', map: 'woods', x: 7, y: 27, kind: 'foe', foe: 'gloom', wander: 2 },
  { id: 'f_w2', map: 'woods', x: 17, y: 27, kind: 'foe', foe: 'lost', wander: 2 },
  { id: 'f_w3', map: 'woods', x: 9, y: 11, kind: 'foe', foe: 'lonely', wander: 3 },
  { id: 'f_w4', map: 'woods', x: 16, y: 11, kind: 'foe', foe: 'homesick', wander: 3 },

  /* ---------- CHAPTER 3 ---------- */
  { id: 'wilka', name: '高地の学者ウィルカ', map: 'town', x: 37, y: 11, dir: 'left', look: 'wilka', offer: () => S.ch >= 3 && !has('nayra'),
    talk: async e => {
      if (S.ch < 3) { await say(e, '東の遺跡を調べている学者です。……今は封印が固くて、入れないんです。'); return; }
      if (!has('nayra')) {
        await say(e, '封印が解けました！ 東の『時の遺跡』は、時間を独特なかたちで記した人々のものです。');
        await say(e, 'アンデス高地のアイマラ語では、過去を「前」、未来を「後ろ」と言い表すことがあります。');
        await say(e, '«Nayra» ── 目、前、そして過去。もう起きたことは見えている。だから、目の前にある。');
        await say(e, 'まだ見えない未来は、背中の側に。……理にかなっていると思いませんか？');
        await acquire('nayra', '高地の学者ウィルカ', '港町ソルテア 東の道');
        await say(e, '遺跡の碑文は、きっとこの見方で書かれています。自分の「前」を、一度疑ってみてください。');
        return;
      }
      await say(e, S.ch === 3 ? '碑文を読むときは、NAYRA を装備していってくださいね。最奥には番人がいるそうです。' : '前と後ろ。どちらが正しいのではなく、どちらから見るか、なんですよね。');
    } },
  { id: 'hanna', name: '地図職人ハンナ', map: 'town', x: 32, y: 10, dir: 'down', look: 'hanna', when: () => S.ch >= 3, offer: () => !has('fernweh'),
    talk: async e => {
      if (!has('fernweh')) {
        await say(e, '地図を描いてるとね、行ったことのない場所が、胸のこのへんで痛むの。');
        await say(e, 'ドイツ語の «Fernweh»。遠くへの痛み。ホームシックの、反対向きね。');
        await acquire('fernweh', '地図職人ハンナ', '港町ソルテア 北東の家の前');
        await say(e, 'Saudade は「遠くにある大切なもの」を、Fernweh は「まだ見ぬ遠く」を向いてるの。');
        await say(e, '似てるけど、取り違えると……相手の心を逆向きに描いちゃうわ。');
        return;
      }
      await say(e, 'この町の地図、もうすぐ完成よ。……あなたの歩いた道も、描きこんでおくわ。');
    } },
  { id: 'haruka', name: '陶芸家ハルカ', map: 'town', x: 5, y: 11, dir: 'down', look: 'haruka', when: () => S.ch >= 3, offer: () => !has('wabisabi'),
    talk: async e => {
      if (!has('wabisabi')) {
        await say(e, 'この茶碗、ひびが入ってるでしょう。わたしは、これがいちばん好きなの。');
        await say(e, '日本の言葉で «侘び寂び»。欠けたもの、古びたもの、移ろうものの中にある美しさ。');
        await acquire('wabisabi', '陶芸家ハルカ', '港町ソルテア 宿屋の西');
        await say(e, '完璧でなきゃ、って苦しんでるものがいたら、かけてあげて。……でも、直せるものまで放っておく言い訳にはしないでね。');
        return;
      }
      await say(e, ['割れた器を、漆と金でつなぐ方法もあるのよ。傷が、模様になるの。', '移ろうから美しい。でも、今を「もう失われたもの」みたいに眺めるのは、ちょっと違うわね。'][S.ch % 2]);
    } },
  { id: 'teo', name: '少年テオ', map: 'town', x: 16, y: 14, dir: 'down', look: 'teo', labelable: true,
    labelReact: { nayra: ['え……？ ちがうと思うけど……'], saudade: ['……うん。そう、なのかな。'], mononoaware: ['……もう、会えないってこと？'] },
    truth: ['母さんは、ぼくが下ばっかり見てるから、空を見なって言ったんだ。', '小鳥が、飛んでるかもしれないからって。'],
    talk: async e => {
      const l = '母さんがね、「前を向きなさい」って言うんだ。';
      await say(e, l);
      await pick(e, l, [
        { t: 'いい言葉だね', go: async () => { await say(e, '……うん。'); } },
        { t: '何かあったの？', go: async () => { await say(e, '飼ってた小鳥が、逃げちゃったんだ。'); } },
        lensOpt('nayra', '前……つまり、過去を見つめろってことだね', () => label(e, 'nayra')),
        lensOpt('saudade', '小鳥への Saudade だね', () => label(e, 'saudade')),
        lensOpt('mononoaware', '去っていくものは、美しいんだよ', () => label(e, 'mononoaware')),
        lensOpt('iktsuarpok', '小鳥が帰ってこないか、つい空を見ちゃうんだね', async () => { await say(e, '……うん！ そう！ 何回も見ちゃうんだ。'); await say(e, '母さんにも言ってみる。待ってるの、変じゃないよね。'); }),
        quietOpt(e),
        { t: 'またね', cancel: true },
      ], { instant: true });
    } },

  /* ---------- CHAPTER 4 ---------- */
  { id: 'iker', name: 'バスクの船乗りイケル', map: 'town', x: 10, y: 21, dir: 'down', look: 'iker', offer: () => S.ch >= 4 && flag('caseStarted') && !has('ergk'),
    talk: async e => {
      if (S.ch < 4) { await say(e, 'バスクの海は荒いぞ。この港の海は、やさしすぎて眠くなる。'); return; }
      if (!flag('caseStarted')) { await say(e, '宿屋のほうが騒がしいな。何かあったのか？'); return; }
      if (!has('ergk')) {
        await say(e, '花瓶が割れた？ ……そいつは「誰がやったか」が問題だな。');
        await say(e, '俺たちバスクの言葉じゃ、何かを「した」側に «-k» って印がつく。');
        await say(e, 'Gizonak loreontzia hautsi du. ── 男「が」花瓶を割った。-k は、やった側の印だ。');
        await say(e, '文法のほうが「誰が？」と聞いてくるのさ。便利だぜ。');
        await acquire('ergk', 'バスクの船乗りイケル', '港町ソルテア 西の桟橋');
        await say(e, '……ただ、ときどき、誰もやってないことにまで -k をつけたくなるがな。');
        return;
      }
      await say(e, S.ch === 4 ? '犯人は見つかったか？ ……いや、犯人がいるとは限らねえか。' : '風に -k はつけられねえ。海の上じゃ、よくあることさ。');
    } },
  { id: 'pata', name: '南の船乗りパタ', map: 'town', x: 15, y: 25, dir: 'down', look: 'pata', when: () => S.ch >= 4, offer: () => !has('mamihlapinatapai'),
    talk: async e => {
      if (!has('mamihlapinatapai')) {
        await say(e, '……。');
        await say(e, '……あんたも、俺が話しだすのを待ってたろ？ 俺もだ。');
        await say(e, '俺の海のずっと南、ヤーガンの人たちの言葉に «Mamihlapinatapai» ってのがある。');
        await say(e, 'ふたりとも、相手が先に言うのを待ちながら交わす、あの目配せのことさ。');
        await acquire('mamihlapinatapai', '南の船乗りパタ', '港町ソルテア 西の桟橋の先');
        await say(e, '……すれ違ってるやつらがいたら、思い出してくれ。沈黙にも、意味はある。……ないこともあるがな。');
        return;
      }
      await say(e, '……。（パタは、目で笑った）');
    } },
  { id: 'selin', name: '香辛料商セリン', map: 'town', x: 23, y: 10, dir: 'down', look: 'selin', offer: () => S.ch >= 4 && flag('caseStarted') && !has('mis'),
    talk: async e => {
      if (S.ch < 4 || !flag('caseStarted')) { await say(e, 'いらっしゃい！ 東の国のスパイスよ。においだけでも旅ができるわ。'); return; }
      if (!has('mis')) {
        await say(e, '花瓶の噂ならもう聞いたわ。……でも、それ「見た」話？ それとも「聞いた」話？');
        await say(e, 'トルコ語ではね、自分の目で見ていないことを話すとき、«-miş» をつけるの。');
        await say(e, 'Vazo kırıldı なら「花瓶が割れた（私は見た）」。Vazo kırılmış なら「花瓶が割れたらしい」。');
        await acquire('mis', '香辛料商セリン', '港町ソルテア 広場の屋台');
        await say(e, '誰が見て、誰が聞いただけか。それがわかると、噂の地図が描けるわ。');
        await say(e, '……でもね、疑いすぎると、目の前の人の話まで「〜らしい」になっちゃう。気をつけて。');
        return;
      }
      await say(e, S.ch === 4 ? '噂は風みたいなもの。どこから吹いてきたかを確かめて。' : 'Vazo kırılmış……いいえ、もう «kırıldı» ね。あなたが確かめたんだもの。');
    } },
  { id: 'stall', map: 'town', x: 22, y: 9, w: 3, kind: 'obj', draw: 'stall', talk: async () => { await narr('色とりどりのスパイスが並んでいる。名前を知らないものばかりだ。'); } },

  /* inn */
  { id: 'marta', name: '女将マルタ', map: 'inn', x: 2, y: 2, dir: 'down', look: 'marta',
    talk: async e => {
      if (S.ch === 4 && flag('caseStarted')) return martaCase(e);
      const l = S.ch > 4 ? (flag('martaWabi') ? '花瓶、金でつないでみたの。傷のところが、いちばんきれいなのよ。' : 'あの花瓶のかけら、まだ捨てられなくて。') : 'いらっしゃい。今は満室なの、ごめんね。……ひと休みだけなら、どうぞ。';
      await say(e, l);
      await pick(e, l, [
        { t: '休んでいく（こころ全回復）', go: restAtInn },
        S.ch > 4 && !flag('martaWabi') ? lensOpt('wabisabi', '割れた花瓶も、それはそれで美しいかも', async () => {
          setf('martaWabi');
          await say(e, '……割れた、まま？');
          await say(e, 'そうね。おばあちゃんの花瓶が、あの日の風を覚えてるって思えば……。');
          await say(e, 'かけらをつないで、もう一度飾ってみるわ。ありがとう。これ、お礼よ。');
          await giveHeart();
        }) : null,
        { t: 'またね', cancel: true },
      ], { instant: true });
    } },
  { id: 'tom', name: '宿の息子トム', map: 'inn', x: 7, y: 5, dir: 'left', look: 'tom', labelable: true, when: () => S.ch >= 4,
    labelReact: { ergk: ['ぼ、ぼくじゃない！ ぼくは外で網を干してたんだ！'], mis: ['……見てないよ。見てないけど……'] },
    truth: ['ぼく、あのとき外で網を干してたんだ。', '……犯人がわかれば、母さんが元気になると思ったんだ。'],
    talk: async e => {
      if (S.ch > 4) { await say(e, 'ピコに、ちゃんとあやまったよ。ニャって言ってた。'); return; }
      if (!flag('caseStarted')) return;
      await say(e, 'ピコが花瓶を壊したんだ！'); setf('t_tom');
      await pick(e, 'ピコが花瓶を壊したんだ！', [
        lensOpt('ergk', '「ピコが」……誰がやったか、言い切るんだね', async () => { await say(e, 'だって、誰かがやらなきゃ、花瓶は割れないでしょ？'); setf('k_tom'); }),
        lensOpt('mis', 'ピコがやったところ、見たの？', async () => { await say(e, '……見てない。'); await say(e, 'ミラ姉ちゃんが「猫の声がした」って言ってたから……'); setf('m_tom'); toast('トムの証言：«伝聞»'); }),
        quietOpt(e),
        { t: 'そうなんだ', cancel: true },
      ], { instant: true });
    } },
  { id: 'mira', name: '隣の娘ミラ', map: 'inn', x: 9, y: 5, dir: 'left', look: 'mira', labelable: true, when: () => S.ch >= 4,
    labelReact: { mis: ['……わたし、嘘なんかついてないよ？'], ergk: ['わ、わたしじゃないよ！'] },
    truth: ['わたし、窓の外で猫の声を聞いただけなの。', '「猫がいた」って言ったのは、なんとなく、だったの。'],
    talk: async e => {
      if (S.ch > 4) { await say(e, '風が犯人だったなんてね。……でも、風にはあやまってもらえないね。'); return; }
      if (!flag('caseStarted')) return;
      await say(e, '花瓶が壊れたんだって。'); setf('t_mira');
      await pick(e, '花瓶が壊れたんだって。', [
        lensOpt('mis', '誰から聞いたの？', async () => { await say(e, 'マルタおばさんから。'); await say(e, 'わたしは窓の外で、猫の声を聞いただけ。猫が「いた」かどうかは……わかんない。'); setf('m_mira'); toast('ミラの証言：«伝聞»'); }),
        lensOpt('ergk', '誰がやったと思う？', async () => { await say(e, 'え……わかんないよ。……猫、かなあ？'); await narr('「誰が」と聞かれると、人は誰かを答えたくなる。'); }),
        quietOpt(e),
        { t: 'ありがとう', cancel: true },
      ], { instant: true });
    } },
  { id: 'pico', name: '猫のピコ', map: 'inn', x: 2, y: 6, dir: 'down', look: 'pico',
    truth: ['ニャ……。', '（ピコの毛は、ふかふかに乾いている。花瓶の水は一滴もついていない）'],
    onPeel: async () => { setf('picoAlibi'); toast('手がかり：ピコの毛は乾いている'); },
    talk: async () => { await narr('ニャ。'); await narr('ピコは、厨房の前で丸くなって眠っている。'); } },
  { id: 'iwindow', map: 'inn', x: 9, y: 1, kind: 'obj', draw: 'window', solid: false,
    talk: async () => { await narr('窓が開いている。潮の匂いのする強い風が、カーテンを大きく揺らしている。'); if (S.ch === 4 && !flag('windowSeen')) { setf('windowSeen'); toast('手がかり：開いた窓・強い海風'); } } },
  { id: 'shards', map: 'inn', x: 9, y: 2, kind: 'obj', draw: 'shards', solid: false, when: () => S.ch === 4,
    talk: async () => { await narr('割れた花瓶のかけら。窓際の棚から落ちたようだ。'); await narr('かけらの周りの床が、水で濡れている。'); } },
  { id: 'chest_inn', map: 'inn', x: 10, y: 7, kind: 'obj', draw: 'chest',
    chest: { riddle: '「ふたりとも、相手が先に口をひらくのを待っている」', ans: 'mamihlapinatapai', trap: ['ubuntu'], reward: 'word:iktsuarpok', rewardText: '箱の中に、窓辺で書かれたらしい手紙があった。北の果ての言葉が記されている。' }, talk: e => chestTalk(e) },

  /* ---------- EPILOGUE ---------- */
  { id: 'lighthouse', map: 'town', x: 34, y: 25, kind: 'obj', draw: 'lighthouse', talk: async () => { await narr('白と赤の灯台。てっぺんの灯りが、ゆっくりと明滅している。'); } },
  { id: 'olga', name: '灯台守オルガ', map: 'town', x: 35, y: 26, dir: 'left', look: 'olga', when: () => S.ch >= 5, talk: e => olgaTalk(e) },
  { id: 'chest_light', map: 'town', x: 32, y: 26, kind: 'obj', draw: 'chest',
    chest: { riddle: '「誰か来ないかと、何度も窓の外をのぞいてしまう」', ans: 'iktsuarpok', trap: ['saudade'], reward: 'heart' }, talk: e => chestTalk(e) },
];
const npcName = id => (NPCS.find(n => n.id === id) || {}).name || id;

/* ===================== ことばの錠前 (riddle chests) ===================== */
async function chestTalk(e) {
  const c = e.chest, key = 'open_' + e.id;
  if (flag(key)) { await narr('箱は、もう空っぽだ。'); return; }
  await narr('「ことばの錠前」がかかった箱だ。ふたに、文字が刻まれている。');
  await narr(c.riddle);
  if (!S.equipped.length) { await narr('（この気持ちにぴったりの言葉を装備して、答えよう）'); return; }
  const opts = S.equipped.map(w => ({ t: `«${NM(w)}» で答える`, word: w }));
  opts.push({ t: 'やめる', cancel: true });
  const i = await choose(opts, { cancel: opts.length - 1 });
  const w = opts[i].word; if (!w) return;
  if (w === c.ans) {
    Audio8.sfx('chime'); setf(key); await narr(`«${NM(w)}» ──　錠前が、かちりと外れた。`);
    await addMastery(w, 2, '錠前');
    if (c.reward === 'heart') await giveHeart();
    else { const id = c.reward.split(':')[1]; if (c.rewardText) await narr(c.rewardText); await acquire(id, '「ことばの錠前」の箱', MAP.name); }
    return;
  }
  Audio8.sfx('wrong');
  if ((c.trap || []).includes(w)) { await narr('箱は、ぴくりとも動かない。'); await narr('（似ている言葉で、無理に押しこもうとしてしまった）'); await bumpFix(w); }
  else await narr('箱は黙ったままだ。（ちがう言葉のようだ）');
}

/* ===================== CHAPTER 2: 青の回廊 ===================== */
const COR = [
  { text: '「Siniy の扉を開けよ」', doors: [[2, '#8fd0ff', 'G'], [5, '#a9dcff', 'G'], [8, '#1f3f9a', 'S', 1], [11, '#76bdf2', 'G']] },
  { text: '「Goluboy の扉は、ただひとつ」', doors: [[2, '#1a2f86', 'S'], [4, '#2a4bb0', 'S'], [7, '#78c4f5', 'G', 1], [9, '#16307a', 'S'], [11, '#3557b8', 'S']] },
  { text: '「名の外にある扉を開けよ」', doors: [[2, '#8fd0ff', 'G'], [4, '#1f3f9a', 'S'], [7, '#3cbfae', 'T', 1], [9, '#a0d8fb', 'G'], [11, '#223f95', 'S']] },
];
function corridorEnts() {
  const c = COR[S.cor];
  const list = c.doors.map(([x, col, cat, ok], i) => ({ id: 'door' + i, map: 'corridor', x, y: 1, kind: 'obj', draw: 'door', color: col, cat, ok: !!ok,
    hidden: () => cat === 'T' && eq('goluboy'), talk: e => doorTalk(e) }));
  list.push({ id: 'ctab', map: 'corridor', x: 11, y: 6, w: 2, kind: 'obj', draw: 'tablet', talk: () => corTablet() });
  list.push({ id: 'cr1', map: 'corridor', x: 2, y: 9, kind: 'obj', draw: 'crystal' }, { id: 'cr2', map: 'corridor', x: 13, y: 3, kind: 'obj', draw: 'crystal' });
  if (S.cor < 2) list.push({ id: 'cf' + S.cor, map: 'corridor', x: 4, y: 7, kind: 'foe', foe: 'blue', wander: 2 });
  list.push({ id: 'spk_c' + S.cor, map: 'corridor', x: 13, y: 9, kind: 'sparkle', solid: false });
  return list;
}
async function corTablet() {
  const c = COR[S.cor];
  await narr('石碑に文字が刻まれている。'); await narr(c.text);
  if (!has('goluboy')) { await narr('……Siniy？ Goluboy？ 知らない言葉だ。'); return; }
  if (S.cor < 2) {
    if (eq('goluboy')) await lens('goluboy', 'Siniy は濃い青、Goluboy は明るい青。この回廊では、2つは別の色だ。扉を調べて見分けよう。');
    else await narr('（GOLUBOY を装備すれば、読み解けそうだ）');
  } else {
    if (eq('goluboy')) await lens('goluboy', 'Goluboy が2つ、Siniy が2つ。……「名の外」？ ほかに扉は見当たらない。');
    else await narr('名の外……。言葉の、外側。');
  }
}
async function doorTalk(d) {
  if (eq('goluboy')) await narr(d.cat === 'G' ? '«Goluboy»（明るい青）の扉だ。' : '«Siniy»（濃い青）の扉だ。');
  else await narr(d.cat === 'T' ? '青……いや、緑……？ 名前の浮かばない色の扉だ。' : '青い扉だ。');
  const i = await choose([{ t: '開ける' }, { t: 'やめる' }], { cancel: 1 }); if (i) return;
  if (d.ok) {
    Audio8.sfx('door'); d.open = true; await sleep(500);
    if (S.cor < 2) {
      Audio8.sfx('chime'); await fadeOut(350); S.cor++; refreshEnts(); placePlayer(7, 10, 'up'); await fadeIn(350); showLoc(MAP.label());
      await narr(S.cor === 1 ? '扉の向こうには、また青い部屋が続いていた。' : 'いちばん奥の間に出た。空気が、しんと冷たい。');
      return;
    }
    if (S.ch > 2) { await narr('色のない小部屋。もう、何も浮かんでいない。'); await transfer('woods', 11, 1, 'down'); return; }
    if (!has('blank')) {
      await narr('扉の向こうは、色のない小部屋だった。');
      await narr('真ん中に、何も書かれていない頁が浮かんでいる。');
      await acquire('blank', '名前のない扉', '青の回廊 最奥');
      await narr('言葉ではない言葉を手に入れた。');
    }
    if (!flag('bossNameless')) {
      await narr('……背後で、何かが息をひそめる気配がした。');
      await narr('「……なまえを、ちょうだい」');
      const r = await battle('nameless', { area: 'blue' });
      if (r !== 'win') return;
      setf('bossNameless');
      await narr('影は、名前をもらわないまま、静かにほどけていった。');
    }
    await narr('Goluboy でも Siniy でもない色は、言葉を外したときにだけ見えた。');
    await clearChapter(2);
    await transfer('woods', 11, 1, 'down');
    return;
  }
  if (S.cor < 2) {
    Audio8.sfx('wind'); await narr('扉の向こうから冷たい風が吹きつけ――');
    await fadeOut(400); S.cor = 0; refreshEnts(); placePlayer(7, 10, 'up'); await fadeIn(400); showLoc(MAP.label());
    await narr('……最初の間に押し戻された。');
    if (!eq('goluboy')) await narr('（GOLUBOY を装備して、扉の色を見分けよう）');
  } else {
    Audio8.sfx('wrong'); await narr('扉はびくともしない。（どれも、名前のついた扉だ）');
    S.flags.c3fail = (S.flags.c3fail || 0) + 1;
    if (eq('goluboy') && S.flags.c3fail >= 2) await narr('（Goluboy、Siniy……さっきから、その2つしか探していない気がする）');
  }
}

/* ===================== CHAPTER 3: 時の遺跡 ===================== */
const RUIN = [
  { face: 'W', cmd: 'future', text: '「像と同じ方を向け。そして、未来へ歩め」' },
  { face: 'E', cmd: 'past', text: '「像と同じ方を向け。過ぎ去りし日へ歩め」' },
  { face: 'E', cmd: 'future', text: '「像と同じ方を向け。まだ来ぬ日へ歩め」' },
];
function ruinEnts() {
  const r = RUIN[S.ruin];
  return [
    { id: 'statue', map: 'ruins', x: 7, y: 3, w: 2, kind: 'obj', draw: 'statue', face: r.face, talk: async () => { await narr(`石像が、${r.face === 'W' ? '西（左）' : '東（右）'}をじっと見つめている。`); } },
    { id: 'rtab', map: 'ruins', x: 7, y: 7, w: 2, kind: 'obj', draw: 'tablet', stone: '#a88a5a', talk: () => ruinTablet() },
    { id: 'rf' + S.ruin, map: 'ruins', x: 11, y: 9, kind: 'foe', foe: S.ruin === 1 ? 'perfect' : 'time', wander: 2 },
    { id: 'spk_r' + S.ruin, map: 'ruins', x: 2, y: 9 - S.ruin * 3, kind: 'sparkle', solid: false },
  ];
}
async function ruinTablet() {
  const r = RUIN[S.ruin];
  await narr('碑文が刻まれている。'); await narr(r.text);
  if (eq('nayra')) await lens('nayra', 'この遺跡を作った人々にとって、過去は目の前に、未来は背中の側にある。像の視線の先が「過去」、像の背中の先が「未来」だ。');
  else await narr(r.cmd === 'future' ? '（像と同じ方を向いて、未来へ……つまり、前へ進めばいいのか？）' : '（像と同じ方を向いて、過去へ……つまり、後ろへ戻ればいいのか？）');
}
async function ruinJudge(side) {
  const r = RUIN[S.ruin], opp = r.face === 'W' ? 'E' : 'W';
  const ans = r.cmd === 'past' ? r.face : opp;
  if (side === ans) {
    Audio8.sfx('chime');
    if (S.ruin === 2) { await transfer('sanctum', 7, 10, 'up'); await narr('最奥の間にたどり着いた。'); return; }
    await fadeOut(350); S.ruin++; refreshEnts(); placePlayer(side === 'W' ? 14 : 1, 5, side === 'W' ? 'left' : 'right'); await fadeIn(350); showLoc(MAP.label());
    await narr('次の間に出た。');
    return;
  }
  Audio8.sfx('wind');
  await fadeOut(450); S.ruin = 0; refreshEnts(); placePlayer(7, 10, 'up'); await fadeIn(450); showLoc(MAP.label());
  await narr('……気がつくと、最初の間に戻っていた。');
  S.flags.ruinFail = (S.flags.ruinFail || 0) + 1;
  if (!eq('nayra')) await narr('（NAYRA を装備して、碑文を読み直してみよう）');
  else if (S.flags.ruinFail >= 2) await narr('（「前」は未来、という自分の常識のまま、進んでいないだろうか）');
}
NPCS.push({ id: 'mural', map: 'sanctum', x: 6, y: 1, w: 4, kind: 'obj', draw: 'mural',
  talk: async () => {
    await narr('壁一面に、古い絵が描かれている。');
    await narr('人々が、背中を「まだ来ぬ日」に向けて立っている。その目の前には、過ぎ去った日々が並んでいる。');
    if (S.ch !== 3) { await narr('「名は刃。世界を切り分け、ときに、切り落とす」'); return; }
    if (!flag('bossKeeper')) {
      await narr('壁画の中の影が、ゆっくりと立ち上がった――');
      const r = await battle('keeper', { area: 'ruins' });
      if (r !== 'win') return;
      setf('bossKeeper');
      await narr('番人は、壁画の中へ帰っていった。足もとに、花びらのような光が散っている。');
      await acquire('mononoaware', '時の番人', '時の遺跡 最奥');
    }
    await narr('「今までの自分の常識で考えていたから、解けなかったんだ」');
    await narr('壁画の下に、小さな碑文がある。');
    await narr('「名は刃。世界を切り分け、ときに、切り落とす」');
    await clearChapter(3);
    await transfer('town', 37, 12, 'left');
  } });
NPCS.push({ id: 'chest_ruins', map: 'sanctum', x: 3, y: 6, kind: 'obj', draw: 'chest',
  chest: { riddle: '「ひびの入った器のほうが、なぜか愛おしい」', ans: 'wabisabi', trap: ['mononoaware'], reward: 'heart' }, talk: e => chestTalk(e) });

/* ===================== CHAPTER 4: 割れた花瓶 ===================== */
async function caseIntro() {
  const m = ents.find(e => e.id === 'marta'), t = ents.find(e => e.id === 'tom');
  await say(m, '旅人さん！ ちょうどよかった。');
  await say(m, '……宿の花瓶が、割れちゃったの。おばあちゃんの形見なのに。');
  await say(t, 'ピコが割ったんだ！ ぜったいそう！');
  await say(m, '誰の話を信じればいいのか……。旅人さん、手伝ってくれない？');
  setf('caseStarted');
  await narr('証言を集めよう。港の外国の人たちが、手がかりになる言葉を知っているかもしれない。');
}
const canSolve = () => eq('ergk') && eq('mis') && flag('windowSeen') && flag('m_marta') && flag('m_tom') && flag('k_marta');
async function martaCase(e) {
  const l = '花瓶が壊れたのよ。……窓際の棚にあったの。';
  await say(e, l); setf('t_marta');
  const ready = flag('t_tom') && flag('t_mira');
  await pick(e, l, [
    lensOpt('ergk', '誰が壊したと思いますか？', async () => { await say(e, '誰が……？ 考えてもなかったわ。'); await say(e, '気づいたら、落ちて割れてたの。'); setf('k_marta'); toast('マルタの証言：«行為者なし»'); }),
    lensOpt('mis', '割れるところを、ご自分で見ましたか？', async () => { await say(e, 'ええ、見たわ。棚から、すうっと落ちたの。'); await say(e, '……そばには、誰もいなかった。'); setf('m_marta'); toast('マルタの証言：«目撃»'); }),
    ready ? { t: '結論を伝える（証言ボード）', special: true, go: caseBoard } : null,
    { t: '休んでいく（こころ全回復）', go: restAtInn },
    { t: 'またあとで', cancel: true },
  ], { instant: true });
  if (!ready) await narr('（トムとミラの証言も聞いておこう）');
}
function chip(cls, t) { return `<span class="bchip ${cls}">${t}</span>`; }
async function caseBoard() {
  const K = eq('ergk'), M = eq('mis');
  const card = (who, q, ks, ms) => `<div class="bcard"><div class="bw">${who}</div><div class="bq">${q}</div><div class="bc">${K ? ks : ''}${M ? ms : ''}${!K && !M ? '<span class="dim">（言葉を装備すると、注目点が見えてくる）</span>' : ''}</div></div>`;
  const ev = [flag('windowSeen') ? '開いた窓・強い海風' : null, flag('picoAlibi') ? 'ピコの毛は乾いている' : null, '棚の下に割れたかけら'].filter(Boolean);
  let note = '';
  if (K && !M) note = '«-K»：花瓶は勝手には割れない。誰かが「した」はずだ……。';
  else if (M && !K) note = '«-MİŞ»：誰が見て、誰が聞いたかはわかる。でも、何が起きたのかは……。';
  else if (K && M) note = '2つのレンズが重なった。「誰が」と「誰が見たか」を、同時に見られる。';
  showBoard(`<div class="bh">証言ボード ── 割れた花瓶</div>
    ${card('トム', '「<em class="ag">ピコが</em>花瓶を壊した」', chip('red', '行為者：ピコ'), flag('m_tom') ? chip('grn', '伝聞（ミラから）') : chip('q', '情報源：？'))}
    ${card('女将マルタ', '「花瓶が壊れたのよ」', flag('k_marta') ? chip('red', '行為者：なし') : chip('q', '行為者：？'), flag('m_marta') ? chip('grn', '目撃') : chip('q', '情報源：？'))}
    ${card('ミラ', '「花瓶が壊れたんだって」', chip('red', '行為者：なし'), flag('m_mira') ? chip('grn', '伝聞（マルタから）') : chip('q', '情報源：？'))}
    <div class="bev"><span class="k">手がかり</span>${ev.map(x => `<span class="bchip ev">${x}</span>`).join('')}</div>
    ${note ? `<div class="bnote">${rich(note)}</div>` : ''}`);
  const opts = [
    { t: 'ピコ（猫）が割った', go: () => accuse('pico') },
    K ? { t: 'トムが割った', word: 'ergk', go: () => accuse('tom') } : null,
    K ? { t: 'ミラが割った', word: 'ergk', go: () => accuse('mira') } : null,
    canSolve() ? { t: '誰も割っていない。風が倒したんだ', special: true, go: solveCase } : null,
    { t: 'まだ決めない', cancel: true, go: async () => { if (!canSolve()) await narr(K && M ? '（まだ「？」の残る証言がある。窓のあたりも調べてみよう）' : '（«-K» と «-MİŞ»、2つの言葉を同時に装備して聞き直してみよう）'); } },
  ].filter(Boolean);
  hideMsg();
  const i = await choose(opts, { cancel: opts.length - 1, side: true });
  hideBoard();
  await opts[i].go();
}
async function accuse(id) {
  const tgt = ents.find(e => e.id === id), m = ents.find(e => e.id === 'marta'), t = ents.find(e => e.id === 'tom');
  if (id === 'pico') await say(t, 'やっぱり！ ピコのやつ！');
  if (eq('ergk')) {
    await showStamp('ergk', tgt.name); S.labels[id] = 'ergk'; S.stats.pasted++;
    await narr('犯人が見つかると、人はなぜか安心する。');
    await bumpFix('ergk'); checkTitles();
  }
  await say(m, '……本当に、そうなのかしら。');
  await narr('なんだか、すっきりしない。（事件はまだ終わっていない）');
}
async function solveCase() {
  const m = ents.find(e => e.id === 'marta'), t = ents.find(e => e.id === 'tom');
  await narr('«-K» で「誰が」を問い、«-MİŞ» で「誰が見たか」を問う。');
  await narr('目撃したのはマルタだけ。彼女が見たのは、花瓶が落ちる瞬間。そばには誰もいなかった。');
  await narr('「ピコが割った」は、ミラが聞いた猫の声に、トムが「誰か」を書き足した話だった。');
  await narr('そして、開いた窓。強い海風。');
  await say(m, '……そう。誰も悪くなかったのね。');
  await say(m, '怒る相手がいないのって、少しさびしいけど……ほっとしたわ。');
  await say(t, 'ピコ、ごめん……。');
  for (const id of ['pico', 'tom', 'mira']) if (S.labels[id]) { delete S.labels[id]; S.stats.peeled++; await narr(`${npcName(id)}のラベルが、ひとりでに剥がれ落ちた。`); }
  await narr('2つの言葉が重なって、はじめて見えた出来事があった。');
  await gainExp(25);
  await clearChapter(4);
  await narr('（町に「噂のモヤ」と「すれ違いのモヤ」が出はじめたようだ。南の船乗りパタが、何か知っているかもしれない）');
}
async function restAtInn() {
  await fadeOut(500); Audio8.sfx('rest'); await sleep(1400);
  for (const k in S.fix) S.fix[k] = 0; S.hp = S.maxhp; renderHUD();
  await fadeIn(500);
  await narr('ぐっすり眠った。こころが全回復し、頭の中のラベルも少し静かになった。（思い込み度リセット）');
  if (Object.keys(S.labels).length) await narr('（町の人に貼ったラベルは、自分で剥がしにいくしかない）');
}

/* ===================== EPILOGUE ===================== */
function distort(text, words) {
  let k = 0; return [...text].map((c, i) => (i > 0 && i % 7 === 0) ? `«${WORDS[words[k++ % words.length]].name}»` + c : c).join('');
}
async function olgaTalk(e) {
  if (S.ch === 5 && !flag('kingDone')) {
    await narr('灯台守に近づこうとした、そのとき――');
    await narr('町じゅうから、紙きれのようなものが風に乗って集まってきた。');
    await narr(S.stats.pasted ? `その中には、あなたが貼ったラベルも ${S.stats.pasted} 枚、混ざっている。` : 'それは、誰かが誰かに貼った、無数のラベルだった。');
    const r = await battle('king', { area: 'night' });
    if (r !== 'win') return;
    setf('kingDone');
    const n = Object.keys(S.labels).length;
    if (n) { S.stats.peeled += n; S.labels = {}; await narr(`王がほどけると、町の人に残っていた ${n} 枚のラベルも、ひらひらと海へ散っていった。`); }
    else await narr('王はほどけて、ただの紙きれになり、海へ散っていった。');
  }
  const loud = S.equipped.filter(w => w !== 'blank');
  const first = 'よく来たね。ずっと見てたよ。あんたが港で、言葉を集めていくのを。';
  if (loud.length) {
    await say(e, distort(first, loud));
    await narr('（灯台守の声に、あなたの言葉が重なって、よく聞こえない）');
    await narr(`（${loud.map(NM).join('、')}……装備している言葉が、勝手に彼女を説明しようとする）`);
    await narr('（言葉を外して、もう一度話しかけてみよう）');
    return;
  }
  if (S.ch >= 6) { await say(e, '次の港でも、たくさん言葉を拾いな。そして、ときどき置いてくるんだよ。'); return; }
  await say(e, first);
  await say(e, '言葉は扉だ。開ければ、向こうに知らない部屋がある。');
  await say(e, 'でもね、扉に名札を貼ったまま、部屋に入らないやつが多いのさ。');
  await say(e, '名づけたから見えるようになるものがある。名づけたせいで、見えなくなるものもある。');
  await say(e, '両方を知ってるあんたなら、もう大丈夫。……さあ、次の港へお行き。');
  S.ch = 6; save();
  await showEnding();
  await startAct2();
}

/* ===================== きらめき (one-time random rewards) ===================== */
[['town', 2, 13], ['town', 36, 14], ['town', 16, 20], ['town', 11, 25], ['town', 26, 2], ['town', 33, 23], ['town', 6, 10],
 ['woods', 4, 27], ['woods', 20, 10], ['woods', 16, 2], ['woods', 5, 20], ['inn', 10, 4], ['sanctum', 12, 6]]
  .forEach(([map, x, y], i) => NPCS.push({ id: 'spk' + i, map, x, y, kind: 'sparkle', solid: false }));
