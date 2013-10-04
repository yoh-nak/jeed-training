// Sample #4 - 
$(function(){
	var key = "＜取得した「デベロッパーキー」を指定して下さい＞";
  
  $('#menu_sample-4').click(function(){
    
    // 最も視聴者数の多い番組を表示
  	var url = "http://api.ustream.tv/json/stream/all/getMostViewers?key=" + key + "&callback=?";
    $.getJSON(url, function(streams) {
      var stream = streams.pop();
      if(!stream) return false;
      $('#most_viewers_stream').html(stream.embedTag);
      $('#most_viewers_stream object embed')
        .attr('width', '60%')
        .attr('height', '60%');
    });
  
    return false;
  });
  
});
