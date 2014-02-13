$ ->
    $('a.open').click ->
        $('#floatWindow').fadeIn 'fast'
        return false
    $('#floatWindow a.close').click ->
    	$('#floatWindow').fadeOut 'fast'
    	return false
	$('#floatWindow dl dt').mousedown((e) ->
        $('#floatWindow')
        #クリックした場所のフロートウィンドウの左上からのX座標
        .data 'clickPointX' , e.pageX - $('#floatWindow').offset().left
        
        #クリックした場所のフロートウィンドウの左上からのY座標
        .data 'clickPointY' , e.pageY - $('#floatWindow').offset().top
         
        #デバッグ
        #console.log e.pageX - $('#floatWindow').offset().left
        #console.log  e.pageY - $('#floatWindow').offset().top

        #ドラッグした時のフロートウィンドウのブラウザ左上からの座標を計算する
        $(document).mousemove (e) ->
            $('#floatWindow').css
                #マウスの座標から、保存しているフロートウィンドウの左上からのX座標を引く
                left: e.pageX - $('#floatWindow').data('clickPointX')+'px'
                #マウスの座標から、保存しているフロートウィンドウの左上からのY座標を引く
                top: e.pageY  - $('#floatWindow').data('clickPointY')+'px'
             
            #デバッグ
            console.log e.pageX - $('#floatWindow').data('clickPointX')
            console.log e.pageY - $('#floatWindow').data('clickPointY')
            return
    ).mouseup ->
        $(document).unbind 'mousemove'
        return
    return