window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("setColor").addEventListener("click", function(){
		// 乱数値を算出(IE9/Firefoxは#rrggbb形式でないと駄目)
		var fR = ("0"+Math.floor(Math.random() * 256)).slice(-2);
		var fG = ("0"+Math.floor(Math.random() * 256)).slice(-2);
		var fB = ("0"+Math.floor(Math.random() * 256)).slice(-2);
		var sR = ("0"+Math.floor(Math.random() * 256)).slice(-2);
		var sG = ("0"+Math.floor(Math.random() * 256)).slice(-2);
		var sB = ("0"+Math.floor(Math.random() * 256)).slice(-2);
		var color1 = "#"+fR+fG+fB;
		var color2 = "#"+sR+sG+sB;
		// SVGの最初のrect要素を取得
		var svgRect = document.getElementsByTagName("circle")[0];
		// 塗りの色を設定
		svgRect.setAttribute("fill", color1);
		// 線の色を設定
		svgRect.setAttribute("stroke", color2);
	}, false);
}, false);
