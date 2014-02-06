$ ->
	$('input[value="山"]').click ->
		$('td:contains("山")').css 'background-color','#FF0000'
		return
	$('input[value="田"]').click ->
		$('td:has(span)').css('background-color','#0000FF');
		return
	return