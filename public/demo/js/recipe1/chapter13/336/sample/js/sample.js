window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 読み込み種類で表示する文字を配列に設定
	var loadType = ["クリックまたはURL入力", "リロード", "進む／戻るボタン"];
	// 読み込み種類を取得
	var nType = performance.navigation.type;
	ele.innerHTML = "種類："+loadType[nType]+"<hr>";
	// 各種タイミングに関するプロパティを配列に設定
	var param = [
		"navigationStart", "unloadEventStart", "unloadEventEnd", "redirectStart",
		"redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd",
		"connectStart", "connectEnd", "secureConnectionStart", "requestStart",
		"responseStart", "responseEnd", "domLoading", "domInteractive",
		"domContentLoadedEventStart", "domContentLoadedEventEnd",
		"domComplete", "loadEventStart", "loadEventEnd"
	];
	// 現在の時間と開始時間を取得
	var now = (new Date()).getTime();
	var startTime = performance.timing.navigationStart;
	// それぞれのタイミング値を表示
	for(var i=0; i<param.length; i++){
		// タイミングプロパティを読み出し
		var measureTime = performance.timing[param[i]];
		if (measureTime - startTime >= 0){
			ele.innerHTML += param[i]+" : "+(measureTime - startTime)+"ミリ秒<br>";
		}else{
			// 取得できない場合の処理
			ele.innerHTML += param[i]+" : 不明<br>";
		}
	}
}, false);