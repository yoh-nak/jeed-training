window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 現在の日時を示すDateオブジェクトを生成
	var currentDate = new Date();
	// 日付を文字列に変換
	var dateStr = currentDate.toDateString();
	// 日付を地域文字列に変換
	var dateLStr = currentDate.toLocaleDateString();
	// 時刻を文字列に変換
	var timeStr = currentDate.toTimeString();
	// 時刻を地域文字列に変換
	var timeLStr = currentDate.toLocaleTimeString();
	// 結果を出力
	ele.innerHTML = dateStr+"<br>"+dateLStr+"<br>"+timeStr+"<br>"+timeLStr;
}, false);