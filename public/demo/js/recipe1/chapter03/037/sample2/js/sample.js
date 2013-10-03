window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 配列を作成1
	var st = new Date();
	for(var i=0; i<1000000; i++){
		var myArray1 = new Array();
	}
	ele.innerHTML = (new Date()) - st + "<br>";
	// 配列を作成2
	var st = new Date();
	for(var i=0; i<1000000; i++){
		var myArray2 = [ ];
	}
	ele.innerHTML += (new Date()) - st + "<br>";
	// 配列を作成3
	var st = new Date();
	for(var i=0; i<1000000; i++){
		var myArray3 = [1,2,3,4,5,"Sample"];
	}
	ele.innerHTML += (new Date()) - st;
}, false);