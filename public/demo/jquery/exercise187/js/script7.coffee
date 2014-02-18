$ ->
    $('#slide li:last-child').prependTo '#slide'
    $('#slide').css 'margin-left','-320px'

    $('#slide a').click( ->
        return false
    ).on('touchstart', (e) ->
        e.preventDefault()
        $(this).data 'href',$(this).attr 'href'
        return
    ).on('touchmove', (e) ->
        return
    ).on 'touchend', (e) ->
        return
    return