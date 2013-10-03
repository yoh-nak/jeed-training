window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("change").addEventListener("click", function(){
		// 3D変形するdiv要素を取得
		var animeBox = document.getElementById("box");
		// 3D変形
		var cssText = "matrix(0.5, -0.8, 0.2, 0.25, 50, 0) rotate(90deg)";
		animeBox.style.transform = cssText;
		animeBox.style.webkitTransform = cssText;
		animeBox.style.MozTransform = cssText;
	}, false);
}, false);
