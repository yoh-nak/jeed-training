window.addEventListener("load", function(){
	var btn = document.getElementsByTagName("input")[0];
	btn.addEventListener("click", function(){
		var audioObj = document.getElementsByTagName("audio")[0];
		audioObj.play();
	}, false);
}, false);