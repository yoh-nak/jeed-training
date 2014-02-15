$ ->
	$(window).resize ->
		#$(document).width() HTML文書全体の幅
		#$(document).height() HTML文書全体の高さ
		#$(window).width() HTML文書の表示画面の幅
		#$(window).height() HTML文書表示画面の高さ

		#width() CSSプロパティのwidth
		#innerWidth() width()+paddingLeft+paddingRight
		#outerWidth() innerWidth()+borderLeftWidth+borderRightWidth()
		#outerWidth(true) outerWidth()+marginLeft+marginRight
		
		#height() CSSプロパティのheight
		#innerHeight() height()+paddingTop+paddingBottom
		#outerHeight() innerHeight()+borderTopWidth+borderBottomWidth()
		#outerHeight(true) outerHeight()+marginTop+marginBottom

		console.log '$(document).outerWidth(true): ' +  $(document).outerWidth(true)
		console.log '$(document).outerWidth(): ' + $(document).outerWidth()
		console.log '$(document).innerWidth(): ' + $(document).innerWidth()
		console.log '$(document).width(): ' +  $(document).width()
		return
	return
