$ ->
	$('li').click ->
		$(this).css 'color', '#f00'
		$('li:lt(' + $('ul li').index(this) + ')').css 'color', '#0f0'
		$('li:gt(' + $('ul li').index(this) + ')').css 'color', '#00f'
	return