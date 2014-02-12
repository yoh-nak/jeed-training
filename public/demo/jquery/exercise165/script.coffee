$ ->
	$('img').hover( ->
		$(this).attr 'src', 'img/after.png'
		return
	, ->
		$(this).attr 'src', 'img/before.png'
		return
	)
	return