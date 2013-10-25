$(function() {
	var canvas = $('#gameCanvas');
	var context = canvas.get(0).getContext('2d');
	
	//キャンバスのサイズ
	var canvasWidth = canvas.width();
	var canvasHeight = canvas.height();
	
	//ゲームの設定
	var playGame;
	var platformX;
	var platformY;
	var platformOuterRadius;
	var platformInnerRadius;

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
		platformX = canvasWidth/2;
		platformY = 150;
		platformOuterRadius = 100;
		platformInnerRadius = 75;
				
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

		//フィールドの描画
		context.fillStyle = 'rgb(100, 100, 100)';
		context.beginPath();
		context.arc(platformX, platformY, platformOuterRadius, 0, Math.PI*2, true);
		context.closePath();
		context.fill();
		
		if (playGame) {
			//33ミリ秒後に再びアニメーションを実行する
			setTimeout(animate, 33);
		}
	}
	init();
});
