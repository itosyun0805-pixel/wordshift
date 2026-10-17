// WORDSHIFT — ACT 2: more words & cultures, greetings, pronunciation, daily bonus, example sentences,
// thought-experiment cards, and four new lands (Gavagai island / dialect valley / archive of time / first fire).

/* ===================== MORE WORDS (16) ===================== */
Object.assign(ICON_PAT, {
  bfly: ['01000010', '11100111', '11111111', '01111110', '00111100', '01111110', '11100111', '01000010'],
  house: ['00011000', '00111100', '01111110', '11111111', '01111110', '01100110', '01100110', '01111110'],
  book: ['01111110', '11000011', '11011011', '11000011', '11011011', '11000011', '11111111', '00000000'],
  knot: ['01100110', '10011001', '10011001', '01100110', '01100110', '10011001', '10011001', '01100110'],
  scale: ['00011000', '11111111', '10011001', '10011001', '11011011', '00011000', '00111100', '01111110'],
});
const W2 = {
  gigil: { name: 'GIGIL', mini: 'GIGIL', lang: 'タガログ語', icon: 'heart', color: '#ff9ad0', rar: 'C', kana: 'ギギル',
    desc: 'かわいすぎるものを見て、ぎゅっとつねったり抱きしめたりしたくなる、たまらない衝動。',
    lens: 'あふれる「いとしさ」に注目できる。いとしさのモヤに響く。', curse: '加減知らず：大切なものほど、強く握りしめたくなる。',
    cast: '「かわいすぎて、ぎゅーってしたくなるね」', hint: 'ルゥナ島のフィリピンの旅人が知っている（第6章）',
    ex: ['Nanggigigil ako sa baby!', '赤ちゃんがかわいすぎて、たまらない！'],
    fact: '心理学でも「かわいい攻撃性（cute aggression）」として研究されている感情。かわいさに圧倒されたとき、心のバランスをとるための反応だという説がある。',
    vs: { w: 'kilig', t: 'GIGIL は「かわいすぎて、つねりたくなる」衝動。KILIG は「恋のときめきで、そわそわする」感じ。' },
    quiz: ['子犬がかわいすぎて、ほっぺをむにっとつまみたくなる。', '赤ちゃんの小さな手を見て、思わず歯をくいしばるほど、たまらない。'], tts: ['gigil', 'fil-PH'] },
  kilig: { name: 'KILIG', mini: 'KILIG', lang: 'タガログ語', icon: 'bfly', color: '#ffb0e8', rar: 'C', kana: 'キリグ',
    desc: '恋や好きな人のことを思って、胸がきゅんとして、そわそわ浮き立つ感じ。',
    lens: '「ときめき」に注目できる。いとしさのモヤに響く。', curse: '恋愛脳：ただの親切まで、恋のサインに見えてしまう。',
    cast: '「胸がきゅんってするね」', hint: 'ルゥナ島のフィリピンの旅人が知っている（第6章）',
    ex: ['Kinikilig ako!', 'きゅんきゅんしちゃう！'],
    fact: 'フィリピンの日常会話でとてもよく使われる言葉で、オックスフォード英語辞典にも英単語として採録されている。',
    vs: { w: 'gigil', t: 'KILIG は「恋のときめき」でそわそわする感じ。GIGIL は「かわいすぎて、つねりたくなる」衝動。' },
    quiz: ['好きな人からメッセージが来て、顔がゆるんで足をばたばたさせたくなる。', '映画の告白シーンで、自分のことのように胸がきゅんとする。'], tts: ['kilig', 'fil-PH'] },
  hiraeth: { name: 'HIRAETH', mini: 'HIRAETH', lang: 'ウェールズ語', icon: 'house', color: '#7ac0a0', rar: 'R', kana: 'ヒライス',
    desc: '帰ることのできない故郷、あるいは、一度も存在しなかったかもしれない故郷への、深い郷愁。',
    lens: '失われた「わが家」への想いに注目できる。郷愁や遠いふるさとのモヤに響く。', curse: '幻の故郷：いまの居場所が、仮住まいに思えてしまう。',
    cast: '「もう戻れない場所を、ずっと想っているんだね」', hint: 'ルゥナ島の桟橋にいるウェールズの船乗りが知っている（第6章）',
    ex: ['Mae gen i hiraeth am Gymru.', 'ウェールズが恋しくてたまらない'],
    fact: '土地や言葉そのものへの愛着と結びつけて語られることが多い。ウェールズ語は一時話し手を大きく減らしたが、学校教育などを通じて話し手を増やす取り組みが続いている。',
    vs: { w: 'saudade', t: 'SAUDADE は「遠くにある大切なもの」への想い。HIRAETH は「もう戻れない、あるいは存在しなかった故郷」への想い。' },
    quiz: ['子どものころの町は、もう跡形もない。それでも、あの町に帰りたい。', '行ったこともないはずの、なつかしい「ふるさと」の夢を見る。'], tts: ['hiraeth', 'cy-GB'] },
  dandan: { name: 'DANDAN', mini: 'DANDAN', lang: '日本語（出雲・伊予などの方言）', icon: 'people', color: '#e8c090', rar: 'R', kana: 'だんだん',
    desc: '「ありがとう」。出雲（島根）や伊予（愛媛）などで使われてきた、感謝のことば。',
    lens: '土地のことばで、気持ちを受け取れる。気おくれのモヤや正しさの番人に響く。', curse: '内輪ことば：通じない相手にまで、そのまま使ってしまう。',
    cast: '「だんだん。ほんに、だんだん」', hint: '方言の谷・上の里のお母さんが知っている（第7章）',
    ex: ['ほんに、だんだん。', '本当に、ありがとう'],
    fact: '「重ね重ね（段々）ありがとう」が縮まった言葉だといわれる。松江を舞台にしたNHKの連続テレビ小説のタイトルにもなった。',
    vs: { w: 'kowai', t: 'DANDAN は、知らない人にも「感謝の言葉らしい」と想像しやすい。KOWAI は標準語と同じ音で意味が違うので、すれ違いやすい。' },
    quiz: ['畑でとれた野菜をもらって、土地のことばでお礼を言う。', '「ありがとう」を、祖母の口ぐせのまま言ってみる。'], tts: ['だんだん', 'ja-JP'] },
  kowai: { name: 'KOWAI', mini: 'KOWAI', lang: '日本語（北海道・東北などの方言）', icon: 'rain', color: '#a0b0d8', rar: 'C', kana: 'こわい',
    desc: '「疲れた」「しんどい」。北海道や東北などの方言。標準語の「怖い」と同じ音で、意味がちがう。',
    lens: '同じ音でも意味がちがうことに気づける。疲れのモヤに響く。', curse: '早とちり：同じ音を、いつも自分の意味で聞いてしまう。',
    cast: '「こわかったね。ゆっくり休んで」', hint: '方言の谷・上の里の長老が知っている（第7章）',
    ex: ['あー、こわい。', 'ああ、疲れた'],
    fact: '同じ形で意味がちがう方言は、すれ違いのもと。「なげる（＝捨てる）」「えらい（＝疲れた）」なども、地域によって意味が変わる例として知られる。',
    vs: { w: 'dandan', t: 'KOWAI は標準語と同じ音で意味が違うので、すれ違いやすい。DANDAN は、知らない人にも感謝の言葉だと想像しやすい。' },
    quiz: ['一日じゅう雪かきをして、体がくたくた。土地の言葉でひとこと。', '長い坂をのぼりきって、「もう、へとへとだ」と言いたい。'], tts: ['こわい', 'ja-JP'] },
  jeong: { name: 'JEONG', mini: 'JEONG', lang: '韓国語（정）', icon: 'knot', color: '#e89a7a', rar: 'R', kana: 'ジョン',
    desc: '長い時間をともに過ごすうちに、いつのまにか育っている、深い情や愛着。好き嫌いを超えた結びつき。',
    lens: '時間が育てた「情」に注目できる。気おくれや妬みのモヤ、バベルの影に響く。', curse: '情に流され：離れたほうがいい関係まで、手放せなくなる。',
    cast: '「いつのまにか、情がわいちゃったね」', hint: '方言の谷・都にいる韓国の旅人が知っている（第7章）',
    ex: ['미운 정 고운 정', '憎らしい情も、いとしい情も'],
    fact: '「憎い情、きれいな情（미운 정 고운 정）」という言い回しがあるように、良いことも悪いことも一緒にくぐり抜けた相手への情を表す。',
    vs: { w: 'ubuntu', t: 'UBUNTU は「人は人を通して人になる」という、つながりの考え方。JEONG は、特定の誰かと時間をかけて育った情。' },
    quiz: ['ケンカばかりの幼なじみ。それでも、いないとさびしい。', '十年使った古い自転車。手放そうとしたら、なぜか胸が痛む。'], tts: ['정', 'ko-KR'] },
  sobremesa: { name: 'SOBREMESA', mini: 'SOBREMESA', lang: 'スペイン語', icon: 'cup', color: '#e0a060', rar: 'C', kana: 'ソブレメサ',
    desc: '食事が終わったあとも席を立たずに、おしゃべりを楽しむ時間。',
    lens: 'ゆったりした「語らい」に注目できる。疲れのモヤに響く。', curse: '長居：帰るべき時間を忘れてしまう。',
    cast: '「もう少しだけ、ここで話していこうよ」', hint: '方言の谷・都にいるスペインの料理人が知っている（第7章）',
    ex: ['Nos quedamos de sobremesa.', '食後のおしゃべりを楽しんだ'],
    fact: 'sobre（上）＋ mesa（テーブル）で「テーブルの上」。スペインでは昼食後のソブレメサが長く続くことも珍しくない。',
    vs: { w: 'hygge', t: 'HYGGE は空間や時間の「心地よさ」全体。SOBREMESA は、食後のテーブルでの「語らいの時間」。' },
    quiz: ['食べ終わったお皿をそのままに、家族と一時間もしゃべっていた。', 'ランチのあと、だれも席を立たずに話が止まらない。'], tts: ['sobremesa', 'es-ES'] },
  gezellig: { name: 'GEZELLIG', mini: 'GEZELLIG', lang: 'オランダ語', icon: 'people', color: '#f0a040', rar: 'C', kana: 'ヘゼリッヒ',
    desc: '人と一緒にいることでうまれる、あたたかく、居心地のいい雰囲気。',
    lens: '「いっしょにいる楽しさ」に注目できる。孤独のモヤに響く。', curse: '群れ好き：ひとりの時間を、さびしいものだと決めつけてしまう。',
    cast: '「みんなでいると、なんだかいいね」', hint: '方言の谷の舟乗り（オランダ出身）が知っている（第7章）',
    ex: ['Wat gezellig!', 'なんて居心地がいいの！'],
    fact: 'オランダでは、場所・人・時間など、あらゆるものに使われる。「楽しかったね」の意味で、別れぎわにも口にする。',
    vs: { w: 'hygge', t: 'HYGGE はひとりでも味わえる「くつろぎ」。GEZELLIG は「人と一緒にいること」の心地よさが中心だと言われる。' },
    quiz: ['狭いカフェに友だちがぎゅうぎゅうに集まって、笑い声が絶えない。', '親戚が集まった夜、にぎやかで、なんだかあたたかい。'], tts: ['gezellig', 'nl-NL'] },
  tsundoku: { name: 'TSUNDOKU', mini: 'TSUNDOKU', lang: '日本語（積ん読）', icon: 'book', color: '#c8a878', rar: 'C', kana: 'つんどく',
    desc: '本を買ったのに読まずに、積んだままにしておくこと。',
    lens: '積もった「いつか」に注目できる。積み本のモヤに響く。', curse: '積み癖：始めることより、集めることが目的になってしまう。',
    cast: '「読まなくても、そこにあるだけでいいんだよ」', hint: '時の書庫の司書が知っている（第8章）',
    ex: ['机の横が積ん読の山だ。', 'a tower of unread books beside the desk'],
    fact: '「積んでおく」と「読書（どく）」をかけたしゃれから生まれた言葉で、明治時代には使われていたといわれる。いまでは英語圏でも tsundoku として紹介される。',
    vs: { w: 'wabisabi', t: 'TSUNDOKU は「読まずに積む」行い。WABI-SABI は「欠けや古び」に美を見るまなざし。' },
    quiz: ['本屋に行くたび買ってしまい、読んでいない本が床に山になっている。', '「いつか読む」本で、本棚がもう入らない。'], tts: ['つんどく', 'ja-JP'] },
  schadenfreude: { name: 'SCHADENFREUDE', mini: 'SCHADEN', lang: 'ドイツ語', icon: 'eye', color: '#a07ad0', rar: 'R', kana: 'シャーデンフロイデ',
    desc: '他人の失敗や不幸を見て、ひそかに感じてしまう喜び。',
    lens: 'ねじれた「喜び」に気づける。ただし、多くのモヤにはラベルになってしまう。', curse: '意地悪：だれかの失敗を、どこかで待ってしまう。',
    cast: '「……ちょっとだけ、ざまあみろって思った？」', hint: '時の書庫のドイツの学者が知っている（第8章）',
    ex: ['Schadenfreude ist die schönste Freude.', '他人の不幸は蜜の味（ドイツのことわざ）'],
    fact: 'Schaden（損害）＋ Freude（喜び）。英語にもそのまま借用されている。日本語なら「他人の不幸は蜜の味」が近い。',
    vs: { w: 'mudita', t: 'SCHADENFREUDE は「他人の不幸を喜ぶ」気持ち。MUDITA はその反対で、「他人の幸せを喜ぶ」気持ち。' },
    quiz: ['いつも自慢ばかりのクラスメイトが、発表で盛大に噛んだ。思わずにやり。', 'ライバルのチームが負けたと聞いて、少しうれしくなってしまった。'], tts: ['Schadenfreude', 'de-DE'] },
  mudita: { name: 'MUDITA', mini: 'MUDITA', lang: 'パーリ語（仏教のことば）', icon: 'sun', color: '#f0d070', rar: 'L', kana: 'ムディター',
    desc: '他の人の幸せや成功を、自分のことのように喜ぶ心。',
    lens: '「ともに喜ぶ」心で、妬みをほどける。妬みのモヤやバベルの影に響く。', curse: '作り笑い：自分の悔しさまで、なかったことにしてしまう。',
    cast: '「あなたがうれしいと、わたしもうれしい」', hint: '時の書庫のスリランカの学者が知っている（第8章）',
    ex: ['muditā（喜）', '慈・悲・喜・捨の「喜」'],
    fact: '仏教で大切にされる四つの心（四無量心：慈・悲・喜・捨）のひとつ「喜」にあたる。',
    vs: { w: 'schadenfreude', t: 'MUDITA は「他人の幸せを喜ぶ」心。SCHADENFREUDE はその反対で、「他人の不幸を喜ぶ」気持ち。' },
    quiz: ['親友がずっと目指していた賞をとった。自分のことのようにうれしい。', '妹がはじめて自転車に乗れた。見ているこっちまで笑顔になる。'], tts: ['ムディター', 'ja-JP'] },
  sisu: { name: 'SISU', mini: 'SISU', lang: 'フィンランド語', icon: 'arrow', color: '#7ab0e8', rar: 'R', kana: 'シス',
    desc: '困難の中でも、あきらめずに踏ん張りつづける、内なる粘り強さ。',
    lens: 'ふんばる力に注目できる。疲れのモヤに響く。', curse: '無理しすぎ：休むべきときまで、歯を食いしばってしまう。',
    cast: '「あと一歩だけ、ふんばってみよう」', hint: 'はじまりの火のそばにいるフィンランドの旅人が知っている（第9章）',
    ex: ['Hänellä on sisua.', '彼にはシスがある（根性がある）'],
    fact: 'フィンランドの国民性を表す言葉として語られることが多く、とくに第二次世界大戦の「冬戦争」の記憶と結びつけて語られる。',
    vs: { w: 'lagom', t: 'SISU は「限界をこえてふんばる」力。LAGOM は「ちょうどいいところで止める」知恵。' },
    quiz: ['もう足が動かない。それでも、ゴールまで走りきる。', '何度失敗しても、歯を食いしばって、もう一度挑む。'], tts: ['sisu', 'fi-FI'] },
  lagom: { name: 'LAGOM', mini: 'LAGOM', lang: 'スウェーデン語', icon: 'scale', color: '#a0d8c8', rar: 'C', kana: 'ラーゴム',
    desc: '多すぎず少なすぎず、ちょうどいい加減。',
    lens: '「ほどほど」の知恵に注目できる。完璧や積み本のモヤ、正しさの番人に響く。', curse: '日和見：本気を出すべきときまで、ほどほどで止めてしまう。',
    cast: '「ちょうどいいくらいで、いいんだよ」', hint: 'はじまりの火のそばにいるスウェーデンの旅人が知っている（第9章）',
    ex: ['Lagom är bäst.', 'ほどほどがいちばん'],
    fact: '「ほどほどがいちばん（Lagom är bäst）」ということわざがある。「仲間で回し飲みするとき、みんなに行きわたる量」という語源の話が有名だが、確かな根拠はないとされる。',
    vs: { w: 'sisu', t: 'LAGOM は「ちょうどいいところで止める」知恵。SISU は「限界をこえてふんばる」力。' },
    quiz: ['ごはんは腹八分目。おいしいけれど、食べすぎない。', '働きすぎず、怠けすぎず、ちょうどいいペースで続ける。'], tts: ['lagom', 'sv-SE'] },
  yuanfen: { name: 'YUANFEN', mini: 'YUANFEN', lang: '中国語（缘分）', icon: 'knot', color: '#e86060', rar: 'R', kana: 'ユェンフェン',
    desc: '人と人とを引き合わせる、めぐりあわせ。運命的な縁。',
    lens: '出会いの「縁」に注目できる。意味のモヤやバベルの影に響く。', curse: '運命論：うまくいかない関係も「縁がなかった」で終わらせてしまう。',
    cast: '「ここで会えたのも、きっと縁だね」', hint: 'はじまりの火のそばにいる中国の旅人が知っている（第9章）',
    ex: ['我们很有缘分。', 'わたしたちには縁がある'],
    fact: '仏教の「縁」の考えとも結びつく言葉。「有缘无分（縁はあるが、ともにいる定めはない）」のように、縁（めぐりあう）と分（結ばれる定め）を分けて言うこともある。',
    vs: { w: 'jeong', t: 'YUANFEN は出会いを引き寄せる「めぐりあわせ」。JEONG は、出会ったあとに時間が育てる「情」。' },
    quiz: ['旅先で偶然となりに座った人が、同じ町の出身だった。', '何年も離れていた友だちと、知らない駅でばったり再会した。'], tts: ['缘分', 'zh-CN'] },
  cafune: { name: 'CAFUNÉ', mini: 'CAFUNE', lang: 'ポルトガル語（ブラジル）', icon: 'heart', color: '#f0b090', rar: 'C', kana: 'カフネ',
    desc: '大切な人の髪に、やさしく指をすべらせてなでること。',
    lens: 'そっと触れるやさしさに注目できる。いとしさや遠いふるさとのモヤに響く。', curse: 'かまいすぎ：ひとりになりたい人にまで、手をのばしてしまう。',
    cast: '「よしよし、だいじょうぶ」', hint: 'はじまりの火のそばにいるブラジルの旅人が知っている（第9章）',
    ex: ['Faz um cafuné em mim?', '髪をなでてくれる？'],
    fact: 'アフリカのキンブンド語に由来するとされ、ブラジルのポルトガル語に根づいた言葉。',
    vs: { w: 'saudade', t: '同じポルトガル語でも、SAUDADE は「遠くにいる人」への想い、CAFUNÉ は「すぐそばの人」へのやさしい仕草。' },
    quiz: ['眠れない子どもの頭を、ゆっくりなでてあげる。', 'ひざまくらで、恋人の髪にそっと指をとおす。'], tts: ['cafuné', 'pt-BR'] },
  amae: { name: 'AMAE', mini: 'AMAE', lang: '日本語（甘え）', icon: 'cup', color: '#f0c0d8', rar: 'R', kana: 'あまえ',
    desc: '相手の好意をあてにして、安心してよりかかること。受け入れてもらえると信じているからこその、ふるまい。',
    lens: '「よりかかれる関係」に注目できる。遠いふるさとのモヤに響く。', curse: 'もたれかかり：相手の負担に気づけなくなる。',
    cast: '「たまには、甘えていいんだよ」', hint: 'はじまりの火の語り部が知っている（第9章）',
    ex: ['子どもが母親に甘える。', 'a child leaning on a parent\'s kindness'],
    fact: '精神科医の土居健郎が『「甘え」の構造』（1971）で日本人の心理を読み解く鍵として論じ、海外でも amae として知られるようになった。',
    vs: { w: 'jeong', t: 'AMAE は相手の好意に「よりかかる」心の動き。JEONG は、時間をかけて二人のあいだに育つ「情」。' },
    quiz: ['疲れて帰った日、家族に「今日はごはん作って」と頼んでみる。', '親しい友だちにだけは、わがままを言えてしまう。'], tts: ['あまえ', 'ja-JP'] },
};
Object.assign(WORDS, W2);
WORD_ORDER.push(...Object.keys(W2));
const TTS1 = { saudade: ['saudade', 'pt-PT'], depaysement: ['dépaysement', 'fr-FR'], hygge: ['hygge', 'da-DK'], goluboy: ['голубой', 'ru-RU'], komorebi: ['こもれび', 'ja-JP'],
  toska: ['тоска', 'ru-RU'], nayra: ['nayra', 'ay'], fernweh: ['Fernweh', 'de-DE'], wabisabi: ['わびさび', 'ja-JP'], mononoaware: ['もののあわれ', 'ja-JP'],
  ergk: ['Gizonak', 'eu-ES'], mis: ['kırılmış', 'tr-TR'], ubuntu: ['ubuntu', 'zu-ZA'], mamihlapinatapai: ['mamihlapinatapai', 'yag'], iktsuarpok: ['iktsuarpok', 'iu'] };
