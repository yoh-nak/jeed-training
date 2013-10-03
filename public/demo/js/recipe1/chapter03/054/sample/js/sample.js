window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// WeakMapオブジェクトを生成
	var wmObj = new WeakMap();
	// キーにするオブジェクトを生成
	var obj = { model : "mz-721", price : 89800 };
	// Weakマップにキーと値を設定
	wmObj.set(obj, "photo1.jpg");
	// Weakマップの値を読み出し
	var data = wmObj.get(obj);
	// 結果を出力
	ele.innerHTML = wmObj.toString()+"<br>"+data;
}, false);