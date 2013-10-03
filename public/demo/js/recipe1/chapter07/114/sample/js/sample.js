window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// エンコードした結果を代入
	var result1 = window.btoa("JavaScript 100%");
	// デコードした結果を代入
	var result2 = window.atob(result1);
	// 結果を出力
	ele.innerHTML = "btoa："+result1+"<br>";
	ele.innerHTML += "atob："+result2;
}, false);