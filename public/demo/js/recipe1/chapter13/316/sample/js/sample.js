window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	var btn =  document.getElementsByTagName("button")[0];
	// inputボタンにイベントを割り当て
	btn.addEventListener("click", function(){
		// キーとデータを削除
		localStorage.setItem("xDay", new Date());
	}, false);
	// windowオブジェクトにstorageイベントを割り当て
	window.addEventListener("storage", function(evt){
		var tempKey = evt.key;
		ele.innerHTML = tempKey+"キーのデータが更新されました<br>";
		ele.innerHTML += evt.oldValue+"<br>↓<br>"+evt.newValue;
	}, false);
}, false);