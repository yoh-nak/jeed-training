$ ->
	$('div').click ->
		window.alert $('div').css 'display'
		return
	$('span').click ->
		window.alert $('span').css 'display'
		return
	$('img').click ->
		window.alert $('img').css 'display'
		return
	$('td').click ->
		window.alert $('td').css 'display'
		return
	$('li').click ->
		window.alert $('li').css 'display'
		return

	#以下の記述でも可
	###
	$('div,span,img,td,li').click ->
		window.alert $(this).css 'display'
	###
	return