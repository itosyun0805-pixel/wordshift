// WORDSHIFT — ACT 3「ことばの 未来へ」: onomatopoeia forest / Ryukyu island / dialect festival / future port.
// 22 more words (onomatopoeia, Okinawan & Ainu, Japanese dialects, world varieties) + your own coined word.

/* ===================== ICONS ===================== */
Object.assign(ICON_PAT, {
  cloud: ['00000000', '00111000', '01111100', '11111110', '11111111', '01111110', '00000000', '00000000'],
  bolt: ['00011110', '00111100', '01111000', '11111110', '00011100', '00111000', '01110000', '01000000'],
  star: ['00011000', '00011000', '11111111', '01111110', '00111100', '01100110', '11000011', '00000000'],
  fog: ['00000000', '01110110', '00000000', '11011101', '00000000', '01101110', '00000000', '00000000'],
  smile: ['00111100', '01000010', '10100101', '10000001', '10100101', '10011001', '01000010', '00111100'],
  owl: ['01000010', '11111111', '10011001', '10011001', '11111111', '01111110', '01111110', '00100100'],
  globe: ['00111100', '01011010', '10011001', '11111111', '10011001', '01011010', '00111100', '00000000'],
  wave: ['00000000', '01100000', '10010010', '00001100', '00000000', '01100000', '10010010', '00001100'],
  note: ['00011111', '00010001', '00010001', '00010001', '01110011', '11110111', '11110111', '01100110'],
});

