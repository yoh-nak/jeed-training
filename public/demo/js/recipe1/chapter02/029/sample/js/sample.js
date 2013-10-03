window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// オブジェクトを作成
	var myObj = {
		type : "N"
	};
	// オブジェクトのプロパティをRに変更
	myObj.type = "R";
	// オブジェクトをロック
	Object.freeze(myObj);
	// オブジェクトのプロパティをXに変更
	myObj.type = "X";
	// オブジェクトにプロパティを追加
	myObj.year = 1987;
	// type, yearプロパティの内容を表示する
	ele.innerHTML = "種類は" + myObj.type + "/"+myObj.year+"です";
}, false);