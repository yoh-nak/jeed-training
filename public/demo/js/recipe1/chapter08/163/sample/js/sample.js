window.addEventListener("load", function(){
	// 削除ボタンにイベントを割り当て
	document.getElementById("delBtn").addEventListener("click", function(){
		// ul要素を取得
		var myList = document.getElementsByTagName("ul")[0];
		// 最後のノードを削除。削除したノードを変数に代入（使用はしない）
		var oldChild = myList.removeChild(myList.lastChild);
	}, false);
	// 置換ボタンにイベントを割り当て
	document.getElementById("repBtn").addEventListener("click", function(){
		// ul要素を取得
		var myList = document.getElementsByTagName("ul")[0];
		// 整数の乱数値を求める(32bit範囲)
		var text = document.createTextNode((Math.random() * 10000) | 0);
		// li要素を作成
		var item = document.createElement("li");
		item.appendChild(text);
		// 最後のノードを置換。置換前のノードを変数に代入（使用はしない）
		var repNode = myList.replaceChild(item, myList.lastChild);
	}, false);
}, false);