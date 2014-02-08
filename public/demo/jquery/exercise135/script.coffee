$ ->
	$('input:nth(0)').click ->
		$('#first:not(:animated)').show('slow')
		$('li:not(:animated)').show('slow')
		return
	$('input:nth(1)').click ->
		$('#first:not(:animated)').hide('slow')
		$('li:not(:animated)').hide('slow')
		return
return
