window.addEventListener("load", function(){
	// テキストノードを生成
	var text1 = document.createTextNode("DOM Sample");
	var text2 = document.createTextNode("Sample text");
	// ページの末尾に追加
	document.body.appendChild(text1);
	// p要素の末尾に追加
	document.getElementsByTagName("p")[0].appendChild(text2);
}, false);