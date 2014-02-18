$ ->
    $('#slide li:last-child').prependTo '#slide'
    $('#slide').css 'margin-left','-320px'

    $('#slide a').click( ->
        return false
    ).on('touchstart', ->
        $(this).data 'href',$(this).attr 'href'
        return
    ).on('touchmove', ->
        return
    ).on 'touchend', ->
        return
    return