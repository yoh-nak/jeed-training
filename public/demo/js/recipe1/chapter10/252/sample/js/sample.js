window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("check").addEventListener("click", function(){
		// 乱数値を算出
		var w = Math.floor(Math.random()*100)*3+10;
		var h = Math.floor(Math.random()*100)*2+10;
		// SVGの最初のrect要素を取得
		var svgRect = document.getElementsByTagName("rect")[0];
		// 四角形の横幅と縦幅を設定
		svgRect.setAttribute("width", w);
		svgRect.setAttribute("height", h);
	}, false);
}, false);
