$ ->
    $('form').submit ->

        $(':text,textarea').filter('.validate').each ->
            console.log 'テキストボックス、テキストエリア'
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