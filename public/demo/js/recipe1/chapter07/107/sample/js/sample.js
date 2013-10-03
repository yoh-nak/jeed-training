window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	var btn1 = document.getElementById("nextHis");
	var btn2 = document.getElementById("prevHist");
	var btn3 = document.getElementById("goHist");
	// 次のヒストリーに進む
	btn1.addEventListener("click", function(){
		history.forward();
	}, false);
	// 前のヒストリーに戻る
	btn2.addEventListener("click", function(){
		history.back();
	}, false);
	// 指定した数だけヒストリーを進める
	btn3.addEventListener("click", function(){
		var n = document.getElementById("count").value;
		history.go(n);
	}, false);
	// 結果を出力
	ele.innerHTML = "現在のヒストリー数："+history.length;
}, false);