for (const k in TTS1) WORDS[k].tts = TTS1[k];
Object.assign(CHAPTERS, { 6: 'ガヴァガイの島', 7: '方言の谷', 8: '時の書庫', 9: 'はじまりの火' });

/* ===================== THOUGHT CARDS ===================== */
const FIELDS = { phil: '言語哲学', cog: '認知言語学', soc: '社会言語学', hist: '歴史言語学', evo: '進化言語学', cult: '文化進化' };
const CARDS = {
  whorf: { f: 'cog', t: 'サピア＝ウォーフ仮説（言語相対性）', who: 'E.サピア／B.L.ウォーフ',
    b: '「話す言語が、ものの見方や考え方に影響する」という考え。言語が思考を完全に決めるという「強い仮説」は、いまではほとんど支持されていない。一方、言語が注意や記憶、区別のしやすさにさりげなく影響するという「弱い仮説」には、色・時間・方向などで多くの実験的な裏づけがある。このゲームの「レンズ」は、弱い仮説のほう。',
    q: 'GOLUBOY を知らなかったら、明るい青と濃い青は見分けられない？',
    o: [['見分けられない', '実験では、言葉がなくても色の違い自体は見分けられる。言葉は「区別を速く、目立たせる」手がかりになる、というのが多くの研究の示すところ。'],
      ['見分けられるが、気づきにくい', '多くの研究が支持するのは、この考えに近い。言葉は、注意を向ける先をそっと変える。'],
      ['まったく関係ない', '言葉がなくても見えるのは確か。でも、区別の速さや記憶には、言葉の影響が出ることがわかっている。']] },
  nod: { f: 'cult', t: 'うなずきは「はい」？',
    b: '多くの地域で、うなずきは「はい」、首振りは「いいえ」を表す。けれどブルガリアなどでは、伝統的に意味が逆になるとも言われる。身ぶりもまた、文化の中で学ばれる「ことば」のひとつ。',
    q: '身ぶりは、世界共通だと思う？',
    o: [['ほとんど共通', '笑顔のように広く共通するものもあるが、指のサインやうなずきのように、地域で意味が変わるものも多い。'], ['かなり違う', 'そのとおり。身ぶりも、その土地で学ばれる記号のひとつ。']] },
  gavagai: { f: 'phil', t: 'ガヴァガイ（翻訳の不確定性）', who: 'W.V.O.クワイン『ことばと対象』（1960）',
    b: '知らない言語の話し手が、うさぎを見て「Gavagai」と言う。それは「うさぎ」か、「うさぎのくっついた部分」か、「うさぎの一瞬の姿」か。どれだけ指さして確かめても、観察だけでは意味を一つに決めきれない ── 哲学者クワインはこれを「翻訳の不確定性」と呼んだ。',
    q: 'それでも、わたしたちはなぜ言葉を覚えられるのだろう？',
    o: [['相手も同じものに注目していると信じるから', '共有された注意や、「相手は筋の通ったことを言っているはず」という前提（寛容の原理）が、推測を支えている。'],
      ['子どもには生まれつきの手がかりがあるから', '発達心理学では、子どもは新しい言葉を「ものの全体」の名前だと仮定しやすい、などの傾向が知られている。'],
      ['実は、完全には覚えていない', '鋭い！ わたしたちは「だいたい同じ」意味を共有しているだけ、という見方もある。']] },
  wholeobj: { f: 'cog', t: '事物全体バイアス', who: 'E.マークマンほか',
    b: '幼い子どもは、知らない言葉を聞くと、それを「部分」や「色」ではなく「もの全体」の名前だと考えやすい。こうした傾向が、ガヴァガイ問題のような無数の可能性を、実際の学習ではぐっと絞りこんでいると考えられている。',
    q: 'あなたが「Gavagai＝うさぎ」と考えたのは？',
    o: [['いちばん自然だから', 'その「自然さ」こそが、言葉の学習を支える心の傾向かもしれない。'], ['なんとなく', 'その「なんとなく」に、たくさんの心の仕組みが働いている。']] },
  continuum: { f: 'soc', t: '方言連続体',
    b: '隣の村どうしは通じるのに、端と端の村ではほとんど通じない ── そんなふうに、言葉が少しずつ変わりながら地続きにつながっている状態。どこからが「別の言語」なのか、言葉だけでは線を引けないことを教えてくれる。',
    q: 'どこからが「別の言語」だと思う？',
    o: [['通じなくなったら別の言語', 'わかりやすい基準。でも連続体では「どこで通じなくなるか」がはっきりしない。'], ['国や文字で決まる', '実際には、国境や文字、歴史や政治が線引きを大きく左右している。'], ['線は引けない', '言語学者の多くも、その線は言葉そのものからは決まらないと考えている。']] },
  army: { f: 'soc', t: '「言語とは、陸軍と海軍をもつ方言である」', who: 'マックス・ヴァインライヒが広めた言葉',
    b: '何を「言語」と呼び、何を「方言」と呼ぶかは、言葉の違いの大きさよりも、国家や歴史、力関係で決まることが多い ── それを皮肉たっぷりに言い表した有名な一文。方言は「崩れた標準語」ではなく、それぞれに規則をもつ体系だ。',
    q: '標準語と方言、どちらかが「正しい」と思う？',
    o: [['標準語が正しい', '標準語は「共通語」としてとても便利。でも、それは正しさというより、取り決めの便利さだ。'], ['どちらも正しい', '言語学的には、どの方言も規則をもった、完全な言葉だ。'], ['場面による', '場面ごとの使い分け（コードスイッチング）は、多くの人が自然にしていること。']] },
  shuken: { f: 'soc', t: '方言周圏論', who: '柳田國男『蝸牛考』（1930）',
    b: '柳田國男は「かたつむり」の呼び名を全国で調べ、京都を中心に、デデムシ・マイマイ・カタツムリ・ツブリ・ナメクジと、同心円のように分布していることを見つけた。中心で生まれた新しい言葉が波紋のように広がり、古い言葉が遠い外側に残る、という考え。すべての言葉に当てはまるわけではないが、方言研究の古典として知られる。',
    q: '遠く離れた土地どうしで、同じ古い言葉が残っていたら？',
    o: [['そこが言葉のはじまりの地', '逆かもしれない。周圏論では、両端に残る言葉こそ「古い層」だと考える。'], ['中心から言葉が広がった証拠', '周圏論の考え方そのもの！ ただし、すべての分布がこれで説明できるわけではない。']] },
  grimm: { f: 'hist', t: 'グリムの法則', who: 'ヤーコプ・グリム（1822）ほか',
    b: 'ラテン語 pater と英語 father、piscis と fish、tres と three。ゲルマン系の言語では、むかしの p・t・k が f・th・h に規則的に変わった。音の変化が「規則的」だからこそ、言語どうしの親戚関係をたどり、失われた祖先の言葉を再建できる（比較方法）。',
    q: '音の変化が「規則的」なのは、なぜだと思う？',
    o: [['誰かが決めたから', '誰も決めていない！ 話し手の発音が少しずつずれ、世代を通じて広がった結果、規則のように見える。'], ['発音のクセが、まとめて変わるから', 'そう。一語ずつではなく「音」そのものが変わるので、その音を含む語がそろって変わる。']] },
  haha: { f: 'hist', t: 'ハ行のむかし（p → ɸ → h）', who: '『後奈良院御撰何曾』（1516）',
    b: '「母には二度会ひたれど、父には一度も会はず」── 答えは「くちびる」。当時「はは」は「ふぁふぁ」のように、上下のくちびるを合わせて発音されていたらしい。さらに昔は「ぱぱ」に近い音だったと考えられている。日本語のハ行は p → ɸ → h と変わってきた。',
    q: 'ひよこが「ぴよぴよ」と鳴くのは、偶然？',
    o: [['偶然', '偶然かもしれない。でも擬音語には、古い p の音が残りやすいという見方もある。'], ['古い音が残っている', '面白い見方！ 擬音語・擬態語には、昔の音の名残がひそんでいるとも言われる。']] },
  isolate: { f: 'hist', t: '語族と孤立言語',
    b: 'ヒンディー語、ペルシア語、ロシア語、英語、ウェールズ語は、遠い親戚（インド・ヨーロッパ語族）。フィンランド語とハンガリー語はウラル語族。一方バスク語には、確かな親戚が見つかっていない「孤立言語」だ。日本語は琉球諸語とともに日琉語族をなし、それより外の親戚関係はわかっていない。',
    q: '親戚のいない言語って、どう思う？',
    o: [['さびしい', 'でも、ほかのどの言語とも違う見方を、ひとつ守ってきた言語でもある。'], ['特別でかっこいい', '言語学者にとっても、とびきり大切な手がかりだ。']] },
  ranuki: { f: 'soc', t: '「ら抜き言葉」は乱れ？',
    b: '「見られる」を「見れる」と言う「ら抜き」。誤りとされがちだが、「見られる（受身）」と「見れる（可能）」を言い分けられる、筋の通った変化だという見方も強い。言葉の「あるべき姿」を決める立場（規範）と、「実際の使われ方」を記録する立場（記述）。言語学は、主に後者の目で言葉を見る。',
    q: '新しい言い方を聞いたら、どう感じる？',
    o: [['気になる', 'その感覚も自然なこと。言葉は、世代や地域のアイデンティティと結びついている。'], ['言葉は変わるもの', 'いま「正しい」言葉の多くも、かつては「新しい言い方」だった。']] },
  bouba: { f: 'cog', t: 'ブーバ／キキ効果', who: 'W.ケーラー（1929）／ラマチャンドラン＆ハバード（2001）',
    b: 'まるい形ととがった形、どちらが「ブーバ」でどちらが「キキ」？ 多くの言語の話し手が、まるい方を「ブーバ」と答える（ある実験では約95％）。音と意味の結びつきは基本的に恣意的だとされるが、その中にも「音象徴」という結びつきがひそんでいる。',
    q: '「もふもふ」と「ちくちく」。どちらが柔らかそう？',
    o: [['もふもふ', 'ほとんどの人がそう答える。音そのものに、手ざわりのイメージがある。'], ['ちくちく', '少数派！ でも、なぜそう感じるのかを考えるのも面白い。']] },
  iterated: { f: 'cult', t: '繰り返し学習（言語の文化進化）', who: 'S.カービーほか（2008）',
    b: 'でたらめな単語でできた言語を、人から人へ「伝言ゲーム」のように教え継いでいく実験。世代を重ねるうちに、言語は覚えやすく、規則（構造）をもったものへと変わっていった。言語の構造は、誰かが設計したのではなく、伝わる過程で「進化」してきたのかもしれない。',
    q: '言語に文法があるのは、なぜだと思う？',
    o: [['脳に生まれつき組みこまれているから', '生まれつきの能力を重視する立場もある。言語学の大きな論争のひとつ。'], ['伝わるうちに整ってきたから', '繰り返し学習の実験は、この考えを支える証拠のひとつ。'], ['両方', 'いまは、生まれつきの能力と文化的な進化の両方を考える研究者が多い。']] },
  nsl: { f: 'evo', t: 'ニカラグア手話の誕生',
    b: '1970〜80年代、ニカラグアの首都マナグアに、耳の聞こえない子どもたちが集まる学校ができた。子どもたちは身ぶりから出発して、自分たちの手話言語を生み出した。あとから入ってきた年下の子どもたちほど、より規則的で豊かな文法を使ったという。言語が「生まれる瞬間」を記録した、まれな例だ。',
    q: '新しい言語を生み出したのは誰？',
    o: [['大人の先生', '実は、先生たちはこの手話を教えていなかった。'], ['子どもたち自身', 'そう。子どもたちが、互いに伝え合ううちに言語をつくり上げた。']] },
  gossip: { f: 'evo', t: 'グルーミング仮説', who: 'ロビン・ダンバー（1996）',
    b: 'サルは毛づくろい（グルーミング）で仲間との絆を保つ。けれど集団が大きくなると、毛づくろいでは間に合わない。そこで人間は、言葉による「うわさ話」で絆を保つようになった ── 言語の起源についての、ひとつの大胆な仮説。',
    q: '今日いちばん多く話したことは？',
    o: [['人についての話', 'ダンバーによれば、会話の多くは人間関係の話題だという。'], ['情報や仕事の話', '言葉には、もちろん情報を伝える役目もある。どちらも大切。']] },
  endangered: { f: 'soc', t: '消えゆく言語',
    b: '世界にはおよそ7000の言語があり、その多くが話し手を失いつつあるとされる。南米最南端のヤーガン語を母語として話した最後の一人、クリスティーナ・カルデロンさんは2022年に亡くなった。言語が消えるとき、その言葉でしか言えなかった世界の見え方も、いっしょに消えていく。',
    q: '言語を守るために、できることは？',
    o: [['記録して残す', '辞書や録音はとても大切。言語学者と話し手の共同作業が続いている。'], ['使い続ける', 'いちばんの力は、その言葉で話し、歌い、子どもに伝えること。']] },
};
async function giveCard(id) {
  if (S.cards.includes(id)) return;
  S.cards.push(id); Audio8.sfx('found');
  await popBanner('THOUGHT CARD', CARDS[id].t, 'star');
  toast('思考実験カードを手に入れた（MENU→思考 で読める）', 'title'); checkTitles();
}
async function reflect(id, k) {
  const first = S.refl[id] == null; S.refl[id] = k; Audio8.sfx('ok'); renderMenu();
  if (first) { await gainExp(5); renderMenu(); }
}

