// Sample #3 - 過去のビデオを検索する
$(function(){
	var key = "＜取得した「デベロッパーキー」を指定して下さい＞";
  var jqxhr = null;
  
  // コンテナ(<ul>)の生成
  $('<ul>')
    .selectable({
      selected: function(event, ui) { // 選択された際に録画ビデオの詳細情報をポップアップ
        var url = "http://api.ustream.tv/json/video/" + $(ui.selected).attr('ust_id') + "/getInfo?key=" + key + "&callback=?";
        $.getJSON(url, function(data) {
          $('<div>')
            .attr('title', data.title)
            .append(data.embedTag)
            .dialog({
              width: 350
            });
        });
      }
    })
    .appendTo('#list_videos');
          
	$('#input_video_title').keyup(function(){
    // コンテナ(<ul>)を空に
    $('#list_videos ul').empty();
    
    // 前回のリクエストをキャンセル
    if(jqxhr) jqxhr.abort();
    
    // 名前(title)にキーワードを含む録画ビデオを検索
		var url = "http://api.ustream.tv/json/video/all/search/title:like:" + $(this).val() + "?key=" + key + "&callback=?";
    jqxhr = $.getJSON(url, function(videos, textStatus) {
      if(textStatus != ('success')) alert('検索できませんでした。');
      if(!videos) return false;
      
      // 過去のビデオの一覧を並べる
      $.each(videos, function(i, video){
        $('<li>')
          .attr('ust_id', video.id)
          .css('display', 'none')
          .addClass('ui-widget-content')
          .append($('<a>').attr('href', video.url).html(video.title))
          .append($('<img>').attr('src', video.imageUrl.small))
          .appendTo('#list_videos ul')
          .fadeIn('slow');
      });
      
      // すべての処理が完了したら jqXHR を空に
      jqxhr = null;
    });
  });
});
