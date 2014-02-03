$ ->
	$('dt').click ->
		$('+ dd > span:only-of-type',this).addClass('show')
		return
	$('span').click ->
		$(this).removeClass 'show'
		return
	return