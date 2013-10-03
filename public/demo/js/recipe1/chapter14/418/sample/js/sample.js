window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// ボタンにclickイベントを割り当て
	var btn = document.getElementsByTagName("input")[0];
	btn.addEventListener("click", function(){
		// 調べるMedia Query文字列を指定。IE10はmsMatchMedia
		var flag = window.matchMedia("(min-width:480px) and (max-width:800px)").matches;
		if (flag === true) {
			ele.innerHTML = "(min-width:480px) and (max-width:800px)にマッチしてます<br>";
		}else{
			ele.innerHTML = "(min-width:480px) and (max-width:800px)にはマッチしてません<br>";
		}
		// 調べるMedia Query文字列を指定。IE10はmsMatchMedia
		flag = window.matchMedia("(min-width:240px) and (max-width:480px)").matches;
		if (flag === true) {
			ele.innerHTML += "(min-width:240px) and (max-width:480px)にマッチしてます";
		}else{
			ele.innerHTML += "(min-width:240px) and (max-width:480px)にはマッチしてません";
		}
	});
}, false);
