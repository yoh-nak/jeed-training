<?php
require_once('HTTP/OAuth/Consumer.php');

session_start();

$consumer_key = '＜取得した「Consumer key」を指定して下さい＞';
$consumer_secret = '＜取得した「Consumer secret」を指定してください＞';
$oauth = new HTTP_OAuth_Consumer($consumer_key, $consumer_secret);

$http_request = new HTTP_Request2();
$http_request->setConfig('ssl_verify_peer', false);
$consumer_request = new HTTP_OAuth_Consumer_Request;
$consumer_request->accept($http_request);

$oauth->accept($consumer_request);

$oauth_verifier = $_GET['oauth_verifier'];
$oauth->setToken($_SESSION['oauth_request_token']);
$oauth->setTokenSecret($_SESSION['oauth_request_token_secret']);
$oauth->getAccessToken('https://twitter.com/oauth/access_token', $oauth_verifier);
$_SESSION['oauth_access_token'] = $oauth->getToken();
$_SESSION['oauth_access_token_secret'] = $oauth->getTokenSecret();
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ja" xml:lang="ja">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>ツイートしてみよう！</title>
    <style text="text/css">
      table { border: 1px solid gray; border-collapse: collapse; margin: 15px; float: left; }
      table th, table td { border: 1px solid gray; text-align: center; padding: 5px; }
      .result { width: 250px; }
    </style>
  </head>

  <body style="text-align: center;">
    <p>認証しました。さっそく、<a href="twitter3_test.php">ここからツイートしてみましょう。</a></p>
  </body>
</html>

