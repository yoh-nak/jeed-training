window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 生成数を指定して配列を作成
	var myArray1 = new Array(10);
	// 配列を作成
	var myArray2 = new Array(10, 20);
	// 配列を作成
	var myArray3 = ["H", "He", "Li"];
	// 配列の数を求める
	var n1 = myArray1.length;
	var n2 = myArray2.length;
	var n3 = myArray3.length;
	// 結果を出力
	ele.innerHTML = "myArray1の要素数："+n1+"<br>";
	ele.innerHTML += "myArray2の要素数："+n2+"<br>";
	ele.innerHTML += "myArray3の要素数："+n3;
}, false);