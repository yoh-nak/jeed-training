$ ->
	#この場合、thisには「document」が格納されている
	$('[colspan]').replaceWith('<th colspan=' + $('[colspan]').attr('colspan') + '>' + $('[colspan]').text() + '</th>')
	return