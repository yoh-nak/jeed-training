/**
 * get Photo from Twitpic
 * 
 * @copyright	keisuke YAMAMOTO <keisukey@ranadesign.com>
 * @author		keisuke YAMAMOTO <keisukey@ranadesign.com>
 * @link		http://kaelab.ranadesign.com/
 * @version		0.02
 * @since		Mar 02, 2011
 */
/************
●Twitpic APIについて
公式ドキュメント(英語)
http://dev.twitpic.com/docs/
*************/

/**
 * STEP 2
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
		max: 5  // 表示枚数を最新の5枚に設定。20枚まで設定可能です。
	}

	/**
	 * Twitpicからデータ取得
	 */
	getTwitpic = function() {
		var photo = $(".photo"),
			url = twitpic.url + "?username=" + twitpic.user;
			
		$.getJSON(url + "&callback=?", function(data) {
			// Imageオブジェクト格納用
			var _checkimg;

			for (var i = 0, len = data.images.length; i < len && i < twitpic.max; i++) {
				var box = $("<div>", { "class": "box" }),
					img = new Image(),
					msg = $("<p>", { "class": "msg" });	// メッセージ格納用
				img.src = twitpic.thumb + data.images[i].short_id;
				msg.text(data.images[i].message);		// メッセージを格納
				box.append(img, msg).prependTo(photo);	// boxにimgとmsgを格納し、それをモジュールパーツの先頭に追加
				_checkimg = img;  // Imageオブジェクトを格納
			}
			// Imageオブジェクトのcompleteプロパティで画像が取得できたかを判断する。
			setTimeout(function() {
				if (_checkimg.complete) {
					photo.fadeIn(500, fadePhoto);
				} else {
					setTimeout(arguments.callee, 100);
				}
			}, 100);
		});
	};
	
	/**
	 * 取得したデータをフェード表示(ループ)
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

