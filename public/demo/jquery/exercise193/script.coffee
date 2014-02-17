$ ->
    $('input')
        .val('入力してください')
        .css('color','#CCCCCC')
        .one('focus', ->
            $(this).val('').css 'color','#000000'
            return
        ).blur ->
            if $(this).val() == ''
                $(this)
                    .val('入力してください')
                    .css('color','#CCCCCC')
                    .one 'focus', ->
                        $(this).val ''
                        .css 'color','#000000'
                        return
            return
    return