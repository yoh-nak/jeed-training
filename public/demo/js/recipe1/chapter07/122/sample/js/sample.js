window.addEventListener("load", function(){
	// ベンダープレフィックスを考慮
	window.setImmediate = window.setImmediate || window.msSetImmediate;
	window.clearImmediate = window.clearImmediate || window.msClearImmediate;
	// 開始ボタンにイベントを割り当て
	document.getElementById("startBtn").addEventListener("click", function(){
		// 非同期処理1を実行
		var immediateID = window.setImmediate(primeNumber);
		// 非同期処理2を実行
		window.setImmediate(primeNumber);
		// 非同期処理3を実行
		window.setImmediate(primeNumber);
		// 非同期処理4を実行
		window.setImmediate(primeNumber);
	}, false);
}, false);
// 時間がかかる処理
// 10000までの最大の素数を求める
function primeNumber() {
	var ele = document.getElementsByTagName("output")[0];
	var result = 2;
	for (var i=2; i<=10000; i++) {
		var flag = false;	// 素数フラグをリセット
		for (var j=2; j<i; j++) {
			if ((i % j) == 0) { flag = true; }	// フラグをセット
		}
		if (flag == false) { result = i; }
	}
	ele.innerHTML += "素数計算が終了しました。"+result+" : "+Date.now()+"<br>";
}
