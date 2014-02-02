$ ->
	$('li').click ->
		$('~li',this).addClass('hide')
		return
	return