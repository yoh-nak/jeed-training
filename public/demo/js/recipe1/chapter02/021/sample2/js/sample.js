window.addEventListener("load", function(){
	var obj = [ ];
	obj[0] = JSON.stringify(new Boolean(true));
	obj[1] = JSON.stringify(new Array("a","b","c"));
	obj[2] = JSON.stringify(new Date());
	obj[3] = JSON.stringify(new String("js test"));
	obj[4] = JSON.stringify(new RegExp("mz", "gim"));
	obj[5] = JSON.stringify(Math);
	obj[6] = JSON.stringify(new Number(59.63));
	obj[7] = JSON.stringify(new Object());
	obj[8] = JSON.stringify([[1,2],[3,4]]);
	// 結果を出力
	var ele = document.getElementsByTagName("output")[0];
	for(var i=0; i<obj.length; i++){ ele.innerHTML += i+" : "+obj[i]+"<br>"; }
	ele.innerHTML += "<hr>";
alert("mz".match(obj[4]));

	//
	for(i=0; i<obj.length; i++){
		obj[i] = JSON.parse(obj[i]);
		ele.innerHTML += i+" : "+obj[i]+"<br>";
	}
}, false);