/* ===================== PRONUNCIATION (device speech synthesis) ===================== */
let VOICES = [];
const loadVoices = () => { try { VOICES = speechSynthesis.getVoices() || []; } catch (e) { VOICES = []; } };
if ('speechSynthesis' in window) { loadVoices(); try { speechSynthesis.onvoiceschanged = loadVoices; } catch (e) { } }
function speak(text, lang) {
  if (!S.tts || !lang || !('speechSynthesis' in window)) return false;
  if (!VOICES.length) loadVoices();
  const L = lang.toLowerCase(), base = L.split('-')[0], norm = v => v.lang.toLowerCase().replace('_', '-');
  const v = VOICES.find(v => norm(v) === L) || VOICES.find(v => norm(v).split('-')[0] === base);
  if (!v) return false;
  try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.voice = v; u.lang = v.lang; u.rate = 0.85; speechSynthesis.speak(u); return true; } catch (e) { return false; }
}
function speakWord(w, loud) {
  const W = WORDS[w]; if (!W || !W.tts) return;
  if (!S.tts) { if (loud) toast('発音の読み上げは「設定」で OFF になっている', 'warn'); return; }
  if (!speak(W.tts[0], W.tts[1]) && loud) toast(`この端末には ${W.lang} の音声がないため読み上げできない（読み：${W.kana}）`, 'warn');
}

/* ===================== GREETINGS (first words in their own language) ===================== */
const HELLO = {
  marco: ['Olá!', 'pt-PT', 'ポルトガル語の「こんにちは」'],
  louis: ['Bonjour !', 'fr-FR', 'フランス語の「こんにちは」。夜になると Bonsoir（ボンソワール）に変わる'],
  vera: ['Здравствуйте!', 'ru-RU', 'ロシア語のていねいな「こんにちは」。もとは「健康でいてください」という意味'],
  wilka: ['Kamisaraki!', 'ay', 'アイマラ語のあいさつ。「元気ですか？」のような意味'],
  thandi: ['Sawubona!', 'zu-ZA', 'ズールー語の「こんにちは」。直訳は「わたしは、あなたが見える」。返事は Ngikhona ──「わたしは、ここにいる」'],
  rolo: ['Hej!', 'da-DK', 'デンマーク語の「やあ」。若いころデンマークで修業したロロの口ぐせ'],
  hanna: ['Moin!', 'de-DE', '北ドイツの「やあ」。朝だけでなく、一日じゅう使える'],
  haruka: ['こんにちは。', 'ja-JP', '「今日は（ご機嫌いかがですか）」の「今日は」だけが残ったあいさつ'],
  sakuya: ['おはようございます。', 'ja-JP', '「お早くからご苦労さまです」の名残だといわれる。森番は一日じゅうこう言う'],
  iker: ['Kaixo!', 'eu-ES', 'バスク語の「やあ」。バスク語は、周りのどの言語とも親戚関係が見つかっていない'],
  selin: ['Merhaba!', 'tr-TR', 'トルコ語の「こんにちは」。アラビア語から入った言葉'],
  pata: ['Hola.', 'es-CL', 'スペイン語の「やあ」。ヤーガン語を母語として話した最後の一人、クリスティーナ・カルデロンさんは2022年に亡くなった'],
};
for (const n of NPCS) if (HELLO[n.id]) n.hello = HELLO[n.id];
NPCS.find(n => n.id === 'pata').helloCard = 'endangered';
async function greet(e) {
  const [hi, lang, note] = e.hello;
  greetBubble(e, hi); speak(hi, lang);
  if (!flag('hi_' + e.id)) {
    setf('hi_' + e.id); await say(e, `«${hi}»`); await narr(`（${note}）`);
    if (e.helloCard) await giveCard(e.helloCard);
    checkTitles();
  }
}
function greetBubble(e, text) {
  const b = $('#greet'), u = parseFloat(getComputedStyle($('#screen')).getPropertyValue('--u')) || 2;
  b.textContent = text; b.style.left = ((e.px - camX + 8) * u) + 'px'; b.style.top = ((e.py - camY - 8) * u) + 'px';
  b.hidden = false; b.classList.remove('go'); void b.offsetWidth; b.classList.add('go');
  clearTimeout(b._t); b._t = setTimeout(() => { b.hidden = true; }, 2600);
}
const EXTRA_TITLES = [['あいさつの旅人', () => Object.keys(S.flags).filter(k => k.startsWith('hi_')).length >= 10], ['思考の旅人', () => S.cards.length >= 8],
  ['ことばの考古学者', () => S.cards.length >= Object.keys(CARDS).length], ['ことばの図書館', () => S.words.length >= 32]];

/* ===================== DAILY: 今日のことば & LOGIN BONUS ===================== */
const DAILY = [
  ['EXP +10', async () => gainExp(10)],
  ['ことばのかけら', async () => { S.frag = (S.frag || 0) + 1; await narr(`「ことばのかけら」を手に入れた！（${(S.frag - 1) % 3 + 1} / 3）`); if (S.frag % 3 === 0) await giveHeart(); }],
  ['EXP +20', async () => gainExp(20)],
  ['今日のことばの熟練度 +3', async w => { if (w) await addMastery(w, 3, '今日のことば'); else await gainExp(15); }],
  ['こころ全回復 ＋ EXP 15', async () => { S.hp = S.maxhp; renderHUD(); await gainExp(15); }],
  ['EXP +30', async () => gainExp(30)],
  ['金のしずく（EXP 40 ＋ こころの実）', async () => { await gainExp(40); await giveHeart('7日目のごほうび'); }],
];
const dayStr = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
function dailyWord() {
  const own = S.words.filter(x => WORDS[x].quiz);
  if (!own.length) return S.words.find(w => w !== 'blank') || null;
  return shuffle(own.slice()).sort((a, b) => dueness(b) - dueness(a))[0];
}
function showDaily(day, w) {
  return new Promise(res => {
    const d = $('#daily'), W = w && WORDS[w], canQuiz = w && W.quiz && quizWords().length >= 3;
    d.innerHTML = `<div class="dbox win"><div class="dhd">LOGIN BONUS<span>連続 ${S.daily.streak} 日目 ／ 通算 ${S.daily.total} 日</span></div>
      <div class="stamps">${DAILY.map((r, i) => `<div class="stp${i < day ? ' done' : i === day ? ' now' : ''}"><b>${i + 1}</b><span>${esc(r[0])}</span></div>`).join('')}</div>
      <div class="dtoday">今日のごほうび：<b>${esc(DAILY[day][0])}</b></div>
      ${W ? `<div class="dword"><div class="dwh">今日のことば</div><div class="dwr"><img alt="" src="${ICONS[w]}"><div><div class="dwn">${pxn(W.name)}</div><div class="dwl">${esc(W.lang)} ／ ${esc(W.kana)}</div></div>${W.tts ? '<button type="button" class="mini" id="dtts">♪</button>' : ''}</div>
        <div class="dwd">${rich(W.desc)}</div><div class="dwf">${rich(stars(w) >= 3 ? W.fact : '（★3 になると、豆知識が読めるようになる）')}</div></div>` : '<div class="dword"><div class="dwd">言葉を集めると、ここに「今日のことば」が届く。</div></div>'}
      <div class="dbtns"><button type="button" class="tb sel" id="dget"><span class="cur">▶</span>受け取る</button>${canQuiz ? '<button type="button" class="tb" id="dquiz"><span class="cur">▶</span>受け取って、ひとこと問題に挑戦（熟練度 +2）</button>' : ''}</div></div>`;
    d.hidden = false; Audio8.sfx('found'); if (w) setTimeout(() => speakWord(w), 400);
    const btns = [...d.querySelectorAll('.tb')]; let idx = 0;
    const paint = () => btns.forEach((b, i) => b.classList.toggle('sel', i === idx));
    const done = i => { pop(); d.hidden = true; Audio8.sfx('ok'); res(btns[i].id === 'dquiz' ? 'quiz' : 'get'); };
    const pop = pushUI(b => { if (b === 'UP' || b === 'DOWN') { idx = (idx + 1) % btns.length; Audio8.sfx('cursor'); paint(); } else if (b === 'A') done(idx); });
    btns.forEach((b, i) => b.onclick = () => done(i));
    const t = d.querySelector('#dtts'); if (t) t.onclick = () => speakWord(w, true);
  });
}
async function checkDaily() {
  const today = dayStr(new Date()); if (S.daily.last === today) return;
  const y = new Date(); y.setDate(y.getDate() - 1);
  S.daily.streak = S.daily.last === dayStr(y) ? (S.daily.streak || 0) + 1 : 1;
  S.daily.last = today; S.daily.total = (S.daily.total || 0) + 1;
  const day = (S.daily.streak - 1) % 7, w = dailyWord();
  const r = await showDaily(day, w);
  await DAILY[day][1](w);
  if (r === 'quiz' && w) {
    S.bn++; const q = await quizOnce(w, '今日のことば', 12);
    if (q.ok) { Audio8.sfx('chime'); await narr(`正解！（${q.t.toFixed(1)}秒）`); await addMastery(w, 2, '今日のことば'); }
    else await lens(w, explain(w, q.picked));
  }
  save();
}

