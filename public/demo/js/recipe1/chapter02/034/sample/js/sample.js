window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 配列オブジェクトを生成
	var a = new Array(1,2,3,4);
	// 新たなプロパティを追加
	a.ver = 2.5;
	// 追加した新たなプロパティであるverの所有者か調べる
	ele.innerHTML = "verのオーナーか？："+a.hasOwnProperty("ver")+"<br>";
	// lengthの所有者か調べる
	ele.innerHTML += "lengthのオーナーか？："+a.hasOwnProperty("length")+"<br>";
	// toStringの所有者か調べる
	ele.innerHTML += "toStringのオーナーか？："+a.hasOwnProperty("toString")+"<br>";
	// joinの所有者か調べる
	ele.innerHTML += "joinのオーナーか？："+a.hasOwnProperty("join")+"<br>";
	// inを使ってjoinの所有者か調べる
	ele.innerHTML += "joinのオーナーか？："+("join" in a)+"<br>";
}, false);