$(function(){
	console.log('init');

	//a要素の初期化
	$(document).on('a', 'touchstart click', function(e){
		window.location.href = $(this).attr('href');
		return false;
	});

	//メニューボタンタップ時の動作
	$('.menu_btn').on('touchstart click',function(e){
		//console.log('tap');
		if(!$('body').hasClass('open')) {
			$('body').addClass('open');
			console.log('open');
		}
		else {
			$('body').removeClass('open');
			console.log('close');
		}
	});
});