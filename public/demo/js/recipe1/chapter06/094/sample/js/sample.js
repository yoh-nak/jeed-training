window.addEventListener("load", function(){
	setInterval(function(){
		var ele = document.getElementsByTagName("output")[0];
		// 現在の日時を示すDateオブジェクトを生成
		var currentDate = new Date();
		// 協定世界時の時間(0〜23)を読み出し
		var h = currentDate.getUTCHours();
		// 協定世界時の分(0〜59)を読み出し
		var m = currentDate.getUTCMinutes();
		// 協定世界時の秒(0〜59)を読み出し
		var s = currentDate.getUTCSeconds();
		// 協定世界時のミリ秒(0〜999)を読み出し
		var ms = currentDate.getUTCMilliseconds();
		// 結果を出力
		ele.innerHTML = h+"時"+m+"分"+s+"."+ms+"秒";
	}, 100);
}, false);