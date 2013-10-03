window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// フォームにinputボタンにgetElementById()でアクセス
	var btn = document.getElementById("chkBtn");
	// ボタンにイベントを割り当て
	btn.addEventListener("click", function(evt){
		// 最初のフォーム要素
		var f = document.forms[0];
		// フォームのmethod属性にアクセス
		ele.innerHTML = f.method +"<br>";
		// elementsで最初の要素にアクセス
		f.elements[0].value = "JavaScript";
		// 2番目のラジオボタンを選択
		f.elements["os"][1].checked = true;
		// チェックボックスの選択状態を切り替え
		f.myCheck.checked = !f.myCheck.checked;
		// テキストエリアに文字を出力
		document.querySelectorAll("textarea")[0].value = "ノーコメント";
		
	}, false);
}, false);