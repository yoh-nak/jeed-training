$ ->
	$('input:nth(0)').click ->
		$('li:not(:animated)').slideDown()
		$('#first:not(:animated)').slideDown()
		return
	$('input:nth(1)').click ->
		$('li:not(:animated)').slideUp()
		$('#first:not(:animated)').slideUp()
		return
return
