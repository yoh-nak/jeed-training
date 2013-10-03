window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 現在の日時を示すDateオブジェクトを生成
	var date1 = new Date();
	// 2013年2月15日を示すDateオブジェクトを生成
	var date2 = new Date("2013/2/15");
	// 結果を出力
	ele.innerHTML = date1+"<br>"+date2;
}, false);