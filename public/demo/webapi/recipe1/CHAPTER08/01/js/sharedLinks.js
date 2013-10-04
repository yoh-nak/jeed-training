(function($){
//Facebook JavaScript APIの読み込み完了後にロードされるコールバック
window.fbAsyncInit = function() {
	
	//初期化
	FB.init({
		appId:'＜取得した「アプリID」を指定して下さい＞'
	});
	
	//ブックマーク表示部をアペンド
	$('body')
		.append(
			'<div id="FBSharedLinks">' + 
				'<p id="FBSharedIntro">' +
					'Facebookでログインすると、ここにあなただけのブックマークが現れます。<br>' +
					'ブックマークしたアドレスはあなたのウォールで友達と共有されます。' +
				'</p>' +
				'<ul id="FBSharedLinksList"></ul>' +
				'<div id="FBSharedLinksFooter"><button type="button" id="FBSharedLogin">Login with Facebook</button></div>' +
			'</div>'
		);
	
	//ログイン状態の取得
	FB.getLoginStatus(function(response) {

		if (response.session)
		{
			//ログイン状態ならリンク表示	
			getLinks();
		}
		else
		{
			//非ログインならログインボタンを設定
			$('#FBSharedLogin')
				.click(function(){
					FB.login(function(response){
						if (response.session) {
							getLinks();
						}
						else
						{
							//ログイン失敗の処理
							loginFailed();
						}
					},
					{
						perms : 'read_stream,publish_stream' 
					});
			});
	
		}
	});
	
	//共有されたリンクを取得する
	var getLinks = function()
	{
		$('#FBSharedLogin').remove();
		$('#FBSharedIntro').remove();
		
		//FQLクエリの組み立て
		var query = FB.Data.query('SELECT title,url FROM link WHERE owner = me() AND strpos(url, "＜ックマークを管理したいURL＞") > 0');
		
		//クエリの発行と処理後のコールバック
		query.wait(function(rows){
			
			var shared = false;
			for(i=0;i<rows.length;i++)
			{
				var title = rows[i].title,
					url = rows[i].url;
				
				if(!shared) shared = (url == location.href);
				
				$('#FBSharedLinksList').append('<li><a href="' + url + '" title="' + url + '">' + title + '</a></li>');
				
			}
			
			if(shared)
			{
				$('#FBSharedLinksFooter').append('<p>共有済みのページです</p>');
			}
			else
			{
				$('#FBSharedLinksFooter').append('<button type="button" id="Set" title="Facebookでこのページを共有します。クリックするとウォールに投稿されます。">このページを共有</button>').click(setLinks);
			}
		});
	}
	
	//リンクを共有する
	var setLinks = function()
	{
		var url = location.href;
		var title = $('title').text();
		
		//共有リンク情報のウォールへのポスト
		FB.api('me/links','POST',{
			link:url
			},
			function(response)
			{
		  		if (!response || response.error) {
					alert('エラーが発ししました。');
		  	} else {
			
				$('#FBSharedLinksList').append('<li><a href="' + url + '" title="' + url + '">' + title + '</a></li>');
				$('#FBSharedLinksFooter').html('<p>このページを共有しました！</p>');
			
		  	}
		});
	};
	
	//ログイン失敗
	var loginFailed = function()
	{
		$('#FBSharedLogin').remove();
		$('#FBSharedIntro').text('ログイン処理に失敗しました。');
	}
	
};
$(function(){
	//フェイスブック用のルートdivとライブラリの読み込み
	$('body')
		.prepend(
			'<div id="fb-root">' + 
				'<script type="text/javascript" src="' + document.location.protocol + '//connect.facebook.net/ja_JP/all.js" async="async" ></script>' +
			'</div>'
		);
});
})(jQuery);