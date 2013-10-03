window.addEventListener("load", function(){
	// 1〜3の数値をあてる（数あてゲーム）
	var num = Math.floor(Math.random() * 3) + 1;
	// 入力ダイアログを表示
	var text = prompt("1〜3の値を入れてください", 2);
	// 入力されていない場合はnullになるので以後の処理をしない
	if (!text){ return; } 
	// 確認ダイアログを表示
	var flag = confirm("本当にこの数値でいいですか？");
	if (flag === false){ return; }
	// 当たっているか調べる（型は自動変換される）
	if (num == text){
		alert("正解です");
	}else{
		alert("不正解です。正解は"+num+"でした");
	}
}, false);