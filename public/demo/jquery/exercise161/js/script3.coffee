$ ->
    $('img[src="img/jquery.jpg"]').mouseover ->
        $(this).attr 'src','img/jquery_on.jpg'
        return
    return