window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// バッテリーの状態を入れたオブジェクトを読み出し
	var battery = navigator.battery || navigator.mozBattery;
	if (!battery){
		ele.innerHTML = "Battery Status APIに対応していません";
	}
	// イベントを設定
	battery.addEventListener("levelchange", function(){
		// バッテリーレベルを表示
		var n = battery.level;
		ele.innerHTML += "バッテリーレベルが変化しました<br>"+n;
	}, false);
}, false);
