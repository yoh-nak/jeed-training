$ ->
	$('input:nth-child(1)').click ->
		$('img').removeClass 'remove'
		$('img:nth-last-child(1)').addClass 'remove'
		return
	$('input:nth-child(2)').click ->
		$('img').removeClass 'remove'
		$('img:nth-last-child(2)').addClass 'remove'
		return
	$('input:nth-child(3)').click ->
		$('img').removeClass 'remove'
		$('img:nth-last-child(3)').addClass 'remove'
		return
	$('input:nth-child(4)').click ->
		$('img').removeClass 'remove'
		$('img:nth-last-child(4)').addClass 'remove'
		return
	$('input:nth-child(5)').click ->
		$('img').removeClass 'remove'
		$('img:nth-last-child(5)').addClass 'remove'
		return
	return