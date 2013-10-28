$(function() {
  return $('.list-group').each(function(i) {
    return $('.list-group:nth(' + i + ') .badge.badge-info').each(function(j) {
      return $(this).text(j);
    });
  });
});
