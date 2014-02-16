$ ->
    $('li').mouseover( ->
        $(this).css 'color', 'red'
        return
    ).mouseout ->
        $(this).css 'color', 'black'
        return

    $('input').click ->
        $(this).parent().off 'mouseover mouseout'
        return
    return