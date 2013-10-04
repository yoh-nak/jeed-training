// 背景、登場人物の画像を定義する
背景画像 = {
  'エントランス': 'bg/entrance.png',
  '教室1': 'bg/classroom.png',
  '廊下': 'bg/passage.png'
}

登場人物 = {
  'まゆ': 'chara_1.png',
}

// シナリオ

start = {
  '背景画像': ['エントランス', 426, 320],
  '選択肢': ['どうしようかな？','教室に行く', '教室', '寄り道する', '廊下'],
}

教室 = {
  '背景画像': ['教室1', 426, 320],
  'キャラ1': ['まゆ', 160, 480, 180, 50],
  'セリフ': ['[まゆ]', 'おはよう'],
}

廊下 = {
  '背景画像': ['廊下', 426, 320],
}