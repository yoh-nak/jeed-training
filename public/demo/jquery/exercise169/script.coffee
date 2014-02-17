$ ->
    $('a').dblclick( ->
        window.location.href = $(this).attr('href')
        return
    ).click( ->
        return false
    ).mouseup ->
        $('span').show()
        return
     
    $('span').mousedown( ->
        $(this).css 'top','-50px'
        return
    ).mouseup ->
        $(this).css
            top:'-40px'
            display:'none'
        return false
    return