<?php
require_once "common.php";
global $pape_policy_uris;
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ja" xml:lang="ja">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>OpenID で mixi 認証</title>
    <style type="text/css">
    </style>
  </head>
  <body>
    <h1>OpenID で mixi 認証</h1>
    <hr/>
    <?php if (isset($openid)) {
      print $nickname . " さん こんにちは<br/>";
      print "あなたの OpenID は ".$openid." です";
    } else { ?>
    <!-- ミクシィ認証を利用する為のリンクを設置する -->
    <a href="auth.php?openid_identifier=https://mixi.jp">
      <img src="http://developer.mixi.co.jp/wp-content/uploads/2010/01/login_btn002.gif">
    </a>
    <?php }?>
    <div>
      <?php if (isset($error)) { print "<div class=\"error\">$error</div>"; } ?>
    </div>
    
  </body>
</html>
