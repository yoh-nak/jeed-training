$ ->
	$('input').click ->
		$('#first').show()
		$('#second').show 'slow'
		$('#third').show 3000
		return
	return