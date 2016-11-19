$(document).ready(function() {
    $('.download-btn').tooltip('toggle');
    var map = new AMap.Map('map-api');
    map.setZoom(11);
    map.setCenter([121.57,38.91]);
    // map.setMapStyle("blue_night");
    var marker = new AMap.Marker({
            position: [121.525804, 38.876167],
            map:map
        });
});