window.addEventListener("load", function(){
	// SVGの最初のrect要素を取得
	var svgRect = document.getElementsByTagName("rect")[0];
	// ボタンにイベントを設定【回転】
	document.getElementById("rotate").addEventListener("click", function(){
		// 乱数値を算出
		var r = Math.random()*360;
		// transform属性に値を設定。2番目と3番目は回転の中心
		svgRect.setAttribute("transform", "rotate("+r+", 160, 120)");
	}, false);
	// ボタンにイベントを設定【傾斜】
	document.getElementById("skew").addEventListener("click", function(){
		// 乱数値を算出
		var sr = Math.random()*60 - 30;
		// transform属性に値を設定
		svgRect.setAttribute("transform", "skewX("+sr+")");
	}, false);
	// ボタンにイベントを設定【拡大縮小】
	document.getElementById("scale").addEventListener("click", function(){
		// 乱数値を算出
		var s = Math.random()*2-0.5;
		// transform属性に値を設定
		svgRect.setAttribute("transform", "scale("+s+","+s+")");
	}, false);
	// ボタンにイベントを設定【移動】
	document.getElementById("translate").addEventListener("click", function(){
		// 乱数値を算出
		var x = Math.random()*280 - 120;
		var y = Math.random()*120 - 60;
		// transform属性に値を設定
		svgRect.setAttribute("transform", "translate("+x+","+y+")");
	}, false);
}, false);
