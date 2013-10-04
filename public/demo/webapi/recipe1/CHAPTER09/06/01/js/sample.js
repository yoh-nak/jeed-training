$(function(){
	// グーグルマップの表示
	var map = new google.maps.Map(
		document.getElementById("gmap"),{
			zoom : 6,
			center : new google.maps.LatLng(35.689160610317174, 139.70083951950073),
			mapTypeId : google.maps.MapTypeId.ROADMAP
		}
	);
	// 座標+Ustデータを読み込む
	$.get("data.txt", function(data){
		var posData = eval(data);
		for(var i=0; i<posData.length; i++){
			var lat = posData[i].lat;	// 緯度
			var lng = posData[i].lng;	//　経度
			var html = posData[i].file;	//　HTMLファイル名
			new setMarker(map, lat, lng, html);
		}
	});
	// マーカーを生成する
	function setMarker(map, lat, lng, html){
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(lat, lng),
			map: map
		});
		var ele = document.createElement("div");
		$(ele).load(html);
		var infowindow = new google.maps.InfoWindow({
			content : ele
		});
		infowindow.open(map, marker);
	}
});

