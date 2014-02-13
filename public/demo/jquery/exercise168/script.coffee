$ ->
    $("#first a").mousedown( ->
        $("#first img").attr("src", "img/after.png").attr "alt", "変更後"
        return
    ).mouseup ->
        $("#first img").attr("src", "img/before.png").attr "alt", "変更前"
        return

    $("#second a").mousedown( ->
        $("#second img").attr("src", $(this).attr("href")).attr "alt", "変更後"
        return
    ).mouseup( ->
        $("#second img").attr("src", "img/before.png").attr "alt", "変更前"
        return
    ).click ->
        return false
    return