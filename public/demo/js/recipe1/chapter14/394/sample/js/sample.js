window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("change1").addEventListener("click", function(){
		// div要素を読み出し
		var divElement = document.getElementsByTagName("div")[0];
		// マージン（余白）を設定
		divElement.style.margin = "20px";
	}, false);
	// ボタンにイベントを設定
	document.getElementById("change2").addEventListener("click", function(){
		// div要素を読み出し
		var divElement = document.getElementsByTagName("div")[0];
		// パディング（余白）を設定
		divElement.style.padding = "20px";
	}, false);
}, false);
