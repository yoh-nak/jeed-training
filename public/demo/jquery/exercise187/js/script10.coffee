$ ->

	$('#slide li:last-child').prependTo '#slide'
	$('#slide').css 'margin-left','-320px'

	$('#slide a').click( ->
		return false
	).on 'touchstart', ->
		$('#slide').data 'href',$(this).attr('href')
		return
	$('#slide').on('touchstart', (evnet) ->
		event.preventDefault();
		$(this)
			.data('startX',event.touches[0].pageX)
			.data('startY',event.touches[0].pageY)
			.data('moveX',0)
			.data('moveY',0)
		return
	).on('touchmove', ->
		$(this)
			.data('moveX',event.touches[0].pageX-$(this).data('startX'))
			.data('moveY',event.touches[0].pageY-$(this).data('startY'))
			.css('margin-left',$(this).data('moveX')-320+'px')
		return
	).on 'touchend', ->
		if $(this).data('moveX') > 10
			
		else if $(this).data('moveX') < -10
			
		else if $(this).data('moveY') > -10 and $(this).data('moveY') < 10
			
		else
			
		return
	return