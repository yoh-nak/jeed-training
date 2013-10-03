window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// オブジェクトを作成
	var myObj = {
		name : "MAPPY"
	};
	// オブジェクトの状態を表示
	ele.innerHTML = "isExtensible : "+Object.isExtensible(myObj)+"<br>";
	ele.innerHTML += "isFrozen : "+Object.isFrozen(myObj)+"<br>";
	ele.innerHTML += "isSealed : "+Object.isSealed(myObj)+"<hr>";
	// オブジェクトをロック
	Object.freeze(myObj);
	// オブジェクトの状態を表示
	ele.innerHTML += "isExtensible : "+Object.isExtensible(myObj)+"<br>";
	ele.innerHTML += "isFrozen : "+Object.isFrozen(myObj)+"<br>";
	ele.innerHTML += "isSealed : "+Object.isSealed(myObj);
}, false);