/* ===================== MY EXAMPLE SENTENCE ===================== */
function composeNote(w) {
  return new Promise(res => {
    const W = WORDS[w], c = $('#compose');
    const starters = [`〜のとき、${W.name} を感じた。`, `あの日の〜は、まさに ${W.name} だった。`, `${W.name} って、たとえば〜のこと。`];
    c.innerHTML = `<div class="cbox win"><div class="chd">わたしの例文 ── <b>${pxn(W.name)}</b></div><div class="cmn">${rich(W.desc)}</div>
      <label class="cpr" for="notein">あなたなら、どんなときに使う？ 自由に一文を書いてみよう。</label>
      <textarea id="notein" maxlength="80" rows="3" placeholder="例：${esc(W.quiz ? W.quiz[0] : W.ex[1])}">${esc(S.notes[w] || '')}</textarea>
      <div class="chips">${starters.map((t, i) => `<button type="button" class="mini chip2" data-i="${i}">${esc(t)}</button>`).join('')}</div>
      <div class="cbtns"><button type="button" class="tb sel" id="nsave"><span class="cur">▶</span>のこす</button><button type="button" class="tb" id="ncancel"><span class="cur">▶</span>やめる</button></div></div>`;
    c.hidden = false;
    const ta = c.querySelector('#notein'); setTimeout(() => ta.focus(), 50);
    c.querySelectorAll('.chip2').forEach(b => b.onclick = () => { ta.value = starters[+b.dataset.i]; ta.focus(); });
    const close = v => { pop(); c.hidden = true; res(v); };
    const pop = pushUI(b => { if (b === 'B') { Audio8.sfx('cancel'); close(null); } });
    c.querySelector('#ncancel').onclick = () => { Audio8.sfx('cancel'); close(null); };
    c.querySelector('#nsave').onclick = async () => {
      const v = ta.value.trim().replace(/\s+/g, ' ');
      if (v.length < 4) { Audio8.sfx('wrong'); toast('もう少しだけ書いてみよう（4文字以上）', 'warn'); return; }
      S.notes[w] = v; Audio8.sfx('chime'); close(v);
      toast(`«${W.name}» の例文を、ことばノートに書きこんだ`);
      if (!flag('note_' + w)) { setf('note_' + w); await addMastery(w, 2, '例文'); }
      if (!$('#menu').hidden) renderMenu();
    };
  });
}
const POET = ['……いいね。その言葉、あなたの景色になってる。', 'ふふ、ちゃんと「あなたの」言葉になった。', '辞書の例文より、ずっといい。体温がある。', 'その一文で、言葉がもう一度生まれた気がする。'];
NPCS.push({ id: 'mina', name: '詩人ミナ', map: 'town', x: 24, y: 14, dir: 'left', look: 'mina', when: () => S.ch >= 2,
  talk: async e => {
    const pool = S.equipped.filter(w => w !== 'blank');
    await say(e, 'ことばはね、辞書の中にいるうちは、まだ眠ってるの。');
    if (!pool.length) { await say(e, '言葉を装備してきて。あなたの一文で、起こしてあげて。'); return; }
    await say(e, 'あなたの一文で、起こしてあげて。どの言葉にする？', { keep: true });
    const opts = pool.map(w => ({ t: WORDS[w].name, icon: w })); opts.push({ t: 'またこんど', cancel: true });
    const i = await choose(opts, { cancel: opts.length - 1 }); if (i >= pool.length) return;
    const w = pool[i]; hideMsg();
    const text = await composeNote(w); if (!text) return;
    await say(e, 'じゃあ、読むね。');
    await say(e, `«${WORDS[w].name}»\n「${text}」`);
    await say(e, pickRand(POET));
    if (!flag('mina_' + w)) { setf('mina_' + w); await gainExp(8); }
  } });
look('mina', { skin: '#f2d6c0', hair: '#3a2a4a', style: 'long', body: '#4a3a6a', scarf: '#e0b050', legs: '#2a2a3a' });

/* ===================== ACT 2 LOOKS & OBJECTS ===================== */
look('kaya', { skin: '#c88a5a', hair: '#1a1210', style: 'long', body: '#e8c860', body2: '#c04030', dress: true });
look('maya', { skin: '#d8a070', hair: '#1a1210', style: 'bun', body: '#f0f0f0', body2: '#3060c0', legs: '#2a2a4a' });
look('rhys', { skin: '#f2d0b8', hair: '#a04020', body: '#2a6a3a', scarf: '#e8e0d0', beard: '#a04020', legs: '#3a3030' });
look('hatsu', { skin: '#e8c0a0', hair: '#c8c8c8', style: 'bun', body: '#6a5a8a', apron: '#e8dcc8', dress: true });
look('tome', { skin: '#d8b090', hair: '#e0e0e0', style: 'bald', body: '#7a6a4a', beard: '#e0e0e0', legs: '#4a3a2a' });
look('sota', { skin: '#f0c8a0', hair: '#1a1a1a', body: '#2a3a5a', body2: '#e8e8f0', legs: '#2a2a3a' });
look('tadashi', { skin: '#f0c8a0', hair: '#2a2a2a', body: '#3a3a4a', scarf: '#c03030', legs: '#2a2a2a' });
look('fumi', { skin: '#f2d0b0', hair: '#5a3a2a', style: 'bun', body: '#7a9a6a', apron: '#e8dcc0', legs: '#3a3a3a' });
look('villager', { skin: '#e8c0a0', hair: '#4a3a2a', body: '#8a7a5a', legs: '#4a3a2a' });
look('villager2', { skin: '#f0c8a8', hair: '#6a4a3a', style: 'bun', body: '#9a6a5a', dress: true });
look('jiwoo', { skin: '#f2d6c0', hair: '#1a1a1a', body: '#e8e0f0', body2: '#5a6ab0', legs: '#3a3a5a' });
look('lucia', { skin: '#e8b890', hair: '#3a2010', style: 'long', body: '#c03a3a', apron: '#f0e8d8', dress: true });
look('daan', { skin: '#f2d6c0', hair: '#f0d070', body: '#f08030', legs: '#2a3a6a', hat: '#2a3a6a', hatStyle: 'cap' });
look('shomotsu', { skin: '#f0d0b0', hair: '#4a4a4a', body: '#4a3a2a', scarf: '#c8a060', legs: '#2a2a2a' });
look('klaus', { skin: '#f6dcc8', hair: '#c8c0b0', body: '#5a5a6a', beard: '#c8c0b0', legs: '#2a2a3a' });
look('nimal', { skin: '#a87048', hair: '#1a1210', body: '#f0a040', body2: '#c07020', legs: '#5a4a3a' });
look('hajime', { skin: '#c88a5a', hair: '#e0e0e0', style: 'long', body: '#8a5a3a', scarf: '#c8a060', beard: '#e0e0e0' });
look('aino', { skin: '#f6dcc8', hair: '#f0e0b0', style: 'long', body: '#e8e8f0', body2: '#3060c0', legs: '#2a3a6a' });
look('erik', { skin: '#f6dcc8', hair: '#d0b070', body: '#3a6ab0', scarf: '#f0d040', legs: '#2a2a3a' });
look('lin', { skin: '#f2d6c0', hair: '#1a1a1a', style: 'bun', body: '#c03030', body2: '#f0c040', dress: true });
look('bia', { skin: '#a87048', hair: '#2a1a10', style: 'long', body: '#30a050', body2: '#f0d040', legs: '#2a3a6a' });
look('rosa', { skin: '#c88a5a', hair: '#2a1a10', style: 'bun', body: '#4080c0', apron: '#f0f0f0', legs: '#2a2a3a' });
look('rabbit', { kind: 'cat', body: '#f4f4f8', rabbit: true });
look('rabbitS', { kind: 'cat', body: '#f4f4f8', rabbit: true, sleep: true });
Object.assign(OBJ, {
  stone(ctx, sx, sy) { R(ctx, 'rgba(0,0,0,.2)', sx + 2, sy + 12, 13, 3); R(ctx, '#c8c8d0', sx + 3, sy + 6, 11, 8); R(ctx, '#f4f4f8', sx + 4, sy + 5, 9, 7); R(ctx, '#ffffff', sx + 5, sy + 5, 4, 2); R(ctx, '#a8a8b8', sx + 4, sy + 12, 10, 1); },
  pot(ctx, sx, sy, t) {
    R(ctx, 'rgba(0,0,0,.25)', sx + 2, sy + 13, 13, 3); R(ctx, '#3a3a44', sx + 2, sy + 6, 12, 8); R(ctx, '#5a5a66', sx + 1, sy + 5, 14, 2); R(ctx, '#c8803a', sx + 3, sy + 6, 10, 1);
    R(ctx, '#e8603a', sx + 4, sy + 14, 2, 2); R(ctx, '#f0c040', sx + 8, sy + 14, 2, 2); for (let i = 0; i < 3; i++) { const k = (t * 0.7 + i / 3) % 1; R(ctx, `rgba(255,255,255,${0.5 * (1 - k)})`, sx + 5 + i * 3, sy + 3 - k * 10 | 0, 2, 2); }
  },
  bigflower(ctx, sx, sy, t) { R(ctx, '#3a8a3a', sx + 7, sy + 6, 2, 9); R(ctx, '#4aa04a', sx + 3, sy + 10, 4, 2); const b = Math.round(Math.sin(t * 2) * 1); [[5, 1], [9, 1], [3, 4], [11, 4], [7, 0]].forEach(([x, y]) => R(ctx, '#e83a4a', sx + x + b, sy + y, 4, 4)); R(ctx, '#f0d040', sx + 7 + b, sy + 3, 3, 3); },
  tome(ctx, sx, sy, t) {
    R(ctx, 'rgba(0,0,0,.3)', sx + 1, sy + 13, 15, 3); R(ctx, '#5a3a1e', sx + 6, sy + 8, 4, 7); R(ctx, '#7a4a26', sx + 1, sy + 4, 14, 5);
    R(ctx, '#f0e8d0', sx + 2, sy + 2, 6, 5); R(ctx, '#e8dcc0', sx + 8, sy + 2, 6, 5); R(ctx, '#8a6a4a', sx + 8, sy + 2, 1, 5);
    for (let i = 0; i < 3; i++) { R(ctx, '#a89880', sx + 3, sy + 3 + i * 1, 4, 1); R(ctx, '#a89880', sx + 9, sy + 3 + i * 1, 4, 1); }
    const p = 0.5 + 0.5 * Math.sin(t * 2); ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = `rgba(255,220,140,${0.1 + 0.12 * p})`; ctx.fillRect(sx - 4, sy - 4, 24, 18); ctx.restore();
  },
  adoor(ctx, sx, sy, t, e) {
    const open = flag(e.flagKey);
    R(ctx, '#3a2412', sx + 1, sy + 1, 14, 15); R(ctx, '#c8a060', sx + 2, sy + 1, 12, 1);
    if (open) { R(ctx, '#05030a', sx + 3, sy + 3, 10, 13); return; }
    R(ctx, '#7a4a26', sx + 3, sy + 3, 10, 13); R(ctx, '#5a3a1e', sx + 7, sy + 3, 1, 13); R(ctx, '#f2c14e', sx + 9, sy + 10);
    const p = 0.5 + 0.5 * Math.sin(t * 2.5 + sx); R(ctx, `rgba(255,220,120,${0.5 + 0.5 * p})`, sx + 5, sy + 5, 2, 2); drawMini(ctx, e.sigil, sx + 4, sy + 6, `rgba(255,236,170,${0.6 + 0.4 * p})`);
  },
  fire(ctx, sx, sy, t) {
    R(ctx, '#4a3020', sx + 1, sy + 12, 14, 3); R(ctx, '#6a4a30', sx + 3, sy + 11, 10, 2);
    for (let i = 0; i < 6; i++) { const h = 6 + Math.round(Math.abs(Math.sin(t * 7 + i * 1.7)) * 6), x = sx + 3 + i * 2; R(ctx, '#e85a1a', x, sy + 12 - h, 2, h); R(ctx, '#f8c040', x, sy + 12 - h + 3, 2, Math.max(1, h - 5)); }
    for (let i = 0; i < 3; i++) { const k = (t * 0.9 + i / 3) % 1; R(ctx, `rgba(255,200,80,${1 - k})`, sx + 6 + i * 2 + Math.sin(t * 3 + i) * 2 | 0, sy + 2 - k * 14 | 0, 1, 1); }
  },
  shapes(ctx, sx, sy, t) {
    R(ctx, '#4a331c', sx, sy, 32, 16); R(ctx, '#a07848', sx + 1, sy + 1, 30, 14);
    for (let y = -5; y <= 5; y++) { const w = Math.round(Math.sqrt(25 - y * y) * (1 + 0.15 * Math.sin(y * 1.3))); R(ctx, '#f0e0c0', sx + 9 - w, sy + 8 + y, w * 2, 1); }
    for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; R(ctx, '#f0e0c0', sx + 23 + Math.round(Math.cos(a) * 5), sy + 8 + Math.round(Math.sin(a) * 5), 2, 2); R(ctx, '#f0e0c0', sx + 23 + Math.round(Math.cos(a) * 3), sy + 8 + Math.round(Math.sin(a) * 3), 1, 1); }
    R(ctx, '#f0e0c0', sx + 21, sy + 6, 4, 4);
  },
  glyphs(ctx, sx, sy, t) {
    R(ctx, '#4a331c', sx, sy, 32, 16); R(ctx, '#8a7a6a', sx + 1, sy + 1, 30, 14);
    const cols = ['#e05a4a', '#4a7ae0'];
    for (let i = 0; i < 4; i++) { const x = sx + 3 + i * 7, c = cols[i >> 1]; if (i % 2 === 0) { R(ctx, c, x + 1, sy + 3, 3, 4); R(ctx, c, x, sy + 4, 5, 2); } else { for (let j = 0; j < 4; j++) R(ctx, c, x + 2 - (j >> 1), sy + 3 + j, 1 + j, 1); } R(ctx, '#f0e8d8', x, sy + 10, 5, 3); }
  },
});
const _makeCat = makeCat;
makeCat = function (L, dir, fr) {
  const c = _makeCat(L, dir, fr); if (!L.rabbit) return c;
  const g = c.getContext('2d'), b = L.body, P = (col, x, y, w = 1, h = 1) => { g.fillStyle = col; g.fillRect(x, y, w, h); };
  if (L.sleep) { P(b, 3, 9, 1, 3); P(b, 5, 9, 1, 3); }
  else { const fl = dir === 'right'; const x1 = fl ? 12 : 3, x2 = fl ? 9 : 6; P('#141020', x1 - 1, 4, 3, 1); P('#141020', x2 - 1, 4, 3, 1); P(b, x1, 5, 1, 5); P(b, x2, 5, 1, 5); P('#f0a0b0', x1, 6, 1, 3); P('#f0a0b0', x2, 6, 1, 3); }
  return c;
};
Object.assign(BG, { isle: ['#ffd890', '#7ac0e8', '#2c86c8', '#1a4a8a'], valley: ['#c8e0f0', '#80b080', '#3a7040', '#1e3a20'], cave: ['#4a2814', '#140804', '#2a1408', '#0c0402'] });

