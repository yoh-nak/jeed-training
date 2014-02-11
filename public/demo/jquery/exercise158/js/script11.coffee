$ ->
    $('body').append '<div id="grayLayer"></div><div id="overLayer"></div>'

    $('dt').click ->
        $('#grayLayer').show()
        $('#overLayer').show().html('<img src="img/close.png" class="close">' + $('+dd',this).html()).css
            marginTop: '-' + $('#overLayer').height()/2 + 'px' 
            marginLeft: '-' + $('#overLayer').width()/2 + 'px'

        $('#overLayer img.close').on 'click', ->
            $('#grayLayer').hide()
            $('#overLayer').hide()
            return
        return

    $('#grayLayer').click ->
        $(this).hide()
        $('#overLayer').hide()
        return
    ###
    $('#overLayer').on 'click','img.close', ->
        $('#grayLayer').hide()
        $('#overLayer').hide()
        return
    ###
    return
