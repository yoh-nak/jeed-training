$ ->
    $('form').submit ->

        $(':text,textarea').filter('.validate').each ->
            console.log 'テキストボックス、テキストエリア'

            $(this).filter('.required').each ->
                console.log '必須'
                return
             
            $(this).filter('.number').each ->
                console.log '数値'
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