$ ->
	$('#image1').click ->
		$('p:not(:animated)').animate
			marginLeft: '-200px'
		, 'slow', 'swing'
		return
	$('#image2').click ->
		$('p:not(:animated)').animate
			marginLeft: '0'
		, 'slow', 'swing'
		return
	return
