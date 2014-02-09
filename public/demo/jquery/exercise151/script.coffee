$ ->
	$('li:nth-of-type(1)').on 'click touchstart', ->
		$('nav div').removeClass('second').removeClass('third').addClass('first')
		return
	$('li:nth-of-type(2)').on 'click touchstart', ->
		$('nav div').removeClass('first').removeClass('third').addClass('second')
		return
	$('li:nth-of-type(3)').on 'click touchstart', ->
		$('nav div').removeClass('first').removeClass('second').addClass('third')
		return
	return