window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// Media Queryを指定。IE10はmsMatchMedia
	var mm = window.matchMedia("(min-width:480px) and (max-width:800px)");
	mm.addListener(function(){
		// Media Queryが変化した場合の処理
		alert("Media Queryが変わりました");
	});
}, false);
