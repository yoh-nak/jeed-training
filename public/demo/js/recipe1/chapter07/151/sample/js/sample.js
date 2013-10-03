window.addEventListener("load", function(){
	// 処理時間の計測を開始
	console.profile("test1");
	// 計測する処理を記述
	for(var a=[], i=0; i<100000; i++){
		a[i] = i * i + i / 0.1;
		var n = abc(i);
	}
	// 関数
	function abc(n){ return Math.pow(2, n); } 
	// 処理時間の計測を終了
	console.profileEnd("test1");
}, false);