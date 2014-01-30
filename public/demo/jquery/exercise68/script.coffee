$ ->
	$('input:first-of-type').click ->
		$('*', 'li').css 'display', 'block'
		$('li').css 'display', 'list-item'
		return
	$('input:last-of-type').click ->
		$('*', 'li').css 'display', 'none'
		return
	return