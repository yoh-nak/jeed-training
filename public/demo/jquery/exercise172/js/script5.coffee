$ ->
    $('a.open').click ->
        $('#floatWindow').fadeIn 'fast'
        return false
    $('#floatWindow a.close').click ->
    	$('#floatWindow').fadeOut 'fast'
    	return false
    return