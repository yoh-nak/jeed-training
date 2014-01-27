$ ->
	$('input').click ->
		$('img')
			.removeClass('before')
			.addClass('after')
			.attr('src','img/after.png')
		return
	return