window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 配列に各種オブジェクトを用意
	var myObj = [
		Array(1), String(2), Number(3), Date(), Math, RegExp,
		function(){}, null, 0.123, "OK", false, undefined
	];
	// オブジェクトの種類を表示
	for(var i=0; i<myObj.length; i++){
		// 種類を調べる
		var type = typeof(myObj[i]);
		ele.innerHTML += type+"<br>";
	}
}, false);