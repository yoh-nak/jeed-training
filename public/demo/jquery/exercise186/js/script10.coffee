$ ->
    $('#carouselInner').css
        'width': 620 * $('#carouselInner ul.column').size() + 'px'
        'marginLeft': '-620px'
    $('#carouselPrev').click ->
        console.log 'prev'
        return
    $('#carouselNext').click ->
        console.log 'next'
        return
    return