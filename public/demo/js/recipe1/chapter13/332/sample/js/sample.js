window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// ボタン要素の読み出し
	var btn = document.getElementById("check");
	// ボタンにイベントを割り当て
	btn.addEventListener("click", function(evt){
		// 入力された番号を取得
		var no1 = document.getElementById("orderNo").value;
		var no2 = document.getElementById("orderNo").valueAsNumber;
		// 入力された個数を取得
		var cnt1 = document.getElementById("count").value;
		var cnt2 = document.getElementById("count").valueAsNumber;
		// 結果を出力
		ele.innerHTML = "注文番号(value)："+no1+"<br>";
		ele.innerHTML += "注文番号(valueAsNumber)："+no2+"<br>";
		ele.innerHTML += "注文個数(value)："+cnt1+"<br>";
		ele.innerHTML += "注文個数(valueAsNumber)："+cnt2+"<br>";
	}, false);
}, false);