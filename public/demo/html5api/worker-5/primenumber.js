// Workerを使って素数かどうか調べる
addEventListener('message', function(event){
	var checkNumber = event.data;
	if (checkNumber < 4){
		postMessage(true);
		return;
	}
	var flag = true;
	for(var i=2; i<checkNumber; i++){	// 都合により高コストで処理
		if ((checkNumber % i) == 0){
			flag = false;
			break;
		}
	}
	postMessage(flag);
}, false);