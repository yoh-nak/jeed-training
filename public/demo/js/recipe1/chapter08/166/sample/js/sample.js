window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// textarea要素への参照を変数に代入
	var te = document.getElementsByTagName("textarea")[0];
	// 読み出しボタンにイベントを割り当て
	document.getElementById("getBtn").addEventListener("click", function(){
		// textarea要素のcols属性を読み出し
		var val = te.getAttribute("cols");
		// ページ上に出力
		ele.innerHTML = val;
	}, false);
	// 書き込みボタンにイベントを割り当て
	document.getElementById("setBtn").addEventListener("click", function(){
		// textarea要素のcols属性に値を設定
		var size = (Math.random() * 20) | 0 + 10;
		te.setAttribute("cols", size);
	}, false);
}, false);