window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// テキストフィールドの参照を変数に代入
	var fld = document.getElementById("myFld");
	// テキストフィールドにcopyイベントを割り当て
	fld.addEventListener("copy", function(evt){
		ele.innerHTML = "コピーしました。";
	}, false);
	// テキストフィールドにcutイベントを割り当て
	fld.addEventListener("cut", function(evt){
		ele.innerHTML = "カットしました。";
	}, false);
	// テキストフィールドにpasetイベントを割り当て
	fld.addEventListener("paste", function(evt){
		ele.innerHTML = "ペーストしました。";
	}, false);
}, false);
