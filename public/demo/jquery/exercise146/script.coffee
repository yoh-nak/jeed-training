$ ->
    $("#first a").click ->
        $("#first img").attr("src", "img/after.png").attr "alt", "変更後"
        return

    $("#second a").click ->
        $("#second img").attr("src", $(this).attr("href")).attr "alt", "変更後"
        return false
    return
