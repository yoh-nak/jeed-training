$ ->
	$('tr:even').css 'background-color', 'red'
	$('tr:odd').css 'background-color', 'blue'
	$('tr').click ->
		$(this).prependTo('tbody')
		$('tr:even').css 'background-color', 'red'
		$('tr:odd').css 'background-color', 'blue'
		return
	return