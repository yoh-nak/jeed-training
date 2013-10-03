window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// WeakMapオブジェクトを生成
	var wmObj = new WeakMap();
	// キーにするオブジェクトを生成
	var obj1 = { model : "mz-711", price : 79800 };
	var obj2 = { model : "mz-721", price : 89800 };
	// Weakマップにキーと値を設定
	wmObj.set(obj1, "photo1.jpg");
	wmObj.set(obj2, "photo2.jpg");
	wmObj.set({model : "mz-731"}, "128000");
	// Weakマップに該当するキーがあるか調べる
	var flag1 = wmObj.has(obj1);
	var flag2 = wmObj.has(window);
	var flag3 = wmObj.has({model : "mz-731"});
	// 結果を出力
	ele.innerHTML = flag1+"<br>"+flag2+"<br>"+flag3;
}, false);