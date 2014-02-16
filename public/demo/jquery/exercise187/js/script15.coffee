$ ->
    $('#carouselInner').css
        'width': 620 * $('#carouselInner ul.column').size() + 'px'
        'marginLeft': '-620px'
    $('#carouselPrev').click ->
        #console.log 'prev'
        $('#carouselNext,#carouselPrev').hide()
        $('#carouselInner').animate {
            marginLeft: parseInt($('#carouselInner').css('margin-left')) + 620 + 'px'
        },'slow','swing', ->
            $('#carouselInner ul.column:last').prependTo '#carouselInner'
            $('#carouselInner').css 'margin-left','-620px'
            $('#carouselNext,#carouselPrev').show()
            return
        return
    $('#carouselNext').click ->
        #console.log 'next'
        $('#carouselNext,#carouselPrev').hide()
        $('#carouselInner').animate {
            marginLeft: parseInt($('#carouselInner').css('margin-left')) - 620 + 'px'
        },'slow','swing', ->
            $('#carouselInner ul.column:first').appendTo '#carouselInner'
            $('#carouselInner').css 'margin-left','-620px'
            $('#carouselNext,#carouselPrev').show()
            return
        return
    return