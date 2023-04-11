
let markersArray = [];

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
var distances = [0.117,7.247,3.533,1.308,5.81,4.83,6.725,10.875,4.148];

let hazard_report = [0,0,0,0,0,0,0,0,0,0]

var map;

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
        if (checkbox1.checked) {
            // Create the marker if the checkbox is checked
            
            marker1_camp = new google.maps.Marker({
                position: {
                lat: shelters[0].latitude, lng: shelters[0].longitude 
                }, 
                map: map,
                title: 'Marker 1',
                icon: '/images/camping_spots.png',
               
            });
             marker2_camp = new google.maps.Marker({
                position: {
                lat: shelters[1].latitude, lng: shelters[1].longitude 
                }, 
                map: map,
                title: 'Marker 2',
                icon: '/images/camping_spots.png',
               
            });
             marker3_camp = new google.maps.Marker({
                position: {
                lat: shelters[2].latitude, lng: shelters[2].longitude 
                }, 
                map: map,
                title: 'Marker 3',
                icon: '/images/camping_spots.png',
               
            });
             marker4_camp = new google.maps.Marker({
                position: {
                lat: shelters[3].latitude, lng: shelters[3].longitude 
                }, 
                map: map,
                title: 'Marker 4',
                icon: '/images/camping_spots.png',
               
            });
             marker5_camp = new google.maps.Marker({
                position: {
                lat: shelters[4].latitude, lng: shelters[4].longitude 
                }, 
                map: map,
                title: 'Marker 5',
                icon: '/images/camping_spots.png',
               
            });
             marker6_camp = new google.maps.Marker({
                position: {
                lat: shelters[5].latitude, lng: shelters[5].longitude 
                }, 
                map: map,
                title: 'Marker 6',
                icon: '/images/camping_spots.png',
               
            });
             marker7_camp = new google.maps.Marker({
                position: {
                lat: shelters[6].latitude, lng: shelters[6].longitude 
                }, 
                map: map,
                title: 'Marker 7',
                icon: '/images/camping_spots.png',
               
            });
             marker8_camp = new google.maps.Marker({
                position: {
                lat: shelters[7].latitude, lng: shelters[7].longitude 
                }, 
                map: map,
                title: 'Marker 8',
                icon: '/images/camping_spots.png',
               
            });
             marker9_camp = new google.maps.Marker({
                position: {
                lat: shelters[8].latitude, lng: shelters[8].longitude 
                }, 
                map: map,
                title: 'Marker 9',
                icon: '/images/camping_spots.png',
               
            });
             marker10_camp = new google.maps.Marker({
                position: {
                lat: shelters[9].latitude, lng: shelters[9].longitude 
                }, 
                map: map,
                title: 'Marker 10',
                icon: '/images/camping_spots.png',
               
            });



            google.maps.event.addListener(marker1_camp, 'click', function() {
                var infowindow_marker1_camp = new google.maps.InfoWindow({
                    content:'<div>' +
                    '<h1>Appalachian National Scenic Trail</h1>' +
                    '<img src="/images/marker1_camp.jpg" alt="marker1_camp"></img>'+
                    '<p>Address: Appalachian National Scenic Trail, Mt Washington, MA 01258</p>'+
                    '<p>This campsite is 5.7 miles away from your current location.</p>'+
                    '</div>'
                    });
                infowindow_marker1_camp.open(map,marker1_camp);
            });

            google.maps.event.addListener(marker2_camp, 'click', function() {
                var infowindow_marker2_camp = new google.maps.InfoWindow({
                    content:'<div>' +
                    '<h1>Appalachian Trail and Guilder Hollow Rd.</h1>'+
                    '<img src="/images/marker2_camp.jpg" alt="marker2_camp"></img>'+
                    '<p>Address: 256 Guilder Hollow Rd, Egremont, MA 01230</p>'+
                    '<p>Some inforamtion about this campsite would be listed here.</p>'+
                    '<p>This campsite is 5.7 miles away from your current location.</p>'+
                    '</div>'
                    });
                infowindow_marker2_camp.open(map,marker2_camp);
            });

            google.maps.event.addListener(marker3_camp, 'click', function() {
                var infowindow_marker3_camp = new google.maps.InfoWindow({
                    content:'<div>' +
                    '<h1>Appalachian Trail</h1>'+
                    '<img src="/images/marker3_camp.jpg" alt="marker3_camp"></img>'+
                    '<p>Address: Appalachian National Scenic Trail, Great Barrington, MA 01230</p>'+
                    '<p>This campsite is 5.7 miles away from your current location.</p>'+
                    '</div>'
                    });
                infowindow_marker3_camp.open(map,marker3_camp);
            });

            google.maps.event.addListener(marker4_camp, 'click', function() {
                var infowindow_marker4_camp = new google.maps.InfoWindow({
                    content:'<div>' +
                    '<h1>Appalachian Trail</h1>'+
                    '<img src="/images/marker4_camp.jpg" alt="marker4_camp"></img>'+
                    '<p>Address: Appalachian National Scenic Trail, Monterey, MA 01245</p>'+
                    '<p>This campsite is 5.7 miles away from your current location.</p>'+
                    '</div>'
                    });
                infowindow_marker4_camp.open(map,marker4_camp);
            });

            google.maps.event.addListener(marker5_camp, 'click', function() {
                var infowindow_marker5_camp = new google.maps.InfoWindow({
                    content:'<div>' +
                    '<h1>Appalachian Trail</h1>'+
                    '<img src="/images/marker5_camp.jpg" alt="marker5_camp"></img>'+
                    '<p>Address: Appalachian Trail, Monterey, MA 01245</p>'+
                    '<p>This campsite is 5.7 miles away from your current location.</p>'+
                    '</div>'
                    });
                infowindow_marker5_camp.open(map,marker5_camp);
            });

            google.maps.event.addListener(marker6_camp, 'click', function() {
                var infowindow_marker6_camp = new google.maps.InfoWindow({
                    content:'<div>' +
                    '<h1>Appalachian Trail - Goose Pond Road</h1>'+
                    '<img src="/images/marker6_camp.jpg" alt="marker6_camp"></img>'+
                    '<p>Address: Appalachian National Scenic Trail, Lee, MA 01238</p>'+
                    '<p>This campsite is 5.7 miles away from your current location.</p>'+
                    '</div>'
                    });
                infowindow_marker6_camp.open(map,marker6_camp);
            });

            google.maps.event.addListener(marker7_camp, 'click', function() {
                var infowindow_marker7_camp = new google.maps.InfoWindow({
                    content:'<div>' +
                    '<h1>Appalachian Trail</h1>'+
                    '<img src="/images/marker7_camp.jpg" alt="marker7_camp"></img>'+
                    '<p>Address: Washington, MA 01223</p>'+
                    '<p>Some inforamtion about this campsite would be listed here.</p>'+
                    '<p>This campsite is 5.7 miles away from your current location.</p>'+
                    '</div>'
                    });
                infowindow_marker7_camp.open(map,marker7_camp);
            });

            google.maps.event.addListener(marker8_camp, 'click', function() {
                var infowindow_marker8_camp = new google.maps.InfoWindow({
                    content:'<div>' +
                    '<h1>Appalachian Trail Parking (Gulf Road)</h1>'+
                    '<img src="/images/marker8_camp.jpg" alt="marker8_camp"></img>'+
                    '<p>Address: 71 Gulf Rd, Dalton, MA 01226</p>'+
                    '<p>This campsite is 5.7 miles away from your current location.</p>'+
                    '</div>'
                    });
                infowindow_marker8_camp.open(map,marker8_camp);
            });

            google.maps.event.addListener(marker9_camp, 'click', function() {
                var infowindow_marker9_camp = new google.maps.InfoWindow({
                    content:'<div>' +
                    '<h1>Appalachian Trailhead</h1>'+
                    '<img src="/images/marker9_camp.jpg" alt="marker9_camp"></img>'+
                    '<p>Address: 149-99 Furnace Hill, Cheshire, MA 01225</p>'+
                    '<p>Some inforamtion about this campsite would be listed here.</p>'+
                    '<p>This campsite is 5.7 miles away from your current location.</p>'+
                    '</div>'
                    });
                infowindow_marker9_camp.open(map,marker9_camp);
            });

            google.maps.event.addListener(marker10_camp, 'click', function() {
                var infowindow_marker10_camp = new google.maps.InfoWindow({
                    content:'<div>' +
                    '<h1>Wilbur Clearing Lean-To, Appalachian Trail</h1>'+
                    '<img src="/images/marker10_camp.jpg" alt="marker10_camp"></img>'+
                    '<p>Address: Williamstown, MA 01267</p>'+
                    '<p>Some inforamtion about this campsite would be listed here.</p>'+
                    '<p>This campsite is 5.7 miles away from your current location.</p>'+
                    '</div>'
                    });
                infowindow_marker10_camp.open(map,marker10_camp);
            });





            
        } else {
            // Remove the marker if the checkbox is unchecked
            marker1_camp.setMap(null);
            marker2_camp.setMap(null);
            marker3_camp.setMap(null);
              marker4_camp.setMap(null);
              marker5_camp.setMap(null);
              marker6_camp.setMap(null);
              marker7_camp.setMap(null);
              marker8_camp.setMap(null);
              marker9_camp.setMap(null);
              marker10_camp.setMap(null);
        }
            });
        
        
            checkbox2.addEventListener('change', function () {
                if (checkbox2.checked) {
                    // Create the marker if the checkbox is checked
                    
                 
                    marker1_parking = new google.maps.Marker({
                        position: {
                        lat: parking[0].latitude, lng: parking[0].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: '/images/parking_spots.png',
               
                    });

                    
                       // Create the marker if the checkbox is checked
                    marker2_parking = new google.maps.Marker({
                        position: {
                        lat: parking[1].latitude, lng: parking[1].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: '/images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker3_parking = new google.maps.Marker({
                        position: {
                        lat: parking[2].latitude, lng: parking[2].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: '/images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker4_parking= new google.maps.Marker({
                        position: {
                        lat: parking[3].latitude, lng: parking[3].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: '/images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker5_parking = new google.maps.Marker({
                        position: {
                        lat: parking[4].latitude, lng: parking[4].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: '/images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker6_parking = new google.maps.Marker({
                        position: {
                        lat: parking[5].latitude, lng: parking[5].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: '/images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker7_parking = new google.maps.Marker({
                        position: {
                        lat: parking[6].latitude, lng: parking[6].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: '/images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker8_parking = new google.maps.Marker({
                        position: {
                        lat: parking[7].latitude, lng: parking[7].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: '/images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker9_parking = new google.maps.Marker({
                        position: {
                        lat: parking[8].latitude, lng: parking[8].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: '/images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker10_parking = new google.maps.Marker({
                        position: {
                        lat: parking[9].latitude, lng: parking[9].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: '/images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker11_parking = new google.maps.Marker({
                        position: {
                        lat: parking[10].latitude, lng: parking[10].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: '/images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker12_parking = new google.maps.Marker({
                        position: {
                        lat: parking[11].latitude, lng: parking[11].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: '/images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker13_parking = new google.maps.Marker({
                        position: {
                        lat: parking[12].latitude, lng: parking[12].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: '/images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker14_parking = new google.maps.Marker({
                        position: {
                        lat: parking[13].latitude, lng: parking[13].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: '/images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker15_parking = new google.maps.Marker({
                        position: {
                        lat: parking[14].latitude, lng: parking[14].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: '/images/parking_spots.png',
               
                    });
                       // Create the marker if the checkbox is checked
                    marker16_parking = new google.maps.Marker({
                        position: {
                        lat: parking[15].latitude, lng: parking[15].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                          icon: '/images/parking_spots.png',
               
                    });

                    google.maps.event.addListener(marker1_parking, 'click', function() {
                        var infowindow_marker1_parking = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Appalachian Trail Parking</h1>' +
                            '<img src="images/marker1_parking.jpg" alt="marker1_parking"></img>'+
                            '<p>Address: CT-41, Salisbury, CT 06068</p>'+
                            '<p>This campsite is 5.7 miles away from your current location.</p>'+
                            '</div>'
                            });
                        infowindow_marker1_parking.open(map,marker1_parking);
                    });
                    
                    google.maps.event.addListener(marker2_parking, 'click', function() {
                        var infowindow_marker2_parking = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Race Brook Falls Trailhead & Parking</h1>' +
                            '<img src="/images/marker2_parking.jpg" alt="marker2_parking"></img>'+
                            '<p>Address: 716-732 S Undermountain Rd, Sheffield, MA 01257</p>'+
                            '<p>This campsite is 5.7 miles away from your current location.</p>'+
                            '</div>'
                            });
                        infowindow_marker2_parking.open(map,marker2_parking);
                    });

                    google.maps.event.addListener(marker3_parking, 'click', function() {
                        var infowindow_marker3_parking = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Guilder Pond Parking Area</h1>' +
                            '<img src="/images/marker3_parking.jpg" alt="marker3_parking"></img>'+
                            '<p>Address: Mt Washington, MA 01258</p>'+
                            '<p>This campsite is 5.7 miles away from your current location.</p>'+
                            '</div>'
                            });
                        infowindow_marker3_parking.open(map,marker3_parking);
                    });
                    
                    google.maps.event.addListener(marker4_parking, 'click', function() {
                        var infowindow_marker4_parking = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Appalachian Trail Parking</h1>' +
                            '<img src="/images/marker4_parking.jpg" alt="marker4_parking"></img>'+
                            '<p>Address: 102-110 Lake Buel Rd, Great Barrington, MA 01230</p>'+
                            '<p>This campsite is 5.7 miles away from your current location.</p>'+
                            '</div>'
                            });
                        infowindow_marker4_parking.open(map,marker4_parking);
                    });

                    google.maps.event.addListener(marker5_parking, 'click', function() {
                        var infowindow_marker5_parking = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>AT Parking at Massachusetts 183</h1>' +
                            '<img src="/images/marker5_parking.jpg" alt="marker5_parking"></img>'+
                            '<p>Address: Appalachian National Scenic Trail, Monterey, MA 01245</p>'+
                            '<p>This campsite is 5.7 miles away from your current location.</p>'+
                            '</div>'
                            });
                        infowindow_marker5_parking.open(map,marker5_parking);
                    });
                    
                    google.maps.event.addListener(marker6_parking, 'click', function() {
                        var infowindow_marker6_parking = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Appalachian Trail</h1>' +
                            '<img src="/images/marker6_parking.jpg" alt="marker6_parking"></img>'+
                            '<p>Address: Appalachian National Scenic Trail, Tyringham, MA 01264</p>'+
                            '<p>This campsite is 5.7 miles away from your current location.</p>'+
                            '</div>'
                            });
                        infowindow_marker6_parking.open(map,marker6_parking);
                    });

                    google.maps.event.addListener(marker7_parking, 'click', function() {
                        var infowindow_marker7_parking = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Appalachian Trail - Goose Pond Road</h1>' +
                            '<img src="/images/marker7_parking.jpg" alt="marker7_parking"></img>'+
                            '<p>Address: Appalachian National Scenic Trail, Lee, MA 01238</p>'+
                            '<p>This campsite is 5.7 miles away from your current location.</p>'+
                            '</div>'
                            });
                        infowindow_marker7_parking.open(map,marker7_parking);
                    });

                    google.maps.event.addListener(marker8_parking, 'click', function() {
                        var infowindow_marker8_parking = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Jacob\'s Ladder Scenic Byway and Appalachian Trail Parking Area</h1>' +
                            '<img src="/images/marker8_parking.jpg" alt="marker8_parking"></img>'+
                            '<p>Address: Lee, MA 01238</p>'+
                            '<p>This campsite is 5.7 miles away from your current location.</p>'+
                            '</div>'
                            });
                        infowindow_marker8_parking.open(map,marker8_parking);
                    });

                    google.maps.event.addListener(marker9_parking, 'click', function() {
                        var infowindow_marker9_parking = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Appalachian Trail Parking</h1>' +
                            '<img src="/images/marker9_parking.jpg" alt="marker9_parking"></img>'+
                            '<p>Address: Washington, MA 01223</p>'+
                            '<p>This campsite is 5.7 miles away from your current location.</p>'+
                            '</div>'
                            });
                        infowindow_marker9_parking.open(map,marker9_parking);
                    });

                    google.maps.event.addListener(marker10_parking, 'click', function() {
                        var infowindow_marker10_parking = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Appalachian Trail Parking</h1>' +
                            '<img src="/images/marker10_parking.jpg" alt="marker10_parking"></img>'+
                            '<p>Address: Washington, MA 01223</p>'+
                            '<p>This campsite is 5.7 miles away from your current location.</p>'+
                            '</div>'
                            });
                        infowindow_marker10_parking.open(map,marker10_parking);
                    });

                    google.maps.event.addListener(marker11_parking, 'click', function() {
                        var infowindow_marker11_parking = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Appalachian Trail Parking (Gulf Road)</h1>' +
                            '<img src="/images/marker11_parking.jpg" alt="marker11_parking"></img>'+
                            '<p>Address: Washington, MA 01223</p>'+
                            '<p>This campsite is 5.7 miles away from your current location.</p>'+
                            '</div>'
                            });
                        infowindow_marker11_parking.open(map,marker11_parking);
                    });

                    google.maps.event.addListener(marker12_parking, 'click', function() {
                        var infowindow_marker12_parking = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Ashuwillticook Rail Trail parking area</h1>' +
                            '<img src="/images/marker12_parking.jpg" alt="marker12_parking"></img>'+
                            '<p>Address: Railroad St, Cheshire, MA 01225</p>'+
                            '<p>This campsite is 5.7 miles away from your current location.</p>'+
                            '</div>'
                            });
                        infowindow_marker12_parking.open(map,marker12_parking);
                    });

                    google.maps.event.addListener(marker13_parking, 'click', function() {
                        var infowindow_marker13_parking = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Jones Nose Trailhead</h1>' +
                            '<img src="/images/marker13_parking.jpg" alt="marker13_parking"></img>'+
                            '<p>Address: Rockwell Rd, New Ashford, MA 01237</p>'+
                            '<p>This campsite is 5.7 miles away from your current location.</p>'+
                            '</div>'
                            });
                        infowindow_marker13_parking.open(map,marker13_parking);
                    });

                    google.maps.event.addListener(marker14_parking, 'click', function() {
                        var infowindow_marker14_parking = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Mt. Greylock Campground Parking Lot</h1>' +
                            '<img src="/images/marker14_parking.jpg" alt="marker14_parking"></img>'+
                            '<p>Address: Adams, MA 01220</p>'+
                            '<p>This campsite is 5.7 miles away from your current location.</p>'+
                            '</div>'
                            });
                        infowindow_marker14_parking.open(map,marker14_parking);
                    });

                    google.maps.event.addListener(marker14_parking, 'click', function() {
                        var infowindow_marker14_parking = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Mt. Greylock Campground Parking Lot</h1>' +
                            '<img src="/images/marker14_parking.jpg" alt="marker14_parking"></img>'+
                            '<p>Address: Adams, MA 01220</p>'+
                            '<p>This campsite is 5.7 miles away from your current location.</p>'+
                            '</div>'
                            });
                        infowindow_marker14_parking.open(map,marker14_parking);
                    });

                    google.maps.event.addListener(marker15_parking, 'click', function() {
                        var infowindow_marker15_parking = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Appalachian Trail Pattison Road</h1>' +
                            '<img src="/images/marker15_parking.jpg" alt="marker15_parking"></img>'+
                            '<p>Address: 381 Pattison Rd, North Adams, MA 01247</p>'+
                            '<p>This campsite is 5.7 miles away from your current location.</p>'+
                            '</div>'
                            });
                        infowindow_marker15_parking.open(map,marker15_parking);
                    });

                    google.maps.event.addListener(marker16_parking, 'click', function() {
                        var infowindow_marker16_parking = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Appalachian Trail Parking</h1>' +
                            '<img src="/images/marker16_parking.jpg" alt="marker16_parking"></img>'+
                            '<p>State Rd, North Adams, MA 01247</p>'+
                            '<p>This campsite is 5.7 miles away from your current location.</p>'+
                            '</div>'
                            });
                        infowindow_marker16_parking.open(map,marker16_parking);
                    });
                    
                } else {
                    // Remove the marker if the checkbox is unchecked
                    marker1_parking.setMap(null);
                     
                    marker2_parking.setMap(null);
                    marker10_parking.setMap(null);
                  
                    marker11_parking.setMap(null);
                    marker12_parking.setMap(null);
                     marker13_parking.setMap(null);
                    marker14_parking.setMap(null);
                    marker15_parking.setMap(null);
                    marker16_parking.setMap(null);
                    marker3_parking.setMap(null);
                     marker5_parking.setMap(null);
                    marker9_parking.setMap(null);
                     marker6_parking.setMap(null);
                    marker7_parking.setMap(null);
                    marker8_parking.setMap(null);
                     
                    marker4_parking.setMap(null);
                 
                  
                }
            });
        
            checkbox3.addEventListener('change', function () {
                if (checkbox3.checked) {
                    // Create the marker if the checkbox is checked
                    
                    
                    if(hazard_report[0]) 
                    {
                        marker1_hazard = new google.maps.Marker({
                            position: {
                                lat: shelters[0].latitude, lng: shelters[0].longitude
                            },
                            map: map,
                            title: 'Marker 3',
                            icon: '/images/hazard_spots.png',   
                        });

                        google.maps.event.addListener(marker1_hazard, 'click', function() {
                            var infowindow_marker1_hazard = new google.maps.InfoWindow({
                                content:'<div>' +
                                '<h1>Hazard Report</h1>' +
                                '<h2>Comment:</h2>' +
                                '</div>'
                                });
                            infowindow_marker1_hazard.open(map,marker1_hazard);
                        });
                    }
                    
                    if(hazard_report[1]) 
                    {
                    marker2_hazard = new google.maps.Marker({
                        position: {
                        lat: shelters[1].latitude, lng: shelters[1].longitude 
                        }, 
                        map: map,
                        title: 'Marker 2',
                        icon: '/images/hazard_spots.png',
                       
                    });
                    google.maps.event.addListener(marker2_hazard, 'click', function() {
                        var infowindow_marker1_hazard = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Hazard Report</h1>' +
                            '<h2>Comment:</h2>' +
                            '</div>'
                            });
                        infowindow_marker2_hazard.open(map,marker2_hazard);
                    });
                }
                if(hazard_report[2]) {
                     marker3_hazard = new google.maps.Marker({
                        position: {
                        lat: shelters[2].latitude, lng: shelters[2].longitude 
                        }, 
                        map: map,
                        title: 'Marker 3',
                        icon: '/images/hazard_spots.png',
                       
                    });
                    google.maps.event.addListener(marker3_hazard, 'click', function() {
                        var infowindow_marker3_hazard = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Hazard Report</h1>' +
                            '<h2>Comment:</h2>' +
                            '</div>'
                            });
                        infowindow_marker3_hazard.open(map,marker3_hazard);
                    });
                }
                if(hazard_report[3]) {
                     marker4_hazard = new google.maps.Marker({
                        position: {
                        lat: shelters[3].latitude, lng: shelters[3].longitude 
                        }, 
                        map: map,
                        title: 'Marker 4',
                        icon: '/images/hazard_spots.png',
                       
                    });
                    google.maps.event.addListener(marker4_hazard, 'click', function() {
                        var infowindow_marker4_hazard = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Hazard Report</h1>' +
                            '<h2>Comment:</h2>' +
                            '</div>'
                            });
                        infowindow_marker4_hazard.open(map,marker4_hazard);
                    });
                }
                if(hazard_report[4]) {
                     marker5_hazard = new google.maps.Marker({
                        position: {
                        lat: shelters[4].latitude, lng: shelters[4].longitude 
                        }, 
                        map: map,
                        title: 'Marker 5',
                        icon: '/images/hazard_spots.png',
                       
                    });
                    google.maps.event.addListener(marker5_hazard, 'click', function() {
                        var infowindow_marker5_hazard = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Hazard Report</h1>' +
                            '<h2>Comment:</h2>' +
                            '</div>'
                            });
                        infowindow_marker5_hazard.open(map,marker5_hazard);
                    });
                }
                if(hazard_report[5]) {
                     marker6_hazard = new google.maps.Marker({
                        position: {
                        lat: shelters[5].latitude, lng: shelters[5].longitude 
                        }, 
                        map: map,
                        title: 'Marker 6',
                        icon: '/images/hazard_spots.png',
                       
                    });
                    google.maps.event.addListener(marker6_hazard, 'click', function() {
                        var infowindow_marker6_hazard = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Hazard Report</h1>' +
                            '<h2>Comment:</h2>' +
                            '</div>'
                            });
                        infowindow_marker6_hazard.open(map,marker6_hazard);
                    });
                }
                if(hazard_report[6]) {
                     marker7_hazard = new google.maps.Marker({
                        position: {
                        lat: shelters[6].latitude, lng: shelters[6].longitude 
                        }, 
                        map: map,
                        title: 'Marker 7',
                        icon: '/images/hazard_spots.png',
                       
                    });
                    google.maps.event.addListener(marker7_hazard, 'click', function() {
                        var infowindow_marker7_hazard = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Hazard Report</h1>' +
                            '<h2>Comment:</h2>' +
                            '</div>'
                            });
                        infowindow_marker7_hazard.open(map,marker7_hazard);
                    });
                }
                if(hazard_report[7]) {
                     marker8_hazard = new google.maps.Marker({
                        position: {
                        lat: shelters[7].latitude, lng: shelters[7].longitude 
                        }, 
                        map: map,
                        title: 'Marker 8',
                        icon: '/images/hazard_spots.png',
                       
                    });
                    google.maps.event.addListener(marker8_hazard, 'click', function() {
                        var infowindow_marker8_hazard = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Hazard Report</h1>' +
                            '<h2>Comment:</h2>' +
                            '</div>'
                            });
                        infowindow_marker8_hazard.open(map,marker8_hazard);
                    });
                }
                if(hazard_report[8]) {
                     marker9_hazard = new google.maps.Marker({
                        position: {
                        lat: shelters[8].latitude, lng: shelters[8].longitude 
                        }, 
                        map: map,
                        title: 'Marker 9',
                        icon: '/images/hazard_spots.png',
                       
                    });
                    google.maps.event.addListener(marker9_hazard, 'click', function() {
                        var infowindow_marker9_hazard = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Hazard Report</h1>' +
                            '<h2>Comment:</h2>' +
                            '</div>'
                            });
                        infowindow_marker9_hazard.open(map,marker9_hazard);
                    });
                }
                if(hazard_report[9]) {
                     marker10_hazard = new google.maps.Marker({
                        position: {
                        lat: shelters[9].latitude, lng: shelters[9].longitude 
                        }, 
                        map: map,
                        title: 'Marker 10',
                        icon: '/images/hazard_spots.png',
                       
                    });
                    google.maps.event.addListener(marker10_hazard, 'click', function() {
                        var infowindow_marker10_hazard = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Hazard Report</h1>' +
                            '<h2>Comment:</h2>' +
                            '</div>'
                            });
                        infowindow_marker10_hazard.open(map,marker10_hazard);
                    });
                }

                
        

                    /*google.maps.event.addListener(marker1_hazard, 'click', function() {
                        var infowindow_marker1_hazard = new google.maps.InfoWindow({
                            content:'<div>' +
                            '<h1>Path Obstruction Reported in this Area</h1>' +
                            /*'<h2>Another user reported an obstruction on this path!</h2>' +
                            '<p>"The obstruction I am referring to is a fallen<br>'+
                            'tree that is blocking the trail. The tree is<br>'+
                            'quite large and there is no way around it,<br>'+
                            'wicch forced me to turn back and cut my hike short"<p/>' +*/
                    
                      /*      '</div>'
                            });
                        infowindow_marker1_hazard.open(map,marker1_hazard);
                        */
                        
                    
                    //});

                    

                } else {
                    // Remove the marker if the checkbox is unchecked
                    if(hazard_report[0]) 
                    {
                        marker1_hazard.setMap(null);
                    } 
                    if(hazard_report[1]) 
                    {
                    marker2_hazard.setMap(null);
                    }
                    if(hazard_report[2]) {
                    marker3_hazard.setMap(null);
                    }
                    if(hazard_report[3]) {
                    marker4_hazard.setMap(null);
                    }
                    if(hazard_report[4]) {
                    marker5_hazard.setMap(null);
                    }
                    if(hazard_report[5]) {
                    marker6_hazard.setMap(null);
                    }
                    if(hazard_report[6]) {
                    marker7_hazard.setMap(null);
                    }
                    if(hazard_report[7]) {
                    marker8_hazard.setMap(null);
                    }
                    if(hazard_report[8]) {
                    marker9_hazard.setMap(null);
                    }
                    if(hazard_report[9]) {
                    marker10_hazard.setMap(null);
                    }
                }
            });
            
            map.controls[google.maps.ControlPosition.LEFT_TOP].push(sidebar);
          
    
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


    let startingMarkers = [];
    let endingMarkers = [];
    
    let startingMarker = null;
    let endingMarker = null;

    function markerclearer(markers, locationType, map) {
        if (markers.length > 0) {
          for (let i = 0; i < markers.length; i++) {
        
          
            markers[i].setMap(null); // remove marker from map
        
          }
          markers.length = 0; // clear markers array
          console.log('penis')
        }
        
        if (locationType === 'starting') {
          startingLocation = null;
        } else if (locationType === 'ending') {
          endingLocation = null;
        }
      }
      
      
      
    
    
      function dropMarker(map, location, markerType, locationType) {
        let markers;
        let marker;
        
        // Determine which array of markers to use based on locationType
        if (locationType === 'starting') {
          markers = startingMarkers;
        } else if (locationType === 'ending') {
          markers = endingMarkers;
        }
        
        // Call function to clear existing markers
        markerclearer(markers, locationType, map);
        
        
        // Add new marker
        
        marker = new google.maps.Marker({
          position: { lat: location.latitude, lng: location.longitude },
          map: map,
          icon: null
        });
        
        
        // Add click listener to marker
        marker.addListener("click", () => {
          let infoWindow = new google.maps.InfoWindow({
            content: `${location.name}`,
          });
          infoWindow.open(map, marker);
        });
        
        
        // Zoom map to marker
        map.setCenter(marker.getPosition());
        map.setZoom(12);
        
        // Store marker in appropriate variable and array
        if (locationType === 'starting') {
          startingMarker = marker;
          startingMarkers.push(marker);
        } else if (locationType === 'ending') {
          endingMarker = marker;
          endingMarkers.push(marker);
        }
        
        // Check if there are two markers and draw walking route
        if (startingMarkers.length > 0 && endingMarkers.length > 0) {
          // Call function to draw walking route
          drawWalkingRoute(startingMarkers[0].getPosition(), endingMarkers[0].getPosition(), map);
        }
      }
      
    
      function drawWalkingRoute(startingLocation, endingLocation, map, locationType) {
        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer({
          polylineOptions: {
            strokeColor: 'blue'
          }
        });
      
        directionsRenderer.setMap(map);
        
        
        /*
        const request = {
          origin: startingLocation,
          destination: endingLocation,
          travelMode: google.maps.TravelMode.WALKING
        };
   
      
        directionsService.route(request, function(result, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
          }
        });
        */
      }
      
    
    
