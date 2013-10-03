window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("change").addEventListener("click", function(){
		// div要素を読み出し
		var divElement = document.getElementsByTagName("div")[0];
		// 文字色を設定
		divElement.style.color = "rgba(255, 0, 0, 0.5)";
	}, false);
}, false);
