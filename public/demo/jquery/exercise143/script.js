// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    $("#image1").click(function() {
      $("p:not(:animated)").animate({
        marginLeft: "-200px"
      }, "500", "swing").delay(1000).animate({
        marginLeft: "0px"
      }, "1500", "swing");
    });
  });

}).call(this);
