window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 変数flag1をBoolean(真偽)オブジェクトとして生成
	var flag1 = new Boolean();
	// 変数flag2をBoolean(真偽)オブジェクトで値をtrueにして生成
	var flag2 = new Boolean(true);
	// 結果を出力
	ele.innerHTML = flag1+"<br>"+flag2;
}, false);