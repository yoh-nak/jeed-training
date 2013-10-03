window.addEventListener("load", function(){
	// CSS追加ボタンにイベントを設定
	document.getElementById("addBtn").addEventListener("click", function(){
		// style要素を生成
		var cssEle = document.createElement("style");
		// CSSのプロパティと値を設定
		cssEle.innerText = cssEle.textContent = "h1 { color: red; }";
		// head要素の末尾に追加(scoped属性なし)
		document.getElementsByTagName("head")[0].appendChild(cssEle);
	}, false);
	// CSSファイル読み込みボタンにイベントを設定
	document.getElementById("loadBtn").addEventListener("click", function(){
		// link要素を生成
		var linkEle = document.createElement("link");
		// rel属性とCSSファイルのURLを設定
		linkEle.rel = "stylesheet";
		linkEle.href = "css/main.css";
		// head要素の末尾に追加
		document.getElementsByTagName("head")[0].appendChild(linkEle);
	}, false);
}, false);
