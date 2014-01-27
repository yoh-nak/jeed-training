$ ->
	$('#before').click ->
		$('img').attr
			'src': 'img/before.png'
			title: '変更前'
		$('h1').text '変更前'	
		return

	#要領のよい記述1
	###
	$('#after').click ->
		$('img').attr
			'src': 'img/after.png'
			'title': '変更後'
		$('h1').text('変更後');
		return

	$('#before').click ->
		$('img').attr
			'src': $(this).attr 'title'
			'title': $(this).attr 'value'
		$('h1').text $(this).attr 'value'
		return
	###
	
	#要領のよい記述2
	###
	$('#after').click ->
		$('img').attr
			'src': $(this).attr 'title'
			'title': $(this).attr 'value'
		$('h1').text $(this).attr 'value'
		return
	
	
	$('input').click ->
		$('img').attr
			'src': $(this).attr 'title'
			'title': $(this).attr 'value'
		$('h1').text $(this).attr 'value'
		return
	###
	
	return