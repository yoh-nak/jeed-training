var total = 0;
onmessage = function(evt){
	// 終了コマンドかどうか調べる（falseを終了コマンドとしている）
	if (evt.data === false){
		postMessage("正常終了。合計："+total);
		// ワーカーの処理を終了
		close();
	}else{
		// 数値の場合は計算を継続
		total += parseInt(evt.data);
		postMessage(total);
	}
}
