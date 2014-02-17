$ ->
    $('input[type="button"]').click ->
        if $('input[name="name"]').val() is ''
            $('input[name="name"]').css 'background-color',' orange'
            window.alert 'お名前を入力してください'
            return false
        $('#slill-check').submit()
        return
    return