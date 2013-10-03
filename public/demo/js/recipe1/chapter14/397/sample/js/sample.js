window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("change").addEventListener("click", function(){
		// div要素を読み出し
		var divElement = document.getElementsByTagName("div")[0];
		// 要素の横幅を設定
		divElement.style.width = "100pt";
		// 要素の縦幅を設定
		divElement.style.height = "50pt";
	}, false);
}, false);
