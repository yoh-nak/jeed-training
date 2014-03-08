$(document).on('pagebeforechange',function(){
	window.alert('① ⑤ グローバルページイベント pagebeforechange\n遷移元、遷移先に関わらず実行されます');
});
//Domがキャッシュされていない時のみ
$(document).on('pagebeforecreate','#index',function(){
	window.alert('② 遷移先ページイベント #index pagebeforecreate\n遷移先のdata-role="page"部分のDOMが読み込まれます');
});
//Domがキャッシュされていない時のみ
$(document).on('pagebeforecreate','#about',function(){
	window.alert('② 遷移先ページイベント #about pagebeforecreate\n\n遷移先のdata-role="page"部分のDOMが読み込まれます');
});
//Domがキャッシュされていない時のみ
$(document).on('pagecreate','#index',function(){
	window.alert('③ 遷移先ページイベント #index pagecreate\n遷移先ページにウィジェットのクラスが付加されます');
});
//Domがキャッシュされていない時のみ
$(document).on('pagecreate','#about',function(){
	window.alert('③ 遷移先ページイベント #about pagecreate\n遷移先ページにウィジェットのクラスが付加されます');
});
//Domがキャッシュされていない時のみ
$(document).on('pageinit','#index',function(){
	window.alert('④ 遷移先ページイベント #index pageinit\n遷移先ページのウィジェットが生成されます');
});
//Domがキャッシュされていない時のみ
$(document).on('pageinit','#about',function(){
	window.alert('④ 遷移先ページイベント #about pageinit\n遷移先ページのウィジェットが生成されます)');
});
$(document).on('pagebeforehide','#index',function(){
	window.alert('⑥ 遷移元ページイベント #index pagebeforehide\n遷移元ページを非表示する処理が開始します');
});
$(document).on('pagebeforehide','#about',function(){
	window.alert('⑥ 遷移元ページイベント #about pagebeforehide\n遷移元ページを非表示する処理が開始します');
});
$(document).on('pagebeforeshow','#index',function(){
	window.alert('⑦ 遷移先ページイベント #index pagebeforeshow\nここで画面遷移します');
});
$(document).on('pagebeforeshow','#about',function(){
	window.alert('⑦ 遷移先ページイベント #about pagebeforeshow\nここで画面遷移します');
});
//外部リンクに遷移する時のみ
$(document).on('pageremove','#index',function(){
	window.alert('⑧ 遷移元ページイベント #index pageremove\n遷移元ページが破棄されます');
});
$(document).on('pageremove','#about',function(){
	window.alert('⑧ 遷移元ページイベント #index pageremove\n遷移元ページが破棄されます');
});
$(document).on('pagechange',function(){
	window.alert('⑨ グローバルページイベント pagechange\n遷移元、遷移先に関わらず実行されます');
});
$(document).on('pagehide','#index',function(){
	window.alert('⑩ 遷移元ページイベント #index pagehide\n遷移元ページを非表示する処理が終了します');
});
$(document).on('pagehide','#about',function(){
	window.alert('⑩ 遷移元ページイベント #about pagehide\n遷移元ページを非表示する処理が終了します');
});
$(document).on('pageshow','#index',function(){
	window.alert('⑪ 遷移先ページイベント #index pageshow\n画面遷移が完了します');
});
$(document).on('pageshow','#about',function(){
	window.alert('⑪ 遷移先ページイベント #about pageshow\n画面遷移が完了します');
});