window.addEventListener("load", function(){
	// body要素にイベントリスナーを設定
	window.addEventListener("click", coords, false);
	// h1要素にイベントリスナーを設定
	var h1 = document.getElementsByTagName("output")[0];
	h1.addEventListener("click", coords, false);
}, false);
// 座標表示
function coords(evt){
	var ele = document.getElementsByTagName("output")[0];
	// クライアント座標を求める
	var cx = evt.clientX;
	var cy = evt.clientY;
	// ページ座標を求める
	var px = evt.pageX;
	var py = evt.pageY;
	// モニタ画面上の座標を求める
	var sx = evt.screenX;
	var sy = evt.screenY;
	// オフセット座標を求める
	var ox = evt.offsetX;
	var oy = evt.offsetY;
	// 結果を出力
	ele.innerHTML = "clientX : "+cx+"<br>";
	ele.innerHTML += "clientY : "+cy+"<br>";
	ele.innerHTML += "pageX : "+px+"<br>";
	ele.innerHTML += "pageY : "+py+"<br>";
	ele.innerHTML += "screenX : "+sx+"<br>";
	ele.innerHTML += "screenY : "+sy+"<br>";
	ele.innerHTML += "offsetX : "+ox+"<br>";
	ele.innerHTML += "offsetY : "+oy+"<br>";
	// イベントの伝達を禁止
	evt.stopPropagation();
}