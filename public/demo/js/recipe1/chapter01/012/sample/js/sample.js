window.addEventListener("load", function(){
	// thisにバインド（紐付ける）配列その１
	var ary1 = [1, 2, 3, 4, 5];
	// thisにバインド（紐付ける）配列その２
	var ary2 = [10,20,30,40,50,60,70,80,90,100];
	// 関数calcにary1をバインド
	var myCalc1 = calc.bind(ary1);
	var n = myCalc1();
	document.getElementsByTagName("output")[0].innerHTML = "合計："+n;
	// 関数calcにary2をバインド
	var myCalc2 = calc.bind(ary2);
	n = myCalc2();
	document.getElementsByTagName("output")[1].innerHTML = "合計："+n;
}, false);
// 数値の合計を計算。bindしない場合はthisはwindowになる
function calc(){
	var total = 0;
	for(var i=0; i<this.length; i++){
		total = total + this[i];
	}
	return total;
}
