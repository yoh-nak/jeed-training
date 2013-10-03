window.addEventListener("load", function(){
	// マッチするMediaを指定。IE10はmsMatchMedia
	window.matchMedia("(min-width:480px)").addListener(function(){
		var ele = document.getElementsByTagName("output")[0];
		ele.innerHTML += "(min-width:480px)検知<br>";
	});
}, false);
