$ ->
    $('#carouselInner').css
        'width': 620 * $('#carouselInner ul.column').size() + 'px'
        'marginLeft': '-620px'
    $('#carouselPrev').click ->
        #console.log 'prev'
        $('#carouselInner').animate {
            marginLeft: parseInt($('#carouselInner').css('margin-left')) + 620 + 'px'
        },'slow','swing', ->
            $('#carouselInner ul.column:last').prependTo '#carouselInner'
            $('#carouselInner').css 'margin-left','-620px'
            return
        return
    $('#carouselNext').click ->
        #console.log 'next'
        $('#carouselInner').animate {
            marginLeft: parseInt($('#carouselInner').css('margin-left')) - 620 + 'px'
        },'slow','swing', ->
            $('#carouselInner ul.column:first').appendTo '#carouselInner'
            $('#carouselInner').css 'margin-left','-620px'
            return
        return
    return