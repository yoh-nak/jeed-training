window.addEventListener("load", function(){
	// ボタンにイベントを割り当て
	document.getElementById("findBtn").addEventListener("click", function(){
		// 検索対象文字列を読み出し
		var text = document.getElementById("srcText").value;
		// 正規表現で検索
		var list = text.match(/\d{3}円/g);
		// 結果を表示
		var ele = document.getElementsByTagName("output")[0];
		if (list){
			// マッチする文字列があった場合
			for(var i=0; i<list.length; i++){
				ele.innerHTML += list[i]+"<br>";
			}
		}else{
			// マッチする文字列がなかった場合
			ele.innerHTML = "該当する文字列はありませんでした";
		}
	}, false);
}, false);