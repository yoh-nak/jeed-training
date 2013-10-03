window.onload = function(){
	var ele = document.getElementById("result");
	// 操作する要素を読み出す
	var list = document.getElementsByTagName("li");
	// 最初のli要素のnodeTypeやnodeValueなどを表示
	ele.innerHTML = "nodeType : "+list[0].nodeType+"<br>";
	ele.innerHTML += "nodeValue : "+list[0].firstChild.nodeValue+"<br>";
	ele.innerHTML += "tagName : "+list[0].tagName+"<br>";
	// テキストノードを作成
	var text = document.createTextNode("項目4");
	// li要素を生成し子ノードとしてテキストを追加
	var li = document.createElement("li");
	li.appendChild(text);
	// リストの最後にli要素を追加
	document.getElementsByTagName("ul")[0].appendChild(li);
}
