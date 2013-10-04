/**
 * Google Web Search API Sample
 * 
 * @copyright	keisuke YAMAMOTO <keisukey@ranadesign.com>
 * @author		keisuke YAMAMOTO <keisukey@ranadesign.com>
 * @link		http://kaelab.ranadesign.com/
 * @version		0.01
 * @since		Mar 05, 2011
 */
 
/**
 * ●Google Web Search APIについて
 * 公式ドキュメント(英語)
 * http://code.google.com/intl/ja/apis/websearch/docs/
 */

/**
 * STEP 1
 */

// Search APIをロード
google.load("search", "1");

// jQueryの$(document).ready()と同じ。
google.setOnLoadCallback(onLoad);

function onLoad() {
	// SearchControlオブジェクトを生成します。
	var searchControl = new google.search.SearchControl();
	// Searcherオブジェクトを生成します。
	// [search controlに追加できるsearcher]
	// LocalSearch(), WebSearch(), VideoSearch(), BlogSearch(), NewsSearch(), ImageSearch(), BookSearch(), PatentSearch()
	// 今回はWebSearch()を使います。
	var searcher = new google.search.WebSearch();
	// 検索したいサイトを指定します。
	searcher.setSiteRestriction("kaelab.ranadesign.com");
	// search controlにsearcherを追加します。
	searchControl.addSearcher(searcher);

	// 描画オプションを生成します。
	var drawOptions = new google.search.DrawOptions();
	// 描画オプションにタブ表示を指定します。
	drawOptions.setDrawMode(google.search.SearchControl.DRAW_MODE_TABBED);
	// コントローラの描画先を設定します。
	searchControl.draw(document.getElementById("searchControl"), drawOptions);

	// executeメソッドに検索したい内容を渡し、検索を実行します。
	searchControl.execute("JavaScript");
}


