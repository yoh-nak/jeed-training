window.addEventListener("load", function(){
	var btn = document.getElementsByTagName("button")[0];
	// ボタンにイベントを割り当て
	btn.addEventListener("click", function(evt){
		var ele = document.getElementsByTagName("output")[0];
		// 名前を入力するテキストフィールドの値を読み出す
		var userName = document.getElementById("uName").value;
		// 予約日を入力するテキストフィールドの値を読み出す
		var resDay = document.getElementById("reservedDay").value;
		// 読み出した結果を出力
		ele.innerHTML = "名前："+userName+"<br>";
		ele.innerHTML += "予約日："+resDay;
		// デフォルトイベントを禁止
		evt.preventDefault();
	}, false);
}, false);