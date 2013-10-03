window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// JSONデータを変数に代入（非同期通信で読み込む方式でも可）
	var data1 = '["DARIUS",1969,{"opacity":0.5,"top":"120px","flag":true},["ZAVIGA","B-WING"]]';
	var data2 = '{"data":1234.56,"name":"KF"}';
	// JSON形式から変換
	var obj1 = JSON.parse(data1);
	var obj2 = JSON.parse(data2);
	// 結果を出力
	ele.innerHTML = obj1+"<br>"+obj2+"<br>";
	// 内容を読み出して出力
	ele.innerHTML += obj1[2].opacity+"<br>";
	ele.innerHTML += obj2.name;
}, false);
