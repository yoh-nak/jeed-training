<?php

require_once "common.php";
session_start();

function getOpenIDIdentifier() {
  if (empty($_GET['openid_identifier'])) {
    displayErrorAndExit("OpenID URL が指定されていません。");
  }
  return $_GET['openid_identifier'];
}

function executeAuthRequest() {
  
  // RP(Consumer)オブジェクトを作成し、
  // 指定されたパラメータでOpenIDの処理が可能かどうかを検証します。
  $consumer = getConsumer();
  $openid = getOpenIDIdentifier();
  $openid_request = $consumer->begin($openid);
  if (!$openid_request) {
    displayErrorAndExit("指定されたOpenIDは有効ではありません。 : ".$openid);
  }
  
  // AX(Attribute Exchange)拡張を使って、ニックネームを取得します
  $ax_request = new Auth_OpenID_AX_FetchRequest();
  $ax_request->add(Auth_OpenID_AX_AttrInfo::make(
    'http://axschema.org/namePerson/friendly',
    1,
    1,
    'friendly'));
  $openid_request->addExtension($ax_request);
  
  // OP(Server)に認証リクエストを送ります。
  if ($openid_request->shouldSendRedirect()) {
    $redirect_url = $openid_request->redirectURL(getTrustRoot(),getReturnTo());
    if (Auth_OpenID::isFailure($redirect_url)) {
      displayErrorAndExit("サーバにリダイレクトできません。");
    }
    header("Location: ".$redirect_url);
  } else {
    $form_html = $openid_request->htmlMarkup(getTrustRoot(), getReturnTo(), false, array('id' => 'openid_form'));
    if (Auth_OpenID::isFailure($form_html)) {
      displayErrorAndExit("サーバにリダイレクトできません。");
    }
    print $form_html;
  }
}

// OpenID 認証リクエストを実行します。
executeAuthRequest();

?>