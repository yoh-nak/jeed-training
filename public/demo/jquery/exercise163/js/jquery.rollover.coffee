$.fn.rollover = ->
    $(this).mouseover(->
        $(this).attr "src", $(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2")
        return
    ).mouseout(->
        $(this).attr "src", $(this).attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1$2")
        return
    ).each ->
        $("<img>").attr "src", $(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2")
        return

    this