$ ->
	$('[type="button"]').not(':last-child').click ->
		$('li').css 'display', 'none'
		$('a[href*="' + $(this).attr('value') + '"]').parent().css 'display', 'list-item'
		return
	$('[type="button"]:last-child').click ->
		$('li').css 'display', 'list-item'
	return