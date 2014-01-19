$ ->
	$('h1').click ->
		window.alert 'h1要素がクリックされました'
		return

	$('p').click ->
		window.alert 'p要素がクリックされました'
		return

	$('input').click ->
		alert 'input要素がクリックされました'
		return

	$('img').click ->
		window.alert 'img要素がクリックされました'
		return
	return