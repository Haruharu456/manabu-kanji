// Netlify Function: /api/kanji/*
// Routes: /grade/:grade, /search?q=&grade=, /:id

const kanjiDatabase = {
  1: [
    { id: 'jp_1_01', kanji: '一', grade: 1, strokes: 1, radical: '一', onyomi: ['イチ', 'イツ'], kunyomi: ['ひと', 'ひと.つ'], meaning: 'one; first', examples: [{ word: '一人', reading: 'ひとり', meaning: 'one person' }, { word: '一日', reading: 'いちにち', meaning: 'one day' }] },
    { id: 'jp_1_02', kanji: '二', grade: 1, strokes: 2, radical: '二', onyomi: ['ニ'], kunyomi: ['ふた', 'ふた.つ'], meaning: 'two; second', examples: [{ word: '二人', reading: 'ふたり', meaning: 'two people' }] },
    { id: 'jp_1_03', kanji: '三', grade: 1, strokes: 3, radical: '一', onyomi: ['サン'], kunyomi: ['み', 'み.つ'], meaning: 'three', examples: [{ word: '三日', reading: 'みっか', meaning: 'three days' }] },
    { id: 'jp_1_04', kanji: '四', grade: 1, strokes: 5, radical: '囗', onyomi: ['シ'], kunyomi: ['よ', 'よ.つ'], meaning: 'four', examples: [{ word: '四月', reading: 'しがつ', meaning: 'April' }] },
    { id: 'jp_1_05', kanji: '五', grade: 1, strokes: 4, radical: '二', onyomi: ['ゴ'], kunyomi: ['いつ', 'いつ.つ'], meaning: 'five', examples: [{ word: '五月', reading: 'ごがつ', meaning: 'May' }] },
    { id: 'jp_1_06', kanji: '六', grade: 1, strokes: 4, radical: '八', onyomi: ['ロク'], kunyomi: ['む', 'む.つ'], meaning: 'six', examples: [{ word: '六月', reading: 'ろくがつ', meaning: 'June' }] },
    { id: 'jp_1_07', kanji: '七', grade: 1, strokes: 2, radical: '一', onyomi: ['シチ'], kunyomi: ['なな', 'なな.つ'], meaning: 'seven', examples: [{ word: '七月', reading: 'しちがつ', meaning: 'July' }] },
    { id: 'jp_1_08', kanji: '八', grade: 1, strokes: 2, radical: '八', onyomi: ['ハチ'], kunyomi: ['や', 'や.つ'], meaning: 'eight', examples: [{ word: '八月', reading: 'はちがつ', meaning: 'August' }] },
    { id: 'jp_1_09', kanji: '九', grade: 1, strokes: 2, radical: '乙', onyomi: ['キュウ', 'ク'], kunyomi: ['ここの', 'ここの.つ'], meaning: 'nine', examples: [{ word: '九月', reading: 'くがつ', meaning: 'September' }] },
    { id: 'jp_1_10', kanji: '十', grade: 1, strokes: 2, radical: '十', onyomi: ['ジュウ', 'ジッ'], kunyomi: ['とお'], meaning: 'ten', examples: [{ word: '十月', reading: 'じゅうがつ', meaning: 'October' }] },
    { id: 'jp_1_11', kanji: '百', grade: 1, strokes: 6, radical: '白', onyomi: ['ヒャク'], kunyomi: ['もも'], meaning: 'hundred', examples: [{ word: '百円', reading: 'ひゃくえん', meaning: '100 yen' }] },
    { id: 'jp_1_12', kanji: '千', grade: 1, strokes: 3, radical: '十', onyomi: ['セン'], kunyomi: ['ち'], meaning: 'thousand', examples: [{ word: '千円', reading: 'せんえん', meaning: '1000 yen' }] },
    { id: 'jp_1_13', kanji: '火', grade: 1, strokes: 4, radical: '火', onyomi: ['カ'], kunyomi: ['ひ', 'ほ'], meaning: 'fire', examples: [{ word: '火曜日', reading: 'かようび', meaning: 'Tuesday' }] },
    { id: 'jp_1_14', kanji: '水', grade: 1, strokes: 4, radical: '水', onyomi: ['スイ'], kunyomi: ['みず'], meaning: 'water', examples: [{ word: '水曜日', reading: 'すいようび', meaning: 'Wednesday' }] },
    { id: 'jp_1_15', kanji: '木', grade: 1, strokes: 4, radical: '木', onyomi: ['モク'], kunyomi: ['き'], meaning: 'tree; wood', examples: [{ word: '木曜日', reading: 'もくようび', meaning: 'Thursday' }] },
    { id: 'jp_1_16', kanji: '金', grade: 1, strokes: 8, radical: '金', onyomi: ['キン', 'コン'], kunyomi: ['かね'], meaning: 'gold; money', examples: [{ word: '金曜日', reading: 'きんようび', meaning: 'Friday' }] },
    { id: 'jp_1_17', kanji: '土', grade: 1, strokes: 3, radical: '土', onyomi: ['ド', 'ト'], kunyomi: ['つち'], meaning: 'earth; soil', examples: [{ word: '土曜日', reading: 'どようび', meaning: 'Saturday' }] },
    { id: 'jp_1_18', kanji: '日', grade: 1, strokes: 4, radical: '日', onyomi: ['ニチ', 'ジツ'], kunyomi: ['ひ', 'か'], meaning: 'day; sun', examples: [{ word: '日曜日', reading: 'にちようび', meaning: 'Sunday' }] },
    { id: 'jp_1_19', kanji: '月', grade: 1, strokes: 4, radical: '月', onyomi: ['ゲツ', 'ガツ'], kunyomi: ['つき'], meaning: 'month; moon', examples: [{ word: '月曜日', reading: 'げつようび', meaning: 'Monday' }] },
    { id: 'jp_1_20', kanji: '年', grade: 1, strokes: 6, radical: '干', onyomi: ['ネン'], kunyomi: ['とし'], meaning: 'year; age', examples: [{ word: '今年', reading: 'ことし', meaning: 'this year' }] },
  ],
  2: [
    { id: 'jp_2_01', kanji: '学', grade: 2, strokes: 8, radical: '子', onyomi: ['ガク'], kunyomi: ['まな.ぶ'], meaning: 'study; learn', examples: [{ word: '学校', reading: 'がっこう', meaning: 'school' }, { word: '学生', reading: 'がくせい', meaning: 'student' }] },
    { id: 'jp_2_02', kanji: '校', grade: 2, strokes: 10, radical: '木', onyomi: ['コウ'], kunyomi: [], meaning: 'school', examples: [{ word: '学校', reading: 'がっこう', meaning: 'school' }] },
    { id: 'jp_2_03', kanji: '先', grade: 2, strokes: 6, radical: '儿', onyomi: ['セン'], kunyomi: ['さき'], meaning: 'before; ahead', examples: [{ word: '先生', reading: 'せんせい', meaning: 'teacher' }] },
    { id: 'jp_2_04', kanji: '生', grade: 2, strokes: 5, radical: '生', onyomi: ['セイ', 'ショウ'], kunyomi: ['い.きる', 'う.む'], meaning: 'life; live; birth', examples: [{ word: '先生', reading: 'せんせい', meaning: 'teacher' }, { word: '生活', reading: 'せいかつ', meaning: 'daily life' }] },
    { id: 'jp_2_05', kanji: '花', grade: 2, strokes: 7, radical: '艸', onyomi: ['カ'], kunyomi: ['はな'], meaning: 'flower', examples: [{ word: '花火', reading: 'はなび', meaning: 'fireworks' }] },
    { id: 'jp_2_06', kanji: '明', grade: 2, strokes: 8, radical: '日', onyomi: ['メイ', 'ミョウ'], kunyomi: ['あか.るい'], meaning: 'bright; light; clear', examples: [{ word: '明日', reading: 'あした', meaning: 'tomorrow' }] },
    { id: 'jp_2_07', kanji: '春', grade: 2, strokes: 9, radical: '日', onyomi: ['シュン'], kunyomi: ['はる'], meaning: 'spring', examples: [{ word: '春休み', reading: 'はるやすみ', meaning: 'spring break' }] },
    { id: 'jp_2_08', kanji: '夏', grade: 2, strokes: 10, radical: '夂', onyomi: ['カ'], kunyomi: ['なつ'], meaning: 'summer', examples: [{ word: '夏休み', reading: 'なつやすみ', meaning: 'summer vacation' }] },
    { id: 'jp_2_09', kanji: '秋', grade: 2, strokes: 9, radical: '禾', onyomi: ['シュウ'], kunyomi: ['あき'], meaning: 'autumn; fall', examples: [{ word: '秋分', reading: 'しゅうぶん', meaning: 'autumnal equinox' }] },
    { id: 'jp_2_10', kanji: '冬', grade: 2, strokes: 5, radical: '冫', onyomi: ['トウ'], kunyomi: ['ふゆ'], meaning: 'winter', examples: [{ word: '冬休み', reading: 'ふゆやすみ', meaning: 'winter break' }] },
    { id: 'jp_2_11', kanji: '人', grade: 2, strokes: 2, radical: '人', onyomi: ['ジン', 'ニン'], kunyomi: ['ひと'], meaning: 'person', examples: [{ word: '人間', reading: 'にんげん', meaning: 'human being' }] },
    { id: 'jp_2_12', kanji: '男', grade: 2, strokes: 7, radical: '田', onyomi: ['ダン', 'ナン'], kunyomi: ['おとこ'], meaning: 'man; male', examples: [{ word: '男の子', reading: 'おとこのこ', meaning: 'boy' }] },
    { id: 'jp_2_13', kanji: '女', grade: 2, strokes: 3, radical: '女', onyomi: ['ジョ', 'ニョ'], kunyomi: ['おんな', 'め'], meaning: 'woman; female', examples: [{ word: '女の子', reading: 'おんなのこ', meaning: 'girl' }] },
    { id: 'jp_2_14', kanji: '子', grade: 2, strokes: 3, radical: '子', onyomi: ['シ', 'ス'], kunyomi: ['こ'], meaning: 'child', examples: [{ word: '子供', reading: 'こども', meaning: 'child; children' }] },
    { id: 'jp_2_15', kanji: '母', grade: 2, strokes: 5, radical: '母', onyomi: ['ボ'], kunyomi: ['はは'], meaning: 'mother', examples: [{ word: 'お母さん', reading: 'おかあさん', meaning: 'mom' }] },
    { id: 'jp_2_16', kanji: '父', grade: 2, strokes: 4, radical: '父', onyomi: ['フ'], kunyomi: ['ちち'], meaning: 'father', examples: [{ word: 'お父さん', reading: 'おとうさん', meaning: 'dad' }] },
    { id: 'jp_2_17', kanji: '兄', grade: 2, strokes: 5, radical: '儿', onyomi: ['キョウ', 'ケイ'], kunyomi: ['あに'], meaning: 'older brother', examples: [{ word: 'お兄さん', reading: 'おにいさん', meaning: 'older brother (polite)' }] },
    { id: 'jp_2_18', kanji: '姉', grade: 2, strokes: 8, radical: '女', onyomi: ['シ'], kunyomi: ['あね'], meaning: 'older sister', examples: [{ word: 'お姉さん', reading: 'おねえさん', meaning: 'older sister (polite)' }] },
    { id: 'jp_2_19', kanji: '弟', grade: 2, strokes: 7, radical: '弓', onyomi: ['テイ', 'ダイ'], kunyomi: ['おとうと'], meaning: 'younger brother', examples: [{ word: '弟子', reading: 'でし', meaning: 'disciple; apprentice' }] },
    { id: 'jp_2_20', kanji: '妹', grade: 2, strokes: 8, radical: '女', onyomi: ['マイ'], kunyomi: ['いもうと'], meaning: 'younger sister', examples: [] },
  ],
  3: [
    { id: 'jp_3_01', kanji: '漢', grade: 3, strokes: 13, radical: '氵', onyomi: ['カン'], kunyomi: [], meaning: 'Han Chinese; kanji', examples: [{ word: '漢字', reading: 'かんじ', meaning: 'Chinese characters' }] },
    { id: 'jp_3_02', kanji: '字', grade: 3, strokes: 6, radical: '子', onyomi: ['ジ'], kunyomi: ['あざ'], meaning: 'character; letter', examples: [{ word: '文字', reading: 'もじ', meaning: 'letter; character' }] },
    { id: 'jp_3_03', kanji: '言', grade: 3, strokes: 7, radical: '言', onyomi: ['ゲン', 'ゴン'], kunyomi: ['い.う', 'こと'], meaning: 'word; speech', examples: [{ word: '言葉', reading: 'ことば', meaning: 'word; language' }] },
    { id: 'jp_3_04', kanji: '読', grade: 3, strokes: 14, radical: '言', onyomi: ['トク', 'ドク'], kunyomi: ['よ.む'], meaning: 'read', examples: [{ word: '読書', reading: 'どくしょ', meaning: 'reading (books)' }] },
    { id: 'jp_3_05', kanji: '書', grade: 3, strokes: 10, radical: '曰', onyomi: ['ショ'], kunyomi: ['か.く'], meaning: 'write', examples: [{ word: '図書館', reading: 'としょかん', meaning: 'library' }] },
    { id: 'jp_3_06', kanji: '林', grade: 3, strokes: 8, radical: '木', onyomi: ['リン'], kunyomi: ['はやし'], meaning: 'grove; small forest', examples: [{ word: '森林', reading: 'しんりん', meaning: 'forest; woods' }] },
    { id: 'jp_3_07', kanji: '森', grade: 3, strokes: 12, radical: '木', onyomi: ['シン'], kunyomi: ['もり'], meaning: 'forest', examples: [{ word: '森林', reading: 'しんりん', meaning: 'forest; woods' }] },
    { id: 'jp_3_08', kanji: '川', grade: 3, strokes: 3, radical: '川', onyomi: ['セン'], kunyomi: ['かわ'], meaning: 'river', examples: [{ word: '川岸', reading: 'かわぎし', meaning: 'riverbank' }] },
    { id: 'jp_3_09', kanji: '山', grade: 3, strokes: 3, radical: '山', onyomi: ['サン'], kunyomi: ['やま'], meaning: 'mountain', examples: [{ word: '山登り', reading: 'やまのぼり', meaning: 'mountain climbing' }] },
    { id: 'jp_3_10', kanji: '海', grade: 3, strokes: 9, radical: '氵', onyomi: ['カイ'], kunyomi: ['うみ'], meaning: 'sea; ocean', examples: [{ word: '海水浴', reading: 'かいすいよく', meaning: 'sea bathing' }] },
    { id: 'jp_3_11', kanji: '地', grade: 3, strokes: 6, radical: '土', onyomi: ['チ', 'ジ'], kunyomi: [], meaning: 'ground; earth; land', examples: [{ word: '地球', reading: 'ちきゅう', meaning: 'Earth; globe' }] },
    { id: 'jp_3_12', kanji: '空', grade: 3, strokes: 8, radical: '穴', onyomi: ['クウ'], kunyomi: ['そら', 'あ.く'], meaning: 'sky; empty; air', examples: [{ word: '空港', reading: 'くうこう', meaning: 'airport' }] },
    { id: 'jp_3_13', kanji: '雨', grade: 3, strokes: 8, radical: '雨', onyomi: ['ウ'], kunyomi: ['あめ'], meaning: 'rain', examples: [{ word: '雨天', reading: 'うてん', meaning: 'rainy weather' }] },
    { id: 'jp_3_14', kanji: '雪', grade: 3, strokes: 11, radical: '雨', onyomi: ['セツ'], kunyomi: ['ゆき'], meaning: 'snow', examples: [{ word: '雪山', reading: 'ゆきやま', meaning: 'snowy mountain' }] },
    { id: 'jp_3_15', kanji: '風', grade: 3, strokes: 9, radical: '風', onyomi: ['フウ', 'フ'], kunyomi: ['かぜ'], meaning: 'wind', examples: [{ word: '台風', reading: 'たいふう', meaning: 'typhoon' }] },
    { id: 'jp_3_16', kanji: '動', grade: 3, strokes: 11, radical: '力', onyomi: ['ドウ'], kunyomi: ['うご.く'], meaning: 'move; motion', examples: [{ word: '運動', reading: 'うんどう', meaning: 'exercise; sports' }] },
    { id: 'jp_3_17', kanji: '音', grade: 3, strokes: 9, radical: '音', onyomi: ['オン', 'イン'], kunyomi: ['おと', 'ね'], meaning: 'sound; noise', examples: [{ word: '音楽', reading: 'おんがく', meaning: 'music' }] },
    { id: 'jp_3_18', kanji: '絵', grade: 3, strokes: 12, radical: '糸', onyomi: ['カイ'], kunyomi: ['え'], meaning: 'picture; drawing', examples: [{ word: '絵本', reading: 'えほん', meaning: "picture book; children's book" }] },
    { id: 'jp_3_19', kanji: '色', grade: 3, strokes: 6, radical: '色', onyomi: ['ショク', 'シキ'], kunyomi: ['いろ'], meaning: 'color; tint', examples: [{ word: '色鉛筆', reading: 'いろえんぴつ', meaning: 'colored pencil' }] },
    { id: 'jp_3_20', kanji: '形', grade: 3, strokes: 7, radical: '彡', onyomi: ['ケイ', 'ギョウ'], kunyomi: ['かたち', 'かた'], meaning: 'form; shape', examples: [{ word: '形式', reading: 'けいしき', meaning: 'form; format; formality' }] },
  ],
  4: [
    { id: 'jp_4_01', kanji: '電', grade: 4, strokes: 13, radical: '雨', onyomi: ['デン'], kunyomi: [], meaning: 'electricity; lightning', examples: [{ word: '電車', reading: 'でんしゃ', meaning: 'train' }, { word: '電話', reading: 'でんわ', meaning: 'telephone' }] },
    { id: 'jp_4_02', kanji: '気', grade: 4, strokes: 6, radical: '气', onyomi: ['キ', 'ケ'], kunyomi: [], meaning: 'spirit; air; energy', examples: [{ word: '元気', reading: 'げんき', meaning: 'healthy; lively' }] },
    { id: 'jp_4_03', kanji: '計', grade: 4, strokes: 9, radical: '言', onyomi: ['ケイ'], kunyomi: ['はか.る'], meaning: 'measure; plan; count', examples: [{ word: '時計', reading: 'とけい', meaning: 'clock; watch' }] },
    { id: 'jp_4_04', kanji: '理', grade: 4, strokes: 11, radical: '王', onyomi: ['リ'], kunyomi: [], meaning: 'reason; logic; principle', examples: [{ word: '料理', reading: 'りょうり', meaning: 'cooking; cuisine' }] },
    { id: 'jp_4_05', kanji: '科', grade: 4, strokes: 9, radical: '禾', onyomi: ['カ'], kunyomi: [], meaning: 'subject; category', examples: [{ word: '科学', reading: 'かがく', meaning: 'science' }] },
    { id: 'jp_4_06', kanji: '社', grade: 4, strokes: 7, radical: '示', onyomi: ['シャ'], kunyomi: ['やしろ'], meaning: 'company; society; shrine', examples: [{ word: '会社', reading: 'かいしゃ', meaning: 'company; corporation' }] },
    { id: 'jp_4_07', kanji: '家', grade: 4, strokes: 10, radical: '宀', onyomi: ['カ', 'ケ'], kunyomi: ['いえ', 'や'], meaning: 'house; home; family', examples: [{ word: '家族', reading: 'かぞく', meaning: 'family' }] },
    { id: 'jp_4_08', kanji: '道', grade: 4, strokes: 12, radical: '辶', onyomi: ['ドウ', 'トウ'], kunyomi: ['みち'], meaning: 'way; path; road', examples: [{ word: '道路', reading: 'どうろ', meaning: 'road; highway' }] },
    { id: 'jp_4_09', kanji: '法', grade: 4, strokes: 8, radical: '氵', onyomi: ['ホウ'], kunyomi: ['のり'], meaning: 'law; method', examples: [{ word: '方法', reading: 'ほうほう', meaning: 'method; way' }] },
    { id: 'jp_4_10', kanji: '時', grade: 4, strokes: 10, radical: '日', onyomi: ['ジ'], kunyomi: ['とき'], meaning: 'time; hour; occasion', examples: [{ word: '時間', reading: 'じかん', meaning: 'time; hours' }] },
    { id: 'jp_4_11', kanji: '間', grade: 4, strokes: 12, radical: '門', onyomi: ['カン', 'ケン'], kunyomi: ['ま', 'あいだ'], meaning: 'interval; between; space', examples: [{ word: '時間', reading: 'じかん', meaning: 'time' }, { word: '人間', reading: 'にんげん', meaning: 'human being' }] },
    { id: 'jp_4_12', kanji: '国', grade: 4, strokes: 8, radical: '囗', onyomi: ['コク'], kunyomi: ['くに'], meaning: 'country; nation', examples: [{ word: '外国', reading: 'がいこく', meaning: 'foreign country' }] },
    { id: 'jp_4_13', kanji: '回', grade: 4, strokes: 6, radical: '囗', onyomi: ['カイ'], kunyomi: ['まわ.る', 'まわ.す'], meaning: 'times; rotation; turn', examples: [{ word: '今回', reading: 'こんかい', meaning: 'this time; now' }] },
    { id: 'jp_4_14', kanji: '町', grade: 4, strokes: 7, radical: '田', onyomi: ['チョウ'], kunyomi: ['まち'], meaning: 'town; street', examples: [{ word: '町内', reading: 'ちょうない', meaning: 'neighborhood; ward' }] },
    { id: 'jp_4_15', kanji: '市', grade: 4, strokes: 5, radical: '巾', onyomi: ['シ'], kunyomi: ['いち'], meaning: 'market; city', examples: [{ word: '都市', reading: 'とし', meaning: 'city; urban' }] },
    { id: 'jp_4_16', kanji: '民', grade: 4, strokes: 5, radical: '氏', onyomi: ['ミン'], kunyomi: ['たみ'], meaning: 'people; folk; citizen', examples: [{ word: '国民', reading: 'こくみん', meaning: 'citizen; national' }] },
    { id: 'jp_4_17', kanji: '族', grade: 4, strokes: 11, radical: '方', onyomi: ['ゾク'], kunyomi: [], meaning: 'family; clan; group', examples: [{ word: '家族', reading: 'かぞく', meaning: 'family' }] },
    { id: 'jp_4_18', kanji: '建', grade: 4, strokes: 9, radical: '廴', onyomi: ['ケン'], kunyomi: ['た.てる'], meaning: 'build; construct', examples: [{ word: '建物', reading: 'たてもの', meaning: 'building' }] },
    { id: 'jp_4_19', kanji: '共', grade: 4, strokes: 6, radical: '八', onyomi: ['キョウ'], kunyomi: ['とも'], meaning: 'together; mutual', examples: [{ word: '共通', reading: 'きょうつう', meaning: 'common; shared' }] },
    { id: 'jp_4_20', kanji: '決', grade: 4, strokes: 6, radical: '氵', onyomi: ['ケツ'], kunyomi: ['き.める', 'き.まる'], meaning: 'decide; determine', examples: [{ word: '決定', reading: 'けってい', meaning: 'decision; determination' }] },
  ],
  5: [
    { id: 'jp_5_01', kanji: '文', grade: 5, strokes: 4, radical: '文', onyomi: ['ブン', 'モン'], kunyomi: ['ふみ'], meaning: 'sentence; writing; culture', examples: [{ word: '文章', reading: 'ぶんしょう', meaning: 'sentence; passage' }] },
    { id: 'jp_5_02', kanji: '章', grade: 5, strokes: 11, radical: '音', onyomi: ['ショウ'], kunyomi: [], meaning: 'chapter; section; badge', examples: [{ word: '文章', reading: 'ぶんしょう', meaning: 'sentence; passage' }] },
    { id: 'jp_5_03', kanji: '首', grade: 5, strokes: 9, radical: '首', onyomi: ['シュ'], kunyomi: ['くび'], meaning: 'head; neck; leader', examples: [{ word: '首都', reading: 'しゅと', meaning: 'capital city' }] },
    { id: 'jp_5_04', kanji: '事', grade: 5, strokes: 8, radical: '亅', onyomi: ['ジ', 'ズ'], kunyomi: ['こと'], meaning: 'thing; matter; affair', examples: [{ word: '仕事', reading: 'しごと', meaning: 'work; job' }] },
    { id: 'jp_5_05', kanji: '実', grade: 5, strokes: 8, radical: '宀', onyomi: ['ジツ'], kunyomi: ['み', 'みの.る'], meaning: 'reality; fruit; result', examples: [{ word: '実際', reading: 'じっさい', meaning: 'actual; practical' }] },
    { id: 'jp_5_06', kanji: '産', grade: 5, strokes: 11, radical: '生', onyomi: ['サン'], kunyomi: ['う.む', 'うぶ'], meaning: 'produce; birth; property', examples: [{ word: '生産', reading: 'せいさん', meaning: 'production; manufacture' }] },
    { id: 'jp_5_07', kanji: '業', grade: 5, strokes: 13, radical: '木', onyomi: ['ギョウ', 'ゴウ'], kunyomi: ['わざ'], meaning: 'work; business; karma', examples: [{ word: '工業', reading: 'こうぎょう', meaning: 'industry; manufacturing' }] },
    { id: 'jp_5_08', kanji: '合', grade: 5, strokes: 6, radical: '口', onyomi: ['ゴウ', 'ガッ', 'カッ'], kunyomi: ['あ.う', 'あ.わせる'], meaning: 'combine; suit; fit', examples: [{ word: '合計', reading: 'ごうけい', meaning: 'total; sum' }] },
    { id: 'jp_5_09', kanji: '同', grade: 5, strokes: 6, radical: '口', onyomi: ['ドウ'], kunyomi: ['おな.じ'], meaning: 'same; identical; equal', examples: [{ word: '同時', reading: 'どうじ', meaning: 'simultaneous' }] },
    { id: 'jp_5_10', kanji: '様', grade: 5, strokes: 14, radical: '木', onyomi: ['ヨウ'], kunyomi: ['さま'], meaning: 'appearance; manner; Mr./Ms.', examples: [{ word: '様子', reading: 'ようす', meaning: 'state; condition; appearance' }] },
    { id: 'jp_5_11', kanji: '以', grade: 5, strokes: 5, radical: '人', onyomi: ['イ'], kunyomi: [], meaning: 'by means of; because; compared with', examples: [{ word: '以上', reading: 'いじょう', meaning: 'more than; not less than' }] },
    { id: 'jp_5_12', kanji: '前', grade: 5, strokes: 9, radical: '刀', onyomi: ['ゼン'], kunyomi: ['まえ'], meaning: 'front; before; prior', examples: [{ word: '午前', reading: 'ごぜん', meaning: 'morning; AM' }] },
    { id: 'jp_5_13', kanji: '後', grade: 5, strokes: 9, radical: '彳', onyomi: ['ゴ', 'コウ'], kunyomi: ['あと', 'うし.ろ'], meaning: 'after; back; behind', examples: [{ word: '午後', reading: 'ごご', meaning: 'afternoon; PM' }] },
    { id: 'jp_5_14', kanji: '多', grade: 5, strokes: 6, radical: '夕', onyomi: ['タ'], kunyomi: ['おお.い'], meaning: 'many; much; numerous', examples: [{ word: '多数', reading: 'たすう', meaning: 'large number; majority' }] },
    { id: 'jp_5_15', kanji: '少', grade: 5, strokes: 4, radical: '小', onyomi: ['ショウ'], kunyomi: ['すく.ない', 'すこ.し'], meaning: 'few; little; scarce', examples: [{ word: '少年', reading: 'しょうねん', meaning: 'boy; youth' }] },
    { id: 'jp_5_16', kanji: '通', grade: 5, strokes: 10, radical: '辶', onyomi: ['ツウ', 'ツ'], kunyomi: ['とお.る', 'かよ.う'], meaning: 'pass; commute; traffic', examples: [{ word: '交通', reading: 'こうつう', meaning: 'traffic; transportation' }] },
    { id: 'jp_5_17', kanji: '常', grade: 5, strokes: 11, radical: '巾', onyomi: ['ジョウ'], kunyomi: ['つね'], meaning: 'usual; ordinary; always', examples: [{ word: '日常', reading: 'にちじょう', meaning: 'everyday; ordinary' }] },
    { id: 'jp_5_18', kanji: '特', grade: 5, strokes: 10, radical: '牛', onyomi: ['トク'], kunyomi: [], meaning: 'special; particular; unique', examples: [{ word: '特別', reading: 'とくべつ', meaning: 'special; particular' }] },
    { id: 'jp_5_19', kanji: '別', grade: 5, strokes: 7, radical: '刀', onyomi: ['ベツ'], kunyomi: ['わ.ける'], meaning: 'separate; different; divide', examples: [{ word: '特別', reading: 'とくべつ', meaning: 'special; particular' }] },
    { id: 'jp_5_20', kanji: '単', grade: 5, strokes: 9, radical: '十', onyomi: ['タン'], kunyomi: [], meaning: 'simple; single; unit', examples: [{ word: '単語', reading: 'たんご', meaning: 'word; vocabulary' }] },
  ],
  6: [
    { id: 'jp_6_01', kanji: '体', grade: 6, strokes: 7, radical: '人', onyomi: ['タイ', 'テイ'], kunyomi: ['からだ'], meaning: 'body; substance; form', examples: [{ word: '体育', reading: 'たいいく', meaning: 'physical education' }] },
    { id: 'jp_6_02', kanji: '機', grade: 6, strokes: 16, radical: '木', onyomi: ['キ'], kunyomi: ['はた'], meaning: 'machine; opportunity', examples: [{ word: '機会', reading: 'きかい', meaning: 'opportunity; chance' }] },
    { id: 'jp_6_03', kanji: '心', grade: 6, strokes: 4, radical: '心', onyomi: ['シン'], kunyomi: ['こころ'], meaning: 'heart; mind; spirit', examples: [{ word: '心配', reading: 'しんぱい', meaning: 'worry; anxiety' }] },
    { id: 'jp_6_04', kanji: '思', grade: 6, strokes: 9, radical: '心', onyomi: ['シ'], kunyomi: ['おも.う'], meaning: 'think; suppose', examples: [{ word: '思想', reading: 'しそう', meaning: 'thought; idea; ideology' }] },
    { id: 'jp_6_05', kanji: '想', grade: 6, strokes: 13, radical: '心', onyomi: ['ソウ', 'ソ'], kunyomi: ['おも.う'], meaning: 'think; idea; image', examples: [{ word: '思想', reading: 'しそう', meaning: 'thought; ideology' }] },
    { id: 'jp_6_06', kanji: '意', grade: 6, strokes: 13, radical: '心', onyomi: ['イ'], kunyomi: [], meaning: 'intention; meaning; will', examples: [{ word: '意味', reading: 'いみ', meaning: 'meaning; significance' }] },
    { id: 'jp_6_07', kanji: '関', grade: 6, strokes: 14, radical: '門', onyomi: ['カン'], kunyomi: ['せき', 'かか.わる'], meaning: 'connection; gate; barrier', examples: [{ word: '関係', reading: 'かんけい', meaning: 'relationship; connection' }] },
    { id: 'jp_6_08', kanji: '係', grade: 6, strokes: 9, radical: '人', onyomi: ['ケイ'], kunyomi: ['かか.る', 'かかり'], meaning: 'person in charge; involve', examples: [{ word: '関係', reading: 'かんけい', meaning: 'relationship; connection' }] },
    { id: 'jp_6_09', kanji: '約', grade: 6, strokes: 9, radical: '糸', onyomi: ['ヤク'], kunyomi: [], meaning: 'promise; approximately', examples: [{ word: '約束', reading: 'やくそく', meaning: 'promise; appointment' }] },
    { id: 'jp_6_10', kanji: '束', grade: 6, strokes: 7, radical: '木', onyomi: ['ソク'], kunyomi: ['たば', 'つか'], meaning: 'bundle; bind; about', examples: [{ word: '約束', reading: 'やくそく', meaning: 'promise; appointment' }] },
    { id: 'jp_6_11', kanji: '限', grade: 6, strokes: 9, radical: '阜', onyomi: ['ゲン'], kunyomi: ['かぎ.る'], meaning: 'limit; bound; restrict', examples: [{ word: '制限', reading: 'せいげん', meaning: 'restriction; limit' }] },
    { id: 'jp_6_12', kanji: '度', grade: 6, strokes: 9, radical: '广', onyomi: ['ド', 'ト', 'タク'], kunyomi: ['たび'], meaning: 'degree; times; occasions', examples: [{ word: '今度', reading: 'こんど', meaning: 'next time; this time' }] },
    { id: 'jp_6_13', kanji: '量', grade: 6, strokes: 12, radical: '里', onyomi: ['リョウ'], kunyomi: ['はか.る'], meaning: 'amount; quantity; volume', examples: [{ word: '大量', reading: 'たいりょう', meaning: 'large amount; mass' }] },
    { id: 'jp_6_14', kanji: '等', grade: 6, strokes: 12, radical: '竹', onyomi: ['トウ'], kunyomi: ['など', 'ひと.しい'], meaning: 'equal; etc.; grade; class', examples: [{ word: '平等', reading: 'びょうどう', meaning: 'equality; impartiality' }] },
    { id: 'jp_6_15', kanji: '級', grade: 6, strokes: 9, radical: '糸', onyomi: ['キュウ'], kunyomi: [], meaning: 'rank; grade; class', examples: [{ word: '高級', reading: 'こうきゅう', meaning: 'high-class; high-grade' }] },
    { id: 'jp_6_16', kanji: '類', grade: 6, strokes: 18, radical: '頁', onyomi: ['ルイ'], kunyomi: ['たぐい'], meaning: 'kind; type; category', examples: [{ word: '種類', reading: 'しゅるい', meaning: 'kind; type; variety' }] },
    { id: 'jp_6_17', kanji: '似', grade: 6, strokes: 7, radical: '人', onyomi: ['ジ'], kunyomi: ['に.る'], meaning: 'resemble; be similar', examples: [{ word: '類似', reading: 'るいじ', meaning: 'similarity; resemblance' }] },
    { id: 'jp_6_18', kanji: '台', grade: 6, strokes: 5, radical: '口', onyomi: ['ダイ', 'タイ'], kunyomi: ['うてな'], meaning: 'stand; platform; counter', examples: [{ word: '台所', reading: 'だいどころ', meaning: 'kitchen' }] },
    { id: 'jp_6_19', kanji: '列', grade: 6, strokes: 6, radical: '刀', onyomi: ['レツ'], kunyomi: ['つら.ねる'], meaning: 'line; row; column', examples: [{ word: '行列', reading: 'ぎょうれつ', meaning: 'line; queue; procession' }] },
    { id: 'jp_6_20', kanji: '記', grade: 6, strokes: 10, radical: '言', onyomi: ['キ'], kunyomi: ['しる.す'], meaning: 'record; write; mark', examples: [{ word: '記念', reading: 'きねん', meaning: 'commemoration; memory' }] },
  ],
};

