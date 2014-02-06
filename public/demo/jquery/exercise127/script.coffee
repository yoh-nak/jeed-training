$ ->
	$('input').click ->
		$(':header').prependTo('body')
		$('body > *').not(':header').css 'display', 'none'
		#$('~ *', ':header:last').css 'display', 'none'
		return
	return