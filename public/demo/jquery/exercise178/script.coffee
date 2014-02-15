$ ->
    $('li').one 'click', ->
        $(this).css
            color: 'black'
            borderStyle: 'inset'
            backgroundColor: 'darkgray'
        alert($(this).html() + '番完了！');
        return false
    return