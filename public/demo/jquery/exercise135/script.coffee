$ ->
	$('input:nth(0)').click ->
		$('li:not(:animated)').show('slow')
		return
	$('input:nth(1)').click ->
		$('li:not(:animated)').hide('slow')
		return
return
