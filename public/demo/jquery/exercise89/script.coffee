$ ->
	$('div').click ->
		$('span:last-child',this).css 'display', 'block'
		return
	$('span').click ->
		$(this).css 'display', 'none'
		return false
	return