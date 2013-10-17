// 他のJSファイルを読み込み
var text = "ABC";
importScripts("a.js", "b.js");
text = text + "jkl";
importScripts("c.js");
text = text + "PQR";
for(var i=0; i<3; i++){
	importScripts("d.js");
}
postMessage(text);
