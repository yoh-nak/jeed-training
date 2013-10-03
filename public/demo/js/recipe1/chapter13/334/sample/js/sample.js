window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// フィールドの読み出し
	var fld = document.getElementById("food");
	// フィールドにイベントを割り当て
	fld.addEventListener("change", function(evt){
		// 選択された内容を読み出し
		var text = this.value;
		// 結果を出力
		ele.innerHTML = "選択した項目："+text;
	}, false);
}, false);