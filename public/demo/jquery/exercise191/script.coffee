$ ->
    $('input[type="button"]').one 'click',  ->
        $('p:nth(0)').text $('input[type="text"]').val() + 'にメールを送信します。'
        $('input[type="button"]').text('送信')
        return
    return