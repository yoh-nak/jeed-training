$ ->
    $('a').dblclick( ->
        $('span').html '<img src="' + $(this).attr('href') + '" alt="">'
        $(this).remove();
    ).click ->
        return false;
    return
