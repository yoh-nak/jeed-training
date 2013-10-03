window.addEventListener("load", function(){
	// 関数xyzを定義
	function xyz(){
		document.getElementsByTagName("output")[1].innerHTML = "xyz";
	}
	// 関数outputTextを呼び出す
	outputText("Sample");
	// 関数xyzを呼び出す
	xyz();
	// 関数addを呼び出す
	var n = add(200, 15);
	document.getElementsByTagName("output")[2].innerHTML = "結果："+n;
}, false);
// 関数outputTextを定義
function outputText(text){
	document.getElementsByTagName("output")[0].innerHTML = text;
}
// 関数addを定義
var add = new Function("a", "b", "return a+b");
