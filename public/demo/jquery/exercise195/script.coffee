$ ->
    $('select').change ->
        $('span').text $(this).val()
        return
    return