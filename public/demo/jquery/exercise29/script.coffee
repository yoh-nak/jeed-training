$ ->
	$('img').click ->
		$('img').removeClass 'enlarge'

		#以下の記述でも可
		#$(this).removeClass 'enlarge'

		return
	return