/* ===================== WORDS (22 + your own) ===================== */
const ONO = (name, kana, color, icon, o) => ({ name, mini: name, lang: '日本語（オノマトペ）', tag: 'オノマトペ', icon, color, kana, tts: [kana, 'ja-JP'], ...o });
const W3 = {
  fuwafuwa: ONO('FUWAFUWA', 'ふわふわ', '#f0f0ff', 'cloud', { rar: 'C', desc: 'やわらかくて軽いようす。また、気持ちが浮きたって落ちつかないようす。',
    lens: 'やわらかさ・軽さに注目できる。疲れや騒音のモヤに響く。', curse: '上の空：大事な話まで、ふわふわと聞きながしてしまう。',
    cast: '「ふわふわの雲の上で、ひと休みしよう」', hint: 'オノマトペの森の「雲の精」が知っている（第10章）',
    ex: ['ふわふわのパンケーキ。', 'fluffy pancakes'], fact: '日本語のオノマトペは数千語あるといわれ、4500語以上を収めた辞典もある。擬音語（音をまねる）と擬態語（ようすを表す）に分けられることが多い。',
    vs: { w: 'gorogoro', t: 'FUWAFUWA は「軽くてやわらかい」。GOROGORO は「重いものが転がる」。音の重さが、意味の重さにつながっている。' },
    quiz: ['焼きたてのパンケーキに、フォークがすっと沈みこむ。', 'たんぽぽの綿毛が、風に乗って空へのぼっていく。'] }),
  gorogoro: ONO('GOROGORO', 'ごろごろ', '#c0b0e0', 'bolt', { rar: 'C', desc: '重いものが転がる音やようす。雷の音。また、何もせずに寝そべっているようす。',
    lens: '重さ・大きさに注目できる。', curse: 'ぐうたら：休むつもりが、一日じゅう寝そべってしまう。',
    cast: '「たまには、ごろごろしようよ」', hint: 'オノマトペの森の「雷の精」が知っている（第10章）',
    ex: ['休日は家でごろごろする。', 'lazing around at home on a day off'], fact: '「ころころ」と「ごろごろ」のように、濁点がつくと、大きい・重い・強い印象になる。日本語話者に広く共通する感覚で、音象徴の研究でもよく取りあげられる。',
    vs: { w: 'fuwafuwa', t: 'GOROGORO は「重いものが転がる」。FUWAFUWA は「軽くてやわらかい」。' },
    quiz: ['大きな岩が、坂を音を立てて転がり落ちていく。', '遠くの空で、雷が低く鳴っている。'] }),
  kirakira: ONO('KIRAKIRA', 'きらきら', '#fff0a0', 'star', { rar: 'C', desc: '光が細かくまたたくようす。目や表情がかがやくようす。',
    lens: '小さなかがやきに注目できる。いとしさのモヤに響く。', curse: 'まぶしがり：かがやいていないものを、見すごしてしまう。',
    cast: '「きらきらしてる。ちゃんと見えてるよ」', hint: 'オノマトペの森の「星の精」が知っている（第10章）',
    ex: ['夜空に星がきらきら光る。', 'stars twinkle in the night sky'], fact: '童謡「きらきら星」のメロディーは、フランスの古い歌がもと。モーツァルトがその変奏曲を書いている。濁音の「ぎらぎら」になると、強すぎてどぎつい光になる。',
    vs: { w: 'gorogoro', t: 'KIRAKIRA（清音）は小さくやさしい光。濁ると「ぎらぎら」になり、強くどぎつい光になる。' },
    quiz: ['夜の海に、星の光が細かくゆれている。', '新しい自転車をもらった子どもの目が、かがやいている。'] }),
  dokidoki: ONO('DOKIDOKI', 'ドキドキ', '#ff8aa0', 'heart', { rar: 'C', desc: '心臓が強く打つようす。緊張や期待、不安で胸が高なること。',
    lens: '高なる気持ちに注目できる。', curse: 'あがり症：何でもない場面まで、緊張してしまう。',
    cast: '「ドキドキするね。でも、きっとだいじょうぶ」', hint: 'オノマトペの森の「鼓動の精」が知っている（第10章）',
    ex: ['発表の前、胸がドキドキした。', 'my heart pounded before the presentation'], fact: 'もとは心臓の音を写した擬音語。そこから「気持ち」を表すことばになった。気持ちを表すオノマトペは「擬情語」と呼ばれることもある。',
    vs: { w: 'kilig', t: 'DOKIDOKI は緊張でも恋でも使える「鼓動」。KILIG は恋のときめきに特化した、そわそわ感。' },
    quiz: ['本番の舞台に立つ直前、胸の鼓動が聞こえるほど強くなる。', '合格発表の掲示板の前で、心臓が早鐘を打つ。'] }),
  shitoshito: ONO('SHITOSHITO', 'しとしと', '#90b8e0', 'rain', { rar: 'C', desc: '雨が静かに、しめやかに降りつづくようす。',
    lens: '静かに降りつづくものに注目できる。憂いや騒音のモヤに響く。', curse: '湿りがち：晴れた日まで、どこかしめっぽく感じてしまう。',
    cast: '「しとしと、しとしと。急がなくていいよ」', hint: 'オノマトペの森の「雨の精」が知っている（第10章）',
    ex: ['梅雨の雨が、しとしと降っている。', 'the rainy-season rain falls softly'], fact: '日本語には雨のオノマトペが多い。ぽつぽつ（降りはじめ）、ぱらぱら（まばら）、しとしと（静か）、ざあざあ（激しい）。雨の降り方を、音で細かく言い分けている。',
    vs: { w: 'shiin', t: 'SHITOSHITO は「静かな音」がある。SHIIN は「音がない」ことを表す。' },
    quiz: ['梅雨の朝、静かな雨が、やむ気配もなく降りつづいている。', '傘をたたく音もしないほどの、やさしい雨。'] }),
  moyamoya: ONO('MOYAMOYA', 'もやもや', '#b0b8c8', 'fog', { rar: 'R', desc: 'はっきりしない、すっきりしないようす。気持ちが晴れず、わだかまっていること。',
    lens: '自分の気持ちに名前をつけられる。どんなモヤにも、ほどよく届く。', curse: '決めつけ：人の気持ちまで、ぜんぶ「もやもや」でまとめてしまう。',
    cast: '「いま、もやもやしてるんだね。……それでいいんだよ」', hint: 'オノマトペの森の「霧の精」が知っている（第10章）',
    ex: ['言いたいことが言えなくて、もやもやする。', 'I feel uneasy because I couldn\'t say what I wanted'], fact: '自分の気持ちを言葉にすると、その気持ちがやわらぐことがある。心理学では「アフェクト・ラベリング」と呼ばれ、脳の反応が変わることも報告されている（リーバーマンら, 2007）。',
    vs: { w: 'toska', t: 'MOYAMOYA は「すっきりしない」日常の気分。TOSKA は理由のない、深くて重い心の痛み。' },
    quiz: ['言いたいことを飲みこんでしまって、帰り道ずっとすっきりしない。', '何かが引っかかっているのに、それが何なのかわからない。'] }),
  nikoniko: ONO('NIKONIKO', 'にこにこ', '#ffd080', 'smile', { rar: 'C', desc: '声を立てずに、うれしそうにほほえむようす。',
    lens: 'ほほえみに注目できる。孤独のモヤに響く。', curse: 'つくり笑顔：つらいときまで、にこにこしてしまう。',
    cast: '「にこにこ。ここにいてくれて、うれしいな」', hint: 'オノマトペの森の「花の精」が知っている（第10章）',
    ex: ['おばあちゃんは、いつもにこにこしている。', 'grandma is always smiling'], fact: '笑顔に音はない。それでも「にこにこ」と音のように言う。音のしない「ようす」を音で表すのが、擬態語のふしぎなところ。',
    vs: { w: 'kirakira', t: 'NIKONIKO は表情のやわらかさ。KIRAKIRA は、目や光のかがやき。' },
    quiz: ['孫の顔を見たおばあちゃんが、声も出さずに目を細めている。', '赤ちゃんが、だれかと目が合うたびにほほえむ。'] }),
  shiin: ONO('SHIIN', 'しーん', '#a0a8e0', 'owl', { rar: 'R', desc: '物音ひとつなく、静まりかえっているようす。',
    lens: '「沈黙」に注目できる。騒音の影によく響く。', curse: '気まずさ：ちょっとした沈黙まで、気まずく感じてしまう。',
    cast: '「…………しーん」', hint: 'オノマトペの森の「ふくろうの精」が知っている（第10章）',
    ex: ['教室が、しーんとなった。', 'the classroom fell silent'], fact: '「音がない」ことを「音」で表すオノマトペ。マンガの描き文字として広まり、手塚治虫が使いはじめたとも言われる。',
    vs: { w: 'blank', t: 'SHIIN は「静けさ」という状態の名前。（　　）は、名前をつけないこと。' },
    quiz: ['先生のひとことで、さわがしかった教室が、物音ひとつしなくなった。', '雪の夜、外に出ると、何の音も聞こえない。'] }),
  yuimaaru: { name: 'YUIMAARU', mini: 'YUIMAARU', lang: 'しまくとぅば（沖縄）', tag: 'しまくとぅば', icon: 'people', color: '#f08060', rar: 'R', kana: 'ゆいまーる', tts: ['ゆいまーる', 'ja-JP'],
    desc: '順番に助けあうこと。村のみんなで、かわるがわる力を貸しあうしくみ。',
    lens: '助けあいに注目できる。孤独や忘却のモヤに響く。', curse: 'おせっかい：頼まれていない手伝いまで、してしまう。',
    cast: '「次は、わたしが手伝う番」', hint: 'しまくとぅばの島の長老が知っている（第11章）',
    ex: ['ゆいまーるで、さとうきびを刈る。', 'harvesting sugarcane by taking turns helping each other'], fact: '「ゆい（結）」＋「まーる（回る）」とされる。家づくりや農作業を、村の人たちが順番に手伝いあう習わしから生まれた言葉。',
    vs: { w: 'ubuntu', t: 'YUIMAARU は「順番に手を貸しあう」具体的なしくみ。UBUNTU は「人は人を通して人になる」という考え方。' },
    quiz: ['今日はとなりの家の屋根をなおし、来週はとなりの人がうちを手伝ってくれる。', '村じゅうで、かわるがわる畑の収穫を手伝いあう。'] },
  nankurunaisa: { name: 'NANKURUNAISA', mini: 'NANKURU', lang: 'しまくとぅば（沖縄）', tag: 'しまくとぅば', icon: 'wave', color: '#60c0e0', rar: 'R', kana: 'なんくるないさ', tts: ['なんくるないさ', 'ja-JP'],
    desc: '「なんとかなるさ」。ただし、もとは「誠を尽くしていれば」という前置きがついた言葉。',
    lens: '肩の力をぬく言葉。疲れのモヤに響く。', curse: '楽観しすぎ：やるべきことまで「なんとかなる」で済ませてしまう。',
    cast: '「まくとぅそーけー、なんくるないさ」', hint: 'しまくとぅばの島の漁師が知っている（第11章）',
    ex: ['まくとぅそーけー なんくるないさ', '誠を尽くせば、なんとかなるさ'], fact: '「なんくるないさ」だけが有名になったが、もとは「まくとぅそーけー（誠を尽くしていれば）」とセットで語られる。投げやりではなく、やるべきことをやった人への励ましだ。',
    vs: { w: 'lagom', t: 'NANKURUNAISA は「やることをやれば、なんとかなる」という励まし。LAGOM は「ちょうどいいところで止める」加減。' },
    quiz: ['できることは全部やった。あとは、なるようになる。', '大しけで船が出せない。漁師は笑って、網をつくろいはじめた。'] },
  chimudondon: { name: 'CHIMUDONDON', mini: 'CHIMU', lang: 'しまくとぅば（沖縄）', tag: 'しまくとぅば', icon: 'heart', color: '#ff70a0', rar: 'R', kana: 'ちむどんどん', tts: ['ちむどんどん', 'ja-JP'],
    desc: '胸がわくわくして、高なるようす。「ちむ」は「肝（きも）」、こころのこと。',
    lens: 'わくわくする気持ちに注目できる。忘却のモヤに響く。', curse: 'はしゃぎすぎ：静かにすべき場面でも、胸が高なってしまう。',
    cast: '「ちむどんどんするね！」', hint: 'しまくとぅばの島の少年が知っている（第11章）',
    ex: ['旅の前の日は、ちむどんどんする。', 'the day before a trip, my heart races with excitement'], fact: '「ちむ（肝）」は沖縄のことばで「こころ」。「ちむぐりさ（胸が痛む、気の毒）」など、ちむを使った言葉がたくさんある。2022年にはNHKの連続テレビ小説のタイトルにもなった。',
    vs: { w: 'dokidoki', t: 'CHIMUDONDON は「わくわく」の高なり。DOKIDOKI は緊張でも期待でも使える鼓動。' },
    quiz: ['明日はじめて海で泳げる。楽しみで、胸がおどって眠れない。', '大好きな祭りの太鼓が聞こえてきて、こころが高なる。'] },
  irankarapte: { name: 'IRANKARAPTE', mini: 'IRANKARAPTE', lang: 'アイヌ語', tag: 'アイヌ語', icon: 'knot', color: '#5aa0c0', rar: 'L', kana: 'イランカラㇷ゚テ', tts: ['イランカラプテ', 'ja-JP'],
    desc: 'アイヌ語のあいさつ。「あなたの心にそっと触れさせてください」という意味がこめられているといわれる。',
    lens: 'そっと相手の心に触れるあいさつ。忘却のモヤに響く。', curse: 'えんりょ：触れていいときまで、ためらってしまう。',
    cast: '「イランカラㇷ゚テ。あなたの心に、そっと触れさせてください」', hint: 'しまくとぅばの島に来ている北の旅人が知っている（第11章）',
    ex: ['イランカラㇷ゚テ', 'こんにちは（あなたの心にそっと触れさせてください）'], fact: 'アイヌ語は北海道などで話されてきた言語で、ユネスコは「極めて深刻な危機」にある言語としている。2019年の法律で、アイヌの人々は先住民族と明記された。ことばを学び、伝える取り組みが続いている。',
    vs: { w: 'jeong', t: 'IRANKARAPTE は出会いの瞬間に「心に触れる」あいさつ。JEONG は、時間をかけて育つ情。' },
    quiz: ['はじめて会う人に、相手の心に敬意をこめてあいさつする。', '「あなたの心に、そっと触れさせてください」という気持ちで声をかける。'] },
  menkoi: { name: 'MENKOI', mini: 'MENKOI', lang: '日本語（北海道・東北の方言）', tag: '方言', icon: 'heart', color: '#ffb0c0', rar: 'C', kana: 'めんこい', tts: ['めんこい', 'ja-JP'],
    desc: '「かわいい」「愛らしい」。北海道や東北で使われる。',
    lens: 'いとしさに注目できる。いとしさや決めつけのモヤに響く。', curse: '子ども扱い：一人前の相手まで、めんこがってしまう。',
    cast: '「なんぼめんこいの！」', hint: '方言まつりの北海道の少女が知っている（第12章）',
    ex: ['なんぼめんこいの！', 'なんてかわいいの！'], fact: '「めんこい」は「愛（め）ぐし」などと関係があるとされる。北海道では「なんぼ（どれほど）」と組み合わせて「なんぼめんこいの」とよく言う。',
    vs: { w: 'gigil', t: 'MENKOI は「かわいい」という評価。GIGIL は、かわいすぎてつねりたくなる衝動。' },
    quiz: ['生まれたばかりの子犬を見て、北海道のおばあちゃんが目を細める。', 'ちいさな孫の寝顔を見て、東北のおじいちゃんがひとこと。'] },
  oyattosaa: { name: 'OYATTOSAA', mini: 'OYATTOSAA', lang: '日本語（鹿児島の方言）', tag: '方言', icon: 'cup', color: '#e0a060', rar: 'C', kana: 'おやっとさあ', tts: ['おやっとさあ', 'ja-JP'],
    desc: '「お疲れさま」。鹿児島で、ねぎらいのあいさつとして使われる。',
    lens: 'ねぎらいの言葉。疲れや決めつけのモヤ、正しさの番人に響く。', curse: '打ち上げ気分：まだ終わっていないのに、ひと息ついてしまう。',
    cast: '「おやっとさあ。よう頑張ったね」', hint: '方言まつりの鹿児島の青年が知っている（第12章）',
    ex: ['今日もおやっとさあ。', '今日もお疲れさまでした'], fact: '鹿児島ことばは、ほかの地域の人には聞きとりにくいことで知られ、語尾の音が詰まって短くなる特徴がある。',
    vs: { w: 'kowai', t: 'OYATTOSAA は相手をねぎらう言葉。KOWAI は、自分が疲れたことを言う言葉。' },
    quiz: ['一日の仕事を終えた仲間に、鹿児島ことばでねぎらいの声をかける。', '祭りの片づけを終えたみんなに「お疲れさま」を土地のことばで。'] },
  honma: { name: 'HONMA', mini: 'HONMA', lang: '日本語（関西の方言）', tag: '方言', icon: 'bubble', color: '#f0c040', rar: 'C', kana: 'ほんま', tts: ['ほんま', 'ja-JP'],
    desc: '「本当」。関西で使われる。「ほんまに？」「ほんまや」のように、あいづちにも強調にも使う。',
    lens: '「ほんとう」に寄りそうあいづち。決めつけのモヤに響く。', curse: 'のりすぎ：何でも「ほんまや！」と合わせてしまう。',
    cast: '「ほんまに？ それ、もっと聞かして」', hint: '方言まつりの大阪の店主が知っている（第12章）',
    ex: ['ほんまに、おおきに。', '本当に、ありがとう'], fact: '「ほんま」は「本真（ほんま）」から。関西では、話し手と聞き手がテンポよくやりとりする会話のスタイルとも結びついて語られる。',
    vs: { w: 'mis', t: 'HONMA は「ほんとうに？」と相手に寄りそうあいづち。-MİŞ は、話の出どころを確かめる文法。' },
    quiz: ['友だちの話に身を乗りだして、関西ことばで「本当に？」。', '大阪の商店街で「これ、ほんまにおいしいで」とすすめられる。'] },
  gabai: { name: 'GABAI', mini: 'GABAI', lang: '日本語（佐賀などの方言）', tag: '方言', icon: 'star', color: '#e08040', rar: 'C', kana: 'がばい', tts: ['がばい', 'ja-JP'],
    desc: '「とても」「すごく」。佐賀などで使われる。',
    lens: '程度の大きさを伝える。', curse: '大げさ：何でも「がばい」で盛ってしまう。',
    cast: '「がばい、すごか！」', hint: '方言まつりの佐賀のおばあちゃんが知っている（第12章）',
    ex: ['がばい寒か。', 'とても寒い'], fact: '島田洋七の小説『佐賀のがばいばあちゃん』で全国に知られるようになった。標準語の「すごい」と同じく、程度の強さを表す。',
    vs: { w: 'honma', t: 'GABAI は「とても」と程度を強める。HONMA は「本当」と真実味を強める。' },
    quiz: ['佐賀のおばあちゃんが、今朝の寒さを「とても寒い」と言う。', '「すごくおいしい」を、九州の土地のことばで言ってみる。'] },
  wee: { name: 'WEE', mini: 'WEE', lang: 'スコットランドの英語・スコッツ語', tag: '英語のバリエーション', icon: 'globe', color: '#80a0e0', rar: 'C', kana: 'ウィー', tts: ['wee', 'en-GB'],
    desc: '「小さい」「ちょっと」。スコットランドでよく使われる。',
    lens: '小さなものへのやさしさ。決めつけのモヤに響く。', curse: '控えめすぎ：大きな問題まで「ちょっとしたこと」にしてしまう。',
    cast: '「ほんの、ちょっとだけ（a wee bit）休もう」', hint: '方言まつりのスコットランドの旅人が知っている（第12章）',
    ex: ['Just a wee bit.', 'ほんのちょっとだけ'], fact: '英語にも、地域によってたくさんの変種（バリエーション）がある。スコットランドでは、英語と近い親戚のスコッツ語も話されてきた。',
    vs: { w: 'arvo', t: 'WEE はスコットランドの「小さい」。ARVO はオーストラリアの「午後」。同じ英語でも、地域で語彙がちがう。' },
    quiz: ['スコットランドの人が「ほんのちょっとだけ」と言う。', 'エディンバラのカフェで「小さいサイズのお茶」を頼む。'] },
  arvo: { name: 'ARVO', mini: 'ARVO', lang: 'オーストラリアの英語', tag: '英語のバリエーション', icon: 'sun', color: '#f0b040', rar: 'C', kana: 'アーヴォ', tts: ['arvo', 'en-AU'],
    desc: '「午後（afternoon）」。オーストラリアの英語で使われる、くだけた言い方。',
    lens: 'のんびりした時間に注目できる。疲れのモヤに響く。', curse: 'のんびりしすぎ：約束の時間まで、ゆるくなってしまう。',
    cast: '「この午後（this arvo）は、のんびりいこう」', hint: '方言まつりのオーストラリアの旅人が知っている（第12章）',
    ex: ['See you this arvo!', '今日の午後に会おう！'], fact: 'オーストラリアの英語は、ことばを短くするのが大好き。breakfast は brekkie、barbecue は barbie、afternoon は arvo。親しみをこめた言い方になる。',
    vs: { w: 'wee', t: 'ARVO はオーストラリアの「午後」。WEE はスコットランドの「小さい」。' },
    quiz: ['オーストラリアの友だちに「今日の午後、会おう」と言う。', 'シドニーの海辺で、のんびりした午後を過ごす。'] },
  bilong: { name: 'BILONG', mini: 'BILONG', lang: 'トク・ピシン（パプアニューギニア）', tag: 'クレオール', icon: 'house', color: '#60c080', rar: 'R', kana: 'ビロン', tts: ['bilong', 'en-AU'],
    desc: '「〜の」。英語の belong から生まれた、トク・ピシンの言葉。',
    lens: '「つながり・所属」に注目できる。平坦のモヤに響く。', curse: '所有欲：何でも「わたしの」と言いたくなる。',
    cast: '「haus bilong mi ── わたしの家へ、おいでよ」', hint: '未来の港のパプアニューギニアの旅人が知っている（第13章）',
    ex: ['haus bilong mi', 'わたしの家（家・〜の・わたし）'], fact: 'トク・ピシンは、英語などをもとに生まれ、子どもたちの母語にもなったクレオール語。パプアニューギニアの公用語のひとつだ。',
    vs: { w: 'emoji', t: 'BILONG は、英語から生まれて新しい言語の文法の一部になった言葉。EMOJI は、日本語から世界へ旅立った言葉。' },
    quiz: ['「わたしの家」を、英語の belong から生まれた言葉で言う。', '新しい言語の中で、「〜の」を表す小さな言葉。'] },
  emoji: { name: 'EMOJI', mini: 'EMOJI', lang: '日本語 → 世界の言葉', tag: '借用語', icon: 'smile', color: '#ffd040', rar: 'C', kana: 'えもじ', tts: ['emoji', 'en-US'],
    desc: '絵文字。日本語の「絵（え）＋文字（もじ）」が、そのまま世界の言葉になった。',
    lens: '言葉の旅に注目できる。', curse: '省略しすぎ：気持ちを、ぜんぶ絵ひとつで済ませてしまう。',
    cast: '「（にっこりマーク）……言葉にしなくても、伝わる？」', hint: '未来の港の絵文字デザイナーが知っている（第13章）',
    ex: ['Send me an emoji!', '絵文字を送って！'], fact: '英語の emotion（感情）と似ているのは、ただの偶然。日本語の tsunami や karaoke のように、ことばは国境をこえて旅をする。逆に「パン」はポルトガル語の pão から日本語に入った。',
    vs: { w: 'bilong', t: 'EMOJI は、日本語から世界へ旅立った言葉。BILONG は、英語から生まれて新しい言語の一部になった言葉。' },
    quiz: ['日本で生まれた「絵の文字」が、そのまま英語の辞書に入った。', 'スマホのメッセージに、言葉のかわりに小さな絵を送る。'] },
  umwelt: { name: 'UMWELT', mini: 'UMWELT', lang: 'ドイツ語', icon: 'eye', color: '#80c0a0', rar: 'L', kana: 'ウンヴェルト（環世界）', tts: ['Umwelt', 'de-DE'],
    desc: 'それぞれの生きものが、自分の感覚でとらえている「その生きものだけの世界」。',
    lens: '相手の見ている世界に注目できる。平坦のモヤや完全翻訳機に響く。', curse: '孤立：だれとも、同じ世界は見られないと思ってしまう。',
    cast: '「あなたには、世界がそう見えているんだね」', hint: '未来の港の生物学者が知っている（第13章）',
    ex: ['Die Umwelt der Zecke', 'ダニの環世界'], fact: '生物学者ユクスキュルが考えた概念。たとえばダニは、においや温度など、ごくわずかな手がかりだけでできた世界に生きている。言語のちがいも、ある意味で「世界の切り取り方」のちがいだ。',
    vs: { w: 'goluboy', t: 'UMWELT は「生きものごとに世界の見え方がちがう」という考え。GOLUBOY は、言葉が色の区別を後押しする具体例。' },
    quiz: ['犬は、わたしたちには見えない「においの地図」の中を歩いている。', 'コウモリは、音のこだまで世界をとらえている。'] },
  tarab: { name: 'TARAB', mini: 'TARAB', lang: 'アラビア語', icon: 'note', color: '#e0a0f0', rar: 'R', kana: 'タラブ', tts: ['طرب', 'ar-SA'],
    desc: '音楽に心をゆさぶられ、恍惚とするような、深い感動。',
    lens: '心がふるえる感動に注目できる。平坦のモヤや完全翻訳機に響く。', curse: '陶酔：音楽に夢中で、まわりの声が聞こえなくなる。',
    cast: '「この音楽に、こころごと連れていかれそう」', hint: '未来の港のアラブの音楽家が知っている（第13章）',
    ex: ['الطرب（aṭ-ṭarab）', '音楽がもたらす恍惚'], fact: 'アラブ古典音楽では、歌い手と聴き手が一体になってタラブが生まれるといわれる。エジプトの歌手ウンム・クルスームのコンサートは、何時間もつづく熱狂で知られた。',
    vs: { w: 'mononoaware', t: 'TARAB は音楽がもたらす「心のゆさぶり」。MONO NO AWARE は、移ろうものへの「しみじみ」。' },
    quiz: ['歌い手の声に、会場じゅうが息をのみ、思わず声をあげる。', '音楽が胸の奥までしみこんで、涙が止まらない。'] },
  myword: { name: 'MY WORD', mini: 'MY WORD', lang: 'あなたのことば', tag: 'あなたの言葉', icon: 'star', color: '#ffe680', rar: 'L', kana: '—',
    desc: 'まだ名前のない気持ちに、あなたがつけた名前。',
    lens: 'どんな相手にも、あなたの言葉として届く。完全翻訳機には、とくによく響く。', curse: 'ひとりよがり：自分にしか通じないことを、忘れてしまう。',
    cast: '「この気持ちを、わたしはこう呼ぶ」', hint: '第3部の最後、未来の港で自分でつくる（第13章）',
    ex: ['（あなたの言葉）', '—'], fact: '新しい言葉は、毎日どこかで生まれている。辞書に載るのは、そのほんの一部。この旅で出会った言葉も、だれかが最初に口にした日があった。',
    vs: null, quiz: null },
};
Object.assign(WORDS, W3);
WORD_ORDER.push(...Object.keys(W3));
Object.assign(CHAPTERS, { 10: 'オノマトペの森', 11: 'しまくとぅばの島', 12: '方言まつり', 13: '未来の港' });
function applyMyWord() {
  if (!S.myword) return;
  const n = S.myword.name, ascii = /^[\x20-\x7e]+$/.test(n);
  Object.assign(WORDS.myword, { name: n, mini: ascii ? n.toUpperCase().slice(0, 12) : 'MY WORD', desc: S.myword.desc, ex: [n, S.myword.desc], tts: [n, ascii ? 'en-US' : 'ja-JP'], kana: n });
}
// battle matchups for the new words
FOES.tired.weak.push('fuwafuwa', 'nankurunaisa', 'arvo', 'oyattosaa');
FOES.gloom.weak.push('shitoshito');
FOES.lonely.weak.push('yuimaaru', 'nikoniko');
FOES.cute.weak.push('menkoi', 'kirakira');
FOES.homesick.weak.push('chimudondon');

