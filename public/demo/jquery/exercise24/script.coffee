$ ->
	$('input').click ->
		window.alert $('p:first-of-type').css 'color'
		return
	return