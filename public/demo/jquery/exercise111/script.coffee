$ ->
	$('input').click ->
		$('iframe[src!="' + $(this).attr('title') + '"]').css 'display', 'none'
		$('iframe[src="' + $(this).attr('title') + '"]').css 'display', 'inline-block'
		return
	$('input:last-child').click ->
		$('iframe').css 'display', 'inline-block'
		return
	return