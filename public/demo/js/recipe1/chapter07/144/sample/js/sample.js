window.addEventListener("load", function(){
	// type="number"の要素を読み出し
	var orderNumber = document.getElementById("num");
	// ボタン要素を読み出し
	var addbtn1 = document.getElementById("addBtn1");
	var addbtn2 = document.getElementById("addBtn2");
	var subbtn1 = document.getElementById("subBtn1");
	var subbtn2 = document.getElementById("subBtn2");
	// 1加算ボタンにイベントを割り当て
	addbtn1.addEventListener("click", function(evt){
		// 1を加算する
		orderNumber.stepUp();
	}, false);
	// 10加算ボタンにイベントを割り当て
	addbtn2.addEventListener("click", function(evt){
		// 10を加算する
		orderNumber.stepUp(10);
	}, false);
	// 1減算ボタンにイベントを割り当て
	subbtn1.addEventListener("click", function(evt){
		// 1を減算する
		orderNumber.stepDown();
	}, false);
	// 10減算ボタンにイベントを割り当て
	subbtn2.addEventListener("click", function(evt){
		// 10を減算する
		orderNumber.stepDown(10);
	}, false);
}, false);