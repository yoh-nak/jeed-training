$ ->
    $('a').contextmenu ->
        $('ul',this).css 'display','block'
        return false
    
    $('a ul li:nth-child(1)').click ->
        window.open().location.href = 'http://www.yahoo.co.jp/';
        return

    $('a ul li:nth-child(2)').click ->
        window.open().location.href = 'http://www.google.co.jp/';
        return

    $('a ul li:nth-child(3)').click ->
        window.open().location.href = 'http://www.goo.ne.jp/';
        return

    $('a ul li:nth-child(4)').click ->
        window.open().location.href = 'http://jp.msn.com/';
        return

    $('a ul li:nth-child(5)').click ->
        window.open().location.href = 'http://www.livedoor.com/';
        return
     
    $(document).click ->
        $('ul',this).css('display','none');
        return
    return