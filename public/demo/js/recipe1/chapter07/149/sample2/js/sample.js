window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 1から10までを加算
	var total = 0;
	for(var i=1; i<=1; i++){
		total = total + i;
		// デバッグコンソールに出力
		console.info(i+" = "+total);
		console.warn(i+" = "+total);
		console.error(i+" = "+total);
	}
	ele.innerHTML = total;
}, false);