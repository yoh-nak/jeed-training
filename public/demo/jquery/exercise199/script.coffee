$ ->
    $('form').submit ->
         
        #エラーの初期化
        $('p.error').remove()
         
        #テキストフィールド、テキストエリア必須
        $(':text,textarea').filter('.validate').each ->
            #必須項目
            $(this).filter('.required').each ->
                $(this).parent().prepend('<p class="error">必須項目です</p>') if $(this).val() == ''
                return
            return
         
        #テキストフィールド10文字以内
        $(':text').filter('.validate').each ->
            #必須項目
            $(this).filter('.limit').each ->
                $(this).parent().prepend '<p class="error">10文字以内で入力してください</p>' if $(this).val().length > 10
                return
            return
         
        #テキストエリア100文字以内
        $('textarea').filter('.validate').each ->
            #必須項目
            $(this).filter('.limit').each ->
                $(this).parent().prepend '<p class="error">100文字以内で入力してください</p>' if $(this).val().length > 100
                return
            return
         
        #ラジオボタン必須
        $(':radio').filter('.validate').each ->
            $(this).filter('.required').each ->
                $(this).parent().prepend '<p class="error">選択してください</p>' if $(':radio[name='+$(this).attr('name')+']:checked').size() == 0
                return
            return
         
        #セレクトボックス必須
        $('option:selected').parent().filter('.validate').each ->
            #必須項目
            $(this).filter('.required').each ->
                $(this).parent().prepend '<p class="error">必須項目です</p>' if $(this).val() == ''
                return
            return

        #チェックボックス必須
        $(':checkbox').parent().each ->
            $(this).prepend '<p class="error">１個以上選択してください</p>' if $(':checkbox:checked',this).size() == 0
            return
        return false if $('p.error').size() > 0
    return