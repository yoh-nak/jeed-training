<?php
//セッション消去
session_start();
session_destroy();
 
//インデックスへ
header('Location: ./index.php');