// Add event listener for startingLocationSelect
startingLocationSelect.addEventListener("change", () => {
    // Get the selected value
    const selectedStartingLocationName = startingLocationSelect.value;
  
    // Find the corresponding shelter object in the array
    startingShelter = shelters.find(
      (shelter) => shelter.name === selectedStartingLocationName
    );
  
    // Find the corresponding parking object in the array
    startingParking = parking.find(
      (park) => park.name === selectedStartingLocationName
    );

   
  
    // Call a function to clear existing markers
    
    // Call a function to drop the marker on the map for the selected starting location
    /*
    if (startingShelter) {
      dropMarker(map, startingShelter, 'shelter', 'starting');
    } else if (startingParking) {
      dropMarker(map, startingParking, 'parking', 'starting');
    }
    */
    var request = {
        origin: {lat: startingShelter.latitude, lng: startingShelter.longitude},
        destination: {lat: endingShelter.latitude, lng: endingShelter.longitude},
        travelMode: google.maps.DirectionsTravelMode.WALKING
    };
    directionsService.route(request, function(result, status) {
        if(status == 'OK') directionsDisplay.setDirections(result);
    });
  });
  
  // Add event listener for endingLocationSelect
  endingLocationSelect.addEventListener("change", () => {
    // Get the selected value
    const selectedEndingLocationName = endingLocationSelect.value;
  
    // Find the corresponding shelter object in the array
    endingShelter = shelters.find(
      (shelter) => shelter.name === selectedEndingLocationName
    );
  
    // Find the corresponding parking object in the array
    endingParking = parking.find(
      (park) => park.name === selectedEndingLocationName
    );
  
    // Call a function to clear existing markers
    markerclearer(endingMarkers, endingShelter);
    markerclearer(endingMarkers, endingParking);
    // Call a function to drop the marker on the map for the selected ending location
    /*
    if (endingShelter) {
      dropMarker(map, endingShelter, 'shelter', 'ending');
    } else if (endingParking) {
      dropMarker(map, endingParking, 'parking', 'ending');
    }
    */
    var request = {
        origin: {lat: startingShelter.latitude, lng: startingShelter.longitude},
        destination: {lat: endingShelter.latitude, lng: endingShelter.longitude},
        travelMode: google.maps.DirectionsTravelMode.WALKING
    };
    directionsService.route(request, function(result, status) {
        if(status == 'OK') directionsDisplay.setDirections(result);
    });
  });
