window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// Web Audioオブジェクトが使用できるか調べる
	if(window.webkitAudioContext){
		ele.innerHTML = "Web Audioは使用できます";
	}else{
		ele.innerHTML = "Web Audioは使用できません";
	}
}, false);
