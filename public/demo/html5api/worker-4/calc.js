// Workerを使った計算
addEventListener("message", function(event){
	var total = 0;
	var ele = document.getElementById("stat");	// Error!
	for(var i=0; i<10000; i++){
		for(var j=0; j<10000; j++){
			for(var k=0; k<10; k++){
				total++;
			}
		}
	}
	postMessage(total);
}, false);