$ ->
	$('div:first').addClass 'top'
	$('div:last').addClass 'bottom'
	$('div').click ->
		$('div').addClass 'after'
		return
	return