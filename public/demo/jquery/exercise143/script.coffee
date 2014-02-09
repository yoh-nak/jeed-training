$ ->
    $("#image1").click ->
        $("p:not(:animated)").animate(
            marginLeft: "-200px"
        , "500", "swing").delay(1000).animate
            marginLeft: "0px"
        , "1500", "swing"
        return
    return