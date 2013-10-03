window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// ドメイン名を読み出し
	ele.innerHTML = "ドメイン名："+document.domain;
	// ホスト名+ポート番号を読み出し
	ele.innerHTML += "<br>ホスト名+ポート番号："+location.host;
	// ホスト名を読み出し
	ele.innerHTML += "<br>ホスト名："+location.hostname;
	// プロトコル名を読み出し
	ele.innerHTML += "<br>プロトコル名："+location.protocol;
	// パス名を読み出し
	ele.innerHTML += "<br>パス名："+location.pathname;
}, false);