$ ->
	$('div>span').click ->
		#$(this).prependTo('body').addClass('after')
		$(this).addClass('after')
	return