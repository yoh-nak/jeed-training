window.addEventListener("devicemotion", function(evt){
	var ele = document.getElementsByTagName("output")[0];
	// 加速度センサーの値
	var x = evt.acceleration.x;
	var y = evt.acceleration.y;
	var z = evt.acceleration.z;
	// 重力加速度センサーの値（iPad/iPhone 4以降）
	var xg = evt.accelerationIncludingGravity.x;
	var yg = evt.accelerationIncludingGravity.y;
	var zg = evt.accelerationIncludingGravity.z;
	// 結果を画面に出力
	ele.innerHTML = "■加速度<br>";
	ele.innerHTML += "x : "+x+"<br>";
	ele.innerHTML += "y : "+y+"<br>";
	ele.innerHTML += "z : "+z+"<br>";
	ele.innerHTML += "■重力加速度<br>";
	ele.innerHTML += "x : "+xg+"<br>";
	ele.innerHTML += "y : "+yg+"<br>";
	ele.innerHTML += "z : "+zg+"<br>";
}, false);