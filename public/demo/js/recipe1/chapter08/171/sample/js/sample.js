window.addEventListener("load", function(){
	// Shadow DOMのホストとなる要素を読み出し
	var shadowHost = document.getElementById("host");
	// Shadow DOMのルートを指定
	var shadowRoot = new WebKitShadowRoot(shadowHost);
	// Shadow DOMに連結するリスト項目
	var myList = document.getElementById("menu");
	// Shadow DOMに追加
	shadowRoot.appendChild(myList);
	// ボタンにイベントを設定
	document.getElementById("setCSS").addEventListener("click", function(){
		var li = shadowRoot.getElementsByTagName("li");
		li[0].style.color = "white";
		li[0].style.backgroundColor = "black";
	}, false);
}, false);