/* ===================== ACT 2 FOES ===================== */
Object.assign(FOES, {
  cute: { name: 'いとしさのモヤ', col: '#ffb0d8', hp: 50, atk: [5, 8], exp: 14, weak: ['gigil', 'kilig', 'cafune'], trap: ['schadenfreude'],
    hint: ['……かわいいものを見て、気持ちがあふれそうになっている。', 'ぎゅっとしたい気持ちを、どうしていいかわからないらしい。'], lines: ['「かわいすぎる……！」', '「うう、つねりたい」'] },
  meaning: { name: '意味のモヤ', col: '#c8d0e0', hp: 50, atk: [5, 8], exp: 14, weak: ['blank', 'ubuntu', 'yuanfen'], trap: ['goluboy', 'ergk'],
    hint: ['……何を指しているのか、決められずにいる。', '名前を一つに決めつけられると、もっと揺らぐらしい。'], lines: ['「ガヴァガイ？」', '「わたしは うさぎ？ みみ？ いっしゅん？」'] },
  dialect: { name: '気おくれのモヤ', col: '#d8b890', hp: 56, atk: [6, 9], exp: 16, weak: ['dandan', 'jeong', 'ubuntu', 'kowai'], trap: ['mis'],
    hint: ['……自分のことばを、恥ずかしいと思っているようだ。', 'その土地のことばで話しかけられると、ほっとするらしい。'], lines: ['「なまってて ごめん」', '「ちゃんと しゃべれなくて」'] },
  tired: { name: '疲れのモヤ', col: '#9aa8c8', hp: 56, atk: [6, 9], exp: 16, weak: ['kowai', 'sobremesa', 'sisu', 'hygge'], trap: ['toska'],
    hint: ['……ただ、くたくたに疲れているようだ。', '深刻にされるより、休ませてほしいらしい。'], lines: ['「もう うごけない」', '「やすみたい」'] },
  envy: { name: '妬みのモヤ', col: '#90d0a0', hp: 62, atk: [7, 10], exp: 18, weak: ['mudita', 'jeong'], trap: ['schadenfreude'],
    hint: ['……だれかの成功を、素直に喜べずにいる。', '「ざまあみろ」と言われると、もっとこじれるらしい。'], lines: ['「なんで あいつばかり」', '「くやしい」'] },
  pile: { name: '積み本のモヤ', col: '#c8a878', hp: 62, atk: [7, 10], exp: 18, weak: ['tsundoku', 'wabisabi', 'lagom'], trap: ['ergk'],
    hint: ['……読めなかった本の重みで、つぶれそうになっている。', '責められると、さらに積み上がるらしい。'], lines: ['「いつか よむから」', '「ぜんぶ よまなきゃ」'] },
  longing: { name: '遠いふるさとのモヤ', col: '#88c8b0', hp: 68, atk: [7, 11], exp: 20, weak: ['hiraeth', 'saudade', 'cafune', 'amae'], trap: ['fernweh', 'depaysement'],
    hint: ['……もう戻れない場所を、ずっと想っている。', '「新しい場所へ行こう」と言われると、つらくなるらしい。'], lines: ['「かえりたい」', '「あのばしょは もうない」'] },
  norm: { name: '正しさの番人', col: '#e4e4f4', hp: 120, atk: [8, 12], exp: 50, boss: true, weak: ['dandan', 'kowai', 'wabisabi', 'lagom'], trap: ['ergk', 'mis'],
    hint: ['……「正しいことば」を、ひとつしか認めないようだ。', 'ことばの多様さ、ゆらぎを受け入れることばが響きそうだ。'], lines: ['「見れる、ではない！ 見られる、だ！」', '「ことばの乱れを ゆるさない」', '「方言は なおせ」'] },
  babel: { name: 'バベルの影', col: '#6a5ac8', hp: 150, atk: [9, 13], exp: 0, boss: true, weak: ['ubuntu', 'jeong', 'yuanfen', 'blank', 'mudita'], trap: ['schadenfreude'],
    hint: ['……「ことばは、ひとつでいい」と言っている。', 'ちがうことばのまま、つながろうとすることばが響きそうだ。'], lines: ['「ことばは ひとつで いい」', '「わかりあえぬなら だまれ」', '「ちがいは のろいだ」'] },
});
for (const k in FOES) FOES[k].key = k;

/* ===================== TRAVEL (Marco's ship) ===================== */
const PORTS = [
  { id: 'isle', name: 'ルゥナ島（ガヴァガイの島）', ch: 6, to: ['isle', 13, 18, 'up'] },
  { id: 'valley', name: '方言の谷', ch: 7, to: ['valley', 24, 12, 'up'] },
  { id: 'archive', name: '時の書庫', ch: 8, to: ['archive', 7, 12, 'up'] },
  { id: 'origin', name: 'はじまりの火', ch: 9, to: ['origin', 7, 10, 'up'] },
];
async function travelMenu(e) {
  await say(e, 'さあ、どこへ行く？ 海の向こうには、まだまだ言葉が眠ってるぞ。', { keep: true });
  const av = PORTS.filter(p => S.ch >= p.ch), opts = av.map(p => ({ t: p.name })); opts.push({ t: 'やめる', cancel: true });
  const i = await choose(opts, { cancel: opts.length - 1 }); if (i >= av.length) return;
  hideMsg(); await sail(av[i].name.split('（')[0], av[i].to);
}
async function sail(name, to) {
  await fadeOut(500); Audio8.sfx('wind'); await showCard('船旅', name, '');
  loadMap(...to); await fadeIn(500); if (MAP.onEnter) await MAP.onEnter();
}
const sailHome = () => sail('港町ソルテア', ['town', 24, 23, 'down']);
LINKS.push(['town', 'isle', 25, 24], ['town', 'valley', 25, 24], ['town', 'archive', 25, 24], ['town', 'origin', 25, 24],
  ['isle', 'town', 13, 20], ['valley', 'town', 24, 14], ['archive', 'town', 7, 13], ['origin', 'town', 7, 11]);

/* ===================== MAPS ===================== */
function rectG(g, x, y, w, h, c) { for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) if (g[y + j] && x + i >= 0 && x + i < g[0].length) g[y + j][x + i] = c; }
function buildIsle() {
  const W = 28, H = 21, g = []; for (let y = 0; y < H; y++) g.push(Array(W).fill('~'));
  rectG(g, 2, 2, 24, 14, 's'); rectG(g, 4, 3, 20, 10, '.');
  const r = rng(606); for (let y = 3; y < 13; y++) for (let x = 4; x < 24; x++) if (r() < 0.1) g[y][x] = ',';
  [[4, 3], [5, 3], [22, 3], [23, 3], [4, 12], [23, 12]].forEach(([x, y]) => g[y][x] = 'T');
  rectG(g, 6, 4, 4, 2, 'R'); rectG(g, 6, 6, 4, 2, 'W'); g[7][8] = 'D'; g[6][7] = 'O';
  rectG(g, 17, 4, 4, 2, 'B'); rectG(g, 17, 6, 4, 2, 'W'); g[7][19] = 'D'; g[6][18] = 'O';
  rectG(g, 13, 8, 2, 8, ':'); rectG(g, 13, 16, 2, 5, '=');
  g[14][3] = 'M'; g[14][24] = 'M'; g[8][2] = 'M';
  return g;
}
function buildValley() {
  const W = 48, H = 15, g = []; for (let y = 0; y < H; y++) g.push(Array(W).fill('.'));
  const r = rng(707); for (let y = 2; y < 10; y++) for (let x = 1; x < 47; x++) if (r() < 0.08) g[y][x] = ',';
  rectG(g, 0, 0, W, 2, 'T'); rectG(g, 0, 0, 1, 10, 'T'); rectG(g, 47, 0, 1, 10, 'T');
  rectG(g, 0, 11, W, 4, '~'); rectG(g, 0, 10, W, 1, 's'); rectG(g, 1, 7, 46, 1, ':');
  for (const c of [5, 15, 33, 43]) { rectG(g, c - 2, 2, 4, 2, c < 24 ? 'R' : 'B'); rectG(g, c - 2, 4, 4, 2, 'W'); g[5][c] = 'D'; g[6][c] = ':'; g[5][c - 1] = 'O'; }
  rectG(g, 19, 2, 4, 2, 'B'); rectG(g, 19, 4, 4, 2, 'W'); g[5][21] = 'D'; g[6][21] = ':'; g[5][20] = 'O';
  rectG(g, 26, 2, 4, 2, 'R'); rectG(g, 26, 4, 4, 2, 'W'); g[5][28] = 'D'; g[6][28] = ':'; g[5][27] = 'O';
  [[10, 3], [11, 4], [38, 3], [39, 4], [9, 9], [29, 9], [20, 9]].forEach(([x, y]) => g[y][x] = 'T');
  g[6][23] = 'L'; g[6][26] = 'L';
  rectG(g, 24, 10, 2, 5, '=');
  return g;
}
Object.assign(MAPS, {
  isle: { name: 'ルゥナ島', bgm: 'isle', tint: 'isle', deep: 18, build: buildIsle,
    warps: [{ x: 13, y: 21, run: sailHome }, { x: 14, y: 21, alias: 0 }], onEnter: async () => { if (!flag('gv_intro')) await gvIntro(); } },
  valley: { name: '方言の谷', bgm: 'valley', tint: 'town', build: buildValley,
    warps: [{ x: 24, y: 15, run: sailHome }, { x: 25, y: 15, alias: 0 }],
    onEnter: async () => { if (!flag('v_arrive')) { setf('v_arrive'); await narr('川ぞいに、五つの里が並ぶ谷。船は、まんなかの「都」に着いた。'); await narr('里ごとに、ことばが少しずつちがうらしい。'); } } },
  archive: { name: '時の書庫', bgm: 'archive', tint: 'inn',
    rows: ['kkkkkkkkkkkkkkkk', 'kKKKhhKKKhhKKKKk', 'kwwwwwwwwwwwwwwk', 'khwwwwwwwwwwwwhk', 'khwwwwwwwwwwwwhk', 'kwwwwwwuuwwwwwwk', 'kwwtwwwuuwwwtwwk',
      'kwwwwwwuuwwwwwwk', 'khwwwwwwwwwwwwhk', 'khwwwwwwwwwwwwhk', 'kwwwwwwwwwwwwwwk', 'kwwwwwwwwwwwwwwk', 'kwwwwwwwwwwwwwwk', 'kkkkkkkwwkkkkkkk'],
    warps: [{ x: 7, y: 14, run: sailHome }, { x: 8, y: 14, alias: 0 }],
    onEnter: async () => { if (!flag('a_arrive')) { setf('a_arrive'); await narr('天井まで本がぎっしり。ここには、ことばの「むかし」が眠っている。'); await narr('奥の三つの扉には、それぞれ謎が刻まれているようだ。'); } } },
  origin: { name: 'はじまりの火', bgm: 'origin', tint: 'cave',
    rows: ['qqqqqqqqqqqqqqqq', 'QQQQQQQQQQQQQQQQ', ...Array(9).fill('qrrrrrrrrrrrrrrq'), 'qqqqqqqrrqqqqqqq'],
    warps: [{ x: 7, y: 12, run: sailHome }, { x: 8, y: 12, alias: 0 }],
    onEnter: async () => { if (!flag('o_arrive')) { setf('o_arrive'); await narr('洞窟の奥で、火がぱちぱちと燃えている。'); await narr('世界中から来た旅人たちが、火を囲んでいる。ここは、ことばが生まれた場所の記憶だという。'); } } },
});

