// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    $('form').submit(function() {
      $(':text,textarea').filter('.validate').each(function() {
        console.log('テキストボックス、テキストエリア');
      });
      $(':radio').filter('.validate').each(function() {
        console.log('ラジオボタン');
      });
      $('.checkboxRequired').each(function() {
        console.log('チェックボックス');
      });
      $('.validate.add_text').each(function() {
        console.log('その他の項目');
      });
      return false;
    });
  });

}).call(this);