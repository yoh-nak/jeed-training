window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// PointerLock APIが使用できるか調べる
	var h3ele = document.getElementsByTagName("h3")[0];
	var pLock = h3ele.mozRequestPointerLock;
	if(pLock){
		ele.innerHTML = "PointerLock APIは使用できます";
	}else{
		ele.innerHTML = "PointerLock APIは使用できません";
	}
}, false);
