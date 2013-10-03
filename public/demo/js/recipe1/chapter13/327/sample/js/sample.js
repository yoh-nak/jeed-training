// 画像のサイズ（ここでは240ピクセル固定）
var g = { width : 240, height : 240 };
// ジェスチャーイベントが発生している時の処理
window.addEventListener("gesturechange", function(evt){
	var ele = document.getElementsByTagName("output")[0];
	var photo = document.getElementsByTagName("img")[0];
	// スケール（拡大縮小）の値
	var s = evt.scale;
	// 回転角度
	var r = evt.rotation;
	// 画像を拡大縮小
	photo.style.width = g.width * s + "px";
	photo.style.height = g.height * s + "px";
	// 画像を回転
	photo.style.webkitTransform = "rotate(" + r + "deg)";
	// 結果を画面に出力
	ele.innerHTML = "スケール："+s;
	ele.innerHTML += "<br>回転角度："+r;
}, false);