/* ===================== THOUGHT CARDS (14) ===================== */
Object.assign(CARDS, {
  seidaku: { f: 'cog', t: '清音と濁音の音象徴', who: '浜野祥子『日本語のオノマトペ』（2014）ほか',
    b: 'ころころ／ごろごろ、さらさら／ざらざら、きらきら／ぎらぎら。濁点がつくと、大きい・重い・強い・粗い印象になる。日本語の話し手の多くが同じように感じ、音象徴の研究でもくり返し確かめられている。',
    q: '「とんとん」と「どんどん」。大きな太鼓はどっち？',
    o: [['とんとん', '少数派！ 多くの人は、濁った「どんどん」に重く大きな音を感じる。'], ['どんどん', '多くの人と同じ。濁った音は、大きく重いものと結びつきやすい。']] },
  animal: { f: 'cog', t: '鳴き声は世界共通？',
    b: '日本の犬はワンワン、英語では woof、スペイン語では guau、ロシア語では гав（ガフ）、韓国語では 멍멍（モンモン）、中国語では 汪汪（ワンワン）。にわとりはコケコッコー、cock-a-doodle-doo、cocorico（フランス）、Kikeriki（ドイツ）。同じ動物の声でも、言語ごとに「聞こえ方」の決まりがある。',
    q: '鳴き声のオノマトペは、本物の声に似ていると思う？',
    o: [['かなり似ている', '音をまねているのは確か。でも、その言語の音の決まりに合わせて「翻訳」されている。'], ['けっこう違う', 'そう。擬音語も、言語ごとに約束ごととして覚えられている面が大きい。']] },
  ideophone: { f: 'cog', t: 'イデオフォン（世界のオノマトペ）', who: 'M.ディンゲマンセ（2012）ほか',
    b: '日本語のようにオノマトペが豊かな言語は、世界にたくさんある。韓国語、西アフリカのエウェ語、南アフリカのズールー語、南米のケチュア語……。かつては「子どもっぽい言葉」と軽く見られたが、いまでは感覚を生き生きと伝える大切な語のグループ（イデオフォン）として研究されている。',
    q: '大人がオノマトペを使うのは、子どもっぽい？',
    o: [['子どもっぽい', 'そう思われがちだった。でも日本語では、料理や医療の現場でも、オノマトペが細かい感覚を伝える道具になっている（「ずきずき痛む」など）。'], ['子どもっぽくない', '研究者も同じ考え。オノマトペは、感覚を正確に伝える大人の道具でもある。']] },
  affect: { f: 'cog', t: 'アフェクト・ラベリング', who: 'M.リーバーマンら（2007）',
    b: '自分の気持ちに「もやもや」「不安」と名前をつけると、その気持ちが少しやわらぐことがある。実験では、感情を言葉にすると、脳の扁桃体の反応が弱まることが報告された。他人に貼るラベルは相手を見えなくすることがあるが、自分の気持ちに名前をつけることは、助けにもなる。',
    q: '気持ちに名前をつけるのは、いいこと？',
    o: [['いいこと', '自分の気持ちについては、助けになることが多い。ただ、他人の気持ちを勝手に名づけるのは、また別の話。'], ['そうとは限らない', 'そのとおり。名前がしっくりこないとき、無理に当てはめると、かえって本当の気持ちを見失うこともある。']] },
  shimakutuba: { f: 'soc', t: 'しまくとぅばと言語の危機',
    b: '沖縄・奄美の島々のことばは、まとめて琉球諸語と呼ばれる。2009年、ユネスコは、アイヌ語や琉球諸語など、日本の8つの言語・方言を「消滅の危機にある」とした。沖縄県は9月18日を「しまくとぅばの日」とし、ことばを受けつぐ取り組みを続けている。',
    q: '「方言」と「言語」、しまくとぅばはどっちだと思う？',
    o: [['日本語の方言', '日本ではそう呼ばれることが多い。でも、本土の人にはほとんど通じないほどちがう。'], ['別の言語', 'ユネスコや多くの言語学者は、独立した言語として扱っている。'], ['線は引けない', '方言連続体のカードを思い出そう。その線引きは、言葉だけでは決まらない。']] },
  revival: { f: 'soc', t: '言語の再生（言葉の巣）',
    b: '一度は話し手が大きく減った言語を、よみがえらせる取り組みが世界中にある。ニュージーランドのマオリ語では1982年から、ハワイ語では1984年から、幼い子どもたちがその言語だけで過ごす保育の場（「言葉の巣」）が始まり、若い話し手が育っている。',
    q: '言語を受けつぐのに、いちばん大切なのは？',
    o: [['学校で教えること', '学校も大切。でも家庭や遊びの中で使われてこそ、言葉は生きつづける。'], ['子どもが日常で使うこと', '「言葉の巣」の考え方そのもの。子どもが母語として話すことが、いちばんの力になる。']] },
  ainu: { f: 'soc', t: 'アイヌ語',
    b: 'アイヌ語は、北海道などで話されてきた、日本語とは系統の異なる言語。ユネスコは「極めて深刻な危機」にあるとしている。北海道の地名の多くはアイヌ語に由来するといわれる（「サッポロ」「シレトコ」など）。いまも、ことばを学び、伝える人たちがいる。',
    q: '身近な地名の由来を、知っている？',
    o: [['知っている', 'すてき！ 地名は、その土地で話されていた言葉の化石のようなもの。'], ['知らない', '調べてみると面白い。地名には、むかしその土地で暮らした人の言葉が残っていることが多い。']] },
  yakuwari: { f: 'soc', t: '役割語', who: '金水敏『ヴァーチャル日本語 役割語の謎』（2003）',
    b: '「わしは知っておるのじゃ」と聞くと、おじいさんや博士を思い浮かべる。「ごきげんよう、〜ですわ」ならお嬢様。でも、実際にそう話す人はほとんどいない。話し方と人物像を結びつける、ことばのステレオタイプ。それが「役割語」だ。',
    q: '役割語は、悪いもの？',
    o: [['悪いもの', '人を型にはめる面は確かにある。このゲームの「ラベル」と同じ危うさだ。'], ['便利なもの', '物語では、だれが話しているかを一瞬で伝えてくれる。便利さと危うさの両方を知っておくことが大切。']] },
  dosa: { f: 'soc', t: '「どさ？」「ゆさ。」',
    b: '津軽弁の「どさ？（どこへ行くの？）」「ゆさ。（お風呂へ）」は、とても短い会話として有名。「寒いから口を開けずに話すので短くなった」という説がよく語られるが、確かな根拠はない。方言にまつわる「ありがちな説明」も、ひとつのステレオタイプかもしれない。',
    q: '寒い土地の言葉は、短くなる？',
    o: [['なると思う', 'よく聞く説明。でも、寒い地域にも長い言葉の多い言語はたくさんある。'], ['関係ないと思う', '言語学者の多くも慎重。もっともらしい説明ほど、疑ってみる価値がある。']] },
  creole: { f: 'evo', t: 'ピジンとクレオール',
    b: '共通の言葉をもたない人たちが出会うと、かんたんな「ピジン」が生まれることがある。それを子どもたちが母語として育つと、文法の整った「クレオール」になる。パプアニューギニアのトク・ピシンはその例。言語は、いまも生まれつづけている。',
    q: 'ピジンをクレオールに変えるのは誰？',
    o: [['大人たち', '大人も使い、広める。でも文法を整えるのは……'], ['子どもたち', 'ニカラグア手話と同じ。子どもが母語として育てることで、言語は豊かになる。']] },
  loan: { f: 'hist', t: '借用語の旅',
    b: '「パン」はポルトガル語の pão、「カステラ」もポルトガルから。いっぽう日本語の tsunami、karaoke、emoji は、英語の中で使われている。言葉は、国境をこえて行き来する。英語の emoji が emotion と似ているのは、ただの偶然。',
    q: '外来語が増えるのは、言葉が乱れること？',
    o: [['乱れだと思う', 'そう感じる人もいる。でも日本語は、漢語をはじめ、昔から外の言葉を取りこんで豊かになってきた。'], ['豊かになること', '多くの言語は、借りた言葉を自分の音や文法になじませながら、育ってきた。']] },
  umweltc: { f: 'cog', t: '環世界', who: 'J.フォン・ユクスキュル（1934）',
    b: '生きものはそれぞれ、自分の感覚がとらえる世界の中で生きている。ダニにとっての世界は、におい・温度・毛ざわりくらいでできている。人間どうしでも、話す言語や経験によって、世界の切り取り方は少しずつちがう。このゲームの「レンズ」は、ひとつの環世界をのぞく窓だ。',
    q: 'ほかの人と、まったく同じ世界を見ることはできる？',
    o: [['できる', 'かなり近づくことはできる。言葉は、そのための橋だ。'], ['できない', 'たぶん完全には。だからこそ、相手の世界を「きく」ことに意味がある。']] },
  mt: { f: 'phil', t: '機械翻訳と「意味」',
    b: 'いまの機械翻訳は、膨大な対訳の文章から、言葉の対応を学んでいる。日常の文ならとても上手に訳せるようになった。けれど SAUDADE や MONO NO AWARE のように、文化や体験に深く根ざした言葉は、一語で置きかえると何かがこぼれ落ちる。それは機械だけでなく、人間の翻訳者が昔から向きあってきた難しさでもある。',
    q: '完璧な翻訳は、ありえると思う？',
    o: [['ありえる', '情報を伝えるだけなら、かなり近づける。でも、響きや含みまで同じにするのは、とても難しい。'], ['ありえない', '翻訳は、ある意味で「新しく書き直すこと」。だからこそ、訳者ごとにちがう名訳が生まれる。']] },
  coin: { f: 'cult', t: '新しい言葉は、どう生まれる？',
    b: '新しい言葉は、ほかの言葉を組みあわせたり（積ん読）、略したり（arvo）、外から借りたり（emoji）、だれかの思いつきが広まったりして生まれる。使う人が増え、仲間うちから外へ広がったとき、言葉は「みんなのもの」になる。',
    q: 'あなたがつくった言葉が、だれかに使われたら？',
    o: [['うれしい', 'その瞬間、あなたの言葉は、あなただけのものではなくなる。それが言葉の生まれ方だ。'], ['ちょっとさびしい', 'わかる気がする。でも、だれにも使われない言葉は、やがて消えてしまう。']] },
});

