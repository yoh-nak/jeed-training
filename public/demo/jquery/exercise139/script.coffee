$ ->
	$('input:nth(0)').click ->
		$('li:not(:animated)').fadeIn()
		$('#first:not(:animated)').fadeIn()
		return
	$('input:nth(1)').click ->
		$('li:not(:animated)').fadeOut()
		$('#first:not(:animated)').fadeOut()
		return
return
