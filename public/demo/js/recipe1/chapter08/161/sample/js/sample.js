window.addEventListener("load", function(){
	// ul要素を取得
	var myList = document.getElementsByTagName("ul")[0];
	// 最初の子ノードの次のノードの背景色を変更
	myList.firstChild.nextSibling.style.backgroundColor = "yellow";
	// 最後の子ノードの前のノードの背景色を変更
	myList.lastChild.previousSibling.style.backgroundColor = "orange";
	// 親ノードにアクセス
	myList.firstChild.parentNode.style.border = "1px solid red";
}, false);