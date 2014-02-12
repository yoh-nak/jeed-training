$ ->
    $ '<img src="img/after.png" alt="">'

    $('img').mouseover( ->
        $(this).attr('src','img/after.png').attr('alt','変更後')
        return
    ).mouseout ->
        $(this).attr('src','img/before.png').attr('alt','変更前')
        return
    return