window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("change").addEventListener("click", function(){
		// div要素を読み出し
		var divElement = document.getElementsByTagName("div")[0];
		// 要素のリサイズ処理を設定
		divElement.style.resize = "both";
		divElement.style.overflow = "auto";
	}, false);
}, false);