/* ===================== GREETINGS ===================== */
const H3 = {
  pip: ['Hello there!', 'en-GB', '英語のあいさつ。ピップ博士は世界中の鳴き声を集めている'],
  mark: ['Hoi!', 'nl-NL', 'オランダ語のくだけた「やあ」'],
  kamado: ['はいたい。', 'ja-JP', '沖縄のことば（うちなーぐち）の「こんにちは」。女性は「はいたい」、男性は「はいさい」と言う'],
  kai: ['はいさい！', 'ja-JP', '男の子なので「はいさい」。おばあに教わったばかりだ'],
  yuichou: ['めんそーれ。', 'ja-JP', '沖縄のことばで「いらっしゃい、ようこそ」'],
  ryou: ['はいさい！', 'ja-JP', '沖縄のことばの「こんにちは」（男性）'],
  upas: ['イランカラㇷ゚テ。', 'ja-JP', 'アイヌ語のあいさつ。「あなたの心にそっと触れさせてください」という意味がこめられているといわれる'],
  leilani: ['Aloha!', 'haw', 'ハワイ語のあいさつ。愛・思いやり・別れのあいさつまで、たくさんの意味をもつ'],
  osaka: ['まいど！', 'ja-JP', '関西の商人ことばのあいさつ。「毎度ありがとうございます」から'],
  tsugaru: ['どさ？', 'ja-JP', '津軽弁で「どこへ行くの？」。あいさつ代わりに使われる'],
  saga: ['よう来んしゃったね。', 'ja-JP', '佐賀ことばの「よく来てくれたね」'],
  kagoshima: ['おじゃったもんせ！', 'ja-JP', '鹿児島ことばの「いらっしゃいませ」'],
  hokkaido: ['なまらいい天気だね！', 'ja-JP', '北海道ことばの「なまら」は「とても」'],
  angus: ['Awright?', 'en-GB', 'スコットランドなどで使われる「元気？」というあいさつ'],
  chloe: ["G'day!", 'en-AU', 'オーストラリア英語の「やあ」。Good day が縮まったもの'],
  john: ['Gude!', 'en-AU', 'トク・ピシンの「こんにちは」。英語の good day から'],
  laila: ['مرحبا', 'ar-SA', 'アラビア語の「こんにちは」（マルハバ）。トルコ語の Merhaba の元になった言葉'],
  uta: ['Guten Morgen!', 'de-DE', 'ドイツ語の「おはよう」'],
};

/* ===================== MAP OBJECTS & LOOKS ===================== */
const SPIRIT_IMG = {};
Object.assign(OBJ, {
  spirit(ctx, sx, sy, t, e) {
    const w = e.word, img = SPIRIT_IMG[w] || (SPIRIT_IMG[w] = makeIcon(WORDS[w].icon, WORDS[w].color));
    const b = Math.round(Math.sin(t * 2.4 + sx * 0.1) * 2), got = has(w);
    ctx.save(); ctx.globalCompositeOperation = 'lighter'; const g = ctx.createRadialGradient(sx + 8, sy + 6 + b, 1, sx + 8, sy + 6 + b, 13);
    g.addColorStop(0, hexA(WORDS[w].color, got ? 0.15 : 0.4)); g.addColorStop(1, hexA(WORDS[w].color, 0)); ctx.fillStyle = g; ctx.fillRect(sx - 8, sy - 10, 32, 32); ctx.restore();
    R(ctx, 'rgba(0,0,0,.2)', sx + 4, sy + 14, 8, 2);
    ctx.globalAlpha = got ? 0.55 : 1; ctx.drawImage(img, sx + 1, sy - 2 + b, 14, 14); ctx.globalAlpha = 1;
    if (!got && Math.sin(t * 3 + sx) > 0.6) drawMini(ctx, '?', sx + 12, sy - 6 + b, '#fff6d0');
  },
  rockdoor(ctx, sx, sy, t, e) {
    const open = flag('ono_open'); R(ctx, '#3a3a44', sx, sy, 32, 16);
    if (open) { R(ctx, '#05050a', sx + 4, sy + 3, 24, 13); return; }
    R(ctx, '#7a7a88', sx + 2, sy + 2, 28, 14); R(ctx, '#9a9aa8', sx + 3, sy + 2, 26, 3); R(ctx, '#5a5a66', sx + 15, sy + 2, 2, 14);
    const p = 0.5 + 0.5 * Math.sin(t * 2); drawMini(ctx, 'ON', sx + 5, sy + 7, `rgba(255,236,170,${0.5 + 0.5 * p})`); drawMini(ctx, 'OTO', sx + 18, sy + 7, `rgba(255,236,170,${0.5 + 0.5 * p})`);
  },
  shisa(ctx, sx, sy, t, e) {
    R(ctx, 'rgba(0,0,0,.25)', sx + 2, sy + 13, 12, 3); R(ctx, '#8a5a3a', sx + 3, sy + 10, 10, 5); R(ctx, '#c86a3a', sx + 4, sy + 3, 8, 8); R(ctx, '#e08a4a', sx + 4, sy + 3, 8, 2);
    R(ctx, '#f0d040', sx + 5, sy + 5, 2, 2); R(ctx, '#f0d040', sx + 9, sy + 5, 2, 2); R(ctx, '#3a1a0a', sx + 5, sy + 8, 6, 1); R(ctx, '#ffffff', sx + 5, sy + 9, 1, 1); R(ctx, '#ffffff', sx + 10, sy + 9, 1, 1);
    R(ctx, '#a0482a', sx + 3, sy + 2, 2, 2); R(ctx, '#a0482a', sx + 11, sy + 2, 2, 2);
  },
  utaki(ctx, sx, sy, t) {
    R(ctx, 'rgba(0,0,0,.3)', sx + 2, sy + 12, 28, 4); R(ctx, '#6a6a5a', sx + 6, sy + 2, 20, 12); R(ctx, '#8a8a78', sx + 7, sy + 2, 18, 3);
    R(ctx, '#3a6a3a', sx, sy + 10, 6, 6); R(ctx, '#3a6a3a', sx + 26, sy + 10, 6, 6);
    const p = 0.5 + 0.5 * Math.sin(t * 1.4); ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = `rgba(180,255,200,${0.06 + 0.08 * p})`; ctx.fillRect(sx - 4, sy - 4, 40, 22); ctx.restore();
  },
  screen(ctx, sx, sy, t) {
    R(ctx, '#3a2412', sx, sy - 6, 64, 22); R(ctx, '#f6ecd0', sx + 2, sy - 4, 60, 16);
    const sh = (x, h, head) => { R(ctx, 'rgba(40,30,20,.75)', sx + x, sy + 12 - h, 6, h); R(ctx, 'rgba(40,30,20,.75)', sx + x + 1, sy + 12 - h - head, 4, head); };
    sh(10 + Math.round(Math.sin(t) * 1), 6, 4); sh(29, 9, 5); sh(48 + Math.round(Math.sin(t * 1.3) * 1), 8, 4);
    R(ctx, '#c03030', sx, sy - 8, 64, 3); for (let i = 0; i < 8; i++) R(ctx, i % 2 ? '#f0d040' : '#c03030', sx + i * 8, sy - 6, 8, 2);
  },
  tower(ctx, sx, sy, t) {
    R(ctx, 'rgba(0,0,0,.3)', sx, sy + 13, 32, 3);
    for (let y = 0; y < 60; y++) { const w = 12 + Math.floor((y / 60) * 16); R(ctx, y % 6 < 1 ? '#5a6aa0' : '#c8d4ec', sx + 16 - w / 2, sy - 44 + y, w, 1); }
    for (let i = 0; i < 5; i++) { const on = Math.sin(t * 3 + i) > 0; R(ctx, on ? '#7af0ff' : '#3a5a8a', sx + 13, sy - 38 + i * 10, 6, 3); }
    R(ctx, '#3a4a7a', sx + 14, sy - 52, 4, 8); const p = 0.5 + 0.5 * Math.sin(t * 4); R(ctx, `rgba(255,${120 + 100 * p | 0},120,1)`, sx + 15, sy - 54, 2, 2);
    R(ctx, '#2a3050', sx + 11, sy + 4, 10, 10); R(ctx, '#7af0ff', sx + 13, sy + 6, 6, 1);
  },
  kiosk(ctx, sx, sy, t) {
    R(ctx, 'rgba(0,0,0,.25)', sx + 2, sy + 13, 12, 3); R(ctx, '#4a5a7a', sx + 3, sy + 2, 10, 12); R(ctx, '#1a2a3a', sx + 4, sy + 3, 8, 6);
    const p = (t * 2 | 0) % 3; R(ctx, '#7af0ff', sx + 5 + p * 2, sy + 5, 2, 2); R(ctx, '#f0d040', sx + 6, sy + 10, 4, 2);
  },
});
const LOOK3 = {
  pip: { skin: '#f2d0b8', hair: '#c88a40', body: '#7a5a3a', hat: '#5a4a2a', hatStyle: 'wide', legs: '#3a3030' },
  mark: { skin: '#f6dcc8', hair: '#e0c070', body: '#f08030', legs: '#2a3a6a' },
  kamado: { skin: '#d8a880', hair: '#e8e8e8', style: 'bun', body: '#3a6ab0', body2: '#f0f0f0', dress: true },
  kai: { skin: '#d8a070', hair: '#1a1210', body: '#f0f0f0', body2: '#e05a3a', legs: '#2a4a8a' },
  yuichou: { skin: '#c88a5a', hair: '#e0e0e0', style: 'bald', body: '#e0c060', beard: '#e0e0e0', legs: '#4a3a2a' },
  ryou: { skin: '#b07a50', hair: '#1a1210', body: '#40a0c0', hat: '#f0f0f0', hatStyle: 'cap', legs: '#2a2a3a' },
  upas: { skin: '#e0b890', hair: '#2a1a10', style: 'long', body: '#2a3a5a', body2: '#e8e0d0', scarf: '#c03030', legs: '#2a2a2a' },
  leilani: { skin: '#b07a50', hair: '#1a1210', style: 'long', body: '#e85a8a', body2: '#f0d040', dress: true },
  osaka: { skin: '#f0c8a0', hair: '#2a2a2a', body: '#e04040', apron: '#f0f0f0', hat: '#2a2a2a', hatStyle: 'cap', legs: '#2a2a3a' },
  tsugaru: { skin: '#e0b090', hair: '#d0d0d0', style: 'bald', body: '#3a4a7a', beard: '#d0d0d0', scarf: '#c8a060', legs: '#2a2a3a' },
  saga: { skin: '#e8c0a0', hair: '#c8c8c8', style: 'bun', body: '#7a5a8a', apron: '#f0e8d8', dress: true },
  kagoshima: { skin: '#e0b088', hair: '#1a1a1a', body: '#2a2a3a', scarf: '#f0f0f0', legs: '#2a2a3a' },
  hokkaido: { skin: '#f6dcc8', hair: '#5a3a2a', style: 'long', body: '#e85a5a', scarf: '#f0f0f0', blush: true, legs: '#2a3a6a' },
  angus: { skin: '#f6d8c8', hair: '#c04020', body: '#2a6a3a', body2: '#c03030', beard: '#c04020', legs: '#2a4a2a' },
  chloe: { skin: '#f2d0b0', hair: '#f0d070', style: 'long', body: '#40a0e0', hat: '#c8a060', hatStyle: 'wide', legs: '#3a3a5a' },
  john: { skin: '#7a4a2a', hair: '#1a1210', body: '#e0c040', body2: '#c03030', legs: '#2a2a2a' },
  laila: { skin: '#c8956a', hair: '#1a1210', style: 'long', body: '#7a3ab0', scarf: '#f0c040', legs: '#2a2a3a' },
  uta: { skin: '#f6dcc8', hair: '#a0a0a0', style: 'bun', body: '#e8e8e8', body2: '#3a7a5a', legs: '#2a3a3a' },
  emo: { skin: '#f2d6c0', hair: '#e06090', style: 'bun', body: '#f0d040', legs: '#3a3a5a' },
  mc: { skin: '#f0c8a0', hair: '#1a1a1a', body: '#c03030', body2: '#f0d040', hat: '#1a1a1a', hatStyle: 'cap', legs: '#2a2a2a' },
  robo: { skin: '#c8d4ec', hair: '#5a6aa0', style: 'bald', body: '#7a8ab0', body2: '#7af0ff', legs: '#4a5a7a' },
};
for (const k in LOOK3) look(k, LOOK3[k]);
Object.assign(BG, { ono: ['#d8f0c0', '#80c090', '#3a8050', '#1a3a20'], ryukyu: ['#a0e0ff', '#40b0e0', '#e8d8a0', '#a08850'], fest: ['#2a1a4a', '#c04a6a', '#5a2a3a', '#2a1020'], future: ['#a0c0f0', '#4a5aa0', '#3a4a6a', '#1a2030'] });

