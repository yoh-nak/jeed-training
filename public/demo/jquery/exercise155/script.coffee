$ ->
    $("#first a").dblclick ->
        $("#first img").attr("src", "img/after.png").attr "alt", "変更後"
        return

    $("#second a").dblclick( ->
        $("#second img").attr("src", $(this).attr("href")).attr "alt", "変更後"
        return
    ).click ->
        return false
    return
