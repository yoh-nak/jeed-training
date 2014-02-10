$ ->
	$('.panel').height($('.content').height());
	$('.panel').on 'click touchstart',  ->
		$(this).toggleClass 'open'
		return
	return