/* ===================== FOES ===================== */
Object.assign(FOES, {
  noise: { name: '騒音のモヤ', col: '#e0a060', hp: 70, atk: [7, 11], exp: 20, weak: ['shiin', 'shitoshito', 'fuwafuwa'], trap: ['gorogoro', 'dokidoki'],
    hint: ['……あらゆる音が、ぶつかりあってうるさい。', '静けさや、やわらかな音が響きそうだ。'], lines: ['「ガヤガヤ！」', '「ドンドンドン！」'] },
  oblivion: { name: '忘却のモヤ', col: '#a0a8b8', hp: 74, atk: [8, 11], exp: 22, weak: ['yuimaaru', 'irankarapte', 'chimudondon', 'jeong'], trap: ['emoji'],
    hint: ['……むかし話されていた言葉を、少しずつ忘れていくモヤ。', 'その土地の言葉で呼びかけると、思い出しそうだ。'], lines: ['「わすれた」', '「もう だれも はなさない」'] },
  stereo: { name: '決めつけのモヤ', col: '#e070a0', hp: 78, atk: [8, 12], exp: 24, weak: ['blank', 'honma', 'menkoi', 'ubuntu', 'wee'], trap: ['ergk', 'mis'],
    hint: ['……話し方だけで、相手を決めつけている。', '相手の話を「ほんま？」と聞いてあげると、ほどけそうだ。'], lines: ['「じゃろ？ そういう人じゃろ？」', '「〜っぽい」'] },
  flat: { name: '平坦のモヤ', col: '#b0b8c8', hp: 82, atk: [9, 12], exp: 26, weak: ['tarab', 'umwelt', 'saudade', 'mononoaware', 'bilong'], trap: ['emoji'],
    hint: ['……どんな言葉も、同じ意味に平らにならしてしまう。', '訳しきれない、深い言葉が響きそうだ。'], lines: ['「ぜんぶ おなじ」', '「つまり、いいね」'] },
  din: { name: '騒音の影', col: '#f0a040', hp: 150, atk: [9, 13], exp: 50, boss: true, weak: ['shiin', 'shitoshito', 'fuwafuwa', 'blank'], trap: ['gorogoro', 'dokidoki', 'kirakira'],
    hint: ['……森じゅうの音を、ひとつの騒音にまとめてしまった影。', '音を消す言葉、やさしい音の言葉が響きそうだ。'], lines: ['「ゴゴゴゴゴ！」', '「ザワザワザワ！」', '「ガシャーン！」'] },
  forget: { name: '忘却の影', col: '#8890a8', hp: 160, atk: [10, 14], exp: 55, boss: true, weak: ['yuimaaru', 'nankurunaisa', 'chimudondon', 'irankarapte', 'jeong'], trap: ['emoji'],
    hint: ['……「どうせ、だれも話さなくなる」とささやいている。', 'その土地の言葉、受けつぐ心が響きそうだ。'], lines: ['「つかわない ことばは きえる」', '「ひょうじゅんごで いいじゃないか」'] },
  stereoboss: { name: 'ステレオタイプの影', col: '#d05a90', hp: 170, atk: [10, 14], exp: 60, boss: true, weak: ['blank', 'honma', 'menkoi', 'oyattosaa', 'gabai', 'ubuntu', 'wee'], trap: ['ergk', 'mis', 'schadenfreude'],
    hint: ['……「話し方で、人はわかる」と信じている。', '決めつけずに聞くこと、土地の言葉で寄りそうことが響きそうだ。'], lines: ['「〜じゃ、と言うなら じいさんじゃ」', '「なまってるやつは いなかものだ」', '「おまえは ○○だ」'] },
  translator: { name: '完全翻訳機', col: '#7af0ff', hp: 190, atk: [11, 15], exp: 0, boss: true,
    weak: ['myword', 'saudade', 'hiraeth', 'toska', 'mononoaware', 'amae', 'jeong', 'wabisabi', 'tarab', 'umwelt', 'mamihlapinatapai'], trap: ['emoji'],
    hint: ['……すべての言葉を、ひとつの意味に置きかえようとしている。', '訳しきれない言葉。そして、まだどの辞書にもない、あなたの言葉が響きそうだ。'],
    lines: ['「SAUDADE ＝ SAD。以上」', '「HYGGE ＝ NICE。以上」', '「すべての ことばは ひとつに やくせる」'] },
});
for (const k in FOES) FOES[k].key = k;
// MOYAMOYA names your own feeling (affect labeling): it reaches any fog a little. Your own word works like (　　) except where it is a weakness.
addEventListener('DOMContentLoaded', () => {
const _useWord3 = useWord;
useWord = async function (w) {
  const d = BT.def;
  if ((w === 'moyamoya' || w === 'myword') && !d.weak.includes(w)) {
    Audio8.sfx('word'); await narr(`«${WORDS[w].name}» ── ${WORDS[w].cast}`);
    if (S.combo >= 2) await narr('（響きの連鎖が途切れた……）'); S.combo = 0;
    const dmg = Math.round(rnd([10, 14]) * (1 + (S.lv - 1) * 0.08)); hurtFoe(dmg); BT.calm = true;
    await narr(w === 'moyamoya' ? `わだかまりに、名前がついた。輪郭が見えて、わだかまりが ${dmg} 晴れた。（相手が少し落ち着いた）` : `あなたの言葉が、まっすぐ届いた。わだかまりが ${dmg} 晴れた。`);
    return;
  }
  return _useWord3(w);
};
});

/* ===================== MAPS ===================== */
function buildOno() {
  const W = 24, H = 18, g = []; for (let y = 0; y < H; y++) g.push(Array(W).fill('T'));
  rectG(g, 2, 2, 20, 12, '.'); const r = rng(808); for (let y = 2; y < 14; y++) for (let x = 2; x < 22; x++) if (r() < 0.14) g[y][x] = ',';
  rectG(g, 1, 14, 22, 1, 's'); rectG(g, 0, 15, W, 3, '~'); rectG(g, 11, 14, 2, 4, '=');
  [[7, 5], [16, 5], [5, 9], [18, 9]].forEach(([x, y]) => g[y][x] = 'T');
  return g;
}
function buildRyukyu() {
  const W = 28, H = 18, g = []; for (let y = 0; y < H; y++) g.push(Array(W).fill('.'));
  const r = rng(909); for (let y = 2; y < 12; y++) for (let x = 2; x < 26; x++) if (r() < 0.1) g[y][x] = ',';
  rectG(g, 0, 0, W, 2, 'T'); rectG(g, 0, 0, 1, 13, 'T'); rectG(g, 27, 0, 1, 13, 'T');
  rectG(g, 3, 3, 6, 2, 'R'); rectG(g, 3, 5, 6, 2, 'W'); g[6][6] = 'D'; g[6][4] = 'O'; g[6][8] = 'O';
  rectG(g, 18, 3, 6, 2, 'R'); rectG(g, 18, 5, 6, 2, 'W'); g[6][21] = 'D'; g[6][19] = 'O'; g[6][23] = 'O';
  [[2, 8], [10, 8], [17, 8], [25, 8]].forEach(([x, y]) => g[y][x] = 'M');
  [[11, 3], [16, 3], [11, 4], [16, 4]].forEach(([x, y]) => g[y][x] = 'T');
  rectG(g, 13, 4, 2, 9, ':'); rectG(g, 0, 12, W, 1, 's'); rectG(g, 0, 13, W, 5, '~'); rectG(g, 13, 12, 2, 6, '=');
  return g;
}
function buildFest() {
  const W = 30, H = 16, g = []; for (let y = 0; y < H; y++) g.push(Array(W).fill(':'));
  rectG(g, 0, 0, W, 2, 'T'); rectG(g, 0, 0, 1, 12, 'T'); rectG(g, 29, 0, 1, 12, 'T');
  for (let x = 2; x < 28; x += 4) g[2][x] = 'L';
  rectG(g, 0, 11, W, 1, 's'); rectG(g, 0, 12, W, 4, '~'); rectG(g, 14, 11, 2, 5, '=');
  return g;
}
function buildFuture() {
  const W = 26, H = 16, g = []; for (let y = 0; y < H; y++) g.push(Array(W).fill(':'));
  for (let x = 0; x < W; x++) { g[0][x] = 'B'; g[1][x] = 'B'; g[2][x] = x % 3 === 1 ? 'O' : 'W'; g[3][x] = 'W'; }
  [[2, 6], [23, 6], [2, 10], [23, 10]].forEach(([x, y]) => g[y][x] = 'L'); [[6, 5], [19, 5]].forEach(([x, y]) => g[y][x] = 'T');
  rectG(g, 0, 11, W, 1, 's'); rectG(g, 0, 12, W, 4, '~'); rectG(g, 12, 11, 2, 5, '=');
  return g;
}
Object.assign(MAPS, {
  ono: { name: 'オノマトペの森', bgm: 'woods', tint: 'woods', build: buildOno,
    warps: [{ x: 11, y: 18, run: sailHome }, { x: 12, y: 18, alias: 0 }],
    onEnter: async () => { if (!flag('ono_arrive')) { setf('ono_arrive'); await narr('森のあちこちから、ふしぎな音が聞こえる。ふわり、ころり、きらり……。'); await narr('音の精たちが、名前を見つけてもらうのを待っているらしい。'); } } },
  ryukyu: { name: 'しまくとぅばの島', bgm: 'isle', tint: 'isle', deep: 15, build: buildRyukyu,
    warps: [{ x: 13, y: 18, run: sailHome }, { x: 14, y: 18, alias: 0 }],
    onEnter: async () => { if (!flag('ry_arrive')) { setf('ry_arrive'); await narr('赤瓦の屋根、石垣の上のシーサー。南の島の村に着いた。'); await narr('おばあたちの言葉は、若い人たちの言葉と、少しちがうらしい。'); } } },
  fest: { name: '方言まつり', bgm: 'town', tint: 'fest', build: buildFest,
    warps: [{ x: 14, y: 16, run: sailHome }, { x: 15, y: 16, alias: 0 }],
    onEnter: async () => { if (!flag('fe_arrive')) { setf('fe_arrive'); await narr('ちょうちんが灯る、にぎやかな夜祭り。各地のことばの屋台が並んでいる。'); await narr('まんなかでは、影絵芝居が始まるところだ。'); } } },
  future: { name: '未来の港', bgm: 'archive', tint: 'future', build: buildFuture,
    warps: [{ x: 12, y: 16, run: sailHome }, { x: 13, y: 16, alias: 0 }],
    onEnter: async () => { if (!flag('fu_arrive')) { setf('fu_arrive'); await narr('ガラスの塔がそびえる港。どんな言葉も一瞬で訳してしまう「完全翻訳機」があるという。'); } } },
});
PORTS.push(
  { id: 'ono', name: 'オノマトペの森', ch: 10, to: ['ono', 11, 16, 'up'] },
  { id: 'ryukyu', name: 'しまくとぅばの島', ch: 11, to: ['ryukyu', 13, 15, 'up'] },
  { id: 'fest', name: '方言まつり', ch: 12, to: ['fest', 14, 13, 'up'] },
  { id: 'future', name: '未来の港', ch: 13, to: ['future', 12, 13, 'up'] });
LINKS.push(['town', 'ono', 25, 24], ['town', 'ryukyu', 25, 24], ['town', 'fest', 25, 24], ['town', 'future', 25, 24],
  ['ono', 'town', 11, 17], ['ryukyu', 'town', 13, 17], ['fest', 'town', 14, 15], ['future', 'town', 12, 15]);

