function initMap() {
    const uluru = {
        lat: 42.112591,
        lng: -73.484285
    };

    var map = new google.maps.Map(document.getElementById('map'), {

        center: uluru,
        zoom: 10

    });
    var infoWindow = new google.maps.InfoWindow;
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay.setMap(map);


    // Create the sidebar and add checkboxes
    var sidebar = document.getElementById('sidebar');
    var checkbox1 = document.getElementById('checkbox1');
    var checkbox2 = document.getElementById('checkbox2');
    var checkbox3 = document.getElementById('checkbox3');

    // Add event listeners to the checkboxes to update the map
    checkbox1.addEventListener('change', function () {
        // TODO: update map based on checkbox 1
    });

    checkbox2.addEventListener('change', function () {
        // TODO: update map based on checkbox 2
    });

    checkbox3.addEventListener('change', function () {
        // TODO: update map based on checkbox 3
    });

    // Add the sidebar to the map
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(sidebar);

    document.getElementById('sidebar-toggle').addEventListener('click', function () {
        sidebar.classList.toggle('collapsed');
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
        clickable: true,
        zIndex: 999
    });

    // Create the campsite markers
    var campsite1 = new google.maps.Marker({
        position: {
            lat: 42.7184156,
            lng: -73.1503512
        },
        title: 'Campsite 1',

    });
    var campsite2 = new google.maps.Marker({
        position: {
            lat: 42.5149,
            lng: -73.1596
        },
        title: 'Campsite 2',

    });

    // Add event listeners to the markers
    campsite1.addListener('click', function () {
        infoWindow.setContent('Campsite 1');
        infoWindow.open(map, campsite1);
    });
    campsite2.addListener('click', function () {
        infoWindow.setContent('Campsite 2');
        infoWindow.open(map, campsite2);
    });
    var request = {
        origin: campsite1.getPosition(),
        destination: campsite2.getPosition(),
        travelMode: 'WALKING'
    };
    directionsService.route(request, function (result, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(result);
        }
    });
}



window.onload = initMap;
