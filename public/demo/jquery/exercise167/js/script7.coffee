$ ->
    $('ul.sub').hide()
    $('ul.menu li').hover ->
    	$('ul', this).slideDown 'fast'
    	return
    return