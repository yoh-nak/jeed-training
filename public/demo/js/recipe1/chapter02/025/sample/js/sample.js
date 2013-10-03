window.addEventListener("load", function(){
	// 結果を入れる変数を用意
	var data = "";
	// windowオブジェクトの内容を出力
	for(var i in window){
		try{
			data = data + i + " = " + window[i] + "<br>";
		}catch(e){}
	}
	// 結果を出力
	document.getElementsByTagName("output")[0].innerHTML = data;
}, false);