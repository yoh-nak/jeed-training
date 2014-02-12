$ ->
	$('#mouseover').mouseover( ->
		window.alert 'mouseover'
		return
	).mouseout ->
		window.alert 'mouseout'
		return
	$('#hover').hover ->
		window.alert 'mouseenter'
		return
	, ->
		window.alert 'mouseleave'
		return
	$('#mouseenter').mouseenter( ->
		window.alert 'mouseenter'
		return
	).mouseleave ->
		window.alert 'mouseleave'
		return
	return