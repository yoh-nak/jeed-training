window.addEventListener("load", function(){
	var paragraph = document.getElementsByTagName("div")[0];
	// 繰り返しノードを追加する
	var st = new Date();
	for(var j=1; j<100; j++){
		for(var i=1; i<400; i++){
			// テキストノード生成
			var text = document.createTextNode((i*j)+", ");
			// 別領域のDOMに追加（ブラウザに表示されていないDOM）
			paragraph.appendChild(text);
		}
		// 改行コードを追加
		paragraph.appendChild(document.createElement("br"));
	}
	var ed = new Date();
	alert(ed-st);
}, false);