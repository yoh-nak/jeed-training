window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 配列を作成
	var myArray1 = ["A", "B", "C", "D", "E", "F", "G", "H"];
	var myArray2 = ["A", "B", "C", "D", "E", "F", "G", "H"];
	var myArray3 = ["A", "B", "C", "D", "E", "F", "G", "H"];
	var myArray4 = ["A", "B", "C", "D", "E", "F", "G", "H"];
	var myArray5 = ["A", "B", "C", "D", "E", "F", "G", "H"];
	// 3番目以降の要素を抜き出す
	var data1 = myArray1.splice(2);
	// 3番目から3つの要素を抜き出す
	var data2 = myArray2.splice(2, 3);
	// 最後から3つの要素を抜き出す
	var data3 = myArray3.splice(-3);
	// 最後から2番目の要素を抜き出す
	var data4 = myArray4.splice(-3, 2);
	// 3番目から3つの要素を抜き出し、3番目以降に新たな要素を挿入
	var data5 = myArray5.splice(2, 3, "W", "X", "Y", "Z");
	// 配列の内容を出力
	ele.innerHTML = "myArray1："+myArray1.toString()+"<br>";
	ele.innerHTML += "data1："+data1.toString()+"<hr>";
	ele.innerHTML += "myArray2："+myArray2.toString()+"<br>";
	ele.innerHTML += "data2："+data2.toString()+"<hr>";
	ele.innerHTML += "myArray3："+myArray3.toString()+"<br>";
	ele.innerHTML += "data3："+data3.toString()+"<hr>";
	ele.innerHTML += "myArray4："+myArray4.toString()+"<br>";
	ele.innerHTML += "data4："+data4.toString()+"<hr>";
	ele.innerHTML += "myArray5："+myArray5.toString()+"<br>";
	ele.innerHTML += "data5："+data5.toString();
}, false);