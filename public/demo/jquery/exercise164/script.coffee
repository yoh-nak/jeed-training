$ ->
	$('li').each (i) ->
		$(this).prepend '<span>' + i + '</span>'
		return
	return