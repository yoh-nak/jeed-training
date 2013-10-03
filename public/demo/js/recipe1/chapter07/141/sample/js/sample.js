window.addEventListener("load", function(){
	var myField = document.getElementById("uName");
	var dBtn = document.getElementById("disBtn");
	var eBtn = document.getElementById("enaBtn");
	// 入力禁止ボタンにイベントを割り当て
	dBtn.addEventListener("click", function(evt){
		// フィールドへの入力を禁止
		myField.disabled = true;
	}, false);
	// 入力許可ボタンにイベントを割り当て
	eBtn.addEventListener("click", function(evt){
		// フィールドへの入力を許可
		myField.disabled = false;
	}, false);
}, false);