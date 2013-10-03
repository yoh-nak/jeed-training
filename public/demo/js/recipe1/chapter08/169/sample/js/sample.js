window.addEventListener("load", function(){
	// Shadow DOMのホストとなる要素を読み出し
	var shadowHost = document.getElementById("host");
	// Shadow DOMのルートを指定
	var shadowRoot = new WebKitShadowRoot(shadowHost);
	// p要素を作成
	var p = document.createElement("p");
	p.innerHTML = "<b>Test</b> (Shadow DOM)";
	// Shadow DOMに追加
	shadowRoot.appendChild(p);
	// p要素を作成
	p = document.createElement("p");
	p.innerHTML = "<b>Test</b> (通常のDOMツリー)";
	// 通常のDOMツリーに追加
	document.body.appendChild(p);
}, false);