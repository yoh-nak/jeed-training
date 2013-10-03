window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// テキストフィールドに入力されたらリアルタイムに結果を表示
	document.getElementById("num").onkeyup = function(){
		ele.innerHTML = zeroPadding(this.value, 8);
	}
	// 指定した桁数に揃える。不足分は0で埋める
	function zeroPadding(num, count){
		// 2番目のパラメータが省略された場合は8桁にする
		count = count || 8;
		// ゼロの文字を指定した桁数だけ生成
		var zero = "";
		for(var i=0; i<count; i++){
			zero = zero + "0";
		}
		// 0で埋める
		var n = (zero+num).slice(-count);
		return n;
	}
}, false);