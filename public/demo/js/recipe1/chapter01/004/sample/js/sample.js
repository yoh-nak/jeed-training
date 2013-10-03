window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 各種リテラル（定数）
	"Sample";
	'Program';
	"\u3042";
	123.456;
	-3.14e3;
	0xffff;
	true;
	// リテラルを変数に代入
	var n = 2718e-3;
	var ohmz = { pc:"MZ-700", tv:"X68000XVI" };
	var func = function(a,b){ return a+b; }
	// 変数に代入したリテラルを表示
	ele.innerHTML = "数値：" + n + "<br>";
	ele.innerHTML += "オブジェクト：" + ohmz.pc + "<br>";
	ele.innerHTML += "関数：" + func + "<br>";
	ele.innerHTML += "真偽：" + true;
}, false);