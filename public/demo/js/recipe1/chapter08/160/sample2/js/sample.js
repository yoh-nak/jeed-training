window.addEventListener("load", function(){
	// ul要素を取得
	var myList = document.getElementsByTagName("ul")[0];
	// 最初のノードの文字色を変更
	myList.firstChild.style.color = "red";
	// 3番目のノードの背景色を変更
	myList.childNodes[4].style.backgroundColor = "yellow";
	// 最後のノードのスタイルを変更
	myList.lastChild.style.fontSize = "18pt";
}, false);