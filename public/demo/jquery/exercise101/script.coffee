$ ->
	$('img').click ->
		$('#inner')
			.css({'marginRight': '-600px'})
			.on 'oTransitionEnd mozTransitionEnd webkitTransitionEnd transitionend', ->
				$('#inner').css 'margin-right', '-800px'
				$('img:last-of-type').prependTo '#inner'
		return
	return