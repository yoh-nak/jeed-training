$(function() {
	var canvas = $('#gameCanvas');
	var context = canvas.get(0).getContext('2d');
	
	//キャンバスのサイズ
	var canvasWidth = canvas.width();
	var canvasHeight = canvas.height();
	
	//ゲームの設定
	var playGame;

	//ゲームのUI
	var ui = $('#gameUI');
	var uiIntro = $('#gameIntro');
	var uiStats = $('#gameStats');
	var uiComplete = $('#gameComplete');
	var uiPlay = $('#gamePlay');
	var uiReset = $('.gameReset');
	var uiRemaining = $('#gameRemaining');
	var uiScore = $('.gameScore');
	
	//ゲームをリセット、開始する
	function startGame() {
		//ゲームのリセット
		uiScore.html('0');
		uiStats.show();

		//ゲームの初期設定をする
		playGame = false;
				
		//アニメーションループを開始する
		animate();
	}
	
	//ゲームの初期化をする
	function init(){
		uiStats.hide();
		uiComplete.hide();
		
		uiPlay.click(function(e) {
			e.preventDefault();
			uiIntro.hide();
			startGame();
		});
		
		uiReset.click(function(e) {
			e.preventDefault();
			uiComplete.hide();
			startGame();
		});
	};
	
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
