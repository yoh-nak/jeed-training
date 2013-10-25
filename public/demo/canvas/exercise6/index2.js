$(function() {
	
	var canvas = $('#gameCanvas');
	var context = canvas.get(0).getContext('2d');
	
	//キャンバスのサイズ
	var canvasWidth = canvas.width();
	var canvasHeight = canvas.height();
	
	//ゲームの設定
	var playGame;
	
	//ゲームをリセット、開始する
	function startGame() {
		//ゲームの初期設定をする
		playGame = false;
				
		//アニメーションループを開始する
		animate();
	}
	
	//ゲームの初期化をする
	function init() {

	}
	
	//アニメーションループ
	function animate() {		
		//クリア
		context.clearRect(0, 0, canvasWidth, canvasHeight);
		
		if (playGame) {
			//33ミリ秒後に再びアニメーションを実行する
			setTimeout(animate, 33);
		}
	}
	init();
});
