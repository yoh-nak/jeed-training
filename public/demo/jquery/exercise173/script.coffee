$ ->
	$(window).scroll ->
		if ($(document).height() - ($(window).height() + $(window).scrollTop())) / $(document).height() is 0
			alert('ページ最下部です')
		return
	return
