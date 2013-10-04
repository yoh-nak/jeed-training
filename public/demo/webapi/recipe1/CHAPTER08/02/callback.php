<?php
//セション開始
session_start();
//ライブラリと設定の読み込み
require_once('twitteroauth/twitteroauth.php');
require_once('config.php');

//Twitterから渡されたトークンとセッションに保持されているトークンを比較
if (isset($_REQUEST['oauth_token']) && $_SESSION['oauth_token'] !== $_REQUEST['oauth_token']) {
	//違う場合はセッションを初期化してトップページへ
	session_destroy();
	$_SESSION['status'] = 'token_error';
	header('Location: ./');
	exit();
}

//TwitterOAuthインスタンスの生成
$connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, $_SESSION['oauth_token'], $_SESSION['oauth_token_secret']);

//アクセストークンの取得
$access_token = $connection->getAccessToken($_REQUEST['oauth_verifier']);

//セッションにアクセストークンの保存
$_SESSION['access_token'] = $access_token;

//リクエストトークンの破棄
unset($_SESSION['oauth_token']);
unset($_SESSION['oauth_token_secret']);

//ステータスコードで成否判定
$_SESSION['status_code'] = $connection->http_code;
if ($_SESSION['status_code'] == 200)
{
	$_SESSION['status'] = 'verified';
}
else
{
	$_SESSION['status'] = 'status_error';
	session_destroy();
}
header('Location: ./');
exit();