window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 現在の日時を示すDateオブジェクトを生成
	var currentDate = new Date();
	// 2013年2月15日に設定
	currentDate.setFullYear(2013);
	currentDate.setMonth(1);
	currentDate.setDate(15);
	// 曜日を読み出し
	var dw1 = "日月火水木金土".charAt(currentDate.getDay());
	// 日付を指定してDateオブジェクトを生成
	var myDate = new Date("2014/2/15");
	// 曜日を読み出し
	var dw2 = "日月火水木金土".charAt(myDate.getDay());
	// 結果を出力
	ele.innerHTML = "2013年2月15日は"+dw1+"曜日です。<br>";
	ele.innerHTML += "2014年2月15日は"+dw2+"曜日です。";
}, false);