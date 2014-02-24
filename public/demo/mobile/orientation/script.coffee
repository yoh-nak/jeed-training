$ ->
    $(window).on 'orientationchange resize', ->
        switch window.orientation
            when 0
                alert "通常表示"
            when 90
                alert "右90度回転"
            when -90
                alert "左90度回転"
        return
    return