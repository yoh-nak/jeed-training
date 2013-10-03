window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// オブジェクトを生成
	var st = new Date();
	for(var i=0; i<1000000; i++){
		var myObj1 = new Object();
	}
	var time1 = (new Date()) - st;
	// オブジェクトを生成
	st = new Date();
	for(var i=0; i<1000000; i++){
		var myObj2 = {};
	}
	var time2 = (new Date()) - st;
	// 結果を出力
	ele.innerHTML = "time1 : "+time1+"<br>";
	ele.innerHTML += "time2 : "+time2+"<br>";
}, false);