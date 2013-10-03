window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 比較する値を用意
	var n1 = 12.34;
	var n2 = 45.67;
	// 小さい値を出力
	ele.innerHTML = "小さい値："+Math.min(n1, n2)+"<br>";
	// 大きい値を出力
	ele.innerHTML += "大きい値："+Math.max(n1, n2)+"<br>";
}, false);