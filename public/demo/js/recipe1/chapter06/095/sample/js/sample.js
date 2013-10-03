window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 現在の日時を示すDateオブジェクトを生成
	var currentDate = new Date();
	// 1970年1月1日から現時点までの経過ミリ秒を読み出し
	var msec1 = currentDate.getTime();
	// 1970年1月1日から2013年2月15日0時1分2秒までの経過ミリ秒を読み出し
	var msec2 = Date.UTC(2013, 2, 15, 0, 1, 2);
	// 1970年1月1日から現時点までの経過ミリ秒を読み出し
	var msec3 = Date.now();
	// 結果を出力
	ele.innerHTML = msec1+"<br>"+msec2+"<br>"+msec3;
}, false);