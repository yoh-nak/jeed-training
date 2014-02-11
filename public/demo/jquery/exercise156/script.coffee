$ ->
    $('a').dblclick( ->
        $(this).replaceWith '<img src="' + $(this).attr('href') + '" alt="">'
        return
    ).click ->
        return false;
    return
