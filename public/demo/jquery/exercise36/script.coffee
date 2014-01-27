$ ->
	$('input').click ->
		$('img').attr('src', 'img/after.png').css
			border: '5px solid yellow'
			width: '400px'
			height: '400px'
		return
	return