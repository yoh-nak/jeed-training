<?php
session_start();
require_once('twitteroauth/twitteroauth.php');
require_once('config.php');

//ステータスコード
$header_status = array(
	'200' => 'HTTP/1.0 200 OK',
	'304' => 'HTTP/1.0 304 Not Modified',
	'400' => 'HTTP/1.0 400 Bad Request',
	'401' => 'HTTP/1.0 401 Unauthorized',
	'403' => 'HTTP/1.0 403 Forbidden',
	'404' => 'HTTP/1.0 404 Not Found',
	'406' => 'HTTP/1.0 406 Not Acceptable',
	'500' => 'HTTP/1.0 500 Internal Server Error',
	'502' => 'HTTP/1.0 502 Bad Gateway',
	'503' => 'HTTP/1.0 503 Service Unavailable'
);

/* If access tokens are not available redirect to connect page. */
if (empty($_SESSION['access_token']) || empty($_SESSION['access_token']['oauth_token']) || empty($_SESSION['access_token']['oauth_token_secret'])) {
	die('No access_token');
}
/* Get user access tokens out of the session. */
$access_token = $_SESSION['access_token'];

/* Create a TwitterOauth object with consumer/user tokens. */
$connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, $access_token['oauth_token'], $access_token['oauth_token_secret']);

//DISABLE decoding json to php-object
$connection->decode_json = false;

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
	$content = $connection->get($_GET['api'],$_GET['data']);
}
else if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	$content = $connection->post($_POST['api'],$_POST['data']);
}

//output json
header($header_status[$connection->http_code]);
header('Content-type: application/json');
echo $content;
