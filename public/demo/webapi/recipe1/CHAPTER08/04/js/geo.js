/**
 * Twitter Search API x Google Geocoding API
 * 
 * @copyright	keisuke YAMAMOTO <keisukey@ranadesign.com>
 * @author		keisuke YAMAMOTO <keisukey@ranadesign.com>
 * @link		http://kaelab.ranadesign.com/
 * @version 	1.04
 * @since		Feb 17, 2011
 * @update		Mar 08, 2011
 */
/************
Google Maps JavaScript API V3 リファレンス
http://code.google.com/intl/ja/apis/maps/documentation/javascript/reference.html
*************/
(function($) {
	/**
	 * 設定
	 */
	var geo = {
		twitter: "http://search.twitter.com/search.json",
		lat: 35.659068, 	// 緯度
		lng: 139.700668,	// 経度
		rad: 3, 			// 半径(km)
		addr: "渋谷駅", 	// 表示されている住所・施設名
		timerGetTweet: 0,	// getTweet関数のループを止めるためのタイマーID格納用
		google: new google.maps.Geocoder()	// このgeo.googleを通じてMaps APIを利用します。
	};
	
	/**
	 * 実行
	 */
	$(function() {

		getTweet();
		slideTweet();

		$("#area-tweets").hover(function() {
			$(this).find("p").first().stop();
		}, function() {
			slideTweet();
		});

		// form要素のsubmit時
		$("#twitterModule .area-input").submit(function() {
			getAddress();
			// sumitiイベントのデフォルト動作(action属性への遷移。この場合は同じページの再読込)をキャンセルし、リロードしないようにします。
			return false;
		});
		// input要素のblur時
		$("#twitterModule input").blur(function() {
			getAddress();
		});
	});

	/**
	 * 入力
	 */
	function getAddress() {
	//	var value = $("#twitterModule input").attr("value");
		var value = $("#twitterModule input").val();
		
		// 表示内容と入力内容の間に変更がなかった場合は何もしません。
		if (geo.addr === value) { return false; }
		// 入力内容を表示内容として保存します。
		geo.addr = value;
		// getGeocode関数を実行します。
		getGeocode();
	}

	/**
	 * 取得(位置情報)
	 */
	function getGeocode() {
		if (!geo.google) {
			return false;
		}
		
		geo.google.geocode({ "address": geo.addr }, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				geo.lat = results[0].geometry.location.lat();
				geo.lng = results[0].geometry.location.lng();
			}
			// すでに登録されたツイートを削除するためresetTweetを実行します。
			resetTweet();
			// getTweetは30秒ごとに実行するようになっていますので、タイマーIDを使って、いったんそのタイマーを中断します。
			clearTimeout(geo.timerGetTweet);
			// 新たにgetTweetを実行します。
			getTweet();
		});
	}

	/**
	 * 消去
	 */
	function resetTweet() {
		var mod = $("#twitterModule"),
			// ツイートエリアの高さを取得します。
			// モジュールの高さ - タイトルエリアの高さ - インプットエリアの高さ
			areaHeight = mod.height() - mod.children(".title").height() - mod.children(".area-input").height();
			h = 0,		// ツイートブロックの高さ集計用
			index = 0;	// 削除基点となるツイートブロックのインデックス番号用

		// eachメソッドでツイートブロック(p)の高さを順に加算して、ツイートエリアの高さを越えた時点で、そのインデックス番号を取得して終了する。
		$("#area-tweets p").each(function(i) {
			h += $(this).height();
			if (areaHeight < h) {
				index = i;
				return false;
			}
		});
		// nextAllメソッドとremoveメソッドでインデックス番号以降のツイートブロックを削除する。
		$("#area-tweets p").eq(index).nextAll().remove();
	}

	/**
	 * 取得(ツイート)
	 */
	function getTweet() {
		var area = $("#area-tweets"),
			// Twitter Search APIのURLにパラメータを付加する。
			url = geo.twitter + "?geocode=" + geo.lat + "," + geo.lng + "," + geo.rad + "km";

		$.getJSON(url + "&callback=?", function(data) {
			var results = data.results,
				p = $("<p>", { "class": "address" });	// 住所表示用

			// 住所を表示するブロックを追加する。
			p.text(geo.addr + " 周辺").appendTo(area);

			for (var i = results.length; i--; ) {
				var p = $("<p>"),
					user = $("<a>", { "class": "user", target: "_blank" }),
					date = $("<span>", { "class": "date" }),
					datetime = new Date(results[i].created_at); 

				user.text(results[i].from_user).attr("href", "http://twitter.com/" + results[i].from_user);
				date.text(
					datetime.getFullYear() + "/" + 
					(datetime.getMonth() + 1) + "/" + 
					datetime.getDate() + " " + 
					datetime.toLocaleTimeString()
				);
				results[i].text = results[i].text.replace(/(https?:\/\/[\-\/a-z0-9_~.#?&=%]+)/ig, "<a target='_blank' href='$1'>$1</a>");
				results[i].text = results[i].text.replace(/@([a-z0-9_]+)/ig, "<a class='reply' target='_blank' href='http://twitter.com/$1'>@$1</a>");

				p.append(user, date, "<br>", results[i].text).appendTo(area);
			}
			// 30秒後に再実行させます。
			// ループ中断用にタイマーIDを格納します。
			geo.timerGetTweet = setTimeout(getTweet, 30000);
		});
	}

	/**
	 * 表示
	 */
	function slideTweet() {
		var p = $("#area-tweets > p"), h = 0;

		if (!p.length) {
			setTimeout(slideTweet, 500);
			return false;
		}
		
		h = p.first().innerHeight();

		p.first().animate({
			marginTop: -h
		}, {
			duration: (h + Math.round(p.first().css("marginTop").slice(0, -2))) * 50,
			easing: "linear",
			complete: function() {
				$(this).remove();
				slideTweet();
			}
		});
	}

})(jQuery);
