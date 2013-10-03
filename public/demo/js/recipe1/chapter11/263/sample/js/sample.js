window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// オーディオオブジェクトを生成する
	var audioObj = document.getElementsByTagName("audio")[0];
	// 通信状態を格納した配列を用意
	var nstat = ["EMPTY", "IDLE", "LOADING", "NO_SOURCE"];
	var rstat = ["NOTHING", "METADATA", "CURRENT_DATA", "FUTURE_DATA", "ENOUGH_DATA"];
	// イベントを割り当てるボタン要素を読み出し
	var btn = document.getElementsByTagName("input")[0];
	btn.addEventListener("click", function(){
		// ネットワーク状態を読み出し
		var s = audioObj.networkState;
		var rs = audioObj.readyState;
		// 結果を表示
		ele.innerHTML = "networkState："+nstat[s];
		ele.innerHTML += "<br>readyState："+rstat[rs];
	}, false);
}, false);