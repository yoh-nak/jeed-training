window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// オブジェクトを生成
	var myObj1 = new Object();
	// オブジェクトを作成
	var myObj2 = { };
	// オブジェクトを作成
	var myObj3 = { name : "Yoshinari" };
	// 結果を出力
	ele.innerHTML = "myObj1 : "+myObj1.toString();
	ele.innerHTML += "<br>myObj2 : "+myObj2.toString();
	ele.innerHTML += "<br>myObj3 : "+myObj3.toString();
	ele.innerHTML += "<br>myObj3.name : "+myObj3.name;
}, false);