/* ===================== CH10: オノマトペの森 ===================== */
const SPIRITS = [
  { w: 'fuwafuwa', x: 5, y: 4, name: '雲の精', see: '雲のこどもが、ぷかぷか浮いている。さわると、とてもやわらかくて、軽い。', alt: ['ごわごわ', 'ぎゅうぎゅう'] },
  { w: 'gorogoro', x: 18, y: 4, name: '雷の精', see: '黒い雲の中で、低く重い音がとどろいている。大きな岩が転がるような音だ。', alt: ['ころころ', 'ちりんちりん'] },
  { w: 'kirakira', x: 9, y: 7, name: '星の精', see: '小さな光が、細かくまたたいている。やさしい光だ。', alt: ['ぎらぎら', 'どろどろ'] },
  { w: 'dokidoki', x: 14, y: 7, name: '鼓動の精', see: '赤い精が、どくん、どくんと脈打っている。緊張で胸が高なるような音。', alt: ['すやすや', 'のろのろ'] },
  { w: 'shitoshito', x: 4, y: 11, name: '雨の精', see: '細い雨が、音もなく静かに、ずっと降りつづいている。', alt: ['ざあざあ', 'からから'] },
  { w: 'moyamoya', x: 19, y: 11, name: '霧の精', see: '灰色の霧が、はっきりしないまま、胸のあたりにわだかまっている。', alt: ['すっきり', 'ぱりぱり'] },
  { w: 'nikoniko', x: 9, y: 12, name: '花の精', see: '花の精が、声も出さずに、うれしそうにほほえんでいる。', alt: ['げらげら', 'しくしく'] },
  { w: 'shiin', x: 15, y: 12, name: 'ふくろうの精', see: 'ふくろうの精のまわりだけ、物音ひとつしない。静まりかえっている。', alt: ['がやがや', 'ぴよぴよ'] },
];
const ONO_ALT = { 'ごわごわ': '「ごわごわ」は、かたくて粗いようす。', 'ぎゅうぎゅう': '「ぎゅうぎゅう」は、すき間なくつめこまれたようす。', 'ころころ': '「ころころ」は、小さく軽いものが転がるようす。濁点のない分、軽い。',
  'ちりんちりん': '「ちりんちりん」は、鈴の音。', 'ぎらぎら': '「ぎらぎら」は、強くどぎつい光。濁点がつくと、強すぎる光になる。', 'どろどろ': '「どろどろ」は、ねばりけのあるようす。', 'すやすや': '「すやすや」は、気持ちよく眠るようす。',
  'のろのろ': '「のろのろ」は、動きがおそいようす。', 'ざあざあ': '「ざあざあ」は、はげしい雨。濁点が、雨の強さを表している。', 'からから': '「からから」は、乾ききったようす。', 'すっきり': '「すっきり」は、晴れやかなようす。むしろ反対だ。',
  'ぱりぱり': '「ぱりぱり」は、乾いて歯ごたえのあるようす。', 'げらげら': '「げらげら」は、声を立てて大笑いするようす。', 'しくしく': '「しくしく」は、静かに泣くようす。', 'がやがや': '「がやがや」は、大勢がさわがしいようす。', 'ぴよぴよ': '「ぴよぴよ」は、ひよこの鳴き声。' };
const onoCount = () => SPIRITS.filter(s => has(s.w)).length;
async function spiritTalk(e) {
  const s = SPIRITS.find(x => x.w === e.word);
  if (has(s.w)) { await narr(`${s.name}が、«${NM(s.w)}» とうれしそうにゆれている。`); return; }
  await narr(s.see);
  const opts = shuffle([WORDS[s.w].kana, ...s.alt]);
  await say(s.name, 'この感じに、名前をつけて？', { keep: true });
  const i = await choose(opts.map(t => ({ t })).concat([{ t: 'あとで', cancel: true }]), { cancel: 3 });
  if (i === 3) return;
  if (opts[i] === WORDS[s.w].kana) { Audio8.sfx('chime'); await narr(`«${WORDS[s.w].kana}»。${s.name}が、ぱっと明るくなった。`); await acquire(s.w, s.name, 'オノマトペの森'); if (s.w === 'moyamoya') await giveCard('affect'); }
  else { Audio8.sfx('wrong'); await narr(`${s.name}は、首をかしげた。`); await narr(`（${ONO_ALT[opts[i]] || ''}）`); }
  if (onoCount() === 8 && !flag('ono_all')) { setf('ono_all'); await narr('森じゅうの音の精が、名前を見つけた。奥の「音の岩戸」が、かすかにふるえている。'); }
}
const ONO_QS = [
  { q: '小さな石が、坂をかろやかに転がっていく。どんな音？', o: ['ころころ', 'ごろごろ'], a: 0, why: '小さく軽いものは、濁らない音', ok: '「ころころ」。小さく、軽い。' },
  { q: '大きな岩が、地ひびきを立てて転がっていく。どんな音？', o: ['ころころ', 'ごろごろ'], a: 1, why: '大きく重いものは、濁った音', ok: '「ごろごろ」。濁点がつくと、大きく重くなる。' },
  { q: '乾いた細かい砂が、指のあいだから、なめらかにこぼれる。', o: ['ざらざら', 'さらさら'], a: 1, why: 'なめらかなものは、濁らない音', ok: '「さらさら」。濁ると「ざらざら」で、粗い手ざわりになる。' },
  { q: '真夏の太陽が、目がくらむほど照りつける。', o: ['きらきら', 'ぎらぎら'], a: 1, why: '強すぎる光は、濁った音', ok: '「ぎらぎら」。同じ光でも、濁ると強くどぎつくなる。' },
];
NPCS.push(
  ...SPIRITS.map(s => ({ id: 'sp_' + s.w, name: s.name, map: 'ono', x: s.x, y: s.y, kind: 'obj', draw: 'spirit', word: s.w, talk: spiritTalk })),
  { id: 'rockdoor', map: 'ono', x: 11, y: 1, w: 2, kind: 'obj', draw: 'rockdoor',
    talk: async () => {
      if (S.ch !== 10) { await narr('音の岩戸は、静かに開いている。'); return; }
      if (onoCount() < 8) { await narr(`「音の岩戸」。表面に、八つのくぼみがある。（音の精の名前：${onoCount()} / 8）`); await narr('（森の音の精たちに、ぴったりのオノマトペを見つけてあげよう）'); return; }
      if (!flag('ono_open')) {
        await narr('岩戸に、古い文字が浮かびあがった。「音のちがいを、聞きわけよ」');
        if (!(await quizSeq('音の岩戸', ONO_QS))) return;
        Audio8.sfx('door'); setf('ono_open'); await narr('岩戸が開いた。濁った音は大きく重く、澄んだ音は小さく軽い ── 音そのものが、意味をもっている。');
        await giveCard('seidaku');
      }
      if (!flag('bossDin')) {
        await narr('岩戸の奥から、森じゅうの音がいっせいに押しよせてきた――');
        const r = await battle('din', { area: 'ono' }); if (r !== 'win') return;
        setf('bossDin');
        await narr('騒音がほどけて、ひとつひとつの音にもどっていった。鳥の声、葉のこすれる音、遠い波の音……。');
      }
      await gainExp(30); await clearChapter(10);
      await narr('（マルコの船で、次の港「しまくとぅばの島」へ行けるようになった）');
    } },
  { id: 'pip', name: 'なきごえ博士ピップ', map: 'ono', x: 16, y: 13, dir: 'left', look: 'pip', hello: H3.pip,
    talk: async e => {
      if (S.cards.includes('animal')) { await say(e, 'ワンワン、woof、guau、гав。同じ犬でも、耳がちがえば、聞こえ方もちがうのさ。'); return; }
      await say(e, 'わたしは世界中の鳴き声を集めている。きみ、ちょっとクイズに付きあってくれるかね？');
      const ok = await quizSeq('なきごえクイズ', [
        { q: 'スペイン語で、犬の鳴き声は？', o: ['guau guau', 'meow meow', 'moo moo'], a: 0, why: 'グアウ、と聞こえるらしい', ok: 'guau guau！ スペインの犬は「グアウ」と鳴く。' },
        { q: '韓国語の「멍멍（モンモン）」は、何の鳴き声？', o: ['ねこ', '犬', 'ぶた'], a: 1, why: '日本ならワンワン', ok: '犬！ 韓国の犬は「モンモン」。' },
        { q: 'フランス語の「cocorico（ココリコ）」は？', o: ['にわとり', 'かえる', 'ふくろう'], a: 0, why: '朝に鳴く鳥', ok: 'にわとり！ 日本なら「コケコッコー」だね。' }]);
      if (!ok) { await say(e, 'おしい！ また挑戦してくれたまえ。'); return; }
      await say(e, 'すばらしい！ 鳴き声さえ、言語ごとに「聞こえ方の決まり」があるのだよ。');
      await giveCard('animal'); await gainExp(10);
    } },
  { id: 'mark', name: '言語学者マルク', map: 'ono', x: 6, y: 13, dir: 'right', look: 'mark', hello: H3.mark,
    talk: async e => {
      await say(e, '日本語はオノマトペが豊かだよね。でも、日本語だけじゃないんだ。');
      await say(e, '韓国語にも、アフリカのエウェ語やズールー語にも、南米のケチュア語にも、感覚を生き生きと表す言葉がたくさんある。研究者は「イデオフォン」と呼んでいる。');
      await giveCard('ideophone');
    } },
  { id: 'f_on1', map: 'ono', x: 3, y: 6, kind: 'foe', foe: 'noise', wander: 2 },
  { id: 'f_on2', map: 'ono', x: 20, y: 7, kind: 'foe', foe: 'noise', wander: 2 },
  { id: 'spk_on1', map: 'ono', x: 12, y: 9, kind: 'sparkle', solid: false },
);

/* ===================== CH11: しまくとぅばの島 ===================== */
NPCS.push(
  { id: 'kamado', name: 'カマドおばあ', map: 'ryukyu', x: 8, y: 8, dir: 'down', look: 'kamado', hello: H3.kamado,
    talk: async e => {
      if (S.ch > 11 || flag('ry_done')) { await say(e, 'カイがね、毎朝「はいさい」って言ってくれるのよ。……にふぇーでーびる。'); return; }
      if (!flag('ry_learn')) {
        await say(e, 'よう来たね。わたしらのことば、うちなーぐちはね、もう若い人はあんまり話さんのよ。');
        await say(e, '孫のカイも、ぜんぶ標準語。……さびしいけど、しかたないのかねえ。');
        await say(e, 'あんた、カイに少し教えてやってくれんかね。わたしが言うと、恥ずかしがって聞かんから。');
        await narr('カマドおばあが、いくつかのことばを教えてくれた。');
        await narr('「はいさい／はいたい」── こんにちは（男の人は「はいさい」、女の人は「はいたい」）');
        await narr('「にふぇーでーびる」── ありがとう');
        await narr('「めんそーれ」── いらっしゃい、ようこそ');
        setf('ry_learn'); await giveCard('shimakutuba'); return;
      }
      await say(e, 'カイには、会えたかね？');
    } },
  { id: 'kai', name: '少年カイ', map: 'ryukyu', x: 11, y: 10, dir: 'left', look: 'kai',
    talk: async e => {
      if (flag('ry_done')) { await say(e, 'はいさい！ ……へへ、ちむどんどんするね、こういうの。'); return; }
      if (!flag('ry_learn')) { await say(e, 'おばあの言葉？ ……よくわかんないし、なんか古くさいじゃん。'); return; }
      await say(e, 'おばあの言葉、ちょっとだけ覚えてみようかな。……教えてくれる？');
      const ok = await quizSeq('カイに教える', [
        { q: 'カイ「ぼく（男の子）が、おばあに『こんにちは』って言うなら？」', o: ['はいさい', 'はいたい', 'めんそーれ'], a: 0, why: '話す人が男か女かで変わる', ok: 'カイ「はいさい、か。ぼくが男だから、はいさいなんだね」' },
        { q: 'カイ「『ありがとう』は？」', o: ['めんそーれ', 'にふぇーでーびる', 'なんくるないさ'], a: 1, why: 'おばあが教えてくれた、お礼の言葉', ok: 'カイ「にふぇーでーびる……長いなあ。でも、いい響き」' },
        { q: 'カイ「お客さんを迎えるときは？」', o: ['はいさい', 'ちむどんどん', 'めんそーれ'], a: 2, why: '首里城の前でもよく見る言葉', ok: 'カイ「めんそーれ！ これ、空港で見たことある！」' }]);
      if (!ok) { await say(e, 'あれ、ちがったかな……もう一回、おばあに聞いてみてよ。'); return; }
      await say(e, 'よし……おばあのところ、行ってくる！');
      await narr('カイは走っていった。カマドおばあの前で、少し照れながら――');
      await narr('「はいさい、おばあ！ ……にふぇーでーびる」');
      const k = ents.find(x => x.id === 'kamado');
      await say(k, '……カイ。');
      await say(k, 'あいえなー（あらまあ）……。わたしのことばで、呼んでくれたね。');
      await say(e, 'へへ。……なんか、胸がちむどんどんする。');
      await narr('「ちむどんどん」── 胸がわくわく高なること。カイが、おばあから聞いて覚えていた言葉だった。');
      await acquire('chimudondon', '少年カイ', 'しまくとぅばの島');
      setf('ry_done'); await gainExp(20);
      await narr('（村のはずれの御嶽（うたき）で、何かが目をさましたようだ）');
    } },
  { id: 'yuichou', name: '長老ゆい', map: 'ryukyu', x: 21, y: 8, dir: 'down', look: 'yuichou', hello: H3.yuichou, offer: () => !has('yuimaaru'),
    talk: async e => {
      if (!has('yuimaaru')) {
        await say(e, 'この村では、家を建てるときも、畑の収穫も、みんなで順番に手伝うのさ。');
        await say(e, 'それを «ゆいまーる» と言う。「結い」が「回る」。今日はあんたの番、明日はわしの番。');
        await acquire('yuimaaru', '長老ゆい', 'しまくとぅばの島'); return;
      }
      await say(e, 'ことばも、ゆいまーるで受けつぐもんさ。おばあから孫へ、孫からまた、その子へ。');
    } },
  { id: 'ryou', name: '漁師リョウ', map: 'ryukyu', x: 17, y: 11, dir: 'left', look: 'ryou', hello: H3.ryou, offer: () => !has('nankurunaisa'),
    talk: async e => {
      if (!has('nankurunaisa')) {
        await say(e, '今日は時化（しけ）で、船が出せん。まあ、なんくるないさ。');
        await say(e, 'ただな、これには前があるんだ。«まくとぅそーけー、なんくるないさ»。誠を尽くしてれば、なんとかなる、ってな。');
        await acquire('nankurunaisa', '漁師リョウ', 'しまくとぅばの島');
        await say(e, '投げやりな言葉じゃない。やることやった人への、励ましさ。'); return;
      }
      await say(e, '網をつくろうのも、誠のうちさ。');
    } },
  { id: 'upas', name: '北の旅人ウパシ', map: 'ryukyu', x: 24, y: 10, dir: 'left', look: 'upas', hello: H3.upas, offer: () => !has('irankarapte'),
    talk: async e => {
      if (!has('irankarapte')) {
        await say(e, 'わたしは北海道から来ました。わたしの祖母は、アイヌ語を話していました。');
        await say(e, 'アイヌ語のあいさつ «イランカラㇷ゚テ» には、「あなたの心にそっと触れさせてください」という気持ちがこめられているといわれます。');
        await acquire('irankarapte', '北の旅人ウパシ', 'しまくとぅばの島');
        await giveCard('ainu'); return;
      }
      await say(e, '北と南、遠く離れていても、ことばを受けつごうとする人たちがいる。……心強いです。');
    } },
  { id: 'leilani', name: '先生レイラニ', map: 'ryukyu', x: 3, y: 11, dir: 'right', look: 'leilani', hello: H3.leilani,
    talk: async e => {
      await say(e, 'ハワイ語も、一度は話す人がとても少なくなりました。');
      await say(e, 'でも1984年から、小さな子どもたちがハワイ語だけで過ごす「プーナナ・レオ（言葉の巣）」という保育の場ができて、若い話し手が育っています。');
      await say(e, 'ニュージーランドのマオリ語でも、同じような取り組みがあるんですよ。ことばは、よみがえることができるんです。');
      await giveCard('revival');
    } },
  { id: 'shisa1', map: 'ryukyu', x: 5, y: 7, kind: 'obj', draw: 'shisa', talk: async () => { await narr('シーサー。家を守る、獅子の像だ。口を開けているのと閉じているのが、対になっている。'); } },
  { id: 'shisa2', map: 'ryukyu', x: 7, y: 7, kind: 'obj', draw: 'shisa', talk: async () => { await narr('口を閉じたシーサー。福を逃がさない、とも言われる。'); } },
  { id: 'utaki', map: 'ryukyu', x: 13, y: 2, w: 2, kind: 'obj', draw: 'utaki',
    talk: async () => {
      if (S.ch !== 11) { await narr('静かな御嶽（うたき）。島の人たちが、大切にしてきた場所だ。'); return; }
      if (!flag('ry_done')) { await narr('静かな御嶽（うたき）。……今は、そっとしておこう。'); return; }
      if (!flag('bossForget')) {
        await narr('御嶽の木々のあいだから、灰色の影がしみ出してきた。');
        await narr('「どうせ、だれも話さなくなる。わすれてしまえば、楽になる」');
        const r = await battle('forget', { area: 'ryukyu' }); if (r !== 'win') return;
        setf('bossForget');
        await narr('影は、潮風にとけていった。どこかで、カイの「はいさい！」という声が聞こえた。');
      }
      await gainExp(30); await clearChapter(11);
      await narr('（マルコの船で、次の港「方言まつり」へ行けるようになった）');
    } },
  { id: 'f_ry1', map: 'ryukyu', x: 2, y: 10, kind: 'foe', foe: 'oblivion', wander: 2 },
  { id: 'f_ry2', map: 'ryukyu', x: 24, y: 5, kind: 'foe', foe: 'oblivion', wander: 2 },
  { id: 'spk_ry1', map: 'ryukyu', x: 25, y: 11, kind: 'sparkle', solid: false }, { id: 'spk_ry2', map: 'ryukyu', x: 2, y: 3, kind: 'sparkle', solid: false },
);

