importScripts("./add.js");
onmessage = function(evt){
	var startValue = evt.data.start;
	var endValue = evt.data.end;
	var total = addFunc(startValue, endValue);
	postMessage(total);
}
