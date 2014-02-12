$ ->
    $('ul.sub').hide()
    $('ul.menu li').hover ->
    	$('> ul:not(:animated)', this).slideDown 'fast'
    	return
    , ->
    	$('> ul', this).slideUp 'fast'
    	return
    return