/* ===================== CH12: 方言まつり ===================== */
const THEATER = [
  { line: '「わしは知っておるのじゃ、その秘密をな」', o: ['おじいさんの博士', '小さな子ども', '若い船乗り'], who: 1, reveal: '幕のうしろにいたのは、小さな子ども。おじいさんの真似をして遊んでいた。' },
  { line: '「ごきげんよう。わたくし、紅茶をいただきますわ」', o: ['お屋敷のお嬢さま', '漁師のおじさん', '町の郵便屋さん'], who: 1, reveal: '幕のうしろにいたのは、日焼けした漁師のおじさん。娘に絵本を読んであげていた。' },
  { line: '「おら、腹へっただ」', o: ['田舎の少年', '都会の会社員', '旅の剣士'], who: 1, reveal: '幕のうしろにいたのは、スーツ姿の会社員。仲間との冗談だった。' },
];
async function theater() {
  if (flag('fe_theater')) { await narr('影絵芝居の幕。三つの影が、ゆらゆらしている。'); return; }
  const mc = ents.find(x => x.id === 'mc');
  await say(mc, 'さあさあ、影絵芝居「声だけで当ててごらん」！ 幕のうしろの人は、どんな人？');
  let stereo = 0;
  for (const t of THEATER) {
    await say('幕のうしろの声', t.line, { keep: true });
    const i = await choose(t.o.map(x => ({ t: x })));
    Audio8.sfx('door'); await narr(t.reveal);
    if (i === t.who) await narr('……当たり。でも、話し方で当てたというより、まぐれだった。');
    else { stereo++; await narr('話し方だけで、人を思い浮かべていた。'); }
  }
  await say(mc, `${stereo ? '「〜じゃ」と聞けばおじいさん、「〜ですわ」と聞けばお嬢さま。……でも、実際にそう話す人は、ほとんどいないんですよ。' : '全問当たり！ ……でも、話し方のイメージどおりの人は、ひとりもいなかったでしょう？'}`);
  await say(mc, '話し方と人物像を結びつける、ことばのステレオタイプ。「役割語」と言うんです。');
  setf('fe_theater'); await giveCard('yakuwari'); await gainExp(15);
}
const festDone = () => ['honma', 'gabai', 'oyattosaa', 'menkoi'].every(has) && flag('fe_theater') && S.cards.includes('dosa');
NPCS.push(
  { id: 'theater', map: 'fest', x: 13, y: 4, w: 4, kind: 'obj', draw: 'screen', talk: theater },
  { id: 'mc', name: '司会のハナ', map: 'fest', x: 15, y: 6, dir: 'down', look: 'mc',
    talk: async e => {
      if (S.ch > 12) { await say(e, '影絵芝居、またやるからね！'); return; }
      if (!flag('fe_theater')) { await say(e, 'ようこそ、方言まつりへ！ まずは影絵芝居を見ていってね。（幕を調べよう）'); return; }
      if (!festDone()) { await say(e, '屋台をまわって、各地のことばに出会ってきてね！'); await narr(`（方言：${['honma', 'gabai', 'oyattosaa', 'menkoi'].filter(has).length} / 4　津軽の「どさ？」：${S.cards.includes('dosa') ? '聞いた' : 'まだ'}）`); return; }
      if (!flag('bossStereo')) {
        await say(e, 'みんな、ありがとう！ これで祭りの――');
        await narr('そのとき、影絵の幕が大きくふくらんだ。影が、ひとりでに動きだす。');
        await narr('「話し方で、人はわかる。わかったつもりで、何が悪い？」');
        const r = await battle('stereoboss', { area: 'fest' }); if (r !== 'win') return;
        setf('bossStereo');
        await narr('影はちぎれて、たくさんの小さな影にもどった。子ども、漁師、会社員、おばあちゃん……ひとりひとり、ちがう声をしていた。');
      }
      await gainExp(30); await clearChapter(12);
      await narr('（マルコの船で、最後の港「未来の港」へ行けるようになった）');
    } },
  { id: 'osaka', name: '大阪の店主トラ', map: 'fest', x: 4, y: 5, dir: 'down', look: 'osaka', hello: H3.osaka, offer: () => !has('honma'),
    talk: async e => {
      if (!has('honma')) {
        await say(e, 'たこ焼き、焼きたてやで！ ほんまにうまいから！');
        await say(e, '「ほんま」は「本当」っちゅうこと。「ほんまに？」「ほんまや！」って、会話のリズムも大事なんや。');
        await acquire('honma', '大阪の店主トラ', '方言まつり'); return;
      }
      await say(e, '「まいど」は、商売人のあいさつや。毎度おおきに、の略やな。');
    } },
  { id: 'tsugaru', name: '津軽のじっちゃ', map: 'fest', x: 10, y: 5, dir: 'down', look: 'tsugaru', hello: H3.tsugaru,
    talk: async e => {
      if (!S.cards.includes('dosa')) {
        await say(e, 'どさ？');
        const i = await pick(null, '（「どさ？」……どう答える？）', [{ t: '（え……？）' }, { t: 'ゆさ。' }]);
        if (i.t === 'ゆさ。') { await say(e, 'おお、わがるんだが！'); }
        await say(e, '「どさ？」は「どこへ行ぐの？」、「ゆさ」は「湯っこさ（お風呂へ）」。これで会話になるんだ。');
        await say(e, '寒いがら口を開げねで話すんで短ぐなった、なんて言う人もいるども、ほんとがどうがは、わがらねえな。');
        await giveCard('dosa'); return;
      }
      await say(e, 'わ（わたし）も、な（あなた）も、短ぐていいべ。');
    } },
  { id: 'saga', name: '佐賀のばあちゃん', map: 'fest', x: 20, y: 5, dir: 'down', look: 'saga', hello: H3.saga, offer: () => !has('gabai'),
    talk: async e => {
      if (!has('gabai')) {
        await say(e, '今夜はがばい人の多かねえ。');
        await say(e, '「がばい」は「とても」っちゅうこと。がばい寒か、がばいうまか、ってね。');
        await acquire('gabai', '佐賀のばあちゃん', '方言まつり'); return;
      }
      await say(e, '方言はね、恥ずかしかもんじゃなか。がばい、よかもんよ。');
    } },
  { id: 'kagoshima', name: '鹿児島の青年ハヤト', map: 'fest', x: 26, y: 5, dir: 'down', look: 'kagoshima', hello: H3.kagoshima, offer: () => !has('oyattosaa'),
    talk: async e => {
      if (!has('oyattosaa')) {
        await say(e, '屋台の準備、やっと終わったあ。……おやっとさあ。');
        await say(e, '「おやっとさあ」は「お疲れさま」。鹿児島じゃ、仲間をねぎらうときに言うとよ。');
        await acquire('oyattosaa', '鹿児島の青年ハヤト', '方言まつり'); return;
      }
      await say(e, '鹿児島ことばは、ほかの土地の人には聞き取りにくかって言われるとよ。でも、それが誇りでもあっとさ。');
    } },
  { id: 'hokkaido', name: '北海道の少女ユキ', map: 'fest', x: 7, y: 9, dir: 'right', look: 'hokkaido', hello: H3.hokkaido, offer: () => !has('menkoi'),
    talk: async e => {
      if (!has('menkoi')) {
        await say(e, 'ねえ見て、あの金魚！ なんぼめんこいの！');
        await say(e, '「めんこい」は「かわいい」って意味だよ。おばあちゃんの口ぐせなんだ。');
        await acquire('menkoi', '北海道の少女ユキ', '方言まつり'); return;
      }
      await say(e, '北海道ではね、ゴミを「なげる（捨てる）」って言うの。ボール投げるんじゃないよ！');
    } },
  { id: 'angus', name: 'スコットランドの旅人アンガス', map: 'fest', x: 21, y: 9, dir: 'left', look: 'angus', hello: H3.angus, offer: () => !has('wee'),
    talk: async e => {
      if (!has('wee')) {
        await say(e, 'いい祭りだな。おれの国でも、ことばは地域ごとにずいぶんちがうんだ。');
        await say(e, 'スコットランドじゃ「小さい」を «wee» と言う。a wee bit ── ほんのちょっとだけ、ってな。');
        await acquire('wee', '旅人アンガス', '方言まつり'); return;
      }
      await say(e, '英語だって、ひとつじゃない。ロンドンとグラスゴーじゃ、まるで別の言葉みたいに聞こえることもあるぜ。');
    } },
  { id: 'chloe', name: 'オーストラリアの旅人クロエ', map: 'fest', x: 24, y: 10, dir: 'left', look: 'chloe', hello: H3.chloe, offer: () => !has('arvo'),
    talk: async e => {
      if (!has('arvo')) {
        await say(e, 'オーストラリアの英語はね、ことばを短くするのが大好きなの。');
        await say(e, 'breakfast は brekkie、afternoon は «arvo»。See you this arvo！ ── 午後に会おうね！');
        await acquire('arvo', '旅人クロエ', '方言まつり'); return;
      }
      await say(e, '短くすると、なんだか親しみがわくでしょ？');
    } },
  { id: 'stall_f1', map: 'fest', x: 3, y: 4, w: 3, kind: 'obj', draw: 'stall', talk: async () => { await narr('たこ焼きの屋台。いい匂いがする。'); } },
  { id: 'stall_f2', map: 'fest', x: 9, y: 4, w: 3, kind: 'obj', draw: 'stall', talk: async () => { await narr('りんご飴の屋台。津軽のりんごを使っているらしい。'); } },
  { id: 'stall_f3', map: 'fest', x: 19, y: 4, w: 3, kind: 'obj', draw: 'stall', talk: async () => { await narr('佐賀の名物が並ぶ屋台。'); } },
  { id: 'stall_f4', map: 'fest', x: 25, y: 4, w: 3, kind: 'obj', draw: 'stall', talk: async () => { await narr('さつまあげの屋台。'); } },
  { id: 'f_fe1', map: 'fest', x: 4, y: 10, kind: 'foe', foe: 'stereo', wander: 2 },
  { id: 'f_fe2', map: 'fest', x: 27, y: 9, kind: 'foe', foe: 'stereo', wander: 2 },
  { id: 'spk_fe1', map: 'fest', x: 2, y: 8, kind: 'sparkle', solid: false }, { id: 'spk_fe2', map: 'fest', x: 27, y: 7, kind: 'sparkle', solid: false },
);

