window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// Google Chromeの場合
	document.addEventListener("webkitvisibilitychange", function(){
		// 状態を表示
		visCheck(document.webkitHidden, document.webkitVisibilityState);
	}, false);
	// Firefoxの場合
	document.addEventListener("mozvisibilitychange", function(){
		// 状態を表示
		visCheck(document.mozHidden, document.mozVisibilityState);
	}, false);
	// IE10の場合
	document.addEventListener("msvisibilitychange", function(){
		// 状態を表示
		visCheck(document.msHidden, document.msVisibilityState);
	}, false);
	// 画面に表示
	function visCheck(visType, visState){
		// 切り替わった時間を取得
		var dateObj = new Date();
		// 表示状態を調べる
		if (visType){
			// ページが隠れた場合
			ele.innerHTML += "ページが隠れました："+dateObj+"<br>";
		}else{
			// ページが表示された場合
			ele.innerHTML += "ページが前面に出ました"+dateObj+"<br>";
		}
		// ページの状態を表示
		ele.innerHTML += "visibilityState："+visState+"<hr>";
	}
}, false);
