window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// テキストファイルを読み込みボタンにイベントを割り当て
	document.getElementById("loadTextBtn").addEventListener("click", function(evt){
		// 非同期通信オブジェクト作成
		var xhr = new XMLHttpRequest();
		// 読み込み完了時のイベントハンドラを設定
		xhr.onload = function(){
			// 読み込んだテキストを出力
			ele.innerHTML = xhr.responseText;
		}
		// 同一ドメインのURL上のファイルを指定
		xhr.open("get", "./data.txt", true);
		xhr.send(null);
	}, false);
	// XMLファイルを読み込みボタンにイベントを割り当て
	document.getElementById("loadXMLBtn").addEventListener("click", function(evt){
		// 非同期通信オブジェクト作成
		var xhr = new XMLHttpRequest();
		// 読み込み完了時のイベントハンドラを設定
		xhr.onload = function(){
			// 読み込んだXMLを解析して出力
			var xml = xhr.responseXML;
			// <name>タグをピックアップ
			var nameList = xml.getElementsByTagName("name");
			// <name>タグの数だけ繰り返して表示
			for(var i=0; i<nameList.length; i++){
				// 名前を読み出し
				var uname = nameList[i].firstChild.nodeValue;
				ele.innerHTML += uname + "<br>";
			}
		}
		// 同一ドメインのURL上のファイルを指定
		xhr.open("get", "./data.xml", true);
		xhr.send(null);
	}, false);
}, false);