/* ===================== CH13: 未来の港 ===================== */
function coinWord() {
  return new Promise(res => {
    const c = $('#compose');
    c.innerHTML = `<div class="cbox win"><div class="chd">あたらしい言葉をつくる</div>
      <div class="cmn">この旅で、たくさんの「訳しきれない言葉」に出会った。今度は、あなたの番。まだ名前のない気持ちに、名前をつけよう。</div>
      <label class="cpr" for="coinname">ことば（12文字まで。ローマ字でも、かなでもいい）</label>
      <input id="coinname" maxlength="12" placeholder="例：MOFURI">
      <label class="cpr" for="coinmean">意味（どんな気持ち？）</label>
      <textarea id="coinmean" maxlength="60" rows="2" placeholder="例：旅の最後の夜、荷物をまとめながら、もう少しだけここにいたいと思う気持ち"></textarea>
      <div class="cbtns"><button type="button" class="tb sel" id="csave"><span class="cur">▶</span>この言葉にする</button></div></div>`;
    c.hidden = false;
    const nm = c.querySelector('#coinname'), mn = c.querySelector('#coinmean'); setTimeout(() => nm.focus(), 50);
    const pop = pushUI(() => { });
    c.querySelector('#csave').onclick = () => {
      const n = nm.value.trim(), m = mn.value.trim();
      if (n.length < 2) { Audio8.sfx('wrong'); toast('ことばは2文字以上にしよう', 'warn'); return; }
      if (m.length < 4) { Audio8.sfx('wrong'); toast('意味を、もう少しだけ書いてみよう', 'warn'); return; }
      pop(); c.hidden = true; Audio8.sfx('chime'); res({ name: n, desc: m });
    };
  });
}
NPCS.push(
  { id: 'tower', map: 'future', x: 12, y: 5, w: 2, kind: 'obj', draw: 'tower',
    talk: async () => {
      if (S.ch !== 13) { await narr('ガラスの塔。いまは静かに、街の言葉を記録しているだけだ。'); return; }
      if (!flag('myword_made')) {
        await narr('塔の入口のパネルが光った。');
        await say('完全翻訳機', '「ようこそ。わたしは、すべての言葉を、ひとつの意味に訳せます」');
        await say('完全翻訳機', '「SAUDADE ＝ さびしい。HYGGE ＝ いい感じ。MONO NO AWARE ＝ かなしい。以上」');
        await narr('……何かが、ぜんぶこぼれ落ちている。');
        await say('完全翻訳機', '「あなたの言葉も、登録してください。わたしが、正しく訳してあげます」');
        await narr('（まだどの辞書にもない、あなただけの言葉をつくろう）');
        hideMsg();
        const r = await coinWord();
        S.myword = r; applyMyWord(); setf('myword_made');
        await acquire('myword', 'あなた自身', '未来の港');
        await giveCard('coin');
        await say('完全翻訳機', `「${r.name} ＝ ……エラー。該当する訳語が、ありません」`);
        await narr('翻訳機の光が、ちかちかと乱れはじめた。');
        if (!eq('myword') && S.equipped.length < maxSlots()) { S.equipped.push('myword'); renderHUD(); toast(`«${r.name}» を装備した`); }
      }
      if (!flag('bossTrans')) {
        await say('完全翻訳機', '「訳せない言葉は、存在してはならない。すべて、ひとつに」');
        const r = await battle('translator', { area: 'future' }); if (r !== 'win') return;
        setf('bossTrans');
      }
      await narr('翻訳機の画面に、ゆっくりと文字が浮かぶ。');
      await say('完全翻訳機', `「${S.myword.name} ── 訳せません。……でも、意味は、わかった気がします」`);
      await say('完全翻訳機', '「訳しきれないものがあるから、人はたずねあうのですね」');
      await narr('塔の光がやわらいだ。街じゅうの人が、それぞれの言葉で話しはじめる。');
      await gainExp(40);
      await clearChapter(13);
      S.ch = 14; save();
      await showEnding('ACT 3 ── THE END', `知らない言葉が、まだ見ぬ世界への扉になる。<br>そして、あなたの言葉「${esc(S.myword.name)}」が、だれかの扉になる。`);
      pulseTracker();
    } },
  { id: 'john', name: '旅人ジョン', map: 'future', x: 5, y: 7, dir: 'right', look: 'john', hello: H3.john, offer: () => !has('bilong'),
    talk: async e => {
      if (!has('bilong')) {
        await say(e, 'パプアニューギニアには、800をこえる言語があると言われてる。だから、みんなで通じあえる言葉が生まれたんだ。');
        await say(e, 'トク・ピシン。英語なんかをもとにして生まれて、いまでは子どもたちの母語にもなってる。');
        await say(e, '«bilong» は英語の belong から。「haus bilong mi」で「わたしの家」さ。');
        await acquire('bilong', '旅人ジョン', '未来の港');
        await giveCard('creole'); return;
      }
      await say(e, 'ことばは、いまも生まれてる。ぼくらの言葉が、その証拠さ。');
    } },
  { id: 'laila', name: '音楽家ライラ', map: 'future', x: 19, y: 7, dir: 'left', look: 'laila', hello: H3.laila, offer: () => !has('tarab'),
    talk: async e => {
      if (!has('tarab')) {
        await say(e, '翻訳機は、わたしの歌を「いい歌」としか訳さなかったの。……ひどいでしょう？');
        await say(e, 'アラビア語には «طرب（タラブ）» という言葉があるわ。音楽に心をゆさぶられて、我を忘れるほどの感動のこと。');
        await acquire('tarab', '音楽家ライラ', '未来の港'); return;
      }
      await say(e, 'タラブは、歌い手と聴き手がいっしょに生むもの。言葉も、きっと同じね。');
    } },
  { id: 'uta', name: '生物学者ウタ', map: 'future', x: 8, y: 9, dir: 'down', look: 'uta', hello: H3.uta, offer: () => !has('umwelt'),
    talk: async e => {
      if (!has('umwelt')) {
        await say(e, '犬はにおいの世界に、コウモリは音のこだまの世界に生きている。同じ場所にいても、見えている世界はちがうのよ。');
        await say(e, 'ユクスキュルという生物学者は、それを «Umwelt（環世界）» と呼んだわ。');
        await acquire('umwelt', '生物学者ウタ', '未来の港');
        await giveCard('umweltc'); return;
      }
      await say(e, '言葉のちがいも、きっと小さな環世界のちがい。だから、のぞきあうと面白いのよ。');
    } },
  { id: 'emo', name: 'デザイナーのエモ', map: 'future', x: 17, y: 9, dir: 'down', look: 'emo', offer: () => !has('emoji'),
    talk: async e => {
      if (!has('emoji')) {
        await say(e, 'わたし、絵文字のデザインをしてるの。«emoji» って、日本語の「絵＋文字」がそのまま世界の言葉になったのよ。');
        await say(e, '英語の emotion に似てるけど、ぜんぜん関係ないの。ただの偶然！');
        await acquire('emoji', 'デザイナーのエモ', '未来の港');
        await giveCard('loan'); return;
      }
      await say(e, '「パン」はポルトガル語から来たって知ってた？ 言葉は、行ったり来たりしてるのね。');
    } },
  { id: 'kiosk', map: 'future', x: 22, y: 5, kind: 'obj', draw: 'kiosk',
    talk: async () => {
      await narr('翻訳キオスク。「こんにちは」と話しかけると、42か国語で返事をしてくれる。');
      await narr('「SAUDADE」と入力すると……「さびしい（※ニュアンスが失われる場合があります）」と表示された。');
      await giveCard('mt');
    } },
  { id: 'f_fu1', map: 'future', x: 4, y: 10, kind: 'foe', foe: 'flat', wander: 2 },
  { id: 'f_fu2', map: 'future', x: 21, y: 10, kind: 'foe', foe: 'flat', wander: 2 },
  { id: 'spk_fu1', map: 'future', x: 24, y: 8, kind: 'sparkle', solid: false },
);

EXTRA_TITLES.push(['オノマトペ名人', () => SPIRITS.every(s => has(s.w))], ['ことばの生みの親', () => !!S.myword]);

/* ===================== ACT 3 START & NEXT ===================== */
async function startAct3() {
  if (flag('act3')) return;
  setf('act3');
  await showCard('ACT 3', 'ことばの 未来へ', '');
  await showCard('CHAPTER 10', CHAPTERS[10], '');
  await narr('マルコ「また新しい航路が開けたぞ！ 音の森、南の島、祭りの夜、それから未来の港だ」');
  pulseTracker();
}
async function act3Resume() { applyMyWord(); if (S.ch >= 10 && !flag('act3')) await startAct3(); }
const objectiveAct2 = objective;
objective = function () {
  if (S.ch < 10 || S.ch > 13) return objectiveAct2();
  const ch = S.ch, m = MAP ? MAP.id : 'town';
  const boat = dest => ({ t: `マルコの船で『${dest}』へ行こう`, h: '東の桟橋にいるマルコに話しかけると、船で出発できる。', g: npcAt('marco') });
  if (ch === 10) {
    if (m !== 'ono') return boat('オノマトペの森');
    const s = SPIRITS.find(x => !has(x.w));
    if (s) return { t: `音の精に、ぴったりのオノマトペをつけよう（${onoCount()}/8）`, h: '光る精霊を調べると、どんな音や感じかを教えてくれる。いちばん合うオノマトペを選ぼう。', g: { map: 'ono', x: s.x, y: s.y, id: 'sp_' + s.w } };
    return { t: '森の奥の「音の岩戸」を調べよう', h: '濁点（゛）がつくと、音はどう変わる？ ボスには SHIIN・SHITOSHITO・FUWAFUWA が響きそうだ。', g: { map: 'ono', x: 11, y: 1 } };
  }
  if (ch === 11) {
    if (m !== 'ryukyu') return boat('しまくとぅばの島');
    if (!flag('ry_learn')) return { t: 'カマドおばあと話そう', h: '赤瓦の家の前にいる。', g: npcAt('kamado') };
    if (!flag('ry_done')) return { t: '孫のカイに、おばあの言葉を教えよう', h: '男の人と女の人で、あいさつが変わることに注意。', g: npcAt('kai') };
    return { t: '村のはずれの御嶽（うたき）へ', h: 'ボスには YUIMAARU・NANKURUNAISA・CHIMUDONDON・IRANKARAPTE・JEONG が響きそうだ。', g: { map: 'ryukyu', x: 13, y: 2 } };
  }
  if (ch === 12) {
    if (m !== 'fest') return boat('方言まつり');
    if (!flag('fe_theater')) return { t: 'まんなかの影絵芝居を見よう', h: '幕を調べよう。', g: { map: 'fest', x: 14, y: 4 } };
    const need = [['honma', 'osaka'], ['gabai', 'saga'], ['oyattosaa', 'kagoshima'], ['menkoi', 'hokkaido']].find(([w]) => !has(w));
    if (need) return { t: '屋台をまわって、各地の方言に出会おう', h: '大阪・佐賀・鹿児島・北海道の人と話そう。', g: npcAt(need[1]) };
    if (!S.cards.includes('dosa')) return { t: '津軽のじっちゃに話しかけよう', h: '「どさ？」と聞かれたら……？', g: npcAt('tsugaru') };
    return { t: '司会のハナに話しかけよう', h: '祭りのしめくくり。ボスには （　　）・HONMA・MENKOI・OYATTOSAA・GABAI が響きそうだ。', g: npcAt('mc') };
  }
  if (m !== 'future') return boat('未来の港');
  return { t: 'ガラスの塔「完全翻訳機」を調べよう', h: '訳しきれない言葉（SAUDADE・HIRAETH・TOSKA・AMAE・JEONG・TARAB・UMWELT など）と、あなた自身の言葉が響きそうだ。', g: { map: 'future', x: 12, y: 5 } };
};
