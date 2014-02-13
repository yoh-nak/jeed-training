$ ->
    $('a.open').click ->
        $('#floatWindow').fadeIn 'fast'
        return false
    $('#floatWindow a.close').click ->
    	$('#floatWindow').fadeOut 'fast'
    	return false
	$('#floatWindow dl dt').mousedown (e) ->
        $('#floatWindow')
        #クリックした場所のフロートウィンドウの左上からのX座標
        .data 'clickPointX' , e.pageX - $('#floatWindow').offset().left
        
        #クリックした場所のフロートウィンドウの左上からのY座標
        .data 'clickPointY' , e.pageY - $('#floatWindow').offset().top
         
        #デバッグ
        console.log e.pageX - $('#floatWindow').offset().left
        console.log  e.pageY - $('#floatWindow').offset().top
        return
    return