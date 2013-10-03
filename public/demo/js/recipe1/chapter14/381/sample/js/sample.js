window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("change").addEventListener("click", function(){
		// div要素を読み出し
		var divElement = document.getElementsByTagName("div")[0];
		// 間隔を設定
		divElement.style.wordSpacing = "20pt";
	}, false);
}, false);
