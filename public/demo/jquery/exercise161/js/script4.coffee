$ ->
    $('img[src="img/jquery.jpg"]').mouseover( ->
        $(this).attr 'src','img/jquery_on.jpg'
        return
    ).mouseout ->
        $(this).attr 'src','img/jquery.jpg'
        return
    return