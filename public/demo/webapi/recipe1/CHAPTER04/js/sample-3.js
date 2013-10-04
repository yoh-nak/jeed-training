// Sample #2 - 番組(channel)を検索する
$(function(){
	var key = "＜取得した「デベロッパーキー」を指定して下さい＞";
  var jqxhr = null;
  
  // コンテナ(<ul>)の生成
  $('<ul>')
    .selectable({
      // 選択された際に番組(channel)情報をポップアップ
      selected: function(event, ui) { 
        var url = "http://api.ustream.tv/json/channel/" + $(ui.selected).attr('ust_id') + "/getInfo?key=" + key + "&callback=?";
        $.getJSON(url, function(channel) {
          $('<div>')
            .attr('title', channel.title)
            .append(channel.embedTag)
            .append($(channel.chat.embedTag).attr('width', 320))
            .dialog({
              width: 350
            });
        });
      }
    })
    .appendTo('#list_channels');
  
  // 「ライブのみ」のチェックボックス用ハンドラ
  $('#input_channel_status').click(function(){
    $('#input_channel_title').keyup();
  });
  
  // 検索ボックス用ハンドラ
	$('#input_channel_title').keyup(function(){
    var title = $(this).val();
    
    // コンテナ(<ul>)を空に
    $('#list_channels ul').empty();
      
    // 前回のリクエストをキャンセル
    if(jqxhr) jqxhr.abort();
    
    // 名前(title)にキーワードを含むを番組を検索
    var status = ($('#input_channel_status').is(':checked')) ? 'live' : 'all';
		var url = "http://api.ustream.tv/json/channel/" + status + "/search/title:like:" + title + "?key=" + key + "&callback=?";
    jqxhr = $.getJSON(url, function(channels, textStatus) {
      if(textStatus != ('success')) alert('検索できませんでした。');
      if(!channels) return false;
      
      // 番組の一覧を並べる
      $.each(channels, function(i, channel){
        $('<li>')
          .attr('ust_id', channel.id)
          .css('display', 'none')
          .addClass('ui-widget-content')
          .append($('<a>').attr('href', channel.url).html(channel.title))
          .append($('<img>').attr('src', channel.imageUrl.small))
          .appendTo('#list_channels ul')
          .fadeIn('slow');
      });
      jqxhr = null;
    });
  });
});
