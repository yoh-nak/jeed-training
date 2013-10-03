window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("change").addEventListener("click", function(){
		// div要素を読み出し
		var divElement = document.getElementsByTagName("div")[0];
		// 書体（フォント）を設定
		divElement.style.fontFamily = "Palatino-bold";
	}, false);
}, false);
