window.addEventListener("load", function(){
	setTimeout(function(){
		var ele = document.getElementsByTagName("output")[0];
		// 現在の日時を示すDateオブジェクトを生成
		var currentDate = new Date();
		// グリニッジ標準時を読み出し
		var gmt = currentDate.toGMTString();
		// 協定世界時を読み出し
		var utc = currentDate.toUTCString();
		// 結果を出力
		ele.innerHTML = gmt+"<br>"+utc;
		setTimeout(arguments.callee, 1000);
	}, 1000);
}, false);