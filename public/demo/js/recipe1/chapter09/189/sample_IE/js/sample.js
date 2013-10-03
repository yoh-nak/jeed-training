window.onload = function(){
	var ele = document.getElementsByTagName("span");
	// テキストフィールドにイベントを設定
	document.getElementById("uName").onselect = function(evt){
		var d = document.selection.createRange();
		var te = this.createTextRange();
		te.setEndPoint("EndToStart", d);
		var startPos = te.text.length;
		te.setEndPoint("EndToEnd", d);
		var endPos = te.text.length;
		ele[0].innerHTML = startPos+"〜"+endPos;
		var text = this.value.substring(startPos, endPos);
		ele[1].innerHTML = text;
	}
};
