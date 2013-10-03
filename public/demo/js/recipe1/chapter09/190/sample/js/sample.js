window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// body要素にイベントリスナーを設定
	window.addEventListener("click", function(evt){
		// 表示する領域を消去
		ele.innerHTML = "";
		// クリックした座標を取得
		var cx = evt.clientX;
		var cy = evt.clientY;
		// クリック位置のノードリストを取得
		var nodeList = document.msElementsFromPoint(cx, cy);
		// ノードリストのタグ名一覧を出力
		for(var i=0; i<nodeList.length; i++){
			ele.innerHTML += i+" : "+nodeList[i].tagName+"<br>";
		}
	}, false);
}, false);
