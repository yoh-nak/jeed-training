window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 現在の日時を示すDateオブジェクトを生成
	var currentDate = new Date();
	// 12時03分45.678秒設定
	currentDate.setUTCHours(12);
	currentDate.setUTCMinutes(3);
	currentDate.setUTCSeconds(45);
	currentDate.setUTCMilliseconds(678);
	// タイムゾーンを読み出し
	var timezone = currentDate.getTimezoneOffset();
	// 結果を出力
	ele.innerHTML = currentDate+"<br>";
	ele.innerHTML += "時差："+timezone/60+"時間";
}, false);