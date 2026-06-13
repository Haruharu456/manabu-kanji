// Kanji data by grade level
const kanjiDatabase = {
  1: [
    { kanji: '一', on: ['イチ', 'イツ'], kun: ['ひと', 'ひと-つ'], meaning: 'one', strokes: 1 },
    { kanji: '二', on: ['ニ'], kun: ['ふた', 'ふた-つ'], meaning: 'two', strokes: 2 },
    { kanji: '三', on: ['サン'], kun: ['み', 'み-つ'], meaning: 'three', strokes: 3 },
    { kanji: '四', on: ['シ'], kun: ['よ', 'よ-つ'], meaning: 'four', strokes: 5 },
    { kanji: '五', on: ['ゴ'], kun: ['いつ', 'いつ-つ'], meaning: 'five', strokes: 4 },
    { kanji: '六', on: ['ロク'], kun: ['む', 'む-つ'], meaning: 'six', strokes: 4 },
    { kanji: '七', on: ['シチ'], kun: ['なな', 'なな-つ'], meaning: 'seven', strokes: 2 },
    { kanji: '八', on: ['ハチ'], kun: ['や', 'や-つ'], meaning: 'eight', strokes: 2 },
    { kanji: '九', on: ['キュウ', 'ク'], kun: ['ここの', 'ここの-つ'], meaning: 'nine', strokes: 2 },
    { kanji: '十', on: ['ジュウ', 'シュ'], kun: ['とお'], meaning: 'ten', strokes: 2 },
    { kanji: '百', on: ['ヒャク'], kun: ['もも'], meaning: 'hundred', strokes: 6 },
    { kanji: '千', on: ['セン'], kun: ['ち'], meaning: 'thousand', strokes: 3 },
    { kanji: '火', on: ['カ'], kun: ['ひ', 'ほ'], meaning: 'fire', strokes: 4 },
    { kanji: '水', on: ['スイ'], kun: ['みず'], meaning: 'water', strokes: 4 },
    { kanji: '木', on: ['モク'], kun: ['き'], meaning: 'tree', strokes: 4 },
    { kanji: '金', on: ['キン', 'コン'], kun: ['かね'], meaning: 'gold; money', strokes: 8 },
    { kanji: '土', on: ['ド', 'ト'], kun: ['つち'], meaning: 'earth; soil', strokes: 3 },
    { kanji: '日', on: ['ニチ', 'ジツ'], kun: ['ひ', 'か'], meaning: 'day; sun', strokes: 4 },
    { kanji: '月', on: ['ゲツ', 'ガツ'], kun: ['つき'], meaning: 'month; moon', strokes: 4 },
    { kanji: '年', on: ['ネン'], kun: ['とし'], meaning: 'year; age', strokes: 6 },
  ],
  2: [
    { kanji: '学', on: ['ガク'], kun: ['まな-ぶ'], meaning: 'study; learn', strokes: 8 },
    { kanji: '校', on: ['コウ'], kun: [], meaning: 'school', strokes: 10 },
    { kanji: '先', on: ['セン'], kun: ['さき'], meaning: 'before; previous', strokes: 6 },
    { kanji: '生', on: ['セイ', 'ショウ'], kun: ['い-きる', 'い-かす'], meaning: 'life; live', strokes: 5 },
    { kanji: '花', on: ['カ'], kun: ['はな'], meaning: 'flower', strokes: 7 },
    { kanji: '明', on: ['メイ', 'ミョウ'], kun: ['あ-かり', 'あか-るい'], meaning: 'bright; light', strokes: 8 },
    { kanji: '春', on: ['シュン'], kun: ['はる'], meaning: 'spring', strokes: 9 },
    { kanji: '夏', on: ['カ'], kun: ['なつ'], meaning: 'summer', strokes: 10 },
    { kanji: '秋', on: ['シュウ'], kun: ['あき'], meaning: 'autumn', strokes: 9 },
    { kanji: '冬', on: ['トウ'], kun: ['ふゆ'], meaning: 'winter', strokes: 5 },
    { kanji: '人', on: ['ジン', 'ニン'], kun: ['ひと'], meaning: 'person; people', strokes: 2 },
    { kanji: '男', on: ['ダン', 'ナン'], kun: ['おとこ'], meaning: 'man; male', strokes: 7 },
    { kanji: '女', on: ['ジョ', 'ニョ'], kun: ['おんな', 'め'], meaning: 'woman; female', strokes: 3 },
    { kanji: '子', on: ['シ', 'ス'], kun: ['こ'], meaning: 'child; kid', strokes: 3 },
    { kanji: '母', on: ['ボ'], kun: ['はは'], meaning: 'mother', strokes: 5 },
    { kanji: '父', on: ['フ'], kun: ['ちち'], meaning: 'father', strokes: 4 },
    { kanji: '兄', on: ['キョウ'], kun: ['あに'], meaning: 'older brother', strokes: 5 },
    { kanji: '姉', on: ['シ'], kun: ['あね'], meaning: 'older sister', strokes: 8 },
    { kanji: '弟', on: ['テイ', 'ダイ'], kun: ['おとうと'], meaning: 'younger brother', strokes: 7 },
    { kanji: '妹', on: ['マイ'], kun: ['いもうと'], meaning: 'younger sister', strokes: 8 },
  ],
  3: [
    { kanji: '漢', on: ['カン'], kun: [], meaning: 'Han; kanji', strokes: 13 },
    { kanji: '字', on: ['ジ'], kun: ['あざ'], meaning: 'character; letter', strokes: 6 },
    { kanji: '言', on: ['ゲン', 'ゴン'], kun: ['い-う', 'こと'], meaning: 'word; speech', strokes: 7 },
    { kanji: '読', on: ['トク', 'ドク'], kun: ['よ-む'], meaning: 'read', strokes: 14 },
    { kanji: '書', on: ['ショ'], kun: ['か-く'], meaning: 'write', strokes: 10 },
    { kanji: '林', on: ['リン'], kun: ['はやし'], meaning: 'grove; forest', strokes: 8 },
    { kanji: '森', on: ['シン'], kun: ['もり'], meaning: 'forest', strokes: 12 },
    { kanji: '川', on: ['セン'], kun: ['かわ'], meaning: 'river; stream', strokes: 3 },
    { kanji: '山', on: ['サン'], kun: ['やま'], meaning: 'mountain', strokes: 3 },
    { kanji: '海', on: ['カイ'], kun: ['うみ'], meaning: 'sea; ocean', strokes: 9 },
    { kanji: '地', on: ['チ', 'ジ'], kun: ['ところ'], meaning: 'ground; earth', strokes: 6 },
    { kanji: '空', on: ['クウ'], kun: ['そら', 'あ-く'], meaning: 'sky; empty', strokes: 8 },
    { kanji: '雨', on: ['ウ'], kun: ['あめ'], meaning: 'rain', strokes: 8 },
    { kanji: '雪', on: ['セツ'], kun: ['ゆき'], meaning: 'snow', strokes: 11 },
    { kanji: '風', on: ['フウ', 'フ'], kun: ['かぜ', 'かぜ'], meaning: 'wind', strokes: 9 },
    { kanji: '動', on: ['ドウ'], kun: ['うご-く'], meaning: 'move; motion', strokes: 11 },
    { kanji: '音', on: ['オン', 'イン'], kun: ['おと', 'ね'], meaning: 'sound; noise', strokes: 9 },
    { kanji: '絵', on: ['カイ'], kun: ['え'], meaning: 'picture; drawing', strokes: 12 },
    { kanji: '色', on: ['ショク', 'シキ'], kun: ['いろ'], meaning: 'color; tint', strokes: 6 },
    { kanji: '形', on: ['ケイ', 'ギョウ'], kun: ['かたち', 'かた'], meaning: 'form; shape', strokes: 7 },
  ],
  4: [
    { kanji: '電', on: ['デン'], kun: [], meaning: 'electricity', strokes: 13 },
    { kanji: '気', on: ['キ'], kun: ['け'], meaning: 'spirit; air; feeling', strokes: 6 },
    { kanji: '計', on: ['ケイ'], kun: ['はか-る'], meaning: 'measure; count', strokes: 9 },
    { kanji: '理', on: ['リ'], kun: [], meaning: 'reason; logic', strokes: 11 },
    { kanji: '科', on: ['カ'], kun: [], meaning: 'subject; department', strokes: 9 },
    { kanji: '社', on: ['シャ'], kun: ['やしろ'], meaning: 'company; society', strokes: 7 },
    { kanji: '家', on: ['カ', 'ケ'], kun: ['いえ', 'や'], meaning: 'house; home', strokes: 10 },
    { kanji: '道', on: ['ドウ', 'トウ'], kun: ['みち'], meaning: 'way; path; road', strokes: 12 },
    { kanji: '法', on: ['ホウ'], kun: ['のり'], meaning: 'law; method; rule', strokes: 8 },
    { kanji: '時', on: ['ジ'], kun: ['とき'], meaning: 'time; hour', strokes: 10 },
    { kanji: '間', on: ['カン', 'ケン'], kun: ['ま', 'あ-いだ'], meaning: 'space; between; interval', strokes: 12 },
    { kanji: '国', on: ['コク'], kun: ['くに'], meaning: 'country; nation', strokes: 8 },
    { kanji: '回', on: ['カイ'], kun: ['まわ-る', 'まわ-す'], meaning: 'times; rotation; turn', strokes: 6 },
    { kanji: '町', on: ['チョウ', 'チョ'], kun: ['まち'], meaning: 'town; street', strokes: 7 },
    { kanji: '市', on: ['シ'], kun: ['いち'], meaning: 'market; city', strokes: 5 },
    { kanji: '民', on: ['ミン'], kun: ['たみ'], meaning: 'people; folk; citizen', strokes: 5 },
    { kanji: '族', on: ['ゾク'], kun: ['やから'], meaning: 'family; clan; group', strokes: 11 },
    { kanji: '建', on: ['ケン'], kun: ['た-てる'], meaning: 'build; construct', strokes: 9 },
    { kanji: '共', on: ['キョウ', 'ク'], kun: ['とも'], meaning: 'together; mutual; common', strokes: 6 },
    { kanji: '決', on: ['ケツ'], kun: ['き-める', 'き-まる'], meaning: 'decide; determine', strokes: 6 },
  ],
  5: [
    { kanji: '文', on: ['ブン', 'モン'], kun: ['ふみ'], meaning: 'sentence; writing; letter', strokes: 4 },
    { kanji: '章', on: ['ショウ'], kun: [], meaning: 'chapter; section', strokes: 11 },
    { kanji: '首', on: ['シュ'], kun: ['くび'], meaning: 'head; neck; leader', strokes: 9 },
    { kanji: '事', on: ['ジ', 'ズ'], kun: ['こと'], meaning: 'thing; matter; affair', strokes: 8 },
    { kanji: '実', on: ['ジツ'], kun: ['み', 'みの-る'], meaning: 'reality; truth; result', strokes: 8 },
    { kanji: '産', on: ['サン'], kun: ['う-む', 'うぶ'], meaning: 'give birth; produce', strokes: 11 },
    { kanji: '業', on: ['ギョウ', 'ゴウ'], kun: ['わざ'], meaning: 'work; business; vocation', strokes: 13 },
    { kanji: '合', on: ['ゴウ'], kun: ['あ-う', 'あ-わせる'], meaning: 'combine; accord; match', strokes: 6 },
    { kanji: '同', on: ['ドウ'], kun: ['おな-じ'], meaning: 'same; equal; identical', strokes: 6 },
    { kanji: '様', on: ['ヨウ'], kun: ['さま'], meaning: 'appearance; form; way', strokes: 14 },
    { kanji: '以', on: ['イ'], kun: [], meaning: 'this way; by means of', strokes: 5 },
    { kanji: '前', on: ['ゼン'], kun: ['まえ'], meaning: 'front; before; prior', strokes: 9 },
    { kanji: '後', on: ['ゴ', 'コウ'], kun: ['あと', 'うし-ろ'], meaning: 'after; back; rear', strokes: 9 },
    { kanji: '多', on: ['タ'], kun: ['おおい'], meaning: 'many; much; numerous', strokes: 6 },
    { kanji: '少', on: ['ショウ'], kun: ['すく-ない', 'すこ-し'], meaning: 'few; little; less', strokes: 4 },
    { kanji: '通', on: ['ツウ'], kun: ['とお-る', 'とお-す'], meaning: 'pass; go through; commute', strokes: 10 },
    { kanji: '常', on: ['ジョウ'], kun: ['つね'], meaning: 'usual; ordinary; always', strokes: 11 },
    { kanji: '特', on: ['トク'], kun: [], meaning: 'special; particular; unique', strokes: 10 },
    { kanji: '別', on: ['ベツ'], kun: ['わ-ける'], meaning: 'divide; separate; different', strokes: 7 },
    { kanji: '単', on: ['タン'], kun: [], meaning: 'simple; single; unit', strokes: 9 },
  ],
  6: [
    { kanji: '体', on: ['タイ', 'テイ'], kun: ['からだ'], meaning: 'body; substance; form', strokes: 7 },
    { kanji: '機', on: ['キ'], kun: ['はた'], meaning: 'machine; device; chance', strokes: 16 },
    { kanji: '心', on: ['シン'], kun: ['こころ'], meaning: 'heart; mind; spirit', strokes: 4 },
    { kanji: '思', on: ['シ'], kun: ['おも-う'], meaning: 'think; suppose; consider', strokes: 9 },
    { kanji: '想', on: ['ソウ'], kun: ['おも-う'], meaning: 'think; idea; image', strokes: 13 },
    { kanji: '意', on: ['イ'], kun: [], meaning: 'intention; meaning; will', strokes: 13 },
    { kanji: '関', on: ['カン'], kun: ['せき', 'かか-わる'], meaning: 'connection; relation; gate', strokes: 14 },
    { kanji: '係', on: ['ケイ'], kun: ['かか-る', 'かか-わる'], meaning: 'involve; concern; connection', strokes: 9 },
    { kanji: '約', on: ['ヤク'], kun: ['ちぢ-める', 'つづ-める'], meaning: 'promise; roughly; abbreviation', strokes: 9 },
    { kanji: '束', on: ['ソク'], kun: ['たば', 'つか-ねる'], meaning: 'bundle; fasten; about', strokes: 7 },
    { kanji: '限', on: ['ゲン'], kun: ['かぎ-る'], meaning: 'limit; bound; restriction', strokes: 9 },
    { kanji: '度', on: ['ド', 'ト'], kun: ['たび'], meaning: 'degree; frequency; times', strokes: 9 },
    { kanji: '量', on: ['リョウ'], kun: ['はか-る'], meaning: 'amount; quantity; volume', strokes: 12 },
    { kanji: '等', on: ['トウ'], kun: ['など', 'ひと-しい'], meaning: 'equal; etc; class', strokes: 12 },
    { kanji: '級', on: ['キュウ'], kun: [], meaning: 'rank; grade; class', strokes: 9 },
    { kanji: '類', on: ['ルイ'], kun: ['たぐい'], meaning: 'kind; type; category', strokes: 9 },
    { kanji: '似', on: ['ジ'], kun: ['に-る'], meaning: 'resemble; be similar to', strokes: 7 },
    { kanji: '台', on: ['ダイ', 'タイ'], kun: ['うてな', 'つく-え'], meaning: 'stand; platform; base', strokes: 5 },
    { kanji: '列', on: ['レツ'], kun: ['つら-ねる'], meaning: 'line; row; column', strokes: 6 },
    { kanji: '記', on: ['キ'], kun: ['しる-す'], meaning: 'record; write down; chronicle', strokes: 10 },
  ],
};

// Function to get kanji by grade
function getKanjiByGrade(grade) {
  return kanjiDatabase[grade] || [];
}

// Function to get all grades
function getAllGrades() {
  return Object.keys(kanjiDatabase).map(Number).sort((a, b) => a - b);
}

// Function to search kanji
function searchKanji(query, grade) {
  const kanji = getKanjiByGrade(grade);
  const lowerQuery = query.toLowerCase();

  return kanji.filter(k =>
    k.kanji === query ||
    k.on.some(r => r.toLowerCase().includes(lowerQuery)) ||
    k.kun.some(r => r.toLowerCase().includes(lowerQuery)) ||
    k.meaning.toLowerCase().includes(lowerQuery)
  );
}