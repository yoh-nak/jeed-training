$ ->
    $('ul.sub').hide()
    $('ul.menu li').hover ->
    	$('ul', this).slideDown 'fast'
    	return
    , ->
    	$('ul', this).slideUp 'fast'
    	return
    return