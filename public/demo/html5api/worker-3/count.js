// Workerでカウント
var count = 0;	// カウンタ
addEventListener("message", function(event){
	var timerID = setInterval(function(){
		count++;
		postMessage(count);
		if (count == 5){	// 5回で終了
			postMessage(count+"回なので終了します");
			clearInterval(timerID);
			self.close();	// 処理をワーカー側で終了させる
		}
	}, 1000);	// 1秒ごとにカウント
}, false);