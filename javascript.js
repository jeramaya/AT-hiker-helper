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
    var trip1 = document.getElementById('saved-trip1');
    var trip2 = document.getElementById('saved-trip2');

    // Add event listeners to the checkboxes to update the map
    checkbox1.addEventListener('change', function () {
        if (checkbox1.checked) {
            // Create the marker if the checkbox is checked
            marker1 = new google.maps.Marker({
                position: {
                lat: shelters[0].latitude, lng: shelters[0].longitude 
                }, 
                map: map,
                title: 'Marker 1',
                icon: 'images/camping_spots.png',
               
            });
             marker2 = new google.maps.Marker({
                position: {
                lat: shelters[1].latitude, lng: shelters[1].longitude 
                }, 
                map: map,
                title: 'Marker 2',
                icon: 'images/camping_spots.png',
               
            });
             marker3 = new google.maps.Marker({
                position: {
                lat: shelters[2].latitude, lng: shelters[2].longitude 
                }, 
                map: map,
                title: 'Marker 3',
                icon: 'images/camping_spots.png',
               
            });
             marker4 = new google.maps.Marker({
                position: {
                lat: shelters[3].latitude, lng: shelters[3].longitude 
                }, 
                map: map,
                title: 'Marker 4',
                icon: 'images/camping_spots.png',
               
            });
             marker5 = new google.maps.Marker({
                position: {
                lat: shelters[4].latitude, lng: shelters[4].longitude 
                }, 
                map: map,
                title: 'Marker 5',
                icon: 'images/camping_spots.png',
               
            });
             marker6 = new google.maps.Marker({
                position: {
                lat: shelters[5].latitude, lng: shelters[5].longitude 
                }, 
                map: map,
                title: 'Marker 6',
                icon: 'images/camping_spots.png',
               
            });
             marker7 = new google.maps.Marker({
                position: {
                lat: shelters[6].latitude, lng: shelters[6].longitude 
                }, 
                map: map,
                title: 'Marker 7',
                icon: 'images/camping_spots.png',
               
            });
             marker8 = new google.maps.Marker({
                position: {
                lat: shelters[7].latitude, lng: shelters[7].longitude 
                }, 
                map: map,
                title: 'Marker 8',
                icon: 'images/camping_spots.png',
               
            });
             marker9 = new google.maps.Marker({
                position: {
                lat: shelters[8].latitude, lng: shelters[8].longitude 
                }, 
                map: map,
                title: 'Marker 9',
                icon: 'images/camping_spots.png',
               
            });
             marker10 = new google.maps.Marker({
                position: {
                lat: shelters[9].latitude, lng: shelters[9].longitude 
                }, 
                map: map,
                title: 'Marker 10',
                icon: '/images/camping_spots.png',
               
            });
            
        } else {
            // Remove the marker if the checkbox is unchecked
            marker1.setMap(null);
            marker2.setMap(null);
            marker3.setMap(null);
              marker4.setMap(null);
              marker5.setMap(null);
              marker6.setMap(null);
              marker7.setMap(null);
              marker8.setMap(null);
              marker9.setMap(null);
              marker10.setMap(null);
        }
            });
        
        
            checkbox2.addEventListener('change', function () {
                if (checkbox2.checked) {
                    // Create the marker if the checkbox is checked
                    marker1 = new google.maps.Marker({
                        position: {
                        lat: parking[0].latitude, lng: parking[0].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: 'images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker2 = new google.maps.Marker({
                        position: {
                        lat: parking[1].latitude, lng: parking[1].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: 'images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker3 = new google.maps.Marker({
                        position: {
                        lat: parking[2].latitude, lng: parking[2].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: 'images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker4 = new google.maps.Marker({
                        position: {
                        lat: parking[3].latitude, lng: parking[3].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: 'images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker5 = new google.maps.Marker({
                        position: {
                        lat: parking[4].latitude, lng: parking[4].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: 'images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker6 = new google.maps.Marker({
                        position: {
                        lat: parking[5].latitude, lng: parking[5].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: 'images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker7 = new google.maps.Marker({
                        position: {
                        lat: parking[6].latitude, lng: parking[6].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: 'images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker8 = new google.maps.Marker({
                        position: {
                        lat: parking[7].latitude, lng: parking[7].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: 'images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker9 = new google.maps.Marker({
                        position: {
                        lat: parking[8].latitude, lng: parking[8].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: 'images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker10 = new google.maps.Marker({
                        position: {
                        lat: parking[9].latitude, lng: parking[9].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: 'images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker11 = new google.maps.Marker({
                        position: {
                        lat: parking[10].latitude, lng: parking[10].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: 'images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker12 = new google.maps.Marker({
                        position: {
                        lat: parking[11].latitude, lng: parking[11].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: 'images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker13 = new google.maps.Marker({
                        position: {
                        lat: parking[12].latitude, lng: parking[12].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: 'images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker14 = new google.maps.Marker({
                        position: {
                        lat: parking[13].latitude, lng: parking[13].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: 'images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker15 = new google.maps.Marker({
                        position: {
                        lat: parking[14].latitude, lng: parking[14].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: 'images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker16 = new google.maps.Marker({
                        position: {
                        lat: parking[15].latitude, lng: parking[15].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: 'images/parking_spots.png',
               
                    });
                    
                } else {
                    // Remove the marker if the checkbox is unchecked
                    marker1.setMap(null);
                    marker2.setMap(null);
                    marker3.setMap(null);
                    marker4.setMap(null);
                     marker5.setMap(null);
                     marker6.setMap(null);
                     marker7.setMap(null);
                     marker8.setMap(null);
                     marker9.setMap(null);
                     marker10.setMap(null);
                     marker11.setMap(null);
                     marker12.setMap(null);
                     marker13.setMap(null);
                     marker14.setMap(null);
                     marker15.setMap(null);
                     marker16.setMap(null);
                }
            });
        
            checkbox3.addEventListener('change', function () {
                if (checkbox3.checked) {
                    // Create the marker if the checkbox is checked
                    marker3 = new google.maps.Marker({
                        position: {
                            lat: 42.66921,
                            lng: -73.10812
                        },
                        map: map,
                        title: 'Marker 3',
                          icon: 'images/hazard_spots.png',
             
                    });
                } else {
                    // Remove the marker if the checkbox is unchecked
                    marker3.setMap(null);
                }
            });
            
            map.controls[google.maps.ControlPosition.LEFT_TOP].push(sidebar);
            document.getElementById('sidebar-toggle').addEventListener('click', function () {
                sidebar.classList.toggle('collapsed');
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

    trip1.addEventListener('change', function () {
        if(trip1.checked) {
            var request = {
                origin: {lat: shelters[2].latitude, lng: shelters[2].longitude},
                destination: {lat: shelters[4].latitude, lng: shelters[4].longitude},
                waypoints: [
                    {location:new google.maps.LatLng(shelters[3].latitude,shelters[3].longitude)}
                ],
                travelMode: google.maps.DirectionsTravelMode.WALKING
            };
            directionsService.route(request, function(result, status) {
                if(status == 'OK') directionsDisplay.setDirections(result);
            });
        }
        else {
            directionsService.setMap(null);
        }
    });
    trip2.addEventListener('change', function () {
        var request = {
            origin: {lat: shelters[5].latitude, lng: shelters[5].longitude},
            destination: {lat: shelters[7].latitude, lng: shelters[7].longitude},
            waypoints: [
                {location:new google.maps.LatLng(shelters[6].latitude,shelters[6].longitude)}
            ],
            travelMode: google.maps.DirectionsTravelMode.WALKING
        };
        directionsService.route(request, function(result, status) {
            if(status == 'OK') directionsDisplay.setDirections(result);
        });
    });
    // Add the sidebar to the map
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(sidebar);

    document.getElementById('sidebar-toggle').addEventListener('click', function () {
        sidebar.classList.toggle('collapsed');
    });
}
window.onload = initMap;
