/**
 * 設定
 */
var setting = {
	tumblr: {
		user:'osscafe', //Tumblrのユーザ名
		max:3 //表示する投稿の数
	},
	facebook: {
		user:'shimokitazawa.osscafe', //Facebookのユーザ名
		id:'131130253626713', //FacebookのユーザID
		max:6 //表示する投稿の数
	},
	picasa: {
		user:'shimokitazawa.osscafe', //Picasaのユーザ名
		max:3, //表示する写真の数
		stopCount:15, //何回でスライドショーを止めるか
		width:600, //フレームの幅
		height:300 //フレームの高さ
	}
};

/**
 * Tumblr
 */
function loadTumblrFeed(){
	$.getJSON('http://'+setting.tumblr.user+'.tumblr.com/api/read/json?callback=?', function(json){
		var articles = json.posts, html = [], n = 0;
		for (var i = 0; i < articles.length && n < setting.tumblr.max; i++){
			var d = new Date(), dstr;
			d.setGMT(articles[i]['date-gmt']);
			dstr = d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate();
			switch (articles[i].type) {
				case 'regular'://テキスト
					var summary = articles[i]['regular-body'].match(/<p>.+<\/p>/); //第一段落をリードとして抜き出し
					html.push(
						'<div class="', articles[i].type, '">',
							'<h3><a href="', articles[i].url, '">', articles[i]['regular-title'], '</a></h3>',
							summary,
							'<p class="info"><a href="', articles[i].url, '">&raquo;記事を見る</a> - ', dstr, ' 掲載</p>',
						'</div>');
					break;
				case 'video'://ビデオなどの埋込コンテンツ
					html.push(
						'<div class="', articles[i].type, '">',
							articles[i]['video-caption'],
							'<p class="info"><a href="', articles[i].url, '">&raquo;記事を見る</a> - ', dstr, ' 掲載</p>',
						'</div>');
					break;
				default:
					continue;
			}
			n++
		}
		$('div.tumblr').html(html.join(''));
	});
}

/**
 * Facebook
 */
function loadFacebookFeed(){
	$.getJSON('http://graph.facebook.com/'+setting.facebook.user+'/feed?date_format=U&callback=?', function(json){
		var articles = json.data, html = [], n = 0, md = '', tmd = '';
		for (var i = 0; i < articles.length && n < setting.facebook.max; i++){
			if (articles[i].from.id == setting.facebook.id){
				var d = new Date();
				d.setTime(articles[i].created_time*1000);
				tmd = (d.getMonth()+1) + '月' + d.getDate() + '日';
				if (tmd != md){
					md = tmd;
					html.push('<div class="date">' + md + '&nbsp;&raquo;</div>');
				}
				switch (articles[i].type) {
					case 'status': //近況
						html.push(
							'<div class="', articles[i].type, '">',
								articles[i].message,
							'</div>');
						break;
					case 'photo': //写真
						html.push(
							'<div class="', articles[i].type, '">',
								'<a href="', articles[i].link, '"><img src="', articles[i].picture, '" /></a>',
								articles[i].name ? '<h3><a href="' + articles[i].link + '">' + articles[i].name + '</a></h3>' : '',
								'<p>', articles[i].message ? articles[i].message.autoLink() : '(コメントはありません)', '</p>',
							'</div>');
						break;
					default: //その他
						html.push(
							'<div class="', articles[i].type, '">',
								'<h3><a href="', articles[i].link, '">', articles[i].name, '</a></h3>',
								'<p>', articles[i].message ? articles[i].message.autoLink() : '(コメントはありません)', '</p>',
							'</div>');
						break;
				}
				n++
			}
		}
		$('div.facebook').html(html.join(''));
	});
}

/**
 * Picasa
 */
var photos = [];
var anim_direction = false; //スライドショーのアニメーション方向 (上向き/下向き)
var photo_index = 0; //現在表示している写真のindex
var call_counter = 0;

function loadPicasaFeed(){
	$.getJSON('http://picasaweb.google.com/data/feed/api/user/'+setting.picasa.user+'?kind=photo&alt=json-in-script&start-index=1&max-results='+(setting.picasa.max * 2)+'&callback=?', function(json) {
		var feed = json.feed, html = [];
		photos = feed.entry || [];
		photos.sort(function(){return 0.5-Math.random()});
		for (var i = 0; i < setting.picasa.max && i < photos.length; i++) {
			var thumbnail = photos[i].media$group.media$thumbnail[0];
			var desc = photos[i].media$group.media$description.$t;
			html.push('<a onclick="showPhoto(', i, ')" title="', desc, '"><img src="', thumbnail.url, '" width="', Math.floor(thumbnail.width*0.8), '" /></a>');
		}
		$('#picasa div.thumbs').html(html.join(''));
		if (photos.length > 0) showPhoto(0);
	});
}

function showPhoto(index){
	photo_index = (index < setting.picasa.max) ? index : 0;
	var p = {
		url: photos[photo_index].media$group.media$content[0].url, //写真のURL
		width: photos[photo_index].media$group.media$content[0].width, //写真の幅
		height: photos[photo_index].media$group.media$content[0].height, //写真の高さ
		desc: photos[photo_index].media$group.media$description.$t, //写真のキャプション
		picasaUrl: photos[photo_index].link[1].href //Picasaで見る場合のURL
	};
	var cc = ++call_counter;
	var w = setting.picasa.width + 20;
	var h = Math.round(w * p.height / p.width);
	$('#picasa div.crop').fadeOut(function(){
		var posStart = -1 * (anim_direction ? h-setting.picasa.height - 10 : 10);
		var posEnd = -1 * Math.round((h - setting.picasa.height) * (anim_direction ? 1 : 2) / 3);
		var html = [];
		html.push('<a href="', p.picasaUrl, '"><img src="', p.url, '" width="', w, '" height="', h, '" title="', p.desc, '" /></a>');
		$('#picasa div.crop')
			.html(html.join(''))
			.fadeIn('slow');
		$('#picasa div.crop img')
			.css({top:posStart, left:-10})
			.animate({top:posEnd}, 10000, 'linear', function(){
				if (cc == call_counter && call_counter < setting.picasa.stopCount) showPhoto(photo_index+1);
			});
		anim_direction = !anim_direction;
	});
}

/**
 * GMT(グリニッジ標準時)で日時をセットする
 * 例1: 2011-03-18 15:13:00 GMT
 * 例2: 2011-03-18 15:13:00
 */
Date.prototype.setGMT = function(str){
	var msec;
	if (str.match(/^(\d{4})\-(\d{2})\-(\d{2})\s(\d{2})\:(\d{2})\:(\d{2})\s?(GMT)?$/)){
		msec = Date.UTC(RegExp.$1-0, RegExp.$2-1, RegExp.$3-0, RegExp.$4-0, RegExp.$5-0, RegExp.$6-0);
		return this.setTime(msec);
	}
	return -1;
}

/**
 * URL文字列を検出して、リンクにする
 */
String.prototype.autoLink = function(){
	return this.replace(/(https?:\/\/[^\s]+)/g, function(){
	    return '<a href="' + arguments[1] + '">' + decodeURI(arguments[1]) + '</a>';
	});
}

/**
 * 各種フィードを読込む
 */
$(function(){
	loadTumblrFeed();
	loadFacebookFeed();
	loadPicasaFeed();
});
