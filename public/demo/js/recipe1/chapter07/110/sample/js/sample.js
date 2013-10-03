window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 画面の色深度を調べる
	var bit = screen.colorDepth;
	// ビット数から画面の色数を求める
	var n = Math.pow(2, bit);
	// 結果を出力
	ele.innerHTML = "画面のビット数："+bit+"<br>";
	ele.innerHTML += "画面の色数："+n;
}, false);