function getAllKanji() {
  return Object.values(kanjiDatabase).flat();
}

function searchKanji(query, grade = null) {
  const lowerQuery = query.toLowerCase();
  const grades = grade ? [Number(grade)] : Object.keys(kanjiDatabase).map(Number);
  const results = [];

  grades.forEach(g => {
    (kanjiDatabase[g] || []).forEach(k => {
      if (
        k.kanji === query ||
        k.onyomi.some(r => r.toLowerCase().includes(lowerQuery)) ||
        k.kunyomi.some(r => r.toLowerCase().includes(lowerQuery)) ||
        k.meaning.toLowerCase().includes(lowerQuery) ||
        k.radical.includes(query) ||
        k.examples.some(ex => ex.word.includes(query))
      ) {
        results.push(k);
      }
    });
  });

  return results;
}

exports.handler = async (event) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public, max-age=3600',
  };

  const path = event.path.replace(/^\/api\/kanji\/?/, '').replace(/^\/?\.netlify\/functions\/kanji-api\/?/, '');
  const params = event.queryStringParameters || {};

  try {
    // /api/kanji/grade/:grade
    const gradeMatch = path.match(/^grade\/(\d+)$/);
    if (gradeMatch) {
      const grade = Number(gradeMatch[1]);
      const data = kanjiDatabase[grade];
      if (!data) {
        return { statusCode: 404, headers, body: JSON.stringify({ error: `Grade ${grade} not found` }) };
      }
      return { statusCode: 200, headers, body: JSON.stringify(data) };
    }

    // /api/kanji/search?q=query&grade=optional
    if (path === 'search' || path.startsWith('search?')) {
      const query = params.q || params.query || '';
      if (!query) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing query parameter: q' }) };
      }
      const results = searchKanji(query, params.grade || null);
      return { statusCode: 200, headers, body: JSON.stringify(results) };
    }

    // /api/kanji/:id
    if (path && !path.includes('/')) {
      const kanji = getAllKanji().find(k => k.id === path || k.kanji === path);
      if (!kanji) {
        return { statusCode: 404, headers, body: JSON.stringify({ error: 'Kanji not found' }) };
      }
      return { statusCode: 200, headers, body: JSON.stringify(kanji) };
    }

    // List all grades
    if (path === '' || path === '/') {
      return { statusCode: 200, headers, body: JSON.stringify({ grades: Object.keys(kanjiDatabase).map(Number) }) };
    }

    return { statusCode: 404, headers, body: JSON.stringify({ error: 'Not found' }) };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Internal server error' }) };
  }
};
