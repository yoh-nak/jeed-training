$(function(){
    var myLatlng = new google.maps.LatLng(35.658609,139.745447);
    var myOptions = {
        zoom: 15,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), myOptions);
    var marker = new google.maps.Marker({
        position: myLatlng, 
        map: map, 
    });
});