/* ===================== CH6: ガヴァガイの島 ===================== */
const GV = [['A', 'うさぎ（動物まるごと）'], ['B', '白いもの'], ['C', '動いているもの'], ['D', '「見て！」という呼びかけ'], ['E', '食べもの（うさぎ肉）'], ['F', 'うさぎの、くっついた部分（耳や足…）'], ['G', 'うさぎの「いまこの瞬間」の姿']];
const GV_TESTS = ['stone', 'sleep', 'pot', 'flower', 'ear'];
const GV_ELIM = { stone: 'B', sleep: 'C', pot: 'E', flower: 'D' };
const GV_ENT = { stone: 'gv_stone', sleep: 'rabbit2', pot: 'gv_pot', flower: 'gv_flower', ear: 'rabbit1' };
const gvTarget = k => { const e = ents.find(x => x.id === GV_ENT[k]); return e ? { map: 'isle', x: e.x, y: e.y, id: e.id } : { map: 'isle', x: 13, y: 10 }; };
function gvBoard() {
  const elim = new Set(Object.entries(GV_ELIM).filter(([k]) => flag('gvt_' + k)).map(([, v]) => v));
  showBoard(`<div class="bh">調査ノート ──「Gavagai」の意味は？</div>
    <div class="gvl">${GV.map(([k, t]) => `<div class="gvr${elim.has(k) ? ' x' : ''}"><b>${k}</b>${esc(t)}${elim.has(k) ? '<span class="gvx">ちがう</span>' : ''}</div>`).join('')}</div>
    <div class="bnote">確かめたこと：${GV_TESTS.filter(k => flag('gvt_' + k)).length} / ${GV_TESTS.length}${flag('gvt_ear') ? '　／　耳を指しても「Gavagai」。F と G は、指さしでは消せない……' : ''}</div>`);
}
async function gvIntro() {
  setf('gv_intro');
  const k = ents.find(e => e.id === 'kaya');
  await narr('白い砂浜の島。聞いたことのない言葉が、風にのって聞こえてくる。');
  await say(k, '«Ula!»');
  await narr('（どうやら、あいさつらしい。……たぶん）');
  await narr('そのとき、白いうさぎが一匹、足もとを跳ねていった。');
  await say(k, '«Gavagai!»');
  await narr('案内人はうさぎを指さして、たしかにそう言った。');
  await narr('Gavagai ＝ うさぎ。……本当に？');
  await narr('（調査ノートを開いた。島の人の言葉の意味を、確かめてみよう）');
  gvBoard();
  await narr('いまはまだ、どの仮説も消せない。');
}
async function gvAnswer(word, line) { const k = ents.find(e => e.id === 'kaya'); await narr('（遠くから、案内人カヤが答えた）'); await say(k, word); if (line) await narr(line); }
async function gvTest(key) {
  if (S.ch !== 6 || flag('gvt_' + key)) return false;
  if (!flag('gv_yes')) { await narr('（指さして聞いても、答えの「はい」「いいえ」がわからない。まず案内人カヤと話そう）'); return true; }
  setf('gvt_' + key); Audio8.sfx('lens');
  if (key === 'stone') { await narr('白い石を指さして、「Gavagai?」と聞いた。'); await gvAnswer('«Nuu.»', '白いものだからといって、Gavagai ではないらしい。仮説 B は消えた。'); }
  if (key === 'sleep') { await narr('眠っているうさぎを指さして、「Gavagai?」と聞いた。'); await gvAnswer('«Ee. Gavagai.»', '動いていなくても Gavagai。仮説 C は消えた。'); }
  if (key === 'pot') { await narr('うさぎ肉の煮こみが入った鍋を指さして、「Gavagai?」と聞いた。'); await gvAnswer('«Nuu. ……Lupa.»', '食べものには、別の言葉（Lupa）があるらしい。仮説 E は消えた。'); }
  if (key === 'flower') { await narr('見事な赤い花を指さして、「Gavagai?」と聞いた。'); await gvAnswer('«Nuu! ……Ama!»', 'カヤは目を輝かせて別の言葉を言った。目を引くものなら何でも Gavagai、というわけではない。仮説 D は消えた。'); }
  if (key === 'ear') {
    await narr('うさぎの長い耳だけを、そっと指さして「Gavagai?」と聞いた。'); await gvAnswer('«Ee. Gavagai.»');
    await narr('……耳を指しても、うさぎ全体を指しても、答えは同じ。');
    await narr('「うさぎ」なのか「うさぎのくっついた部分」なのか、「うさぎのいまこの瞬間」なのか ── 指さしでは、区別のしようがない。');
  }
  gvBoard(); await narr(`（調査ノートを更新した。のこりの確認：${GV_TESTS.filter(k => !flag('gvt_' + k)).length}）`);
  return true;
}
async function kayaTalk(e) {
  if (S.ch > 6) { await say(e, '«Ula!» ……«Gavagai» «Ama».'); await narr('（カヤは、うさぎと花を順に指さして笑った。たぶん「また来てね」という意味だ。……たぶん）'); return; }
  if (!flag('gv_yes')) {
    await say(e, '«Ula!»');
    await narr('カヤが、果物をひとつ差し出して、こちらの顔をのぞきこむ。');
    const i = await pick(null, 'どうする？', [{ t: 'うなずいて受けとる' }, { t: '首をふる' }]);
    if (i.t.startsWith('うなずいて')) { await say(e, '«Ee!»'); await narr('カヤは、うれしそうにうなずき返した。'); }
    else { await say(e, '«Nuu?»'); await narr('カヤは少し首をかしげ、果物を引っこめた。もう一度差し出され、今度はうなずくと「Ee!」と笑った。'); }
    await narr('Ee ＝ はい、Nuu ＝ いいえ……と、仮に決めておこう。');
    await narr('（でも、身ぶりさえ確かではない。うなずきの意味が逆になる土地もあると聞く）');
    setf('gv_yes'); await giveCard('nod');
    await narr('（島のあちこちのものを指さして「Gavagai?」と聞いてみよう。白い石、眠るうさぎ、鍋、赤い花、それから歩きまわるうさぎ）');
    return;
  }
  const left = GV_TESTS.filter(k => !flag('gvt_' + k));
  if (left.length) { await say(e, '«Gavagai?»'); gvBoard(); await narr(`（まだ確かめていないものがある。のこり ${left.length}）`); return; }
  gvBoard();
  await narr('残った仮説は、A・F・G。指さしで確かめられることは、もう全部やった。');
  await narr('それでも、Gavagai の意味は一つに決まらない。');
  const op = await pick(null, '調査ノートに、なんと書く？', [{ t: 'A：うさぎ（動物まるごと）' }, { t: 'F：うさぎの、くっついた部分' }, { t: 'G：うさぎの「いまこの瞬間」の姿' }]);
  hideBoard();
  if (op.t.startsWith('A')) await narr('「うさぎ」と書いた。いちばん自然で、いちばん役に立つ答えだ。……でも、それは「証明」ではなく「賭け」だった。');
  else await narr('思いきった答えだ。どれだけ指さしても、その答えが間違いだとは示せない。……それこそが、この問題のおそろしいところだ。');
  await narr('哲学者クワインは、これを「翻訳の不確定性」と呼んだ。観察だけでは、意味は決めきれない。');
  await narr('それでも人は言葉を覚える。子どもは、知らない言葉を「もの全体」の名前だと考えやすい。そして、相手も同じものを見ていると信じる。');
  await giveCard('gavagai'); await giveCard('wholeobj');
  await say(e, '«Ee.»');
  await narr('カヤがうなずいた。わかりあえた ── と、信じることにした。');
  await gainExp(25);
  await clearChapter(6);
  await narr('（マルコの船で、次の港「方言の谷」へ行けるようになった）');
}
NPCS.push(
  { id: 'kaya', name: '島の案内人カヤ', map: 'isle', x: 12, y: 10, dir: 'right', look: 'kaya', talk: kayaTalk },
  { id: 'rabbit1', name: 'うさぎ', map: 'isle', x: 9, y: 10, dir: 'left', look: 'rabbit', wander: 2, talk: async () => { if (!(await gvTest('ear'))) await narr('うさぎが鼻をひくひくさせている。'); } },
  { id: 'rabbit2', name: 'うさぎ', map: 'isle', x: 20, y: 9, dir: 'down', look: 'rabbitS', talk: async () => { if (!(await gvTest('sleep'))) await narr('うさぎが、まるくなって眠っている。'); } },
  { id: 'gv_stone', map: 'isle', x: 6, y: 10, kind: 'obj', draw: 'stone', talk: async () => { if (!(await gvTest('stone'))) await narr('つるりとした白い石。'); } },
  { id: 'gv_pot', map: 'isle', x: 10, y: 8, kind: 'obj', draw: 'pot', talk: async () => { if (!(await gvTest('pot'))) await narr('いい匂いのする煮こみ。'); } },
  { id: 'gv_flower', map: 'isle', x: 15, y: 4, kind: 'obj', draw: 'bigflower', talk: async () => { if (!(await gvTest('flower'))) await narr('大きな赤い花が、風にゆれている。'); } },
  { id: 'maya', name: '旅人マヤ', map: 'isle', x: 18, y: 11, dir: 'down', look: 'maya', hello: ['Kumusta!', 'fil-PH', 'タガログ語の「元気？」。スペイン語の ¿Cómo está? から来たあいさつ'],
    offer: () => !(has('gigil') && has('kilig')),
    talk: async e => {
      if (!has('gigil')) {
        await say(e, 'ねえ見て、あのうさぎ！ かわいすぎて、ほっぺをむにってしたくなる！');
        await say(e, 'フィリピンでは、この「たまらない」気持ちを «Gigil» って言うの。');
        await acquire('gigil', '旅人マヤ', 'ルゥナ島'); return;
      }
      if (!has('kilig')) {
        await say(e, 'もうひとつ教えてあげる。好きな人のことを考えて、胸がきゅんってなって、そわそわするの。');
        await say(e, 'それが «Kilig»。Gigil とは、ちょっとちがうでしょ？');
        await acquire('kilig', '旅人マヤ', 'ルゥナ島'); return;
      }
      await say(e, 'Gavagai って、結局なんだったのかな。わたしは「かわいいもの」だと思ってたけど！');
    } },
  { id: 'rhys', name: '船乗りリース', map: 'isle', x: 16, y: 14, dir: 'left', look: 'rhys', hello: ['Shwmae!', 'cy-GB', 'ウェールズ語の「やあ」。南ウェールズでよく使われるあいさつ'],
    offer: () => !has('hiraeth'),
    talk: async e => {
      if (!has('hiraeth')) {
        await say(e, 'この島の夕暮れを見ていると、ウェールズの谷を思い出す。……もう、あの頃の谷はないんだがな。');
        await say(e, '帰れない故郷、もしかしたら最初からなかった故郷への想い。それを «Hiraeth» と言うんだ。');
        await acquire('hiraeth', '船乗りリース', 'ルゥナ島 桟橋');
        await say(e, 'Saudade と似てる？ そうかもしれん。でも、こっちは「もう戻れない」が、芯にある。'); return;
      }
      await say(e, 'ウェールズ語も、一度は消えかけた。だが、子どもたちがまた話しはじめてる。言葉は、しぶといもんさ。');
    } },
  { id: 'f_i1', map: 'isle', x: 21, y: 12, kind: 'foe', foe: 'cute', wander: 2 },
  { id: 'f_i2', map: 'isle', x: 6, y: 13, kind: 'foe', foe: 'meaning', wander: 2 },
  { id: 'spk_i1', map: 'isle', x: 5, y: 14, kind: 'sparkle', solid: false }, { id: 'spk_i2', map: 'isle', x: 22, y: 6, kind: 'sparkle', solid: false },
);

/* ===================== CH7: 方言の谷 ===================== */
const DIA = [
  { id: 'tome', place: '上の里', thx: 'だんだん', tired: 'こわい', snail: 'ツブリ' },
  { id: 'yoshi', place: '中の里', thx: 'おおきに', tired: 'しんどい', snail: 'マイマイ' },
  { id: 'tadashi', place: '都', thx: 'ありがとう', tired: '疲れた', snail: 'デデムシ' },
  { id: 'matsu', place: '下の里', thx: 'おおきに', tired: 'えらい', snail: 'マイマイ' },
  { id: 'setsu', place: '岬の里', thx: 'だんだん', tired: 'こわい', snail: 'ツブリ' },
];
const SURVEY = DIA.map(d => d.id);
const svDone = () => DIA.filter((d, i) => flag('sv' + (i + 1))).length;
function dialectBoard(lines) {
  const col = { 'だんだん': '#f0c070', 'おおきに': '#9be28a', 'ありがとう': '#8fd0ff', 'こわい': '#f0a0b4', 'しんどい': '#c0a0f0', '疲れた': '#8fd0ff', 'えらい': '#f0c070', 'ツブリ': '#f0c070', 'マイマイ': '#9be28a', 'デデムシ': '#8fd0ff' };
  const cell = (d, i, k) => flag('sv' + (i + 1)) ? `<td style="color:${col[d[k]]}">${esc(d[k])}</td>` : '<td class="dim">？</td>';
  showBoard(`<div class="bh">方言ノート ── 川ぞいの五つの里</div>
    <table class="dtab"><tr><th></th>${DIA.map(d => `<th>${esc(d.place)}</th>`).join('')}</tr>
    <tr><th>ありがとう</th>${DIA.map((d, i) => cell(d, i, 'thx')).join('')}</tr>
    <tr><th>疲れた</th>${DIA.map((d, i) => cell(d, i, 'tired')).join('')}</tr>
    <tr><th>かたつむり</th>${DIA.map((d, i) => cell(d, i, 'snail')).join('')}</tr></table>
    <div class="bnote">${lines || `記録した里：${svDone()} / 5。同じ色は同じ言葉。色の変わり目が「等語線」── 言葉の境界線。`}</div>`);
}
async function survey(e, idx, line) {
  await say(e, line);
  if (!flag('sv' + idx)) { setf('sv' + idx); Audio8.sfx('found'); dialectBoard(); await narr(`（方言ノートに「${DIA[idx - 1].place}」を記録した。${svDone()} / 5）`); hideBoard(); }
}
async function checkValley() {
  if (S.ch !== 7 || !flag('delivered') || !flag('fumi_done')) return;
  await narr('谷の五つの里を、ひとつの川がつないでいる。ことばも、少しずつ変わりながら、つながっていた。');
  await gainExp(25); await clearChapter(7);
  await narr('（マルコの船で、次の港「時の書庫」へ行けるようになった）');
}
NPCS.push(
  { id: 'sota', name: '役場のソウタ', map: 'valley', x: 22, y: 8, dir: 'down', look: 'sota',
    talk: async e => {
      if (S.ch > 7 || flag('delivered')) { await say(e, '母さんに、手紙を書いたんだ。全部、上の里の言葉で。……書いてて、なんだか笑えたよ。'); return; }
      if (!flag('v_intro')) {
        await say(e, 'ようこそ、都へ。ぼくは役場で働いてる、ソウタ。');
        await say(e, '上の里の母さんに手紙を書こうとしてるんだけど……何を書けばいいか、わからなくて。');
        await say(e, '都に出てきてから、ずっと「ちゃんとした言葉」で話すようにしてたら、母さんの言葉を、もう忘れかけてるんだ。');
        await say(e, '旅人さん、よかったら上の里まで行って、母さんの言葉を聞いてきてくれないか。');
        setf('v_intro'); return;
      }
      if (!flag('msg')) { await say(e, '上の里は、この道をずっと西だよ。……母さん、元気かな。'); return; }
      await say(e, '母さん、なんて言ってた？', { keep: true });
      const opts = [{ t: '標準語に直して伝える' }];
      if (has('dandan') && has('kowai')) opts.push({ t: 'お母さんの言葉のまま伝える', special: true });
      opts.push({ t: 'もう少しあとで', cancel: true });
      const i = await choose(opts, { cancel: opts.length - 1 });
      if (opts[i].cancel) return;
      if (i === 0) {
        await say(e, '「ありがとう。疲れたけど、まだ元気だよ」……そっか。うん、よかった。');
        await narr('意味は、ちゃんと伝わった。でも、何かがこぼれ落ちた気がする。');
        if (!(has('dandan') && has('kowai'))) await narr('（お母さんの言葉の意味を、ちゃんと知ってから伝えたい。上の里で聞いてみよう）');
        return;
      }
      await narr('「だんだん。母ちゃんは、こわいけど、まだ元気だけん」');
      await say(e, '……だんだん、か。');
      await say(e, '「こわい」って、子どものころ、畑から帰ると母さんがいつも言ってた。');
      await say(e, '都に来てから、あの言葉を使うのが恥ずかしくて。……でも、あれは、ぼくの言葉でもあったんだな。');
      await say(e, '手紙、書くよ。母さんの言葉で。……だんだん、旅人さん。');
      setf('delivered'); await gainExp(20); await checkValley();
    } },
  { id: 'hatsu', name: '上の里のハツ', map: 'valley', x: 6, y: 6, dir: 'down', look: 'hatsu',
    talk: async e => {
      if (!flag('v_intro')) { await say(e, 'よう来なさったね。都にな、息子がおるんよ。……元気にしとるかねえ。'); return; }
      if (!flag('msg')) {
        await say(e, 'ソウタに会うてくれたかね。……あの子、都の言葉しか使わんようになって。');
        await say(e, 'ソウタに言うてごしない。「だんだん。母ちゃんは、こわいけど、まだ元気だけん」って。');
        await narr('「だんだん」は、このあたりの「ありがとう」だという。');
        await acquire('dandan', '上の里のハツ', '方言の谷 上の里');
        setf('msg');
        if (!has('kowai')) await narr('（「こわい」……？ 何が怖いのだろう。上の里の長老に聞いてみよう）');
        return;
      }
      await say(e, 'あの子に、ちゃんと伝わるかねえ。……だんだん、旅の人。');
    } },
  { id: 'tome', name: '上の里の長老トメ', map: 'valley', x: 3, y: 8, dir: 'right', look: 'tome',
    talk: async e => {
      if (!has('kowai')) {
        await say(e, 'よう来た、よう来た。今日は朝から畑で、こわかったわ。', { keep: true });
        const i = await choose([{ t: '何が怖かったんですか？' }, { t: 'クマでも出たんですか？' }]);
        await say(e, i ? 'クマ？ はっはっは！ ちがうちがう。' : '怖い？ はっはっは！ ちがうちがう。');
        await say(e, '「こわい」は、疲れた、しんどいってことだが。都の「怖い」とは、音は同じでも中身がちがうんよ。');
        await acquire('kowai', '上の里の長老トメ', '方言の谷 上の里');
      }
      await survey(e, 1, 'だんだんな、話し相手になってくれて。ほれ、石垣の上にツブリがおるわ。……今日はほんに、こわかった。');
    } },
  { id: 'yoshi', name: '中の里のヨシ', map: 'valley', x: 16, y: 6, dir: 'down', look: 'villager2',
    talk: async e => { await survey(e, 2, 'おおきに、寄ってくれて。今日はしんどいわぁ。見てみ、葉っぱにマイマイがおる。'); } },
  { id: 'tadashi', name: '役人タダシ', map: 'valley', x: 27, y: 8, dir: 'down', look: 'tadashi',
    talk: async e => {
      await survey(e, 3, 'ありがとう、ご苦労さま。……正直、疲れたよ。役場の花壇に、デデムシが出てね。');
      const l = '上の里や岬の言葉は、なまっていて聞き苦しい。みんな、都の「正しい言葉」を使うべきなんだ。';
      await say(e, l);
      await pick(e, l, [
        { t: 'そうですね', go: async () => { await narr('（あなたは、うなずいてしまった。上の里のハツの声が、ふと頭をよぎった）'); } },
        lensOpt('ubuntu', '言葉がちがっても、だれも間違ってなんかいませんよ', async () => { await say(e, '……間違ってない、か。'); await say(e, 'ぼくの祖父も、岬の言葉を話していたっけ。'); }),
        lensOpt('dandan', '（上の里の言葉で）だんだん', async () => { await say(e, '……なんだか、あったかい響きだな。'); }),
        quietOpt(e),
      ], { instant: true });
      if (!S.cards.includes('army')) { await narr('（「言語とは、陸軍と海軍をもつ方言である」── どこかで聞いた言葉を思い出した）'); await giveCard('army'); }
    } },
  { id: 'matsu', name: '下の里のマツ', map: 'valley', x: 34, y: 6, dir: 'down', look: 'villager',
    talk: async e => { await survey(e, 4, 'おおきにな。えらいわ、今日は。ほれ、マイマイが這っとる。'); } },
  { id: 'setsu', name: '岬の里のセツ', map: 'valley', x: 44, y: 6, dir: 'down', look: 'villager2',
    talk: async e => { await survey(e, 5, 'だんだん、こんな端まで。ああ、こわい。石垣にツブリがおるわ。……上の里と、言葉が似とるって？ 不思議なもんだねえ。'); } },
  { id: 'fumi', name: '民俗学者フミ', map: 'valley', x: 25, y: 6, dir: 'down', look: 'fumi',
    talk: async e => {
      if (flag('fumi_done')) { await say(e, '言葉の地図は、人の行き来の地図でもあるのよ。'); dialectBoard(); await narr('（方言ノート）'); return; }
      if (svDone() < 5) {
        await say(e, 'わたしは谷の言葉を調べているの。手伝ってくれない？');
        await say(e, '五つの里で、「ありがとう」「疲れた」「かたつむり」をどう言うか、聞いて回ってほしいの。');
        dialectBoard(); await narr(`（記録した里：${svDone()} / 5）`); return;
      }
      dialectBoard('上の里と岬の里 ── いちばん離れた二つの里で、言葉がそっくり同じだ。');
      await say(e, 'すごい、全部そろったわね。……ねえ、気づいた？');
      const op = await pick(e, 'いちばん離れた上の里と岬の里で、同じ言葉を使ってる。どうしてだと思う？', [
        { t: 'たまたま似ただけ' }, { t: '昔、二つの里のあいだで人がよく行き来したから' }, { t: '都から新しい言葉が波紋のように広がって、古い言葉が外側に残ったから' }]);
      if (op.t.startsWith('都から')) { Audio8.sfx('chime'); await say(e, 'そう！ わたしもそう考えてる。'); }
      else await say(e, 'その可能性もあるわね。でも、見て。都がいちばん新しい言葉で、外へ行くほど古い言葉になってる。');
      await say(e, '新しい言葉は中心で生まれて、波紋みたいに広がる。だから、いちばん外側に、いちばん古い言葉が残るの。');
      await say(e, '柳田國男という学者が、かたつむりの呼び名で、同じことを日本中で見つけたのよ。');
      setf('fumi_done'); hideBoard();
      await giveCard('shuken'); await giveCard('continuum'); await checkValley();
    } },
  { id: 'jiwoo', name: '旅人ジウ', map: 'valley', x: 30, y: 8, dir: 'left', look: 'jiwoo', hello: ['안녕하세요!', 'ko-KR', '韓国語の「こんにちは」。もとは「安寧（あんねい）でいらっしゃいますか」'],
    offer: () => !has('jeong'),
    talk: async e => {
      if (!has('jeong')) {
        await say(e, 'ソウタさんとお母さん、離れていても、ちゃんとつながってますね。');
        await say(e, '韓国語には «정（ジョン）» という言葉があります。長い時間をいっしょに過ごして、いつのまにか育つ情のこと。');
        await say(e, 'ケンカしても、嫌いになっても、なくならないの。ふしぎでしょう？');
        await acquire('jeong', '旅人ジウ', '方言の谷 都'); return;
      }
      await say(e, '方言と標準語、韓国にもあります。おばあちゃんの言葉、わたしも大好きです。');
    } },
  { id: 'lucia', name: '料理人ルシア', map: 'valley', x: 18, y: 8, dir: 'right', look: 'lucia', hello: ['¡Hola!', 'es-ES', 'スペイン語の「やあ」。h は発音しないので「オラ」'],
    offer: () => !has('sobremesa'),
    talk: async e => {
      if (!has('sobremesa')) {
        await say(e, 'あら、食べていく？ 食べ終わったら、すぐ立っちゃだめよ。');
        await say(e, 'スペインでは、食後にそのまま席でおしゃべりする時間を «Sobremesa» って言うの。');
        await acquire('sobremesa', '料理人ルシア', '方言の谷 都'); return;
      }
      await say(e, '疲れたときは、ソブレメサ。話してるうちに、だいたいのことはどうでもよくなるの。');
    } },
  { id: 'daan', name: '舟乗りダーン', map: 'valley', x: 14, y: 9, dir: 'down', look: 'daan', hello: ['Hallo!', 'nl-NL', 'オランダ語の「こんにちは」'],
    offer: () => !has('gezellig'),
    talk: async e => {
      if (!has('gezellig')) {
        await say(e, 'この谷の里は、川でつながってる。舟で行き来すると、どの里もにぎやかでいい。');
        await say(e, 'オランダ語なら «Gezellig»。人と一緒にいると生まれる、あったかい居心地のよさだ。');
        await acquire('gezellig', '舟乗りダーン', '方言の谷 中の里'); return;
      }
      await say(e, 'オランダ語とドイツ語の境目の村じゃ、どっちの言葉か決められない方言もあるんだぜ。言葉に国境線は引けないのさ。');
    } },
  { id: 'sign_v1', map: 'valley', x: 7, y: 6, kind: 'obj', draw: 'sign', talk: async () => { await narr('「上の里」'); } },
  { id: 'sign_v2', map: 'valley', x: 17, y: 6, kind: 'obj', draw: 'sign', talk: async () => { await narr('「中の里」'); } },
  { id: 'sign_v3', map: 'valley', x: 23, y: 8, kind: 'obj', draw: 'sign', talk: async () => { await narr('「都 ── 谷の役場」'); } },
  { id: 'sign_v4', map: 'valley', x: 35, y: 6, kind: 'obj', draw: 'sign', talk: async () => { await narr('「下の里」'); } },
  { id: 'sign_v5', map: 'valley', x: 45, y: 6, kind: 'obj', draw: 'sign', talk: async () => { await narr('「岬の里」'); } },
  { id: 'f_v1', map: 'valley', x: 10, y: 9, kind: 'foe', foe: 'dialect', wander: 3 },
  { id: 'f_v2', map: 'valley', x: 38, y: 9, kind: 'foe', foe: 'tired', wander: 3 },
  { id: 'spk_v1', map: 'valley', x: 2, y: 9, kind: 'sparkle', solid: false }, { id: 'spk_v2', map: 'valley', x: 45, y: 9, kind: 'sparkle', solid: false }, { id: 'spk_v3', map: 'valley', x: 31, y: 4, kind: 'sparkle', solid: false },
);

