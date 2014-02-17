$ ->
    $('form').submit ->

        $(':text,textarea').filter('.validate').each ->
            console.log 'テキストボックス、テキストエリア'

            $(this).filter('.required').each ->
                console.log '必須'

                $(this).parent().prepend '<p class="error">必須項目です</p>' if $(this).val() is ''
                return
             
            $(this).filter('.number').each ->
                console.log '数値'

                $(this).parent().prepend '<p class="error">数値のみ入力可能です</p>' if isNaN $(this).val()
                return
             
            $(this).filter('.mail').each ->
                console.log 'メールアドレス'
                return
             
            $(this).filter('.mail_check').each ->
                console.log 'メールアドレス確認'
                return
            return

        $(':radio').filter('.validate').each ->
            console.log 'ラジオボタン'
            return

        $('.checkboxRequired').each ->
            console.log 'チェックボックス'
            return

        $('.validate.add_text').each ->
            console.log 'その他の項目'
            return
        return false
        
    return