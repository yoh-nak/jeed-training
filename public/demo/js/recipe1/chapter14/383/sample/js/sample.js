window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("change").addEventListener("click", function(){
		// div要素を読み出し
		var divElement = document.getElementsByTagName("div")[0];
		// 行揃えを設定
		divElement.style.textAlign = "center";
	}, false);
}, false);
