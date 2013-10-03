window.addEventListener("load", function(){
	var paragraph = document.getElementsByTagName("div")[0];
	// 別領域のDOMツリーを生成（ドキュメントフラグメント）
	var docf = document.createDocumentFragment();
	// 繰り返しノードを追加する
	var st = new Date();
	for(var j=1; j<100; j++){
		for(var i=1; i<400; i++){
			// テキストノード生成
			var text = document.createTextNode((i*j)+", ");
			// 別領域のDOMに追加（ブラウザに表示されていないDOM）
			docf.appendChild(text);
		}
		// 改行コードを追加
		docf.appendChild(document.createElement("br"));
	}
	// 最後にブラウザ上のドキュメントに表示
	paragraph.appendChild(docf);
	var ed = new Date();
	alert(ed-st);
}, false);