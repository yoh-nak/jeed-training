// Workerを使った計算
addEventListener('message', function(event){
	var startTime = (new Date()).getTime();
	var total = 0;
	for(var i=0; i<10000; i++){
		for(var j=0; j<10000; j++){
			for(var k=0; k<10; k++){
				total++;
			}
		}
	}
	var time = (new Date()).getTime() - startTime;
	postMessage(time);
}, false);