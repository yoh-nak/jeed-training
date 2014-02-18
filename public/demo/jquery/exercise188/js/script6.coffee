$ ->
    $('#slide li').each ->
        $('#paging').append $('<li></li>').attr 'data-img', $('img',this).attr('src')
        return
    $('#paging li:first-child').addClass 'active'
    return
