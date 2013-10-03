window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output");
	// ブラウザ名を表示
	ele[0].innerHTML = navigator.appName;
	// ブラウザのバージョンを表示
	ele[1].innerHTML = navigator.appVersion;
	// ユーザーエージェントを表示
	ele[2].innerHTML = navigator.userAgent;
}, false);