$ ->
    $('ul.panel li:not(' + $('ul.tab li a.selected').attr('href') + ')').hide()
    $('ul.tab li a').click ->
        $('ul.tab li a.selected').removeClass('selected');
        $(this).addClass('selected');
        $('ul.panel li').slideUp('fast');
        $($(this).attr('href')).slideDown('fast');
        return false
    return