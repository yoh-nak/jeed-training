$ ->
    $('img[src="img/jquery.jpg"]').mouseover( ->
        $(this).attr 'src','img/jquery_on.jpg'
        return
    ).mouseout ->
        $(this).attr 'src','img/jquery.jpg'
        return
    $('img[src="img/javascript.jpg"]').mouseover( ->
        $(this).attr 'src','img/javascript_on.jpg'
        return
    ).mouseout ->
        $(this).attr 'src','img/javascript.jpg'
        return
    $('img[src="img/css.jpg"]').mouseover( ->
        $(this).attr 'src','img/css_on.jpg'
        return
    ).mouseout ->
        $(this).attr 'src','img/css.jpg'
        return
    $('img[src="img/html.jpg"]').mouseover( ->
        $(this).attr 'src','img/html_on.jpg'
        return
    ).mouseout ->
        $(this).attr 'src','img/html.jpg'
        return
    return