$ ->
    $('body').append '<div id="grayLayer"></div><div id="overLayer"></div>'

    $('a.modal').click ->
        $('#grayLayer').show()
        $('#overLayer').show().html '<img src="' + $(this).attr('href') + '" alt="">'
        return false
    return
