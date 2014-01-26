$ ->
	$('img').click ->
		$('img').toggleClass 'enlarge'

		#以下の記述でも可
		#$(this).togglelass 'enlarge'

		#以下の記述でも可
		###
		if $(this).attr('class') is 'enlarge'
			$(this).removeClass 'enlarge'
		else
			$(this).addClass 'enlarge'
		###

		#以下の記述でも可
		###
		if $(this).hasClass('enlarge')
			$(this).removeClass 'enlarge'
		else
			$(this).addClass 'enlarge'
		###

		return
	return