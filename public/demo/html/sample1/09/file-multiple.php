<!DOCTYPE html> 
<html lang="ja">
<head> 
<meta charset="UTF-8"> 
<title>SAMPLE QUERY</title>
<meta name="viewport" content="width=600">
<link rel="stylesheet" href="img/style.css">

<style>
article img	{max-width: 100%;
	width: auto;}
</style>
</head>
<body>

<article>

<h1>UPLOADED FILES</h1>

<?php $filenum = count($_FILES["myfile"]["tmp_name"]);
for($i=0; $i<$filenum; $i++): ?>

<?php move_uploaded_file(
	$_FILES["myfile"]["tmp_name"][$i], 
	"upload/" . $_FILES["myfile"]["name"][$i]
); ?>

<p>
<img src="upload/<?php echo $_FILES["myfile"]["name"][$i]; ?>"><br>
<?php echo $_FILES["myfile"]["name"][$i]; ?>
をアップロードしました。
</p>

<?php endfor; ?>



</article>

</body>
</html>
