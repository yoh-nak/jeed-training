<?php
// RFC3986 形式で URL エンコードする関数
function urlencode_rfc3986($str) {
    return str_replace('%7E', '~', rawurlencode($str));
}

function get_url($operation, $params = array()) {
    $access_key_id = '取得したアクセスキーを指定して下さい';
    $secret_access_key = '取得したシークレットキーを指定して下さい';
    $associate_tag = '取得したアソシエイトタグを指定して下さい';

    // 基本的なリクエストを作成します
    $baseurl = 'http://ecs.amazonaws.jp/onca/xml';
    $params['Service']        = 'AWSECommerceService';
    $params['AWSAccessKeyId'] = $access_key_id;
    $params['Version']        = '2010-09-01';
    $params['Operation']      = $operation;
    $params['AssociateTag']   = $associate_tag;
    $params['ResponseGroup']  = 'Large';

    // Timestamp パラメータを追加します
    // - 時間の表記は ISO8601 形式、タイムゾーンは UTC(GMT)
    $params['Timestamp'] = gmdate('Y-m-d\TH:i:s\Z');

    // パラメータの順序を昇順に並び替えます
    ksort($params);

    // canonical string を作成します
    $canonical_string = '';
    foreach ($params as $k => $v) {
        $canonical_string .= '&'.urlencode_rfc3986($k).'='.urlencode_rfc3986($v);
    }
    $canonical_string = substr($canonical_string, 1);

    // 署名を作成します
    // - 規定の文字列フォーマットを作成
    // - HMAC-SHA256 を計算
    // - BASE64 エンコード
    $parsed_url = parse_url($baseurl);
    $string_to_sign = "GET\n{$parsed_url['host']}\n{$parsed_url['path']}\n{$canonical_string}";
    $signature = base64_encode(hash_hmac('sha256', $string_to_sign, $secret_access_key, true));

    // リクエスト先のURL を作成します
    // - リクエストの末尾に署名を追加
    $url = $baseurl.'?'.$canonical_string.'&Signature='.urlencode_rfc3986($signature);
    return $url;
}

function request($url)
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
    $response = curl_exec($ch);
    curl_close($ch);
    return simplexml_load_string($response);
}
?>