onmessage = function(evt){
	var startValue = evt.data.start;
	var endValue = evt.data.end;
	var total = 0;
	for(var i=startValue; i<=endValue; i++){
		total += i;
	}
	postMessage(total);
}
