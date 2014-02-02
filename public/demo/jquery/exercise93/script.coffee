$ ->
	$('input:nth-child(1)').click ->
		$('li').css 'color', 'black'
		$('li:nth-child(1)').css 'color', 'red'
	$('input:nth-child(2)').click ->
		$('li').css 'color', 'black'
		$('li:nth-child(2)').css 'color', 'red'
	$('input:nth-child(3)').click ->
		$('li').css 'color', 'black'
		$('li:nth-child(3)').css 'color', 'red'
	$('input:nth-child(4)').click ->
		$('li').css 'color', 'black'
		$('li:nth-child(4)').css 'color', 'red'
	###
	$('input').click ->
		$('li').css 'color', 'black'
		$('li:nth-child(' + $(this).attr('value') + ')').css 'color', 'red'
	###
	return