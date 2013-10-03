window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// オーディオオブジェクトを生成する
	var audioObj = new Audio();
	// イベントを割り当てるボタン要素を読み出し
	var btn = document.getElementsByTagName("input")[1];
	btn.addEventListener("click", function(){
		// MIME Typeを読み出し
		var mt = document.getElementById("mtype").value;
		// 再生可能かどうか調べる
		var result = audioObj.canPlayType(mt);
		// 結果を表示
		ele.innerHTML = mt+"形式は再生できません";
		if (result === "maybe"){
			ele.innerHTML = mt+"形式は再生可能です";
		}
		if (result === "probably"){
			ele.innerHTML = mt+"形式は多分、再生できます";
		}
	}, false);
}, false);