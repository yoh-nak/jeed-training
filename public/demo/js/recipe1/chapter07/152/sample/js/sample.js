window.addEventListener("load", function(){
	// 計測する処理を記述
	var n = abc(2);
	// 関数
	function abc(n){
		// コールスタックを表示
		console.trace("nest1");
		return mFunc(n, 4);
	} 
	// 関数その２
	function mFunc(num, n){
		// コールスタックを表示
		console.trace("nest2");
		return Math.pow(num, n);
	}
}, false);