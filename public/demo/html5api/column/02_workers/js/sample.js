// ワーカー内でのオブジェクトチェック
window.addEventListener("load", function(){
	var time = (new Date()).getTime();
	myWorker = new Worker("js/test.js?t="+time);
	myWorker.addEventListener("message", function(event){
		document.getElementById("stat").innerHTML = event.data;
	}, true);
	myWorker.postMessage(null);	// ワーカーの処理を開始
}, true);
