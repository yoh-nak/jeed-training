window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("change").addEventListener("click", function(){
		// div要素を読み出し
		var divElement = document.getElementsByTagName("div")[0];
		// 座標系を設定
		divElement.style.position = "relative";
		// X座標を設定
		divElement.style.left = "80pt";
		// Y座標を設定
		divElement.style.top = "30pt";
	}, false);
}, false);
