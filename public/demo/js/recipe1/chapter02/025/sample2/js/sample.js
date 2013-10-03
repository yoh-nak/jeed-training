window.addEventListener("load", function(){
	// 結果を入れる変数を用意
	var data = "";
	// オブジェクトにプロパティが含まれるか調べる
	var result1 = "geolocation" in navigator;
	var result2 = "test" in navigator;
	// 結果を出力
	document.getElementsByTagName("output")[0].innerHTML = result1+"<br>"+result2;
}, false);