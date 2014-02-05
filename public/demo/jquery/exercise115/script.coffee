$ ->
	$('input').click ->
		$('img').css 'display', 'none'
		$('[src$="' + $(this).attr('value') + '"]').css 'display', 'inline-block'
		return
	$('input:last-child').click ->
		$('img').css 'display', 'inline-block'
		return
	return