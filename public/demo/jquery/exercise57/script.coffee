$ ->
	$('input:first-of-type').click ->
		$('li:first-of-type').appendTo('ul')
		return
	$('input:last-of-type').click ->
		$('li:last-of-type').prependTo('ul')
		return
	return