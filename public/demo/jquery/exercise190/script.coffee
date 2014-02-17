$ ->
	$('img').click ->
		$(this).addClass 'enlarge'
		return
	$(window).keydown (e) ->
		if e.keyCode is 27
			$('img').removeClass 'enlarge'
		return
	return