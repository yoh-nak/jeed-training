$ ->
	$('a').click ->
		$('img').attr 'src', $(this).attr 'href'
		$('h1').text $(this).text()
		return false;
	return