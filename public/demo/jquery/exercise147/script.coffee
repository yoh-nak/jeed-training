$ ->
    $('input:nth(0)').click ->
        $('div').css 'background', 'white'
        $('div').filter('.first').css 'background', 'red'
        return

    $('input:nth(1)').click ->
        $('div').css 'background', 'white'
        $('div').find('.first').css 'background', 'red'
        return

    return
