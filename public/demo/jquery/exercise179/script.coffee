$ ->
    $('input').click ->
        $('img').off 'mouseover mouseout'
        return

    $('img')
    .mouseover( ->
        $(this).attr 'src','img/after.png'
        return
    ).mouseout ->
        $(this).attr 'src','img/before.png'
        return
    return