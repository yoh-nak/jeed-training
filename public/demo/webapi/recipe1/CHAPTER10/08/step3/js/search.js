/**
 * Google Web Search API Sample
 * 
 * @copyright	keisuke YAMAMOTO <keisukey@ranadesign.com>
 * @author		keisuke YAMAMOTO <keisukey@ranadesign.com>
 * @link		http://kaelab.ranadesign.com/
 * @version		0.03
 * @since		Mar 05, 2011
 */

/**
 * ●Google Web Search APIについて
 * 公式ドキュメント(英語)
 * http://code.google.com/intl/ja/apis/websearch/docs/
 */

/**
 * STEP 3
 */

google.load("search", "1");

google.setOnLoadCallback(onLoad);

function onLoad() {
	var searchControl = new google.search.SearchControl();

	// 検索結果が0件だった場合の対応
	var options = new google.search.SearcherOptions();
	options.setNoResultsString("該当する情報が見つかりませんでした。");

	// 検索するサイトの制限
	var searcher = new google.search.WebSearch();
	searcher.setSiteRestriction("kaelab.ranadesign.com");
	searchControl.addSearcher(searcher, options);

	// Twitterを追加
	var searcherTwitter = new google.search.WebSearch();
	searcherTwitter.setSiteRestriction("twitter.com/ranadesign");
	searchControl.addSearcher(searcherTwitter, options);
	// Facebookを追加
	var searcherFacebook = new google.search.WebSearch();
	searcherFacebook.setSiteRestriction("http://en-gb.facebook.com/ranadesign.associates");
	searchControl.addSearcher(searcherFacebook, options);

	// ラベルを変更
	searchControl.setSearchCompleteCallback(null, function() {
		$(".gsc-tabHeader")
			.eq(0).text("かえラボ").end()
			.eq(1).text("Twitter").end()
			.eq(2).text("Facebook").end();
	});

	// 描画オプションの設定
	var drawOptions = new google.search.DrawOptions();
	drawOptions.setDrawMode(google.search.SearchControl.DRAW_MODE_TABBED);
	searchControl.draw(document.getElementById("searchControl"), drawOptions);

	// attach "powered by Google" branding
	google.search.Search.getBranding(document.getElementById("branding"));

	var searchExec = function() {
		searchControl.execute($(".txt").val());
		return false;
	}
	$(".btn").click(searchExec);
	$("#searchForm").submit(searchExec).submit();

}

