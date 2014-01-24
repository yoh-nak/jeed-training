$ ->
	$('input').click ->
		$('a').html '<img>'
		$('img').attr 'src', $('a').attr 'href'

		#以下の記述でも可
		###
		$('a').html '<img src="' + $('a').attr 'href' + '" alt="">'
		###

		return
	return