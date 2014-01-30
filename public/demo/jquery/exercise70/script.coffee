$ ->
	$('input').click ->
		$('li,span').css
			'listStyleType': 'square'
			'display': 'list-item'
		$('span').wrapAll('<div></div>').parent().css
			'marginTop': '16px'
			'marginBottom': '16px'
			'paddingLeft': '40px'
		.insertAfter('ol')
		return
	return