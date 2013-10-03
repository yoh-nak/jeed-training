window.addEventListener("load", function(){
	document.getElementById("conect").addEventListener("click", function(){
		// Shadow DOMのホストとなる要素を読み出し
		var shadowHost = document.getElementById("host");
		// Shadow DOMのルートを指定
		var shadowRoot = new WebKitShadowRoot(shadowHost);
		// Shadow DOMに連結するリスト項目
		var myList = document.getElementById("menu");
		// Shadow DOMに追加
		shadowRoot.appendChild(myList);
	}, false);
}, false);