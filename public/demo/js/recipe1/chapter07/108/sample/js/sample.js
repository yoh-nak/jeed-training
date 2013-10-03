window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// windowにヒストリー変更時のイベントを設定
	window.addEventListener("popstate", function(evt){
		// pushStateで指定されたステートを表示
		ele.innerHTML = event.state;
	}, false);
	// ボタン要素を読み出し
	var btn1 = document.getElementById("prevHis");
	var btn2 = document.getElementById("addHis");
	var btn3 = document.getElementById("repHis");
	// ボタンにイベントを割り当て
	btn1.addEventListener("click", function(){
		// 前のヒストリーに戻る
		history.back();
	}, false);
	// ヒストリーを追加
	btn2.addEventListener("click", function(){
		var t = (new Date()).getTime();
		history.pushState("newBook"+t, "新刊", "new.html");
		ele.innerHTML = "ヒストリー数："+history.length;
	}, false);
	// ヒストリーを置換
	btn3.addEventListener("click", function(){
		var t = (new Date()).getTime();
		history.replaceState("oldBook"+t, "古書", "old.html");
		ele.innerHTML = "ヒストリーを置換しました";
	}, false);
}, false);