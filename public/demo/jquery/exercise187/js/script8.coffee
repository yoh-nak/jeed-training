$ ->
    $('#slide li:last-child').prependTo '#slide'
    $('#slide').css 'margin-left','-320px'

    $('#slide a').click( ->
        $('#slide').data 'href',$(this).attr 'href'
        return false
    ).on('touchstart', (e) ->
        e.preventDefault()
        $(this)
            .data('startX',e.originalEvent.touches[0].pageX)
            .data('startY',e.originalEvent.touches[0].pageY)
            .data('moveX',0)
            .data('moveY',0)
        return
    ).on('touchmove', (e) ->
        $(this)
            .data('moveX',e.originalEvent.touches[0].pageX-$(this).data('startX'))
            .data('moveY',e.originalEvent.touches[0].pageY-$(this).data('startY'))
            .css('margin-left',$(this).data('moveX')-320+'px')
        return
    ).on 'touchend', ->
        return
    return