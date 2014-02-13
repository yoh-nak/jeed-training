$ ->
    $('a').dblclick( ->
        window.location.href = $(this).attr('href');
    ).click( ->
        return false;
    ).mouseup ->
        $('span').show()
     
    $('span').mousedown( ->
        $(this).css('top','-50px');
    ).mouseup ->
        $(this).css
            top:'-40px'
            display:'none'
        return false;
    return