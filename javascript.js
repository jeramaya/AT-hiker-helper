let shelters = [
    {name: "The Hemlocks",      latitude: 42.10968, longitude: -73.42865},	
    {name: "Glen Brook",        latitude: 42.11102, longitude: -73.42725},	
    {name: "Tom Leonard",       latitude: 42.16479, longitude: -73.3058 },	
    {name: "Mt. Wilcox South",  latitude: 42.20771, longitude: -73.26828},
    {name: "Mt. Wilcox North",  latitude: 42.22108, longitude: -73.25018},	
    {name: "Upper Goose",       latitude: 42.28802, longitude: -73.18142},	
    {name: "October Mountain",  latitude: 42.35493, longitude: -73.15403},	
    {name: "Kay Wood",          latitude: 42.45211, longitude: -73.16148},
    {name: "Mark Noepel",       latitude: 42.60862, longitude: -73.18415},
    {name: "Wilbur Clearing",   latitude: 42.66776, longitude: -73.17015}
];

let parking = [
    {name: "Guilder Pond",	        latitude: 42.10696,	longitude: -73.43616},
    {name: "Sheffield Road",	    latitude: 42.14716,	longitude: -73.38671},
    {name: "Kellogg Road",	        latitude: 42.14441,	longitude: -73.36042},
    {name: "Lake Buel Road",	    latitude: 42.17475,	longitude: -73.29443},
    {name: "MA 23",	                latitude: 42.18441,	longitude: -73.29113},
    {name: "Tyringham Main Road",	latitude: 42.23528,	longitude: -73.19486},
    {name: "Goose Pond Road",	    latitude: 42.27451,	longitude: -73.18479},
    {name: "US 20",	                latitude: 42.29154,	longitude: -73.15785},
    {name: "Pittsfield Road",	    latitude: 42.37706,	longitude: -73.15118},
    {name: "Blotz Road",	        latitude: 42.40952,	longitude: -73.15024},
    {name: "Gulf Road",	            latitude: 42.48177,	longitude: -73.17859},
    {name: "Greylock Day Use",	    latitude: 42.63055,	longitude: -73.17844},
    {name: "Gould Trail Day Use",	latitude: 42.63376,	longitude: -73.17125},
    {name: "Greylock Summit",	    latitude: 42.63805,	longitude: -73.16607},
    {name: "Notch Road",	        latitude: 42.66927,	longitude: -73.16812},
    {name: "Pattison Road",	        latitude: 42.68767,	longitude: -73.16015}
];

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
}
window.onload = initMap;
