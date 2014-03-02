//変数定義
var index = 0 //現在の写真の番号
,          total = 0 //写真の合計数
,          interval = 5000 //切り替える間隔(秒数)
,          timeOutEvent = ''; //timeoutイベント用の変数
//スライドショー初期設定
function initialize() {
     total = $('#main_visual .vis').length;
     $('#main_visual .vis').each(function(ind){
          $(this).addClass('vis'+ind);
     });
     timeOutEvent = setTimeout(function(){
          index++;
          animation();
     }, interval);              
}
//スライドショー実装
function animation() {
     clearTimeout(timeOutEvent);
     $('#main_visual .vis').css({
          'opacity':0,
          'z-index':0
     });
     $('#main_visual .vis'+index).css({
          'opacity':1,
          'z-index':1
     });
     if(index == total - 1) index = 0;
     else index++;
     timeOutEvent = setTimeout(function(){
          animation();
     }, interval);
}
//実行
$(function(){
     initialize();
});