window.addEventListener("load", function(){
	// body要素のイベントをキャプチャー
	document.body.addEventListener("click", outputType, false);
	document.body.addEventListener("mousemove", outputType, false);
}, false);
// イベントの種類を表示
function outputType(evt){
	var ele = document.getElementsByTagName("output")[0];
	// イベントの種類を求める
	var evtType = evt.type;
	// イベントが発生した要素
	var evtElelement = evt.target.tagName;
	// 結果を出力
	ele.innerHTML = "種類 : "+evtType+"<br>";
	ele.innerHTML += "要素 : "+evtElelement+"<br>";
	// イベントの伝達を禁止
	evt.stopPropagation();
}