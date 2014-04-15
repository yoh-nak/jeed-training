//***********************************************//
//SoundClassの定義
//***********************************************//

//プロパティ定義
var SoundClass = function(bgms, ses){
    //オーディオのパスを格納
    this.bgms = bgms; this.ses = ses;

    //オーディオオブジェクト用の配列を宣言
    this.bgmObjs = []; this.seObjs = [];

    //フラグ
    this.bgmFlg = true; //BGMのON/OFF切り替え（初期設定ON）
    this.volumeFlg = 0.8; //ボリューム（初期設定0.8）

    //MIME設定（初期設定mp3）
    this.mime = 'mp3';
};

//メソッド定義
SoundClass.prototype = {
    preload: function(){
        //オーディオオブジェクトを配列に格納
        for(var i = 0; i < bgms.length; i++){
            this.bgmObjs[i] = new Audio(this.bgms[i]);
        }
        for(var i = 0; i < ses.length; i++){
            this.seObjs[i] = new Audio(this.ses[i]);
        }

        //MIMEチェック（mp3非対応のときoggを使用）
        if(!this.bgmObjs[0].canPlayType('audio/mp3')){
            this.mime = 'ogg';
        }
    },
    playSe: function(cls){
        if(cls.match(/se1/)){
            this.mime == 'mp3' ? this.seObjs[0].play() : this.seObjs[1].play();
        }
        if(cls.match(/se2/)){
            //this.seObjs[2].play();
            this.mime == 'mp3' ? this.seObjs[2].play() : this.seObjs[3].play();
        }    
        if(cls.match(/se3/)){
            //this.seObjs[4].play();
            this.mime == 'mp3' ? this.seObjs[4].play() : this.seObjs[5].play();
        }    
    },
    playBgm: function(audioObj){
        audioObj.play();
        audioObj.addEventListener("ended", function(){
            audioObj.play();
        });
    },
    setBgm: function(){
        var bgmArray = new Array(2);
        bgmArray[0] = this.mime == 'mp3' ? this.bgmObjs[0] : this.bgmObjs[1];
        bgmArray[1] = this.mime == 'mp3' ? this.bgmObjs[2] : this.bgmObjs[3];
        return bgmArray;
    },
    setVolume: function(vol){
        for(var i = 0; i < this.bgmObjs.length; i++){
            this.bgmObjs[i].volume = parseFloat(vol);
        }
        for(var i = 0; i < this.seObjs.length; i++){
            this.seObjs[i].volume = parseFloat(vol);        
        }
        sound.volumeFlg = parseFloat(vol);
    }
}