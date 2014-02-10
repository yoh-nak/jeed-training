$ ->
	$('.panel').height($('.content').height());
	$('.panel').on 'click touchstart',  ->
		$(this).toggleClass 'open'
		$('.content').toggleClass 'open'
		return
	return