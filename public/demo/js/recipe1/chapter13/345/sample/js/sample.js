window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// バッテリーの状態を入れたオブジェクトを読み出し
	var battery = navigator.battery || navigator.mozBattery;
	if (!battery){
		ele.innerHTML = "Battery Status APIに対応していません";
	}
	// ボタンにイベントを設定
	document.getElementById("check").addEventListener("click", function(){
		// 充電中か調べる
		if (battery.charging){
			ele.innerHTML = "充電中です";
		}else{
			ele.innerHTML = "充電中していません";
		}
	}, false);
}, false);