/* ===================== CH8: 時の書庫 ===================== */
async function quizSeq(title, qs) {
  for (const q of qs) {
    await say(title, q.q, { keep: true });
    const i = await choose(q.o.map(t => ({ t })));
    if (i !== q.a) { Audio8.sfx('wrong'); await narr(`扉は、しんと黙っている。${q.why ? '（' + q.why + '）' : ''}`); return false; }
    Audio8.sfx('chime'); if (q.ok) await narr(q.ok);
  }
  return true;
}
const ADOORS = {
  g: { title: 'グリムの扉', intro: '扉に、二つの言葉が並んで刻まれている。「pater ── father」「pēs ── foot」。', card: 'grimm', qs: [
    { q: 'ラテン語の pater（父）は、英語では father。では、ラテン語の piscis（魚）は、英語では？', o: ['fish', 'pig', 'pistol'], a: 0, why: 'p が f に変わる', ok: 'p → f。pater/father、pēs/foot と同じ変わり方だ。' },
    { q: 'p → f と同じように、ラテン語の t は英語で th になることが多い。ラテン語 tres（3）は、英語で？', o: ['tree', 'three', 'tray'], a: 1, why: 't が th に変わる', ok: 't → th。tres/three。' },
    { q: 'k（ラテン語では c と書く）は h に。ラテン語 cornu（角）は、英語で？', o: ['corn', 'cone', 'horn'], a: 2, why: 'c(k) が h に変わる', ok: 'k → h。cornu/horn。音の変化は、ばらばらではなく、規則的だった。' }] },
  h: { title: 'くちびるの扉', intro: '扉に、五百年前のなぞなぞが刻まれている。', card: 'haha', qs: [
    { q: '「母には二度会ひたれど、父には一度も会はず」。これ、なあに？', o: ['目', 'くちびる', '夢'], a: 1, why: '「はは」と言うとき、何と何が二度「会う」？', ok: '答えは「くちびる」。' },
    { q: 'では、この時代の人は「はは（母）」を、どう発音していた？', o: ['「はは」', '「ふぁふぁ」（くちびるを合わせる音）', '「まま」'], a: 1, why: 'くちびるが二度会う音', ok: '「ふぁふぁ」。さらに昔は「ぱぱ」に近かったらしい。ハ行は p → ɸ → h と変わってきた。' }] },
  t: { title: '系統樹の扉', intro: '扉に、枝分かれした大きな木が彫られている。言葉の家系図だ。', card: 'isolate', qs: [
    { q: '次のうち、インド・ヨーロッパ語族ではない言語は？', o: ['ヒンディー語', 'ウェールズ語', 'バスク語', 'ペルシア語'], a: 2, why: '-K を教えてくれた船乗りの言葉', ok: 'バスク語は、確かな親戚が見つかっていない「孤立言語」。' },
    { q: 'フィンランド語と同じ語族（ウラル語族）に入るのは？', o: ['スウェーデン語', 'ハンガリー語', 'ロシア語'], a: 1, why: '隣の国の言葉が、親戚とはかぎらない', ok: 'ハンガリー語。遠く離れていても親戚だ。' },
    { q: '日本語と同じ語族に入るとされるのは？', o: ['韓国語', '琉球諸語（沖縄語など）', 'アイヌ語'], a: 1, why: '日本列島の南の言葉', ok: '日本語と琉球諸語で「日琉語族」。それより外の親戚は、まだわかっていない。' }] },
};
async function adoorTalk(e) {
  const k = e.key, D = ADOORS[k];
  if (flag('ad_' + k)) { await narr(`${D.title}は、開いている。`); return; }
  if (S.ch < 8) { await narr('扉は固く閉ざされている。'); return; }
  await narr(`── ${D.title} ──`); await narr(D.intro);
  if (!(await quizSeq(D.title, D.qs))) return;
  Audio8.sfx('door'); setf('ad_' + k); await narr(`${D.title}が、ゆっくりと開いた。`);
  await giveCard(D.card); await gainExp(15);
  if (['g', 'h', 't'].every(x => flag('ad_' + x))) await narr('三つの扉が開いた。……奥の大きな書物が、ぎしりと音を立てた。');
}
NPCS.push(
  { id: 'ad_g', map: 'archive', x: 3, y: 1, kind: 'obj', draw: 'adoor', key: 'g', sigil: 'P', flagKey: 'ad_g', talk: adoorTalk },
  { id: 'ad_h', map: 'archive', x: 8, y: 1, kind: 'obj', draw: 'adoor', key: 'h', sigil: 'H', flagKey: 'ad_h', talk: adoorTalk },
  { id: 'ad_t', map: 'archive', x: 12, y: 1, kind: 'obj', draw: 'adoor', key: 't', sigil: 'Y', flagKey: 'ad_t', talk: adoorTalk },
  { id: 'tome_book', map: 'archive', x: 7, y: 4, kind: 'obj', draw: 'tome',
    talk: async () => {
      if (S.ch !== 8) { await narr('分厚い書物。表紙に「ことばは変わる」と書き足されている。'); return; }
      if (!['g', 'h', 't'].every(x => flag('ad_' + x))) { await narr('分厚い書物。表紙に「正しいことば」とある。……三つの扉の謎を解いてから、もう一度調べよう。'); return; }
      if (!flag('bossNorm')) {
        await narr('書物のページが、ばらばらと勝手にめくれた――');
        await narr('「その言い方は、まちがっている」');
        const r = await battle('norm', { area: 'inn' }); if (r !== 'win') return;
        setf('bossNorm');
      }
      const s = ents.find(x => x.id === 'shomotsu');
      await say(s, '……番人は、ことばが変わるのが、こわかったのかもしれませんね。');
      await say(s, 'たとえば「見れる」。「ら抜き」と叱られがちですけど、「見られる（受身）」と「見れる（可能）」を言い分けられる、筋の通った変化だとも言われるんです。');
      await say(s, 'ことばの「あるべき姿」を決めるのと、「いまの姿」を記録するのは、別の仕事。わたしたち書庫の者は、記録するほうです。');
      await giveCard('ranuki'); await gainExp(20); await clearChapter(8);
      await narr('（マルコの船で、最後の港「はじまりの火」へ行けるようになった）');
    } },
  { id: 'shomotsu', name: '司書ショモツ', map: 'archive', x: 3, y: 10, dir: 'right', look: 'shomotsu', offer: () => !has('tsundoku'),
    talk: async e => {
      if (!has('tsundoku')) {
        await say(e, 'ようこそ、時の書庫へ。……ああ、足もとの本の山はお気になさらず。わたしの「積ん読」です。');
        await say(e, '読むつもりで買って、積んだままの本。«積ん読»。明治のころには、もうあった言葉だそうですよ。');
        await acquire('tsundoku', '司書ショモツ', '時の書庫'); return;
      }
      await say(e, ['ことばは、生きものです。この書庫の本も、少しずつ書きかえられています。', '三つの扉は、ことばの「むかし」への入口。音の変わり方、古い発音、言葉の家系図です。'][S.ch % 2]);
    } },
  { id: 'klaus', name: '学者クラウス', map: 'archive', x: 12, y: 10, dir: 'left', look: 'klaus', hello: ['Guten Tag!', 'de-DE', 'ドイツ語の「こんにちは」。直訳は「よい一日を」'],
    offer: () => !has('schadenfreude'),
    talk: async e => {
      if (!has('schadenfreude')) {
        await say(e, '同僚の論文に誤植が見つかってね。……正直に言おう、ほんの少し、うれしかった。');
        await say(e, 'ドイツ語には、まさにそれを言う言葉がある。«Schadenfreude» ── 他人の不幸を喜ぶ気持ちだ。');
        await acquire('schadenfreude', '学者クラウス', '時の書庫');
        await say(e, '……誇れる気持ちではないがね。名前があると、自分の意地悪さに気づけるのは、悪くない。'); return;
      }
      await say(e, 'グリム兄弟は童話で有名だが、兄のヤーコプは偉大な言語学者でもあったのだよ。');
    } },
  { id: 'nimal', name: '学者ニマル', map: 'archive', x: 12, y: 4, dir: 'down', look: 'nimal', hello: ['Āyubōwan!', 'si-LK', 'シンハラ語のあいさつ。「長生きしますように」という意味'],
    offer: () => !has('mudita'),
    talk: async e => {
      if (!has('mudita')) {
        await say(e, 'クラウスさんの言葉、聞きましたか？ その反対の心にも、名前があるんですよ。');
        await say(e, '«Muditā»。古い仏教のことば、パーリ語です。他の人の幸せを、自分のことのように喜ぶ心。');
        await acquire('mudita', '学者ニマル', '時の書庫');
        await say(e, '妬みに苦しむモヤには、この言葉がきっと響きます。'); return;
      }
      await say(e, '同じ気持ちでも、名前があると、選べるようになる気がしませんか？');
    } },
  { id: 'f_a1', map: 'archive', x: 5, y: 8, kind: 'foe', foe: 'envy', wander: 2 },
  { id: 'f_a2', map: 'archive', x: 10, y: 11, kind: 'foe', foe: 'pile', wander: 2 },
  { id: 'spk_a1', map: 'archive', x: 13, y: 12, kind: 'sparkle', solid: false },
);

