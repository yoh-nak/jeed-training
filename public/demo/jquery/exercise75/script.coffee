$ ->
	$('dt').click ->
		$('dd').css 'height', '0'
		$('+dd', this).css 'height', '100px'
		return
	return