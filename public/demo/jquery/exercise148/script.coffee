$ ->
	$('a').click ->
		$('img').attr
			'src': $(this).attr 'href'
			'alt': $(this).text()
		$('h1').text $(this).text()
		return false;
	return