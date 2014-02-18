$ ->
    $('#slide li:last-child').prependTo '#slide'
    $('#slide').css 'margin-left','-320px'

    $('#slide a').click( ->
        return false
    ).on('touchstart', ->
        return
    ).on('touchmove', ->
        return
    ).on 'touchend', ->
        return
    return