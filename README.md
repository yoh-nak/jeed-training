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

1つの講座が終了すると、次の講座に受け継がれますので、
授業終了時点とは内容が変わっている可能性があります。

講師業を撤退する時がきたら、このソースは
更新されないかもしれませんのでご了承ください。

サイト構築時には、Haml、Sass、CoffeeScriptをコンパイルして生成した箇所がありますが、herokuのサーバーで動いているもののみpushしてあります。

	http://jeed-training.herokuapp.com/

また、node_moduleのディレクトリは、pushしてありませんので、設置後、

	npm install

コマンドで、モジュールを追加してから、

	node app.js

	#拡張子を省略可
	node app

コマンドで、サーバーを起動し、

	http://localhost:3000

で、ブラウザからアクセスしてください。npmのhotnodeをローカルのグローバルモジュールに組み込んでおくと便利です。

	#windows
	npm install -g hotnode

	#mac
	$ sudo npm install -g hotnode

hotnodeを使用してサーバーを起動すると、ソースの修正後、サーバーの再起動を自動的に行なってくれます。サーバーの起動コマンドは以下のようになります。

	hotnode app.js

	#拡張子を省略可
	hotnode app


