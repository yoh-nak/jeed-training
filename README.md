WEB・スマホ・アプリ開発科
============================

講師
----------------
ナカノヨウスケ


概要
----------------
授業で使用中のWEBサイトのソースコードです。環境は以下のようになっています。

	#サーバーサイド言語
	node.js

	#フレームワーク
	Express

	#npmモジュール
	Express
	Ejs
	Jade
	coffee-script
	less

1つの講座が終了すると、次の講座に受け継がれますので、
授業終了時点とは内容が変わっている可能性があります。

講師業を撤退する時がきたら、このソースは
更新されないかもしれませんのでご了承ください。

サイトのURL:

	http://jeed-training.herokuapp.com/

また、node_moduleのディレクトリは、pushしてありませんので、ソースをcloneしたら後、app.jsのディレクトリで以下のコマンドを実行しnode_moduleをダウンロードして下さい。

	npm install

モジュールが組み込まれたら、以下のコマンドでサーバーを起動します。

	node app.js

	#拡張子を省略可
	node app

サーバーが起動したら、ブラウザで以下のアドレスにアクセスします。

	http://localhost:3000

Tips:

npmのhotnodeをローカルのグローバルモジュールに組み込んでおくと便利です。

	#windows
	npm install -g hotnode

	#mac
	$ sudo npm install -g hotnode

hotnodeを使用してサーバーを起動すると、ソースの修正後、サーバーの再起動を自動的に行なってくれます。サーバーの起動コマンドは以下のようになります。

	hotnode app.js

	#拡張子を省略可
	hotnode app


