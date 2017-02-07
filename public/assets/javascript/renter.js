function initMap() {
    // Initialization of map at Chicago
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: { lat: 41.878669, lng: -87.632294 }
    });
    var infoWindow = new google.maps.InfoWindow({ map: map });




    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Current Location');
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
    }




    // Create all markers for rentals
    var allMarkers = locations();
    var infowindow = new google.maps.InfoWindow();
    var marker, i;

    for (i = 0; i < allMarkers.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(allMarkers[i].lat, allMarkers[i].lon),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(allMarkers[i].name);
                infowindow.open(map, marker);
            };
        })(marker, i));
    }

}

// this will be a sequelize query for all records lat long
function locations() {
    var locations = [{
        name: 'Northwestern SoPS',
        lat: '41.896529',
        lon: '-87.618727'
    }, {
        name: 'Jay Pritzker Pavilion',
        lat: '41.883159',
        lon: '-87.621892'
    }, {
        name: 'theMART',
        lat: '41.888512',
        lon: '-87.635435'
    }];

    // db.owners.findAll({}).then(function(data) {
    //     res.render('index.handlebars', { records: data });
    // });
    return locations;
}
