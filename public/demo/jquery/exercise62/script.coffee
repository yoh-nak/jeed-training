$ ->
	$('#first')
		.click ->
			$(this)
				.css
					'top': '50%'
					'left': '50%'
					'width': '400px'
					'height': '400px'
					'margin-left': '-200px'
					'margin-top': '-200px'
				.attr 'src', 'img/after.png'
			return
	return