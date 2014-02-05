$ ->
	$('input:first-of-type').click ->
		$('img').css 'display', 'none'
		$('img[src^="img/"][src$=".png"]').css 'display', 'inine-block'
		return
	$('input:last-of-type').click ->
		$('img').css 'display', 'inline-block'
		return
	return