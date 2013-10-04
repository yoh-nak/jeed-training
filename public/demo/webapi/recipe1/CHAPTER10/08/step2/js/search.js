/**
 * Google Web Search API Sample
 * 
 * @copyright	keisuke YAMAMOTO <keisukey@ranadesign.com>
 * @author		keisuke YAMAMOTO <keisukey@ranadesign.com>
 * @link		http://kaelab.ranadesign.com/
 * @version		0.02
 * @since		Mar 05, 2011
 */

/**
 * ●Google Web Search APIについて
 * 公式ドキュメント(英語)
 * http://code.google.com/intl/ja/apis/websearch/docs/
 */

/**
 * STEP 2
 */

google.load('search', '1');

google.setOnLoadCallback(onLoad);

function onLoad() {
	var searchControl = new google.search.SearchControl();

	// 検索結果が0件だった場合の対応
	var options = new google.search.SearcherOptions();
	options.setNoResultsString("該当する情報が見つかりませんでした。");

	var searcher = new google.search.WebSearch();
	searcher.setSiteRestriction("kaelab.ranadesign.com");
	// オプションも追加
	searchControl.addSearcher(searcher, options);

	var drawOptions = new google.search.DrawOptions();
	drawOptions.setDrawMode(google.search.SearchControl.DRAW_MODE_TABBED);
	searchControl.draw(document.getElementById("searchControl"), drawOptions);

	// "powered by Google"を表示
	google.search.Search.getBranding(document.getElementById("branding"));

	// STEP 2
	// searchControl.execute("JavaScript");
	var searchExec = function() {
		searchControl.execute($(".txt").val());
		return false;
	}
	$(".btn").click(searchExec);
	$("#searchForm").submit(searchExec).submit();

}



