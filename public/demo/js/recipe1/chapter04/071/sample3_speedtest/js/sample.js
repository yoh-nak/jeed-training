window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	var n = Math.pow(2, 30)+0.25;
	// Math.floor
	var st = Date.now();
	for(var i=0; i<10000000; i++){
		Math.round(n);
	}
	var et = Date.now();
	ele.innerHTML = "Math.floor : "+(et-st)+"<br>";
	// | 0
	st = Date.now();
	for(var i=0; i<10000000; i++){
		n | 0;
	}
	et = Date.now();
	ele.innerHTML += "| 0 : "+(et-st)+"<br>";
	// ~~
	st = Date.now();
	for(var i=0; i<10000000; i++){
		~~n;
	}
	et = Date.now();
	ele.innerHTML += "~~ : "+(et-st)+"<br>";
}, false);