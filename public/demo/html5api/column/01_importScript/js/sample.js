// Webワーカーを呼び出す
var myWorker = new Worker("js/sub.js");
myWorker.addEventListener("message", function(event){
	document.getElementById("result").innerHTML = event.data;
}, true);
