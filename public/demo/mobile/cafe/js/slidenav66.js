$(function(){
	//console.log('init');

	var openHeight =
	$(window).height()+60 > $('#navigation').height() ?
		$(window).height()+60 : $('#navigation').height();
		
	$('#navigation').css({'min-height':openHeight+'px'});

	//a要素の初期化
	$(document).on('a', 'touchstart click', function(e){
		window.location.href = $(this).attr('href');
		return false;
	});

	//メニューボタンタップ時の動作
	$('.menu_btn').on('touchstart click',function(e){
		//console.log('tap');
		if(!$('body').hasClass('open')) {
		$('body').css({
			'-webkit-transform':'translate3d(260px,0,0)',
			'transform':'translate3d(260px,0,0)'
		}).addClass('open');
			//console.log('open');
		}
		else {
		$('body').css({
			'-webkit-transform':'none',
			'transform':'none'
		}).removeClass('open');
			//console.log('close');
		}
	});
});