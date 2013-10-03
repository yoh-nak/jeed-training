window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 配列を作成
	var myArray1 = [0, -19, -4, 100, 5, 9, 13, 99, -99];
	var myArray2 = [0, -19, -4, 100, 5, 9, 13, 99, -99];
	// 配列をソート（文字コード単位）
	var ary1 = myArray1.sort();
	// 配列をソート関数を指定してソート
	var ary2 = myArray2.sort(function(a, b){
		return a - b;
	});
	// 結果を出力
	ele.innerHTML = "■元の配列1<br>"+myArray1.toString()+"<br>";
	ele.innerHTML += "■処理した配列1<br>"+ary1.toString()+"<br>";
	ele.innerHTML += "■処理した配列2<br>"+ary2.toString();
}, false);