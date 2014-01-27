$ ->
	$('img[src$="1.png"]').click ->
		$('img[src$="1.png"]').remove()
		return
	$('img[src$="2.png"]').click ->
		$('img[src$="2.png"]').remove()
		return
	$('img[src$="3.png"]').click ->
		$('img[src$="3.png"]').remove()
		return
	$('img[src$="4.png"]').click ->
		$('img[src$="4.png"]').remove()
		return
	$('img[src$="5.png"]').click ->
		$('img[src$="5.png"]').remove()
		return

	#以下のように記述することもできます
	###
	$('img').click ->
		$(this).remove()
		return
	###
	return