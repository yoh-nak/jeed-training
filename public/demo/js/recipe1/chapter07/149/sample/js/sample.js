window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 1から10までを加算
	var total = 0;
	for(var i=1; i<=10; i++){
		total = total + i;
		// デバッグコンソールに出力
		console.log(i+" = "+total);
	}
	ele.innerHTML = total;
}, false);