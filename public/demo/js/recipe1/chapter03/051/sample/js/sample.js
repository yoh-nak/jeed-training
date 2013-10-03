window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 配列を作成
	var myArray1 = ["A", "B", "C", "D", "E", "F", "G"];
	// 配列の内容を出力
	ele.innerHTML = "■配列内容";
	ele.innerHTML += "<br>処理前："+myArray1.toString();
	// 配列を逆順にする
	myArray1.reverse();
	ele.innerHTML += "<br>処理後："+myArray1.toString();
}, false);