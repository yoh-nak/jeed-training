$ ->
	$('.panel').height($('.content').height());
	$('.panel').on 'click touchstart',  ->
		$('.content').toggleClass 'open'
		return
	return