window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 最初のテキストフィールドにフォーカス
	var fld1 = document.getElementById("uName");
	fld1.focus();
	// さらに選択。その旨メッセージを表示
	fld1.select();
	ele.innerHTML = "最初のテキストフィールドにフォーカスし選択しました";
	// 2番目のテキストフィールドにフォーカスした場合の処理
	var fld2 = document.getElementById("uAge");
	fld2.addEventListener("focus", function(evt){
		var targetID = evt.target.id;
		ele.innerHTML = "ID名："+targetID+"のフィールドにフォーカスしました";
	}, false);
	// 2番目のテキストフィールドのフォーカスが外れた場合の処理
	fld2.addEventListener("blur", function(evt){
		ele.innerHTML = "フォーカスが外れました";
	}, false);
}, false);
