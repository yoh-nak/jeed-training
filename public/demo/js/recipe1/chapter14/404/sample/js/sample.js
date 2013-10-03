window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("change").addEventListener("click", function(){
		// div要素を読み出し
		var divElement = document.getElementsByTagName("div")[0];
		// 要素の影を設定
		divElement.style.boxShadow = "40px 20px 10px 15px blue";
	}, false);
}, false);
