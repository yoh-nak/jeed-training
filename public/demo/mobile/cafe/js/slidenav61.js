$(function(){
	console.log('init');

	//a要素の初期化
	$(document).on('a', 'touchstart click', function(e){
		window.location.href = $(this).attr('href');
		return false;
	});
});