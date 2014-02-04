$ ->
    $('.list-group').each (i) ->
        $('.list-group:nth('+i+') .badge.badge-info').each (j) ->
            $(this).text(j);
