$ ->
	$('img').click ->
		$('#inner:not(:animated)').animate
			marginRight: '-600px'
			, '500ms', 'swing', ->
				$('img:last-of-type').prependTo '#inner'
				$('#inner').css 'margin-right', '-800px'
				return
		return
	return