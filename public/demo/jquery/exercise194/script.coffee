$ ->
    $('input').val '入力してください'
        .css('color','#CCCCCC')
        .focus ->
            $(this).val('').css 'color','#000000'
            return
    return