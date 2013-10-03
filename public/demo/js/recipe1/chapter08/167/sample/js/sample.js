window.addEventListener("load", function(){
	var paragraph = document.getElementsByTagName("p")[0];
	// 作成ボタンにイベントを割り当て
	document.getElementById("createBtn").addEventListener("click", function(){
		// align属性を作成
		var attr = document.createAttribute("align");
		// align属性にrightを割り当て
		attr.nodeValue = "right";
		// 段落に属性を設定
		paragraph.setAttributeNode(attr);
	}, false);
	// 削除ボタンにイベントを割り当て
	document.getElementById("deleteBtn").addEventListener("click", function(){
		// talign属性を削除
		paragraph.removeAttribute("align");
	}, false);
}, false);