window.addEventListener("load", function(){
	// ul要素を取得
	var myList = document.getElementsByTagName("ul")[0];
	// リスト項目を5つ追加
	for(var i=2; i<7; i++){
		(function(){
			// 新規にli要素を作成
			var myItem = document.createElement("li");
			// テキストノードを追加
			var myText = document.createTextNode(i+"番目の項目");
			// li要素に作成したテキストノードを追加
			myItem.appendChild(myText);
			// 子ノードとしてli要素を追加
			myList.insertBefore(myItem, myList.lastChild);
		})();
	}
}, false);