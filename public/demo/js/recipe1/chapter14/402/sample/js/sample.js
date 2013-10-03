window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("change").addEventListener("click", function(){
		// div要素を読み出し
		var divElement = document.getElementsByTagName("div")[0];
		// 要素の表示倍率を設定
		divElement.style.zoom = 2.5;
	}, false);
}, false);