var startingShelter, startingParking, endingShelter, endingParking;
  
   // define a global array to store the marker data
let savedMarkers = [];

// add event listener to "Save Trips" button
const saveButton = document.querySelector('.Save-Trips');
saveButton.addEventListener('click', saveMarkers);

// function to save the marker data
function saveMarkers() {
  // loop through all the markers and store their position data in the savedMarkers array
  /*
  for (let i = 0; i < markers.length; i++) {
    const marker = markers[i];
    savedMarkers.push({
      lat: marker.position.lat(),
      lng: marker.position.lng()
    });
  }*/
  console.log('Markers saved:', savedMarkers);
  
  trip2_hidden = false;
}

  
    /////////////////////////////////////////////////////////////////////
    //
    // Work for the Saved Trips Below
    //
    /////////////////////////////////////////////////////////////////////
    var trip1 = document.getElementById('saved-trip1');
    var trip2 = document.getElementById('saved-trip2');
    var saved_trips_tab = document.getElementById('saved_button');
    var trip1_hidden = true;
    var trip2_hidden = true;
    saved_trips_tab.addEventListener('click', function () {
        if(trip1_hidden == true) {
            //console.log(trip1_hidden);
            $('#saved_trip1_box').css({display:'none'});
        }
        else {
            $('#saved_trip1_box').css({display:'block'});
        }
        if(trip2_hidden == true) {
            //console.log(trip1_hidden);
            $('#saved_trip2_box').css({display:'none'});
        }
        else {
            $('#saved_trip2_box').css({display:'block'});
        }
    });
    trip1.addEventListener('change', function () {
        if(trip1.checked) {
            var request = {
                origin: {lat: shelters[arr_index].latitude, lng: shelters[arr_index].longitude},
                destination: {lat: shelters[arr_index_end].latitude, lng: shelters[arr_index_end].longitude},
                waypoints: waypts,
                travelMode: google.maps.DirectionsTravelMode.WALKING
            };
            directionsService.route(request, function(result, status) {
                if(status == 'OK') directionsDisplay.setDirections(result);
            });
        }
        else {
            directionsDisplay.set('directions',null);
        }
    });
    trip2.addEventListener('change', function () {
        if(trip2.checked) {
            var request = {
                origin: {lat: startingShelter.latitude, lng: startingShelter.longitude},
                destination: {lat: endingShelter.latitude, lng: endingShelter.longitude},
                travelMode: google.maps.DirectionsTravelMode.WALKING
            };
            directionsService.route(request, function(result, status) {
                if(status == 'OK') directionsDisplay.setDirections(result);
            });
        }
        else {
            directionsDisplay.set('directions',null);
        }
    });
    // Add the sidebar to the map
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(sidebar);

    //document.getElementById('sidebar-toggle').addEventListener('click', function () {
    //    sidebar.classList.toggle('collapsed');
    //});

    /////////////////////////////////////////////////////////////////////
    //
    // Work for the Trip Helper Below
    //
    /////////////////////////////////////////////////////////////////////
    var start_TH = document.getElementById('Starting_Location_TH');
    var end_TH = document.getElementById('Ending_Location_TH');
    var build_trips = document.getElementById('build_trips');
    var num_of_days_TH = document.getElementById('Number_of_days');
    var checkbox1_TH = document.getElementById('TH_Trip1_check');
    var checkbox2_TH = document.getElementById('TH_Trip2_check');
    var choose_trips_TH = document.getElementById('choose_trips_TH');
    var arr_index, arr_index_end, distance, num_of_days = 1;
    var waypts;
    num_of_days_TH.addEventListener('click', function() {
        num_of_days = $('#Number_of_days').val();
    });
    start_TH.addEventListener('click', function () {
        arr_index = $('#Starting_Location_TH').val();
        arr_index_end = $('#Ending_Location_TH').val();
        var request = {
            origin: {lat: shelters[arr_index].latitude, lng: shelters[arr_index].longitude},
            destination: {lat: shelters[arr_index_end].latitude, lng: shelters[arr_index_end].longitude},
            travelMode: google.maps.DirectionsTravelMode.WALKING
        };
        directionsService.route(request, function(result, status) {
            if(status == 'OK') directionsDisplay.setDirections(result);
        });
        distance = 0;
        if(arr_index < arr_index_end)
            for(var i = arr_index; i < arr_index_end; i++)
                distance += distances[i];
        else
            for(var i = arr_index_end; i < arr_index; i++)
                distance += distances[i];
        document.getElementById('distance_TH').innerHTML = "Distance of Hike: " + distance + " miles"; 
    });
    end_TH.addEventListener('click', function () {
        arr_index = $('#Starting_Location_TH').val();
        arr_index_end = $('#Ending_Location_TH').val();
        var request = {
            origin: {lat: shelters[arr_index].latitude, lng: shelters[arr_index].longitude},
            destination: {lat: shelters[arr_index_end].latitude, lng: shelters[arr_index_end].longitude},
            travelMode: google.maps.DirectionsTravelMode.WALKING
        };
        directionsService.route(request, function(result, status) {
            if(status == 'OK') directionsDisplay.setDirections(result);
        });
        distance = 0;
        if(arr_index < arr_index_end)
            for(var i = arr_index; i < arr_index_end; i++)
                distance += distances[i];
        else
            for(var i = arr_index_end; i < arr_index; i++)
                distance += distances[i];
        document.getElementById('distance_TH').innerHTML = "Distance of Hike: " + distance + " miles"; 
    });
    build_trips.addEventListener('click', function() {
        if(arr_index == null) {
            arr_index = 0;
        }
        if(arr_index_end == null) {
            arr_index_end = 0;
        }/*
        if(arr_index == (arr_index_end + 1) || arr_index == (arr_index_end - 1)) {
            $('.Trip2').css({display:'none'});
            document.getElementById('TH_Trip1').innerHTML = "Total Distance: " + distance + " miles";
        }*/
        document.getElementById('TH_Trip1').innerHTML = "Total Distance: " + distance + " miles";
        document.getElementById('TH_Trip2').innerHTML = "Total Distance: " + distance + " miles";
    });
    checkbox1_TH.addEventListener('change', function () {
        if(checkbox1_TH.checked){
            waypts = [];
            arr_index = Number(arr_index);
            arr_index_end = Number(arr_index_end);
            if(arr_index < arr_index_end) {
                for(let i = (1 + arr_index); i < arr_index_end; i++) {
                    if(i == (Number(num_of_days)+1)) break;
                    waypts.push({
                        location:new google.maps.LatLng(shelters[i].latitude,shelters[i].longitude)
                    });
                }
            }
            else {
                for(let i = (arr_index - 1); i > arr_index_end; i--) {
                    if(i == (Number(num_of_days))) break;
                    waypts.push({
                        location:new google.maps.LatLng(shelters[i].latitude,shelters[i].longitude)
                    });   
                }
            }
            if(checkbox1_TH.checked) {
                var request = {
                    origin: {lat: shelters[arr_index].latitude, lng: shelters[arr_index].longitude},
                    destination: {lat: shelters[arr_index_end].latitude, lng: shelters[arr_index_end].longitude},
                    waypoints: waypts,
                    travelMode: google.maps.DirectionsTravelMode.WALKING
                };
                directionsService.route(request, function(result, status) {
                    if(status == 'OK') directionsDisplay.setDirections(result);
                });
            }
        }
        else {
            directionsDisplay.set('directions',null);
        }

    });
    checkbox2_TH.addEventListener('change', function () {
        if(checkbox2_TH.checked){
            waypts = [];
            arr_index = Number(arr_index);
            arr_index_end = Number(arr_index_end);
            if(arr_index < arr_index_end) {
                for(let i = (1 + arr_index); i < arr_index_end; i++) {
                    if(i <= (arr_index_end - Number(num_of_days))) continue;
                    waypts.push({
                        location:new google.maps.LatLng(shelters[i].latitude,shelters[i].longitude)
                    });
                }
            }
            else {
                for(let i = (arr_index - 1); i > arr_index_end; i--) {
                    if(i > (arr_index - Number(num_of_days))) continue;
                    waypts.push({
                        location:new google.maps.LatLng(shelters[i].latitude,shelters[i].longitude)
                    });   
                }
            }
            if(checkbox2_TH.checked) {
                var request = {
                    origin: {lat: shelters[arr_index].latitude, lng: shelters[arr_index].longitude},
                    destination: {lat: shelters[arr_index_end].latitude, lng: shelters[arr_index_end].longitude},
                    waypoints: waypts,
                    travelMode: google.maps.DirectionsTravelMode.WALKING
                };
                directionsService.route(request, function(result, status) {
                    if(status == 'OK') directionsDisplay.setDirections(result);
                });
            }
        }
        else {
            directionsDisplay.set('directions',null);
        }
       
    });
    choose_trips_TH.addEventListener('click', function () {
        trip1_hidden = false;
    });
    /*
    var start_TH = document.getElementById('Starting_Location_TH');
    var end_TH = document.getElementById('Ending_Location_TH');
    var build_trips = document.getElementById('build_trips');
    var num_of_days_TH = document.getElementById('Number_of_days');
    var checkbox1_TH = document.getElementById('TH_Trip1_check');
    var checkbox2_TH = document.getElementById('TH_Trip2_check');
    var choose_trips_TH = document.getElementById('choose_trips_TH');
    var arr_index, arr_index_end, distance, num_of_days = 1;
    var waypts;
    num_of_days_TH.addEventListener('click', function() {
        num_of_days = $('#Number_of_days').val();
    });
    start_TH.addEventListener('click', function () {
        arr_index = $('#Starting_Location_TH').val();
        arr_index_end = $('#Ending_Location_TH').val();
        var request = {
            origin: {lat: shelters[arr_index].latitude, lng: shelters[arr_index].longitude},
            destination: {lat: shelters[arr_index_end].latitude, lng: shelters[arr_index_end].longitude},
            travelMode: google.maps.DirectionsTravelMode.WALKING
        };
        directionsService.route(request, function(result, status) {
            if(status == 'OK') directionsDisplay.setDirections(result);
        });
        distance = 0;
        if(arr_index < arr_index_end)
            for(var i = arr_index; i < arr_index_end; i++)
                distance += distances[i];
        else
            for(var i = arr_index_end; i < arr_index; i++)
                distance += distances[i];
        document.getElementById('distance_TH').innerHTML = "Distance of Hike: " + distance + " miles"; 
    });
    end_TH.addEventListener('click', function () {
        arr_index = $('#Starting_Location_TH').val();
        arr_index_end = $('#Ending_Location_TH').val();
        var request = {
            origin: {lat: shelters[arr_index].latitude, lng: shelters[arr_index].longitude},
            destination: {lat: shelters[arr_index_end].latitude, lng: shelters[arr_index_end].longitude},
            travelMode: google.maps.DirectionsTravelMode.WALKING
        };
        directionsService.route(request, function(result, status) {
            if(status == 'OK') directionsDisplay.setDirections(result);
        });
        distance = 0;
        if(arr_index < arr_index_end)
            for(var i = arr_index; i < arr_index_end; i++)
                distance += distances[i];
        else
            for(var i = arr_index_end; i < arr_index; i++)
                distance += distances[i];
        document.getElementById('distance_TH').innerHTML = "Distance of Hike: " + distance + " miles"; 
    });
    build_trips.addEventListener('click', function() {
        if(arr_index == null) {
            arr_index = 0;
        }
        if(arr_index_end == null) {
            arr_index_end = 0;
        }/*
        if(arr_index == (arr_index_end + 1) || arr_index == (arr_index_end - 1)) {
            $('.Trip2').css({display:'none'});
            document.getElementById('TH_Trip1').innerHTML = "Total Distance: " + distance + " miles";
        }
        document.getElementById('TH_Trip1').innerHTML = "Total Distance: " + distance + " miles";
        document.getElementById('TH_Trip2').innerHTML = "Total Distance: " + distance + " miles";
    });
    checkbox1_TH.addEventListener('change', function () {
        if(checkbox1_TH.checked){
            waypts = [];
            arr_index = Number(arr_index);
            arr_index_end = Number(arr_index_end);
            if(arr_index < arr_index_end) {
                for(let i = (1 + arr_index); i < arr_index_end; i++) {
                    if(i == (Number(num_of_days)+1)) break;
                    waypts.push({
                        location:new google.maps.LatLng(shelters[i].latitude,shelters[i].longitude)
                    });
                }
            }
            else {
                for(let i = (arr_index - 1); i > arr_index_end; i--) {
                    if(i == (Number(num_of_days))) break;
                    waypts.push({
                        location:new google.maps.LatLng(shelters[i].latitude,shelters[i].longitude)
                    });   
                }
            }
            if(checkbox1_TH.checked) {
                var request = {
                    origin: {lat: shelters[arr_index].latitude, lng: shelters[arr_index].longitude},
                    destination: {lat: shelters[arr_index_end].latitude, lng: shelters[arr_index_end].longitude},
                    waypoints: waypts,
                    travelMode: google.maps.DirectionsTravelMode.WALKING
                };
                directionsService.route(request, function(result, status) {
                    if(status == 'OK') directionsDisplay.setDirections(result);
                });
            }
        }
        else {
            directionsDisplay.set('directions',null);
        }

    });
    checkbox2_TH.addEventListener('change', function () {
        if(checkbox2_TH.checked){
            waypts = [];
            arr_index = Number(arr_index);
            arr_index_end = Number(arr_index_end);
            if(arr_index < arr_index_end) {
                for(let i = (1 + arr_index); i < arr_index_end; i++) {
                    if(i <= (arr_index_end - Number(num_of_days))) continue;
                    waypts.push({
                        location:new google.maps.LatLng(shelters[i].latitude,shelters[i].longitude)
                    });
                }
            }
            else {
                for(let i = (arr_index - 1); i > arr_index_end; i--) {
                    if(i > (arr_index - Number(num_of_days))) continue;
                    waypts.push({
                        location:new google.maps.LatLng(shelters[i].latitude,shelters[i].longitude)
                    });   
                }
            }
            if(checkbox2_TH.checked) {
                var request = {
                    origin: {lat: shelters[arr_index].latitude, lng: shelters[arr_index].longitude},
                    destination: {lat: shelters[arr_index_end].latitude, lng: shelters[arr_index_end].longitude},
                    waypoints: waypts,
                    travelMode: google.maps.DirectionsTravelMode.WALKING
                };
                directionsService.route(request, function(result, status) {
                    if(status == 'OK') directionsDisplay.setDirections(result);
                });
            }
        }
        else {
            directionsDisplay.set('directions',null);
        }
       
    });
    choose_trips_TH.addEventListener('click', function () {
        trip1_hidden = false;
    });
    */


    document.getElementById("hzrdBtn").addEventListener("click", function () {
        var strt = document.getElementById('SL1').value;
        var nd = document.getElementById('EL1').value;
        var com = document.getElementById('cmt').value;

        var strt_long = 0;
        var strt_lat = 0;
        
        var end_long = 0;
        var end_lat = 0;

        console.log("start: " + strt);
        console.log("end: " + nd);
    
        strt_long = shelters[strt].longitude;
        strt_lat = shelters[strt].latitude;
    
        console.log("start long: " + strt_long);
        console.log("start lat: " + strt_lat);
    
        end_long = shelters[nd].longitude;
        end_lat = shelters[nd].latitude;

        console.log("end long: " + end_long);
        console.log("end lat: " + end_lat);

        marker = new google.maps.Marker({
            position: {
            lat: strt_lat, lng:strt_long
            }, 
            map: map,
            title: 'Marker 3',
            icon: '/images/hazard_spots.png'
        
        });
        });


    
}
window.onload = initMap;


function addHaz() {
    //alert("hazardreport")
    
    
    marker.setMap(map);
}

