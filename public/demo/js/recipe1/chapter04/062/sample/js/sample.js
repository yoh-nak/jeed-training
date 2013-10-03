window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output");
	// テキストフィールドに入力されたらリアルタイムに結果を表示
	document.getElementById("num").onkeyup = function(){
		var n = separate(this.value);
		ele[0].innerHTML = n.integer;
		ele[1].innerHTML = n.float;
	}
	// 整数部と小数部を切り分ける
	function separate(num){
		// ゼロの文字を指定した桁数だけ生成
		var data = (""+num).split(".");
		var integerN = parseInt(data[0]);
		var floatN = parseInt(data[1]);
		return { integer : integerN, float : floatN }
	}
}, false);