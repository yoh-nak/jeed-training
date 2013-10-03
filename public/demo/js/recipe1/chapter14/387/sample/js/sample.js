window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("change").addEventListener("click", function(){
		// div要素を読み出し
		var divElement = document.getElementsByTagName("div")[0];
		// 文字の影を設定
		divElement.style.textShadow = "10px 8px 5px blue";
	}, false);
}, false);
