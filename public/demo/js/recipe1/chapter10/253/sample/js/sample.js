window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("setPos").addEventListener("click", function(){
		// 乱数値を算出
		var newX = Math.floor(Math.random()*90)*3+10;
		var newY = Math.floor(Math.random()*70)*2+10;
		// SVGの最初のrect要素を取得
		var svgRect = document.getElementsByTagName("rect")[0];
		// 四角形のX座標とY座標を設定
		svgRect.setAttribute("x", newX);
		svgRect.setAttribute("y", newY);
	}, false);
}, false);
