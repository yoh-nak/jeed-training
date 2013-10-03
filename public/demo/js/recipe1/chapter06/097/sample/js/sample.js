window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 現在の日時を示すDateオブジェクトを生成
	var currentDate = new Date();
	// 12時03分45.678秒設定
	currentDate.setHours(12);
	currentDate.setMinutes(3);
	currentDate.setSeconds(45);
	currentDate.setMilliseconds(678);
	// 時間を指定してDateオブジェクトを生成
	var myDate = new Date("Sat Feb 15 2013 12:03:45 GMT+0900 (JST)");
	// 結果を出力
	ele.innerHTML = currentDate+"<br>";
	ele.innerHTML += myDate;
}, false);