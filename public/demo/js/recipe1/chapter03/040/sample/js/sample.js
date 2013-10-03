window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 配列を作成
	var myArray = ["A", "B", "C", "D", "E", "F", "G"];
	// 配列から3番目以降の要素を抜き出す
	var data1 = myArray.slice(2);
	// 配列から3〜5番目の要素を抜き出す
	var data2 = myArray.slice(2, 5);
	// 配列から3番目〜最後から2番目の要素を抜き出す
	var data3 = myArray.slice(2, -1);
	// 配列の内容を出力
	ele.innerHTML = "元の配列内容："+myArray.toString()+"<br>";
	ele.innerHTML += "抽出結果1："+data1.toString()+"<br>";
	ele.innerHTML += "抽出結果2："+data2.toString()+"<br>";
	ele.innerHTML += "抽出結果3："+data3.toString()+"<br>";
}, false);