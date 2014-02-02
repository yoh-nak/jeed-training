$ ->
	
	$('td').click ->
		$('td:empty').css('background-color','blue')
		$(this).text('').css('background-color','red')
		return
	return