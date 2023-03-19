function initMap() {
     const uluru = {lat:42.112591, lng:-73.484285};
    var map = new google.maps.Map(document.getElementById('map'), {
        
        center: uluru,
        zoom: 10
    });
    
    var centerMarker = new google.maps.Marker({
          position: uluru,
        map: map,
        icon: {
            path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
            scale: 5,
            fillColor: '#FF0000',
            fillOpacity: 1,
            strokeWeight: 0
        },
        draggable: false,
        clickable: false,
        zIndex: 999
    });
}

window.onload = initMap;
