window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 底が10の対数を求める
	var x  = 1000;
	var log10x  = Math.LOG10E * Math.log(x);
	// 10の自然対数値を表示
	ele.innerHTML = log10x + "<br>";
	// 底が2の対数を求める
	var x  = 65536;
	var log2x  = Math.LOG2E * Math.log(x);
	// 10の自然対数値を表示
	ele.innerHTML += log2x;
}, false);