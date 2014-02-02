$ ->
	$('li').click ->
		$(this).addClass('turn').removeClass('fade')
		$('li').not(this).addClass('fade').removeClass('turn')
		return
	return