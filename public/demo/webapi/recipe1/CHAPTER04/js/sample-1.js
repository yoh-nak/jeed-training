// Sample #1 - ユーザーを検索する
$(function(){
  var key = "＜取得した「デベロッパーキー」を指定して下さい＞";
  var jqxhr = null;
  var jqxhrs = new Array();
  
  // コンテナ(<ul>)の生成
  $('<ul>')
    .selectable({
      // 選択された際にユーザーの詳細情報をポップアップする。
      selected: function(event, ui){
        var url = "http://api.ustream.tv/json/user/" + $(ui.selected).attr('ust_id') + "/getInfo?key=" + key + "&callback=?";
        $.getJSON(url, function(data){
          $('<div>')
            .append((data.imageUrl) ? $('<img>').attr('src', data.imageUrl.small) : '')
            .append($('<table>')
              .append($('<tr>')
                .append($('<th>').html('ID：'))
                .append($('<td>').html(data.id)))
              .append($('<tr>')
                .append($('<th>').html('ユーザー名:'))
                .append($('<td>').html(data.userName)))
              .append($('<tr>')
                .append($('<th>').html('URL:'))
                .append($('<td>').html($('<a>').attr('href', data.url).html(data.url))))
              .append($('<tr>')
                .append($('<th>').html('性別:'))
                .append($('<td>').html(data.gender)))
              .append($('<tr>')
                .append($('<th>').html('WEBサイト:'))
                .append($('<td>').html($('<a>').attr('href', data.url).html(data.website))))
              .append($('<tr>')
                .append($('<th>').html('評価:'))
                .append($('<td>').html(data.rating)))
              .append($('<tr>')
                .append($('<th>').html('プロフィール:'))
                .append($('<td>').html(data.about)))
          ).dialog({
            width: 600
          });
        });
      }
    })
    .appendTo('#list_users');
      
  $('#search_users').keyup(function(){
    
    // 前回のリクエストをキャンセル
    if(jqxhr) jqxhr.abort(); 
    if(jqxhrs[jqxhr]) {
      for (var i = 0; i < jqxhrs[jqxhr].length; i ++) {
        jqxhrs[jqxhr][i].abort();
        if(console) console.log('Sub request aborted!');
      }
    }
    
    // コンテナ(<ul>)を空にする
    $('#list_users ul').empty();
      
    // ユーザー名にキーワードを含むユーザーを検索する
    var url = "http://api.ustream.tv/json/user/all/search/username:like:" + $(this).val() + "?key=" + key + "&callback=?";
    jqxhr = $.getJSON(url, function(users){
      if(!users) return false;
      $.each(users, function(i, user){
        $('<li>')
          .attr('ust_id', user.id)
          .addClass('ui-widget-content')
          .append($('<a>').attr('href', user.url).html(user.name))
          .css('display', 'none')
          .appendTo('#list_users ul')
          .fadeIn('slow', function(){
            var url = "http://api.ustream.tv/json/user/" + user.id + "/getInfo?key=" + key + "&callback=?";
            var li = this;
            if(!jqxhrs[jqxhr]) jqxhrs[jqxhr] =  new Array();
            // ユーザーのプロフィール画像を取得する
            jqxhrs[jqxhr].push($.getJSON(url, function(user){
              $('<img>')
                .attr('height', '90')
                .attr('align', 'center')
                .attr('src', (user.imageUrl) ? user.imageUrl.small : 'na.png')
                .css('display', 'none')
                .appendTo($(li))
                .fadeIn('slow');
	          }));
          });
        if(jqxhrs[jqxhr]) delete jqxhrs[jqxhr];
        
      });
      if(!jqxhrs[jqxhr]) jqxhrs[jqxhr] =  new Array();
      jqxhr = null;
    });
  });
});
