$(function(){
	console.log('init');

	//a要素の初期化
	$(document).on('a', 'touchstart click', function(e){
		window.location.href = $(this).attr('href');
		return false;
	});

	//メニューボタンタップ時の動作
	$('.menu_btn').on('touchstart click',function(e){
		console.log('tap');
	});
});