$ ->
    $('html,body').css
        width: '100%'
        height: '100%'
    $('img').css
        marginLeft: '-100px'
        marginTop: '-100px'
        position: 'absolute'
    $(document).mousemove (e) ->
        $('img').css
            'top': e.pageY
            'left': e.pageX
        return
    return