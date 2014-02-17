$ ->
	$(window).keydown((e) ->
		$('p').html e.keyCode + '番のキーが押されました'
		return
	).keyup (e) ->
		$('p').html e.keyCode + '番のキーが離されました'
		return
	return
