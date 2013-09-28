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
  'キャラ1': ['まゆ', 160, 480, 180, 50],
  'イベント': ['まゆ', 'touchstart' , 'move'],
}


// リスナ(関数)
var move = function(e){
  this.x = 0;
  this.scaleX = -1;
}