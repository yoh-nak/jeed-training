window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("change").addEventListener("click", function(){
		// div要素を読み出し
		var divElement = document.getElementById("block3");
		// 要素のZ座標を設定
		var n = parseInt(prompt("Z", 0));
		divElement.style.zIndex = n;
	}, false);
}, false);
