$ ->
	$('#image1').click ->
		$('p:not(:animated)').animate
			marginLeft: '-200px'
		, 'slow', 'easeInOutBounce'
		return
	$('#image2').click ->
		$('p:not(:animated)').animate
			marginLeft: '0'
		, 'slow', 'easeInOutBounce'
		return
	return
