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

                $(this).parent().prepend '<p class="error">メールアドレスの形式が異なります</p>' if $(this).val() and not $(this).val().match(/.+@.+\..+/g)
                return
             
            $(this).filter('.mail_check').each ->
                console.log 'メールアドレス確認'

                $(this).parent().prepend '<p class="error">メールアドレスと内容が異なります</p>' if $(this).val() and $(this).val() isnt $('input[name="' + $(this).attr('name').replace(/^(.+)_check$/, '$1') + '"]').val()
                return
            return

        $(':radio').filter('.validate').each ->
            console.log 'ラジオボタン'

            $(this).filter('.required').each ->
                $(this).parent().prepend '<p class="error">選択してください</p>' if $(':radio[name="' + $(this).attr('name') + '"]:checked').size() is 0
                return

            return

        $('.checkboxRequired').each ->
            console.log 'チェックボックス'

            $(this).prepend '<p class="error">選択してください</p>' if $(':checkbox:checked', this).size() is 0
            return

        $('.validate.add_text').each ->
            console.log 'その他の項目'
            return
        return false
        
    return