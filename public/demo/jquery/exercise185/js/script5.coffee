$ ->
    $('ul.panel li:not(' + $('ul.tab li a.selected').attr('href') + ')').hide()
    return