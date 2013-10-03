window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 読み込みボタンにイベントを割り当て
	document.getElementById("loadBtn").addEventListener("click", function(evt){
		// 非同期通信オブジェクト作成
		var xhr = createXMLHttpRequest();
		// 読み込み完了時のイベントハンドラを設定
		xhr.onload = function(){
			// 読み込んだテキストを出力
			ele.innerHTML = xhr.responseText;
		}
		// 同一ドメインのURL上のファイルを指定
		xhr.open("get", "./data.html", true);
		xhr.send(null);
	}, false);
}, false);
// http通信用、IE共通関数
function createXMLHttpRequest(){
	var XMLhttpObject = null;
	try{ XMLhttpObject = new XMLHttpRequest();
	}catch(e){
		try{ XMLhttpObject = new ActiveXObject("Msxml2.XMLHTTP");
		}catch(e){
			try{ XMLhttpObject = new ActiveXObject("Microsoft.XMLHTTP");
			}catch(e){ return null; }
		}
	}
	return XMLhttpObject;
}
