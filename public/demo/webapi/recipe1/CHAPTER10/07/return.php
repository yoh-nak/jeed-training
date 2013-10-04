<?php

require_once "common.php";
session_start();

function executeAuthComplete() {
  
  // OP(Server)での認証結果を処理します。
  // 認証をキャンセルまたは認証に失敗している場合はメッセージを表示し処理を中断します。
  $consumer = getConsumer();
  $return_to = getReturnTo();
  $openid_response = $consumer->complete($return_to);
  $message = null;
  switch ($openid_response->status) {
    case Auth_OpenID_CANCEL:  $message = "キャンセルされました。"; break;
    case Auth_OpenID_FAILURE: $message = "失敗しました。"; break;
    case Auth_OpenID_SUCCESS: $message = null; break;
  }
  if($message){
    displayErrorAndExit($message);
  }
  
  // OpenID(DisplayIdentifier) と取得します。
  $openid = $openid_response->getDisplayIdentifier();
  
  // AX(Attribute Exchange)でニックネームを取得します。
  $ax_response = Auth_OpenID_AX_FetchResponse::fromSuccessResponse($openid_response);
  if (!$ax_response && ($ax_response instanceof Auth_OpenID_AX_Error)) {
    displayErrorAndExit("ニックネームが取得できませんでした。");
  }
  $ax_data = $ax_response->get('http://axschema.org/namePerson/friendly');
  if(!is_object($ax_data)) {
    $nickname = $ax_data[0];
  }
  
  include 'index.php';
}

executeAuthComplete();

?>