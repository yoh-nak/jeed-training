window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// ボタン要素の読み出し
	var btn = document.getElementById("check");
	// ボタンにイベントを割り当て
	btn.addEventListener("click", function(evt){
		// 入力された日付を取得
		var text = document.getElementById("myDate").value;
		var dtext = document.getElementById("myDate").valueAsDate;;
		// 結果を出力
		ele.innerHTML = "value："+text+"<br>";
		ele.innerHTML += "valueAsDate："+dtext;
	}, false);
}, false);