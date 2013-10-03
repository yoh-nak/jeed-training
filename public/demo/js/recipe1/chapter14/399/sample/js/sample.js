window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("change").addEventListener("click", function(){
		// div要素を読み出し
		var divElement = document.getElementsByTagName("div")[0];
		// 要素内の文字の末尾の表示方法を設定
		divElement.style.textOverflow = "ellipsis";
	}, false);
}, false);
