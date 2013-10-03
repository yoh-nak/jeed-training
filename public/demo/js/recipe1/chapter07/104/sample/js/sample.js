window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// Javaが使えるかどうか調べる
	var flag1 = navigator.javaEnabled();
	// Geolocation APIが使えるかどうか調べる
	var flag2 = navigator.geolocation ? true: false;
	// 結果を出力
	ele.innerHTML = "Java："+flag1+"<br>";
	ele.innerHTML += "Gelocation API："+flag2+"<br>";
}, false);