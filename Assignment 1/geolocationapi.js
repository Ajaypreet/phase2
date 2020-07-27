// declaration of  variables using let
let map;
let infoWindow;
let mapSpot = document.getElementById("map");
// describibg longitude and latitude of location
let georgian = {
    lat: -34.397,
    lng: 150.644
};
//function used for zoom
function initMap() {
    map = new google.maps.Map(mapSpot, {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 25
    });
    infoWindow = new google.maps.InfoWindow;

    // geolocation
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                let pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                infoWindow.setPosition(pos);
                infoWindow.setContent("Location found.");
                infoWindow.open(map);
                map.setCenter(pos);
            },
            function() {
                handleLocationError(true, infoWindow, map.getCenter());
            });
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }
}
// function to handle the errors
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation ?
        "Error: The Geolocation service has failed." :
        "Error: Your browser doesn't support geolocation"
    );
    infoWindow.open(map);
}