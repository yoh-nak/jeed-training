<?php
//セッションの開始
session_start();
//TwitterOauthの読み込み
require_once('twitteroauth/twitteroauth.php');
require_once('config.php');

//セッションにアクセストークンが保存されているかチェック
if (empty($_SESSION['access_token']) || empty($_SESSION['access_token']['oauth_token']) || empty($_SESSION['access_token']['oauth_token_secret']))
{
	$_SESSION['status'] = 'token_empty';
	$hasToken = false;
	session_destroy();
}
else
{
	$hasToken = true;
}
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Twit Campaign Manager</title>
<link rel="stylesheet" type="text/css" href="./style/main.css" media="all">
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.0/jquery.min.js"></script>
<?php if($hasToken): ?>
<script type="text/javascript" src="./js/core.js"></script>
<?php endif; ?>
</head>
<body>
<?php if($hasToken): ?>
<div id="Header">
	<div id="Logo">
		<p><img src="./images/Logo.png" alt="Twit Campaign Manager"></p>
	</div>
	<div id="AccountInfo">
		<p id="Account"></p>
		<p id="Logout"><a href="logout.php"><img src="./images/Logout.png" alt="Logout from Manager"></a></p>
	</div>
</div>
<div id="Main">
	<div id="PanelCheckTweet">
		<form id="FormCheckTweet" action="">
			<dl>
				<dt>ハッシュタグ</dt>
				<dd>
					<input type="checkbox" id="UseHashtag">
					#<input type="text" id="Hashtag" maxlength="140" size="35" class="Hashtags">
				</dd>
				<dt>キャンペーン開始日時</dt>
				<dd>
					<input type="checkbox" id="UseStartDate">
					<input type="text" id="StartYear" value="2011" maxlength="4" size="4">年
					<input type="text" id="StartMonth" value="1" maxlength="2" size="2">月
					<input type="text" id="StartDate" value="1" maxlength="2" size="2">日
					<input type="text" id="StartHours" value="0" maxlength="2" size="2">時
					<input type="text" id="StartMinutes" value="0" maxlength="2" size="2">分
					<input type="text" id="StartSeconds" value="0" maxlength="2" size="2">秒
				</dd>
				<dt>キャンペーン終了日時</dt>
				<dd>
					<input type="checkbox" id="UseEndDate">
					<input type="text" id="EndYear" value="2011" maxlength="4" size="4">年
					<input type="text" id="EndMonth" value="1" maxlength="2" size="2">月
					<input type="text" id="EndDate" value="31" maxlength="2" size="2">日
					<input type="text" id="EndHours" value="23" maxlength="2" size="2">時
					<input type="text" id="EndMinutes" value="59" maxlength="2" size="2">分
					<input type="text" id="EndSeconds" value="59" maxlength="2" size="2">秒
				</dd>
			</dl>
			<p>
				<input type="submit" id="CheckTweet" value="応募ツイートの確認">
			</p>
		</form>
	</div>
	<p id="Status"></p>
	<div id="PanelTweetList">
		<form id="FormTweetLot">
			<p><input type="text" id="LotNum" value="1" size="4">人<input type="submit" id="LotSubmit" value="抽選する"></p>
		</form>
		<ul id="TweetList">
		</ul>
	</div>
</div>
<?php else: ?>
<div id="Header">
	<div id="Logo">
		<p><img src="./images/Logo.png" alt="Twit Campaign Manager"></p>
	</div>
	<div id="AccountInfo">
		<p id="Account"></p>
		<p id="Logout"></p>
	</div>
</div>
<div id="Main">
	<div id="PanelCheckTweet">
		<p>キャンペーンを行うアカウントで<a href="./redirect.php">ログイン</a></p>
	</div>
</div>
<?php endif; ?>
</body>
</html>
