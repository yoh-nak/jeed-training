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

$result = '';
if (isset($_GET['tweet'])) {
    $oauth->setToken($_SESSION['oauth_access_token']);
    $oauth->setTokenSecret($_SESSION['oauth_access_token_secret']);
    $status = $_GET['text'];
    $result = $oauth->sendRequest("http://api.twitter.com/1/statuses/update.xml",
                                  array('status' => $status), "POST");
}
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
    <p>ツイートを入力して、ボタンをクリックしてください</p>
    <form action="twitter3_test.php" class="tweet">
      <input type="text" name="text" value="" size="60">
      <br>
      <input type="submit" name="tweet" value="ツイートする">
    </form>

   <?php if ($result): ?>
     <p>ツイート結果</p>
     <?php echo htmlspecialchars($result->getBody()); ?>
   <?php endif; ?>
  </body>
</html>