/* ===================== CH9: はじまりの火 ===================== */
async function boubaTalk() {
  if (flag('o_bouba')) { await narr('まるい形と、とがった形の壁画。'); return; }
  await narr('壁に、二つの形が描かれている。まるい形と、とがった形。');
  showBoard(`<div class="bh">ブーバとキキ</div><div class="bk"><svg viewBox="0 0 100 100" aria-label="まるい形"><path d="M50 8 C78 6 96 28 90 50 C96 76 72 96 50 90 C24 98 4 74 12 50 C2 26 24 6 50 8 Z" fill="#f0e0c0"/></svg>
    <svg viewBox="0 0 100 100" aria-label="とがった形"><polygon points="50,2 60,38 98,30 66,54 86,96 50,70 14,96 34,54 2,30 40,38" fill="#f0e0c0"/></svg></div>
    <div class="bnote">片方は「ブーバ」、もう片方は「キキ」という名前らしい。</div>`);
  const op = await pick(null, '「ブーバ」は、どっち？', [{ t: '左の、まるい形' }, { t: '右の、とがった形' }]);
  if (op.t.startsWith('左')) await narr('多くの人と同じ答え！ さまざまな言語の話し手の大半が、まるい形を「ブーバ」と答える。');
  else await narr('少数派の答え！ 大半の人は、まるい形を「ブーバ」と答える。それでも、どう感じるかは人それぞれだ。');
  await narr('音と意味は、ふつうは無関係（恣意的）だとされる。それでも「ブーバ」はまるく、「キキ」はとがって聞こえる。');
  hideBoard(); setf('o_bouba'); await giveCard('bouba'); await gainExp(10);
}
async function iterTalk() {
  if (flag('o_iter')) { await narr('伝言のことばが刻まれた石板。'); return; }
  await narr('石板に、ある部族のことばが刻まれている。世代ごとに、子どもたちに伝えられてきたらしい。');
  const sh = (c, k) => k === 'o' ? `<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" fill="${c}"/></svg>` : `<svg viewBox="0 0 20 20"><polygon points="10,2 19,18 1,18" fill="${c}"/></svg>`;
  const R = '#e05a4a', B = '#4a7ae0';
  showBoard(`<div class="bh">伝言のことば</div>
    <table class="dtab itab"><tr><th></th><th>${sh(R, 'o')}</th><th>${sh(R, 't')}</th><th>${sh(B, 'o')}</th><th>${sh(B, 't')}</th></tr>
    <tr><th>第1世代</th><td>kopa</td><td>zimu</td><td>tolu</td><td>reki</td></tr>
    <tr><th>第5世代</th><td>kopi</td><td>koza</td><td>lepi</td><td class="q">？</td></tr></table>
    <div class="bnote">最初はばらばらだった名前が、伝えるうちに変わっていった。</div>`);
  const ok = await quizSeq('伝言のことば', [
    { q: '第5世代のことばで、青い三角は何と呼ぶ？', o: ['tolu', 'kopi', 'leza', 'zupi'], a: 2, why: '赤は ko-、青は le-。丸は -pi、三角は -za', ok: 'leza。' },
    { q: 'このことばで「ko-」は何を表している？', o: ['赤', '丸', '三角'], a: 0, ok: '赤。色と形が、それぞれ部品になっている。' }]);
  if (!ok) return;
  await narr('最初はでたらめだった名前が、伝えられるうちに「部品」を組み合わせる規則をもった。覚えやすく、新しいものにも名前をつけやすい。');
  await narr('実際の実験でも、人から人へ言語を伝えていくと、こうした構造が自然に生まれることがわかっている。');
  hideBoard(); setf('o_iter'); await giveCard('iterated'); await gainExp(15);
}
async function finalFire(e) {
  await say(e, 'ことばは、いつ、どこで生まれたのか。だれにもわからん。');
  await say(e, 'わかっているのは、ことばはたくさんあって、いまも変わりつづけている、ということだけじゃ。');
  await narr('火が大きく揺れた。炎の向こうに、塔のような影が立ちあがる――');
  await narr('「ことばは、ひとつでいい。そうすれば、だれも迷わない」');
  const r = await battle('babel', { area: 'cave' }); if (r !== 'win') return;
  setf('bossBabel');
  await narr('影は、たくさんの声にほどけていった。ポルトガル語、ロシア語、ズールー語、タガログ語、上の里の言葉、島の言葉――');
  await narr('世界には、およそ7000の言語がある。そのひとつひとつが、世界の、ちがう切り取り方だ。');
  await narr('わかりあえないことがあるのは、呪いではない。わかりあおうとする理由が、そこにある。');
  await gainExp(40);
  await clearChapter(9);
  S.ch = 10; save();
  await showEnding('ACT 2 ── THE END', 'ことばは、ちがうまま、つながれる。<br>あなたの旅は、まだつづく。');
  if (typeof startAct3 === 'function') await startAct3();
}
NPCS.push(
  { id: 'fire', map: 'origin', x: 7, y: 5, kind: 'obj', draw: 'fire', talk: async () => { await narr('火が、ぱちぱちと燃えている。むかしの人も、こうして火を囲んで話をしたのだろうか。'); } },
  { id: 'wall_bk', map: 'origin', x: 3, y: 1, w: 2, kind: 'obj', draw: 'shapes', talk: boubaTalk },
  { id: 'wall_it', map: 'origin', x: 10, y: 1, w: 2, kind: 'obj', draw: 'glyphs', talk: iterTalk },
  { id: 'hajime', name: '語り部ハジメ', map: 'origin', x: 7, y: 3, dir: 'down', look: 'hajime', offer: () => !has('amae'),
    talk: async e => {
      if (!has('amae')) {
        await say(e, 'よう来た。火のそばにお座り。……疲れたら、遠慮せずよりかかっていい。');
        await say(e, 'わしの国では、それを «甘え» と言う。受け入れてもらえると信じて、よりかかる心じゃ。');
        await acquire('amae', '語り部ハジメ', 'はじまりの火');
      }
      if (!S.cards.includes('gossip')) {
        await say(e, 'ところで、なぜ人はこんなにおしゃべりなのか、知っとるか？');
        await say(e, 'サルは毛づくろいで仲間と絆を保つ。だが群れが大きくなると、手が足りん。そこで人は、うわさ話で絆を保つようになった ── という説がある。');
        await giveCard('gossip');
      }
      if (S.ch === 9 && flag('o_bouba') && flag('o_iter') && !flag('bossBabel')) return finalFire(e);
      if (S.ch === 9) { await say(e, '壁の絵と、石板を見てきなさい。ことばの「はじまり」の手がかりがある。'); return; }
      await say(e, 'ことばの旅に、終わりはない。');
    } },
  { id: 'rosa', name: '先生ロサ', map: 'origin', x: 10, y: 9, dir: 'left', look: 'rosa', hello: ['¡Hola!', 'es-NI', 'スペイン語の「やあ」。ロサは手話でも、同じあいさつをしてくれた'],
    talk: async e => {
      await say(e, 'わたしはニカラグアから来ました。耳の聞こえない子どもたちの学校で、働いていたんです。');
      await say(e, '1970年代の終わりから、学校に子どもたちが集まるようになって……あの子たちは、自分たちで新しい手話を生み出したんです。');
      await say(e, 'わたしたち大人が教えたんじゃない。子どもたちが、互いに伝え合ううちに。あとから来た年下の子ほど、文法が豊かになっていった。');
      await giveCard('nsl');
    } },
  { id: 'aino', name: '旅人アイノ', map: 'origin', x: 3, y: 8, dir: 'right', look: 'aino', hello: ['Moi!', 'fi-FI', 'フィンランド語の「やあ」。別れぎわの「じゃあね」にも使える'],
    offer: () => !has('sisu'),
    talk: async e => {
      if (!has('sisu')) {
        await say(e, '雪の中を、ここまで歩いてきたの。足はもう限界。……でも、まだ行ける。');
        await say(e, 'フィンランド語では、それを «Sisu» って言うの。困難の中で、踏ん張りつづける力。');
        await acquire('sisu', '旅人アイノ', 'はじまりの火'); return;
      }
      await say(e, 'でもね、サウナで休むのも、Sisu のうちよ。');
    } },
  { id: 'erik', name: '旅人エリク', map: 'origin', x: 12, y: 8, dir: 'left', look: 'erik', hello: ['Hej!', 'sv-SE', 'スウェーデン語の「やあ」'],
    offer: () => !has('lagom'),
    talk: async e => {
      if (!has('lagom')) {
        await say(e, 'アイノは頑張りすぎるんだ。ぼくはこう言う。«Lagom» ── 多すぎず、少なすぎず、ちょうどいい。');
        await acquire('lagom', '旅人エリク', 'はじまりの火'); return;
      }
      await say(e, 'Sisu と Lagom。どっちが正しいんじゃなくて、どっちも要るんだ。');
    } },
  { id: 'lin', name: '旅人リン', map: 'origin', x: 3, y: 4, dir: 'right', look: 'lin', hello: ['你好！', 'zh-CN', '中国語の「こんにちは」。直訳は「あなた・よい」'],
    offer: () => !has('yuanfen'),
    talk: async e => {
      if (!has('yuanfen')) {
        await say(e, '世界中から来た人が、同じ火を囲んでる。ふしぎなめぐりあわせね。');
        await say(e, '中国語では «缘分（ユェンフェン）»。人と人を引き合わせる、縁のこと。');
        await acquire('yuanfen', '旅人リン', 'はじまりの火'); return;
      }
      await say(e, 'あなたとここで会えたのも、缘分ね。');
    } },
  { id: 'bia', name: '旅人ビア', map: 'origin', x: 12, y: 4, dir: 'left', look: 'bia', hello: ['Oi!', 'pt-BR', 'ブラジルのポルトガル語の「やあ」'],
    offer: () => !has('cafune'),
    talk: async e => {
      if (!has('cafune')) {
        await say(e, '小さいころ、眠れない夜は、おばあちゃんが髪をなでてくれたの。');
        await say(e, 'ブラジルでは、それを «Cafuné» って言うの。アフリカの言葉から来たんだって。');
        await acquire('cafune', '旅人ビア', 'はじまりの火'); return;
      }
      await say(e, 'Saudade と Cafuné、どっちもポルトガル語。遠くの人を想う言葉と、そばの人に触れる言葉。');
    } },
  { id: 'f_o1', map: 'origin', x: 5, y: 9, kind: 'foe', foe: 'longing', wander: 2 },
  { id: 'spk_o1', map: 'origin', x: 13, y: 10, kind: 'sparkle', solid: false },
);

/* ===================== ACT 2 START & NEXT ===================== */
async function startAct2() {
  if (flag('act2')) return;
  setf('act2');
  await giveCard('whorf');
  await showCard('ACT 2', 'ことばの はじまりへ', '');
  await showCard('CHAPTER 06', CHAPTERS[6], '');
  await narr('東の桟橋で、マルコが手をふっている。「次の港へ行かないか！」');
  pulseTracker();
}
const objectiveAct1 = objective;
objective = function () {
  if (S.ch < 6) return objectiveAct1();
  const ch = S.ch, m = MAP ? MAP.id : 'town';
  const boat = (dest) => ({ t: `マルコの船で『${dest}』へ行こう`, h: '東の桟橋にいるマルコに話しかけると、船で出発できる。', g: npcAt('marco') });
  if (ch === 6) {
    if (m !== 'isle') return boat('ルゥナ島');
    if (!flag('gv_yes')) return { t: '島の案内人カヤに話しかけよう', h: 'まずは「はい」と「いいえ」を確かめよう。', g: npcAt('kaya') };
    const left = GV_TESTS.filter(k => !flag('gvt_' + k));
    if (left.length) return { t: `ものを指さして「Gavagai?」と確かめよう（のこり${left.length}）`, h: '白い石・眠るうさぎ・鍋・赤い花・歩きまわるうさぎ。それぞれの前で A を押すと、カヤが答えてくれる。', g: gvTarget(left[0]) };
    return { t: 'カヤに、調査の結論を伝えよう', h: '指さしで消せなかった仮説が残っている。', g: npcAt('kaya') };
  }
  if (ch === 7) {
    if (m !== 'valley') return boat('方言の谷');
    if (!flag('v_intro')) return { t: '都の役場の青年ソウタと話そう', h: '船着き場のすぐそばにいる。', g: npcAt('sota') };
    if (!flag('msg')) return { t: '西の果て、上の里のハツに会いにいこう', h: '川ぞいの道を、ずっと西へ。', g: npcAt('hatsu') };
    if (!has('kowai')) return { t: '上の里の長老トメに「こわい」の意味を聞こう', h: 'ハツの家のそば。', g: npcAt('tome') };
    if (!flag('delivered')) return { t: 'ソウタに、お母さんの言葉を届けよう', h: '標準語に直して伝えるか、そのまま伝えるか。', g: npcAt('sota') };
    const sv = DIA.findIndex((d, i) => !flag('sv' + (i + 1)));
    if (sv >= 0) return { t: `五つの里で方言を記録しよう（のこり${5 - svDone()}）`, h: '「ありがとう」「疲れた」「かたつむり」の言い方を、各里の人に聞こう。', g: npcAt(DIA[sv].id) };
    return { t: '民俗学者フミに、方言ノートを見せよう', h: '', g: npcAt('fumi') };
  }
  if (ch === 8) {
    if (m !== 'archive') return boat('時の書庫');
    const d = ['g', 'h', 't'].find(k => !flag('ad_' + k));
    if (d) return { t: '書庫の三つの扉の謎を解こう', h: '扉を調べると、ことばの歴史の問題が出る。間違えても何度でも挑戦できる。', g: { map: 'archive', x: { g: 3, h: 8, t: 12 }[d], y: 1 } };
    return { t: '奥の大きな書物を調べよう', h: '「正しさの番人」が待っている。DANDAN や KOWAI、WABI-SABI、LAGOM が響きそうだ。', g: { map: 'archive', x: 7, y: 4 } };
  }
  if (ch === 9) {
    if (m !== 'origin') return boat('はじまりの火');
    if (!flag('o_bouba')) return { t: '洞窟の壁画（ふたつの形）を調べよう', h: '', g: { map: 'origin', x: 3, y: 1 } };
    if (!flag('o_iter')) return { t: '石板の「伝言のことば」を解こう', h: '', g: { map: 'origin', x: 10, y: 1 } };
    return { t: '語り部ハジメと、火のそばで話そう', h: '最後の影が待っている。UBUNTU・JEONG・YUANFEN・MUDITA・（　　）が響きそうだ。', g: npcAt('hajime') };
  }
  const left = Object.keys(S.labels);
  if (left.length) return { t: `町に残ったラベルを剥がそう（あと${left.length}人）`, h: 'その言葉を外して話しかけ、「ただ聞く」を選ぼう。', g: npcAt(left[0]) };
  const miss = WORD_ORDER.filter(w => !has(w));
  if (miss.length) return { t: `まだ知らない言葉がある（${S.words.length}/${WORD_ORDER.length}）`, h: 'ヒント：' + WORDS[miss[0]].hint, g: null };
  const mc = Object.keys(CARDS).filter(c => !S.cards.includes(c));
  if (mc.length) return { t: `思考実験カードを集めよう（${S.cards.length}/${Object.keys(CARDS).length}）`, h: '各地の人と話そう。南の船乗りパタのあいさつにも、物語がある。', g: null };
  return { t: 'すべての言葉とカードを集めた！ 例文をつくって、ことばを育てよう', h: 'MENU→ことば で「自分の例文」を書いたり、町の詩人ミナに読んでもらったりできる。', g: null };
};
