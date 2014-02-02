$ ->
	$('img:nth-last-of-type(1)').click ->
		$('#inner').css 'margin-right','-600px'
		return
	$('img:nth-last-of-type(2)').click ->
		$('#inner').css 'margin-right','-400px'
		return
	$('img:nth-last-of-type(3)').click ->
		$('#inner').css 'margin-right','-200px'
		return
	$('img:nth-last-of-type(4)').click ->
		$('#inner').css 'margin-right','0px'
		return
	$('img:nth-last-of-type(5)').click ->
		$('#inner').css 'margin-right','-800px'
		return
	return