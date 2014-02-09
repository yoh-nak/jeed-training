$ ->
	$('input').dblclick ->
		$('img').attr
			'src': 'img/after.png',
			'alt': '変更後'
		return
	return