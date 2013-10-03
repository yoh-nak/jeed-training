window.addEventListener("load", function(){
	// innerHTMLで書き換えボタンにイベントを割り当て
	document.getElementById("htmlBtn").addEventListener("click", function(){
		// textarea要素の内容を読み出し
		var text = document.getElementsByTagName("textarea")[0].value;
		// ページ上に出力
		document.getElementsByTagName("output")[0].innerHTML = text;
	}, false);
	// innerTextで書き換えボタンにイベントを割り当て
	document.getElementById("textBtn").addEventListener("click", function(){
		// textarea要素の内容を読み出し
		var text = document.getElementsByTagName("textarea")[0].value;
		// ページ上に出力。Firefoxの場合
		var ele = document.getElementsByTagName("output")[0];
		ele.textContent = text+"(Firefox)";
		// Firefox以外の場合
		ele.innerText = text;
	}, false);
}, false);