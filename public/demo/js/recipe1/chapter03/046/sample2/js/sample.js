window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 配列を作成(6要素)
	var myArray = ["A", "B", "C", 1, 2, 3];
	// 配列をハッシュとして使用
	myArray["MZ"] = 700;
	myArray["PC"] = 6001;
	myArray["FM"] = 7;
	// ハッシュも含めて要素数を求める
	var count = 0;
	for(var i in myArray){ count++; }
	// 配列の数を表示
	ele.innerHTML = "myArrayの要素数："+myArray.length+"<br>";
	ele.innerHTML += "myArrayの総要素数："+count+"<br>";
}, false);