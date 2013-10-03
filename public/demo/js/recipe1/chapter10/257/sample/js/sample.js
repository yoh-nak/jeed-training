window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("gradLine").addEventListener("click", function(){
		// SVGの最初のrect要素を取得
		var svgRect = document.getElementsByTagName("rect")[0];
		// 塗りに線形グラデーションを設定
		svgRect.setAttribute("fill", "url(#grad1)");
	}, false);
	// ボタンにイベントを設定
	document.getElementById("gradRadial").addEventListener("click", function(){
		// SVGの最初のrect要素を取得
		var svgRect = document.getElementsByTagName("rect")[0];
		// 塗りに円形グラデーションを設定
		svgRect.setAttribute("fill", "url(#grad2)");
	}, false);
}, false);
