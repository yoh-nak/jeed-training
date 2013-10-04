<?php
require 'func.php';

$result = null;
$keyword = '';
if (isset($_GET['keyword'])) {
    $keyword = $_GET['keyword'];
    $url = get_url('ItemSearch',
                   array('SearchIndex' => 'All',
                         'keywords'    => $keyword));
    $result = request($url);
}
?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ja" xml:lang="ja">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>関連商品を検索してみよう</title>
    <style text="text/css">
      table { border: 1px solid gray; border-collapse: collapse; margin: 15px; float: left; }
      table th, table td { border: 1px solid gray; text-align: center; padding: 5px; }
      .result { width: 250px; }
    </style>
  </head>

  <body style="text-align: center;">
    <p>関連商品を検索してみよう</p>
    <p>キーワードを入力して、ボタンをクリックしてください</p>
    <form name="search" action="amazon2.php" class="search">
      <input type="text" name="keyword" id="keyword" value="<?php echo $keyword ?>" size="60">
      <br>
      <input type="submit" id="search" value="検索する">
    </form>
    <?php if ($result): ?>
      <?php foreach ($result->Items->Item as $item): ?>
      <table class="result">
      <tr>
        <td>タイトル</td>
        <td>
         <a href="<?php echo $item->DetailPageURL ?>" target="_blank">
           <?php echo $item->ItemAttributes->Title ?>
         </a>
       </td>
      </tr>
      <tr>
        <td>ASIN</td>
        <td>
          <a href="amazon2.php?itemid=<?php echo $item->ASIN ?>">
            <?php echo $item->ASIN ?>
          </a>
        </td>
      </tr>
      <tr>
         <td>商品イメージ</td>
         <td>
           <img src="<?php echo $item->MediumImage->URL ?>">
         </td>
      </tr>
      <tr>
         <td>価格</td>
         <td><?php echo $item->ItemAttributes->ListPrice->FormattedPrice ?></td>
      </tr>
      </table>
      <?php endforeach; ?>
    <?php endif; ?>
  </body>
</html>
