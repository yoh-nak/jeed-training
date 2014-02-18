$ ->
    $('#slide li:last-child').prependTo '#slide'
    $('#slide').css 'margin-left','-320px'

    $('#slide a').click( ->
        return false
    ).on('touchstart', (e) ->
        e.preventDefault()
        $(this).data 'href',$(this).attr 'href'
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
        $('#slide').css('margin-left',$(this).data('moveX')-320+'px')
        return
    ).on 'touchend', (e) ->
        if $(this).data('moveX') > 10
            $('#slide').animate
                'margin-left': 0
            , ->
                $('#slide').css 'margin-left', '-320px'
                $('#slide li:last-child').prependTo '#slide'
                return

        else if $(this).data('moveX') < -10
            $('#slide').animate
                'margin-left': -640
            , ->
                $('#slide').css 'margin-left', '-320px'
                $('#slide li:first-child').appendTo '#slide'
                return
        else if $(this).data('moveY') > -10 and $(this).data('moveY') < 10
            location.href = $(this).data('href')
        else
            $('#slide').animate 'margin-left': -320
        return
    return