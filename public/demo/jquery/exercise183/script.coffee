$ ->
	$('a').on 'contextmenu', ->
		$(this).text('右クリックされました')
		return false
	return