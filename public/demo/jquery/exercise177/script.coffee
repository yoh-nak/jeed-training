$ ->
    $('a').one 'click', ->
        $('img').attr
            'src': $(this).attr('href')
            'alt': $(this).attr('title')
        return false
    return