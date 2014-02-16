$ ->
    $('input').click ->
        $('.add').html('<a href="img/after.png">変更</a>')
        return

    $('.add').on 'click', 'a', ->
        $('img').attr 'src', $(this).attr 'href'
        return false
    return