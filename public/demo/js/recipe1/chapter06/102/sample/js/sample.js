window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 現在の日時を示すDateオブジェクトを生成
	var currentDate = new Date();
	// JSON形式に変更
	var jsonStr = currentDate.toJSON();
	// 結果を出力
	ele.innerHTML = jsonStr;
}, false);