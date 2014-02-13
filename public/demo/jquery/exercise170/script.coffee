$ ->
    $(window).mousemove (e) ->
        $('#screen').html 'screenX: ' + e.screenX + ' screenY: ' + e.screenY
        return
    $(window).mousemove (e) ->
        $('#client').html 'clientX: ' + e.clientX + ' clientY: ' + e.clientY
        return
    $(document).mousemove (e) ->
        $('#page').html 'pageX: ' + e.pageX + ' pageY: ' + e.pageY
        return
    $('img').mousemove (e) ->
        $('#offset').html 'offsetX: ' + e.offsetX + ' offsetY: ' + e.offsetY
        return
    return
