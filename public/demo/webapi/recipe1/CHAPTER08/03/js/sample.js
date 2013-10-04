$(function(){
	// グーグルマップの表示
	var map = new google.maps.Map(
		document.getElementById("gmap"),{
			zoom : 12,
			center : new google.maps.LatLng(35.689160610317174, 139.70083951950073),
			mapTypeId : google.maps.MapTypeId.ROADMAP
		}
	);
	// マーカークラスタ用のマーカー保存配列
	var markers = [];
	// 情報ウィンドウを生成
	var infowindow = new google.maps.InfoWindow();
	// 座標データを読み込む
	$.get("data.txt", function(data){
		var posData = eval(data);
		for(var i=0; i<posData.length; i++){
			var lat = posData[i].lat;	// 緯度
			var lng = posData[i].lng;	//　経度
			var msg = posData[i].name;	//　駅名
			new setMarker(map, lat, lng, msg);
		}
		var mc = new MarkerClusterer(map, markers);
	});
	// マーカーを生成する
	function setMarker(map, lat, lng, msg){
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(lat, lng),
			map: map,
			title : msg	// ツールチップにも駅名を表示
		});
		google.maps.event.addListener(marker, "click", function() {
			infowindow.open(map, marker);
			infowindow.setContent(msg);
		});
		markers.push(marker);	// マーカークラスタ用に保存
	}
});

