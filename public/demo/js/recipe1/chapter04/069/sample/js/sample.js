window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 20度の正弦値(sin)を求める
	var result1 = Math.sin(20*Math.PI/180);
	ele.innerHTML = result1+"<br>";
	// 45度の余弦値(cos)を求める
	var result2 = Math.cos(45*Math.PI/180);
	ele.innerHTML += result2+"<br>";
	// 60度の正接値(tan)を求める
	var result3 = Math.tan(60*Math.PI/180);
	ele.innerHTML += result3+"<br>";
	// 逆正弦値(asin)を求める（結果は度にして表示）
	var result4 = Math.asin(result1);
	result4 = result4 * 180 / Math.PI;
	ele.innerHTML += result4+"<br>";
	// 逆余弦値(acos)を求める（結果は度にして表示）
	var result5 = Math.acos(result2);
	result5 = result5 * 180 / Math.PI;
	ele.innerHTML += result5+"<br>";
	// 逆正接値(atan)を求める（結果は度にして表示）
	var result6 = Math.atan(result3);
	result6 = result6 * 180 / Math.PI;
	ele.innerHTML += result6+"<br>";
	// x,y座標から角度を求める（結果は度にして表示）
	var x = 50;
	var y = 100;
	var result7 = Math.atan2(y, x);
	result7 = result7 * 180 / Math.PI;
	ele.innerHTML += result7;
}, false);