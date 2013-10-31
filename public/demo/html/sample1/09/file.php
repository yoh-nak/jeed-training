<!DOCTYPE html> 
<html lang="ja">
<head> 
<meta charset="UTF-8"> 
<title>SAMPLE QUERY</title>
<meta name="viewport" content="width=600">
<link rel="stylesheet" href="img/style-compact.css">
<style>
article img	{max-width: 100%;
	width: auto;}
</style>
</head>
<body>

<article>

<h1>UPLOADED FILE</h1>

<?php move_uploaded_file(
	$_FILES["myfile"]["tmp_name"], 
	"upload/" . $_FILES["myfile"]["name"]
); ?>

<p>
<img src="upload/<?php echo $_FILES["myfile"]["name"]; ?>"><br>
<?php echo $_FILES["myfile"]["name"]; ?>
をアップロードしました。
</p>

</article>

</body>
</html>
