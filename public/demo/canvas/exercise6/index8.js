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
	var asteroids; //アステロイドを格納する配列
	var player;
	var playerOriginalX;
	var playerOriginalY;

	//ゲームのUI
	var ui = $('#gameUI');
	var uiIntro = $('#gameIntro');
	var uiStats = $('#gameStats');
	var uiComplete = $('#gameComplete');
	var uiPlay = $('#gamePlay');
	var uiReset = $('.gameReset');
	var uiRemaining = $('#gameRemaining');
	var uiScore = $('.gameScore');
	
	//アステロイドの描画を定義するクラス
	var Asteroid = function(x, y, radius, mass, friction) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.mass = mass;
		this.friction = friction;
		
		this.vX = 0;
		this.vY = 0;
		
		this.player = false;
	};

	//ゲームをリセット、開始する
	function startGame() {
		//ゲームのリセット
		uiScore.html('0');
		uiStats.show();

		//ゲームの初期設定をする
		playGame = false; //動作検証 playGame = true;
		platformX = canvasWidth/2;
		platformY = 150;
		platformOuterRadius = 100;
		platformInnerRadius = 75;
		asteroids = new Array();

		//プレーヤーアステロイドの設定
		var pRadius = 15;
		var pMass = 10;
		var pFriction = 0.97;
		playerOriginalX = canvasWidth/2;
		playerOriginalY = canvasHeight-150;
		player = new Asteroid(playerOriginalX, playerOriginalY, pRadius, pMass, pFriction);
		player.player = true;
		//player.vY = -25; //動作検証
		asteroids.push(player);
				
		//外周のアステロイドの設定
		var outerRing = 8; //外周のアステロイド
		var ringCount = 3; //環の数
		var ringSpacing = (platformInnerRadius/(ringCount-1)); //環と環の間の距離

		for (var r = 0; r < ringCount; r++) {
			var currentRing = 0; //現在の環に並べるアステロイドの数
			var angle = 0; //アステロイドとアステロイドの間の角度
			var ringRadius = 0;
			
			//最も内側の環か?
			if(r == ringCount-1){
				currentRing = 1;
			}
			else{
				currentRing = outerRing-(r*3);
				angle = 360/currentRing;
				ringRadius = platformInnerRadius-(ringSpacing*r);
			}

			for(var a = 0; a < currentRing; a++){
				var x = 0;
				var y = 0;
				
				//最も内側の環か?
				if (r == ringCount-1) {
					x = platformX;
					y = platformY;
				} else {
					x = platformX+(ringRadius*Math.cos((angle*a)*(Math.PI/180)));
					y = platformY+(ringRadius*Math.sin((angle*a)*(Math.PI/180)));
				}
			
				var radius = 10;
				var mass = 5;
				var friction = 0.95;
				
				asteroids.push(new Asteroid(x, y, radius, mass, friction));
			}
		}

		uiRemaining.html(asteroids.length-1);

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
		

		context.fillStyle = 'rgb(255, 255, 255)';

		var asteroidsLength = asteroids.length;
		for (var i = 0; i < asteroidsLength; i++) {
			var tmpAsteroid = asteroids[i];

			for(var j = i+1; j < asteroidsLength; j++){
				var tmpAsteroidB = asteroids[j];

				var dX = tmpAsteroidB.x - tmpAsteroid.x;
				var dY = tmpAsteroidB.y - tmpAsteroid.y;
				var distance = Math.sqrt((dX*dX)+(dY*dY));
				
				if (distance < tmpAsteroid.radius + tmpAsteroidB.radius) {								
					var angle = Math.atan2(dY, dX);
					var sine = Math.sin(angle);
					var cosine = Math.cos(angle);
					
					//アステロイドの位置を回転する
					var x = 0;
					var y = 0;
					
					//tmpAsteroidBの位置を回転する
					var xB = dX * cosine + dY * sine;
					var yB = dY * cosine - dX * sine;
						
					//アステロイドの速度を回転する
					var vX = tmpAsteroid.vX * cosine + tmpAsteroid.vY * sine;
					var vY = tmpAsteroid.vY * cosine - tmpAsteroid.vX * sine;
															
					//アステロイドBの速度を回転する
					var vXb = tmpAsteroidB.vX * cosine + tmpAsteroidB.vY * sine;
					var vYb = tmpAsteroidB.vY * cosine - tmpAsteroidB.vX * sine;
					
					//運動量を保存する
					var vTotal = vX - vXb;
					vX = ((tmpAsteroid.mass - tmpAsteroidB.mass) * vX + 2 * tmpAsteroidB.mass * vXb) / (tmpAsteroid.mass + tmpAsteroidB.mass);
					vXb = vTotal + vX;
					
					//2つのアステロイドを跳ね返えらせる
					xB = x + (tmpAsteroid.radius + tmpAsteroidB.radius);
					
					//アステロイドの位置を回転にてもとに戻す
					tmpAsteroid.x = tmpAsteroid.x + (x * cosine - y * sine);
					tmpAsteroid.y = tmpAsteroid.y + (y * cosine + x * sine);
					
					tmpAsteroidB.x = tmpAsteroid.x + (xB * cosine - yB * sine);
					tmpAsteroidB.y = tmpAsteroid.y + (yB * cosine + xB * sine);
					
					//アステロイドの速度を回転してもとに戻す
					tmpAsteroid.vX = vX * cosine - vY * sine;
					tmpAsteroid.vY = vY * cosine + vX * sine;
					
					tmpAsteroidB.vX = vXb * cosine - vYb * sine;
					tmpAsteroidB.vY = vYb * cosine + vXb * sine;
				}
			}

			//新しい位置を計算する
			tmpAsteroid.x += tmpAsteroid.vX;
			tmpAsteroid.y += tmpAsteroid.vY;
						
			//摩擦
			if (Math.abs(tmpAsteroid.vX) > 0.1) {
				tmpAsteroid.vX *= tmpAsteroid.friction;
			} else {
				tmpAsteroid.vX = 0;
			}
			
			if (Math.abs(tmpAsteroid.vY) > 0.1) {
				tmpAsteroid.vY *= tmpAsteroid.friction;
			} else {
				tmpAsteroid.vY = 0;
			}

			context.beginPath();
			context.arc(tmpAsteroid.x, tmpAsteroid.y, tmpAsteroid.radius, 0, Math.PI*2, true);
			context.closePath();
			context.fill();
		}

		if (playGame) {
			//33ミリ秒後に再びアニメーションを実行する
			setTimeout(animate, 33);
		}
	}
	init();
});