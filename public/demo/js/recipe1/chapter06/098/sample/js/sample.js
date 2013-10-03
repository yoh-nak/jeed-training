window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 現在の日時を示すDateオブジェクトを生成
	var currentDate = new Date();
	// 2013年2月15日に設定
	currentDate.setUTCFullYear(2013);
	currentDate.setUTCMonth(1);
	currentDate.setUTCDate(15);
	// 曜日を読み出し
	var dw = "日月火水木金土".charAt(currentDate.getUTCDay());
	// 結果を出力
	ele.innerHTML = "2013年2月15日は"+dw+"曜日です。";
}, false);