window.addEventListener("deviceorientation", function(evt){
	var ele = document.getElementsByTagName("output")[0];
	// ジャイロセンサーの値
	var a = evt.alpha;
	var b = evt.beta;
	var g = evt.gamma;
	// 結果を画面に出力
	ele.innerHTML = "■ジャイロセンサー<br>";
	ele.innerHTML += "alpha : "+a+"<br>";
	ele.innerHTML += "beta : "+b+"<br>";
	ele.innerHTML += "gamma : "+g+"<br>";
}, false);