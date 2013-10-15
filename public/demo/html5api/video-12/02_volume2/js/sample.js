// 音量を調整する
window.addEventListener("load", function(){
	var videoObj = document.getElementById("myVideo");
	document.getElementById("setVolume").addEventListener("click",function(){
		var n = document.getElementById("vol").value;
		videoObj.volume = n;
	},true);
}, true);