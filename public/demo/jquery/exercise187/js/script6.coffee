$ ->
    $('#slide li:last-child').prependTo '#slide'
    $('#slide').css 'margin-left','-320px'

    $('#slide a').click( ->
        $('#slide').data 'href',$(this).attr 'href'
        return false
    ).on('touchstart', ->
        return
    ).on('touchmove', ->
        return
    ).on 'touchend', ->
        return
    return