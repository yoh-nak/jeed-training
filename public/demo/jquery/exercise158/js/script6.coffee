$ ->
    $('body').append '<div id="grayLayer"></div><div id="overLayer"></div>'

    $('dt').click ->
        $('#grayLayer').show()
        $('#overLayer').show()
        return

    $('#grayLayer').click ->
        $(this).hide()
        $('#overLayer').hide()
        return
    return
