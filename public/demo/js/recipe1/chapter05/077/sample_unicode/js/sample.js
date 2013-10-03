window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	var c1 = 0x20213;
	// 結果を出力
	ele.innerHTML = uniConv(c1);
}, false);
// Unicode サロゲートペア文字を表示可能な文字に変換
function uniConv(x){
	x = x - 0x10000;
	return String.fromCharCode(((x / 0x400) | 0) + 0xD800, (x % 0x400) + 0xDC00);
}
