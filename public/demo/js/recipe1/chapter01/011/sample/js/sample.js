window.addEventListener("load", function(){
	// 関数calcを呼び出し
	var n = calc(200, 15);
	document.getElementsByTagName("output")[0].innerHTML = "合計："+n;
	// パラメータの数を変更して呼び出し
	n = calc(1,2,3,4,5,6,7,8,9,10);
	document.getElementsByTagName("output")[1].innerHTML = "合計："+n;
}, false);
// パラメータの数だけ処理する
function calc(){
	var total = 0;
	for(var i=0; i<arguments.length; i++){
		var n = arguments[i];
		total = total + n;
	}
	return total;
}
