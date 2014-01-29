$ ->
	$('input,label').click ->
		$('input').parent().removeClass('checked')
		$('input:checked').parent().addClass('checked')
		return
	return