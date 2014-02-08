$ ->
	$('input:nth(0)').click ->
		$('#first:not(:animated)').fadeTo('slow', 1)
		return
	$('input:nth(1)').click ->
		$('#first:not(:animated)').fadeTo('slow', 0.5)
		return
	$('input:nth(2)').click ->
		$('#first:not(:animated)').fadeTo('slow', 0)
		return
return
