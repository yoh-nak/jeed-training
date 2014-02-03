$ ->
	$('li').click ->
		$(this).remove();
		$('li:only-child').css 'color', 'red'
		return
	return