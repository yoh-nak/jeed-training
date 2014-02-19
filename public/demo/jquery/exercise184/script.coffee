$ ->
    $('a').contextmenu ->
        $('ul',this).css 'display','block'
        return false

    $('a ul li').click ->
        window.open().location.href = $(this).attr 'data-link'
        return
         
    $(document).click ->
        $('ul',this).css('display','none');
        return
    return