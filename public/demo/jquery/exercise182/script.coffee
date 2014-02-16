$ ->
	$('input').click ->
		$('.first,.second').append '<img src="img/before.png",alt="">'
		return

	$('.first').on('mouseover', 'img', ->
		$(this).attr 'src', 'img/after.png'
		return
	).on 'mouseout', 'img', ->
		$(this).attr 'src', 'img/before.png'
		return
	return
