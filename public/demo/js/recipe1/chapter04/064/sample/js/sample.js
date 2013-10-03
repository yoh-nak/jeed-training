window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output");
	// ゲタをはかせずに0.1を10回加算する
	var num1 = 0;
	for(var i=0; i<10; i++){
		// 0.1の場合、加算すると誤差発生
		num1 = num1 + 0.1;
	}
	ele[0].innerHTML = num1;
	// ゲタをはかせて0.1を10回加算する
	var jackup = 10;	// 10倍。10のゲタをはかせる
	var num2 = 0;
	for(i=0; i<10; i++){
		// 0.1の場合、加算すると誤差発生
		num2 = num2 + 0.1*jackup;
	}
	// 10倍したので最後に10で除算する
	num2 = num2 / jackup;
	ele[1].innerHTML = num2;
}, false);