$ ->
    $('img.rollover').mouseover ->
        $(this).attr 'src', $(this).attr('src').replace /^(.+)(\.[a-z]+)$/, '$1_on$2'
        return
    return