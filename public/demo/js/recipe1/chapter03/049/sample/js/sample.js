window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 配列を作成
	var myArray = ["A", "B", "C", , , , "D", "E"];
	// 配列を前方から順番に処理
	var ary1 = myArray.reduce(connect);
	// 初期値を指定して配列を前方から順番に処理
	var ary2 = myArray.reduce(connect, "★");
	// 配列を後方から順番に処理
	var ary3 = myArray.reduceRight(connect);
	// 結果を出力
	ele.innerHTML = "■元の配列<br>"+myArray.toString()+"<br>";
	ele.innerHTML += "■処理した配列1<br>"+ary1.toString()+"<br>";
	ele.innerHTML += "■処理した配列2<br>"+ary2.toString()+"<br>";
	ele.innerHTML += "■処理した配列3<br>"+ary3.toString();
	// 内容を連結する関数
	function connect(prev, current, index, targetArray){
		// 前と現在の要素に|の文字を連結して返す
		return prev+"|"+current;
	}
}, false);