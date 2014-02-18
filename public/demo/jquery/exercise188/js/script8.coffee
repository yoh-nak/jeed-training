$ ->
    $('#slide li').each ->
        $('#paging').append $('<li></li>').attr 'data-img', $('img',this).attr('src')
        return
    $('#paging li:first-child').addClass 'active'

    $('#nav .next').click ->
        $('#slide:not(:animated)').animate
            marginLeft : -1 * $('#slide li').width()
        return
    $('#nav .prev').click ->
        $('#slide:not(:animated)')
            .css('margin-left',-1*$('#slide li').width())
            .prepend($('#slide li:last-child'))
            .animate
                marginLeft : 0
        return
    return
