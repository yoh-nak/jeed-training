window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// WeakMapオブジェクトを生成
	var wmObj = new WeakMap();
	// キーにするオブジェクトを生成
	var obj = { model : "mz-711", price : 79800 };
	// Weakマップにキーと値を設定
	wmObj.set(obj, "photo1.jpg");
	// Weakマップに該当するキーがあるか調べる
	var flag = wmObj.has(obj);
	// 結果を出力
	ele.innerHTML = "削除前："+flag+"<br>";
	// キーを削除する
	wmObj.delete(obj);
	// Weakマップに該当するキーがあるか調べる
	flag = wmObj.has(obj);
	// 結果を出力
	ele.innerHTML += "削除後："+flag;
}, false);