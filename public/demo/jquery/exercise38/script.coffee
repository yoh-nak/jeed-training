$ ->
	$('img').click ->
		$('p:nth-of-type(2)').html $(this).attr('src')
		return
	return