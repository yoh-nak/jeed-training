// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    $("#first a").click(function() {
      $("#first img").attr("src", "img/after.png").attr("alt", "変更後");
    });
    $("#second a").click(function() {
      $("#second img").attr("src", $(this).attr("href")).attr("alt", "変更後");
      return false;
    });
  });

}).call(this);