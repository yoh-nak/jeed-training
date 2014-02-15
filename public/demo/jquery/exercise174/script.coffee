$ ->
	timer = false
	$(window).resize ->
		clearTimeout timer if timer isnt false
		timer = setTimeout(->
			alert('リサイズ終了')
		, 200)
		return
	return
