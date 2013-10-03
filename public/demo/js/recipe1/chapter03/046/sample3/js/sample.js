window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 生成数を指定して配列を作成
	var myArray = ["H", "He", "Li",,,"Z"];
	// 配列の数を求める
	var n = myArray.length;
	// 結果を出力
	ele.innerHTML = "myArrayの要素数："+n+"<br>";
}, false);