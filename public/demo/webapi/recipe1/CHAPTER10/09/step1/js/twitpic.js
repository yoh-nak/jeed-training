/**
 * get Photo from Twitpic
 * 
 * @copyright	keisuke YAMAMOTO <keisukey@ranadesign.com>
 * @author		keisuke YAMAMOTO <keisukey@ranadesign.com>
 * @link		http://kaelab.ranadesign.com/
 * @version		0.01
 * @since		Mar 02, 2011
 */
/************
●Twitpic APIについて
公式ドキュメント(英語)
http://dev.twitpic.com/docs/
*************/

/**
 * STEP 1
 */
(function($) {

	/**
	 * 設定
	 */
	var twitpic = {
		// APIのパス
		url: "http://api.twitpic.com/2/users/show.jsonp",
		// 画像表示用のパス
		thumb: "http://twitpic.com/show/thumb/",
		// ユーザ名
		user: "keiskey",
		// 取得する最大枚数。20枚まで設定可能です。
		max: 5
	}

	/**
	 * Twitpicからデータ取得
	 */
	getTwitpic = function() {
		var photo = $(".photo"),
			// パラメータ設定
			url = twitpic.url + "?username=" + twitpic.user;
			
		$.getJSON(url + "&callback=?", function(data) {
			// 取得した画像数が設定した枚数を超えるまでループ。最大枚数に足りない場合はその枚数分だけループ。
			for (var i = 0, len = data.images.length; i < len && i < twitpic.max; i++) {
				// 画像を格納する要素の生成
				var box = $("<div>", { "class": "box" }),
					img = new Image();
				// img要素のsrc属性に、画像IDを付加した"image Thumbnails"のURLを設定
				img.src = twitpic.thumb + data.images[i].short_id;
				// div要素にimg要素を格納し、それをモジュールパーツの先頭に追加する
				box.append(img).prependTo(photo);
			}
			// 画像の読み込みを待つため、3秒待ってからフェード開始
			setTimeout(fadePhoto, 3000);
		});
	};
	
	/**
	 * 取得したデータをフェード表示(ループ)
	 * 最後の要素(一番手前に表示されている要素)をfadeToメソッドで透過させ、
	 * 不透明度が0になったら、prependToメソッドで最初へ移動させることで手前から奥に移動させます。
	 * 3秒待って再度関数を実行させます。この繰り返しでループを実現していきます。
	 */
	fadePhoto = function() {
		var photo = $(".photo"),
			last = photo.children(".box").last();

		last.fadeTo(2000, 0, function() {
			last.prependTo(photo).css("opacity", 1);
			setTimeout(fadePhoto, 3000);
		});

	};
	
	/**
	 * 実行
	 */
	$(function() {
		getTwitpic();
	});

})(jQuery);

/************
戻り値の例
*************/
/* 抜粋
{
	username: twitterアカウント
	name: twitterでの表示名
	photo_count: 画像総数
	images: [
		{
			id: 画像ID
			short_id: 画像ID(短縮版)
			user_id: ユーザID
			source: 投稿元(メール投稿の場合は"site"扱い)
			message: メッセージ(メール投稿の場合は件名)
			width: 画像幅
			height: 画像高さ
			size: 画像サイズ
			type: 画像種類
			timestamp: 投稿日
		},
		// 2枚目以降の情報
	]
	places: null
}
*/
