$ ->
	$(window).scroll ->
		#console.log $(document).height()
		#console.log $(window).height()
		#console.log $(window).scrollTop()

		if ($(document).height() - ($(window).height() + $(window).scrollTop())) / $(document).height() is 0
			alert('ページ最下部です')
		return
	return
