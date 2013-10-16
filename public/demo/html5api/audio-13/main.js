//***********************************************//
//初期設定
//***********************************************//

//オーディオのパスを配列に用意
var bgms = ['bgm1.mp3','bgm1.ogg','bgm2.mp3','bgm2.ogg'];
var ses = ['se1.mp3','se1.ogg','se2.mp3','se2.ogg','se3.mp3','se3.ogg'];

//SoundClassのインスタンス化
var sound = new SoundClass(bgms, ses);
sound.preload();

//BGMセット
bgmArray = sound.setBgm();

//BGMのON/OFF切り替え
sound.bgmFlg = true;

//ボリューム初期設定
sound.volumeFlg = 0.8;

//***********************************************//
//jQuery MObileページ遷移イベント
//***********************************************//

//ページ表示
$(document).on('pageshow','#index',function(){
	//BGMセット
	if(sound.bgmFlg == true){
		//sound.playBgm(sound.bgmObjs[0]);
		sound.playBgm(bgmArray[0]);
		$('#bgm1').val('on').slider('refresh');
	}
	else{
		$('#bgm1').val('off').slider('refresh');
	}

	//ボリュームセット
	sound.setVolume(sound.volumeFlg);
	$('#volume1').val(sound.volumeFlg).slider('refresh');

	$('.volume').on('change',function(){
		sound.setVolume($(this).val());
		sound.volumeFlg = parseFloat($(this).val());
	});

	$('.se').on('vclick',function(){
		sound.playSe($(this).attr('class'));
	});

	$('#bgm1').on('change',function(){
		if($('#bgm1').val() == 'on'){
			//sound.playBgm(sound.bgmObjs[0]);
			sound.playBgm(bgmArray[0]);
			sound.bgmFlg = true;
		}
		else{
			sound.bgmObjs[0].pause();
			sound.bgmFlg = false;
		}
	});
});
$(document).on('pageshow','#second',function(){
	if(sound.bgmFlg == true){
		//sound.playBgm(sound.bgmObjs[2]);
		sound.playBgm(bgmArray[1]);
		$('#bgm2').val('on').slider('refresh');
	}
	else{
		$('#bgm2').val('off').slider('refresh');
	}

	//ボリュームセット
	sound.setVolume(sound.volumeFlg);
	$('#volume2').val(sound.volumeFlg).slider('refresh');

	$('.volume').on('change',function(){
		sound.setVolume($(this).val());
		sound.volumeFlg = parseFloat($(this).val());
	});

	$('.se').on('vclick',function(){
		sound.playSe($(this).attr('class'));
	});

	$('#bgm2').on('change',function(){
		if($('#bgm2').val() == 'on'){
			//sound.playBgm(sound.bgmObjs[2]);
			sound.playBgm(bgmArray[1]);
			sound.bgmFlg = true;
		}
		else{
			sound.bgmObjs[2].pause();
			sound.bgmFlg = false;
		}
	});
});

//ページ非表示
$(document).on('pagebeforehide','#index',function(){
	sound.bgmObjs[0].pause();
	sound.bgmObjs[0].currentTime = 0;
});
$(document).on('pagebeforehide','#second',function(){
	sound.bgmObjs[2].pause();
	sound.bgmObjs[2].currentTime = 0;
});