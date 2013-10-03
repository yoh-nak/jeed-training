window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// バッテリーの状態を入れたオブジェクトを読み出し
	var battery = navigator.battery || navigator.mozBattery;
	if (!battery){
		ele.innerHTML = "Battery Status APIに対応していません";
	}
	// イベントを設定
	battery.onchargingchange = function(){
		ele.innerHTML = "充電状態が変化しました<br>";
		if (battery.charging){
			ele.innerHTML += "充電を開始しました";
		}else{
			ele.innerHTML += "充電を終了しました";
		}
	}
}, false);
