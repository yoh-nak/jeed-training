window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 配列を作成
	var myArray = ["A", "B", "C", "D", "E", "F", "G"];
	// 配列の内容をローテートさせる
	for(var i=1; i<=10; i++){
		myArray.push(myArray.shift());
		ele.innerHTML += i+"回目の配列内容："+myArray.toString()+"<br>";
	}
}, false);