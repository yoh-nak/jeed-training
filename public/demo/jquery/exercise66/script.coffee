$ ->
	$('input').click ->
		$('li', 'ul').css 'list-style-type', 'decimal'
		$('li', 'ol').css 'list-style-type', 'upper-roman'
		return
	return