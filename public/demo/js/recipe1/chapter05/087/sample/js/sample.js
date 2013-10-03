window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output");
	// 正規表現オブジェクトを作成、その1
	var re1 = new RegExp("abc", "gi");
	// 正規表現オブジェクトを表示
	ele[0].innerHTML = re1;
	// 正規表現オブジェクトを作成、その2
	var re2 = /xyz/gim;
	// 正規表現オブジェクトを表示
	ele[1].innerHTML = re2;
	// 正規表現オブジェクトかどうか調べる
	ele[2].innerHTML = re2 instanceof RegExp;
}, false);