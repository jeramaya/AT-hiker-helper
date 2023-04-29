
let markersArray = [];

let counter = 1;
const max_days = 4;




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
//Class for each Day of a Trip
class Day {
    constructor(name, startingLocation, endingLocation) {
        this.Name = name;
        this.Starting_Location = startingLocation;
        this.Ending_Location = endingLocation;
    }
}
//Class for each Trip hello
class Trip {
    constructor(name, numberOfDays, days, total_distance, waypoints) {
        this.Name = name;
        this.Number_of_days = numberOfDays;
        this.Days = days;
        this.Total_Distance = total_distance;
        
        this.Waypoints = waypoints;
    }
}
//Class for all savedTrips
class Saved_Trips {
    constructor(numberOfTrips, trips) {
        this.number_of_trips = numberOfTrips;
        this.Trips = trips;
    }
}
//class for all hazards

var saved_trips = new Saved_Trips(0, []);

let hazard_report = [0,0,0,0,0,0,0,0,0,0]
let zeroCmt;
let zeroHaz;
let oneCmt;
let oneHaz;
let twoCmt;
let twoHaz;
let threeHaz;
let threeCmt;
let fourHaz;
let fourCmt;
let fiveHaz;
let fiveCmt;
let sixHaz;
let sixCmt;
let sevenHaz;
let sevenCmt;
let nineHaz;
let nineCmt;

            

let maker_hazard_index = 0;
let marker_hazard_list = new Array(100);
let infowindow_hazard_list  = new Array(100);


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


            const infowindow_marker1_camp = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>Appalachian National Scenic Trail</h1>' +
                '<img src="/images/marker1_camp.jpg" alt="marker1_camp"></img>'+
                '<p>Address: Appalachian National Scenic Trail, Mt Washington, MA 01258</p>'+
                '</div>'
            });
            const infowindow_marker2_camp = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>Appalachian Trail and Guilder Hollow Rd.</h1>'+
                '<img src="/images/marker2_camp.jpg" alt="marker2_camp"></img>'+
                '<p>Address: 256 Guilder Hollow Rd, Egremont, MA 01230</p>'+
                '<p>Some inforamtion about this campsite would be listed here.</p>'+
                '</div>'
            });
            const infowindow_marker3_camp = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>Appalachian Trail</h1>'+
                '<img src="/images/marker3_camp.jpg" alt="marker3_camp"></img>'+
                '<p>Address: Appalachian National Scenic Trail, Great Barrington, MA 01230</p>'+
                '</div>'
            });
            const infowindow_marker4_camp = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>Appalachian Trail</h1>'+
                '<img src="/images/marker4_camp.jpg" alt="marker4_camp"></img>'+
                '<p>Address: Appalachian National Scenic Trail, Monterey, MA 01245</p>'+
                '</div>'
            });
            const infowindow_marker5_camp = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>Appalachian Trail</h1>'+
                '<img src="/images/marker5_camp.jpg" alt="marker5_camp"></img>'+
                '<p>Address: Appalachian Trail, Monterey, MA 01245</p>'+
                '</div>'
            });
            const infowindow_marker6_camp = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>Appalachian Trail - Goose Pond Road</h1>'+
                '<img src="/images/marker6_camp.jpg" alt="marker6_camp"></img>'+
                '<p>Address: Appalachian National Scenic Trail, Lee, MA 01238</p>'+
                '</div>'
            });
            const infowindow_marker7_camp = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>Appalachian Trail</h1>'+
                '<img src="/images/marker7_camp.jpg" alt="marker7_camp"></img>'+
                '<p>Address: Washington, MA 01223</p>'+
                '<p>Some inforamtion about this campsite would be listed here.</p>'+
                '</div>'
            });
            const infowindow_marker8_camp = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>Appalachian Trail Parking (Gulf Road)</h1>'+
                '<img src="/images/marker8_camp.jpg" alt="marker8_camp"></img>'+
                '<p>Address: 71 Gulf Rd, Dalton, MA 01226</p>'+
                '</div>'
            });
            const infowindow_marker9_camp = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>Appalachian Trailhead</h1>'+
                '<img src="/images/marker9_camp.jpg" alt="marker9_camp"></img>'+
                '<p>Address: 149-99 Furnace Hill, Cheshire, MA 01225</p>'+
                '<p>Some inforamtion about this campsite would be listed here.</p>'+
                '</div>'
            });
            const infowindow_marker10_camp = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>Wilbur Clearing Lean-To, Appalachian Trail</h1>'+
                '<img src="/images/marker10_camp.jpg" alt="marker10_camp"></img>'+
                '<p>Address: Williamstown, MA 01267</p>'+
                '<p>Some inforamtion about this campsite would be listed here.</p>'+
                '</div>'
            });
            google.maps.event.addListener(marker1_camp, 'click', function() { infowindow_marker1_camp.open(map,marker1_camp); });
            google.maps.event.addListener(marker2_camp, 'click', function() { infowindow_marker2_camp.open(map,marker2_camp); });
            google.maps.event.addListener(marker3_camp, 'click', function() { infowindow_marker3_camp.open(map,marker3_camp); });
            google.maps.event.addListener(marker4_camp, 'click', function() { infowindow_marker4_camp.open(map,marker4_camp); });
            google.maps.event.addListener(marker5_camp, 'click', function() { infowindow_marker5_camp.open(map,marker5_camp); });
            google.maps.event.addListener(marker6_camp, 'click', function() { infowindow_marker6_camp.open(map,marker6_camp); });
            google.maps.event.addListener(marker7_camp, 'click', function() { infowindow_marker7_camp.open(map,marker7_camp); });
            google.maps.event.addListener(marker8_camp, 'click', function() { infowindow_marker8_camp.open(map,marker8_camp); });
            google.maps.event.addListener(marker9_camp, 'click', function() { infowindow_marker9_camp.open(map,marker9_camp); });
            google.maps.event.addListener(marker10_camp, 'click', function() {infowindow_marker10_camp.open(map,marker10_camp); });

            
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
            const infowindow_marker1_parking = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>Appalachian Trail Parking</h1>' +
                '<img src="images/marker1_parking.jpg" alt="marker1_parking"></img>'+
                '<p>Address: CT-41, Salisbury, CT 06068</p>'+
                '</div>'
            });
            const infowindow_marker2_parking = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>Race Brook Falls Trailhead & Parking</h1>' +
                '<img src="/images/marker2_parking.jpg" alt="marker2_parking"></img>'+
                '<p>Address: 716-732 S Undermountain Rd, Sheffield, MA 01257</p>'+
                '</div>'
            });
            const infowindow_marker3_parking = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>Guilder Pond Parking Area</h1>' +
                '<img src="/images/marker3_parking.jpg" alt="marker3_parking"></img>'+
                '<p>Address: Mt Washington, MA 01258</p>'+                      
                '</div>'
            });
            const infowindow_marker4_parking = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>Appalachian Trail Parking</h1>' +
                '<img src="/images/marker4_parking.jpg" alt="marker4_parking"></img>'+
                '<p>Address: 102-110 Lake Buel Rd, Great Barrington, MA 01230</p>'+                       
                '</div>'
            });
            const infowindow_marker5_parking = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>AT Parking at Massachusetts 183</h1>' +
                '<img src="/images/marker5_parking.jpg" alt="marker5_parking"></img>'+
                '<p>Address: Appalachian National Scenic Trail, Monterey, MA 01245</p>'+                       
                '</div>'
            });
            const infowindow_marker6_parking = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>Appalachian Trail</h1>' +
                '<img src="/images/marker6_parking.jpg" alt="marker6_parking"></img>'+
                '<p>Address: Appalachian National Scenic Trail, Tyringham, MA 01264</p>'+                      
                '</div>'
            });
            const infowindow_marker7_parking = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>Appalachian Trail - Goose Pond Road</h1>' +
                '<img src="/images/marker7_parking.jpg" alt="marker7_parking"></img>'+
                '<p>Address: Appalachian National Scenic Trail, Lee, MA 01238</p>'+                        
                '</div>'
            });
            const infowindow_marker8_parking = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>Jacob\'s Ladder Scenic Byway and Appalachian Trail Parking Area</h1>' +
                '<img src="/images/marker8_parking.jpg" alt="marker8_parking"></img>'+
                '<p>Address: Lee, MA 01238</p>'+                      
                '</div>'
            });
            const infowindow_marker9_parking = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>Appalachian Trail Parking</h1>' +
                '<img src="/images/marker9_parking.jpg" alt="marker9_parking"></img>'+
                '<p>Address: Washington, MA 01223</p>'+
                '</div>'
            });
            const infowindow_marker10_parking = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>Appalachian Trail Parking</h1>' +
                '<img src="/images/marker10_parking.jpg" alt="marker10_parking"></img>'+
                '<p>Address: Washington, MA 01223</p>'+
                '</div>'
            });
            const infowindow_marker11_parking = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>Appalachian Trail Parking (Gulf Road)</h1>' +
                '<img src="/images/marker11_parking.jpg" alt="marker11_parking"></img>'+
                '<p>Address: Washington, MA 01223</p>'+
                '</div>'
            });
            const infowindow_marker12_parking = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>Ashuwillticook Rail Trail parking area</h1>' +
                '<img src="/images/marker12_parking.jpg" alt="marker12_parking"></img>'+
                '<p>Address: Railroad St, Cheshire, MA 01225</p>'+
                '</div>'
            });
            const infowindow_marker13_parking = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>Jones Nose Trailhead</h1>' +
                '<img src="/images/marker13_parking.jpg" alt="marker13_parking"></img>'+
                '<p>Address: Rockwell Rd, New Ashford, MA 01237</p>'+
                '</div>'
            });
            const infowindow_marker14_parking = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>Mt. Greylock Campground Parking Lot</h1>' +
                '<img src="/images/marker14_parking.jpg" alt="marker14_parking"></img>'+
                '<p>Address: Adams, MA 01220</p>'+
                '</div>'
            });
            const infowindow_marker15_parking = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>Appalachian Trail Pattison Road</h1>' +
                '<img src="/images/marker15_parking.jpg" alt="marker15_parking"></img>'+
                '<p>Address: 381 Pattison Rd, North Adams, MA 01247</p>'+
                '</div>'
            });
            const infowindow_marker16_parking = new google.maps.InfoWindow({
                content:'<div>' +
                '<h1>Appalachian Trail Parking</h1>' +
                '<img src="/images/marker16_parking.jpg" alt="marker16_parking"></img>'+
                '<p>State Rd, North Adams, MA 01247</p>'+
                '</div>'
            });
            google.maps.event.addListener(marker1_parking, 'click', function() { infowindow_marker1_parking.open(map,marker1_parking); });
            google.maps.event.addListener(marker2_parking, 'click', function() { infowindow_marker2_parking.open(map,marker2_parking); });
            google.maps.event.addListener(marker3_parking, 'click', function() { infowindow_marker3_parking.open(map,marker3_parking); });
            google.maps.event.addListener(marker4_parking, 'click', function() { infowindow_marker4_parking.open(map,marker4_parking); });
            google.maps.event.addListener(marker5_parking, 'click', function() { infowindow_marker5_parking.open(map,marker5_parking); });
            google.maps.event.addListener(marker6_parking, 'click', function() { infowindow_marker6_parking.open(map,marker6_parking); });
            google.maps.event.addListener(marker7_parking, 'click', function() { infowindow_marker7_parking.open(map,marker7_parking); });
            google.maps.event.addListener(marker8_parking, 'click', function() { infowindow_marker8_parking.open(map,marker8_parking); });
            google.maps.event.addListener(marker9_parking, 'click', function() { infowindow_marker9_parking.open(map,marker9_parking); });
            google.maps.event.addListener(marker10_parking, 'click', function() { infowindow_marker10_parking.open(map,marker10_parking); });
            google.maps.event.addListener(marker11_parking, 'click', function() { infowindow_marker11_parking.open(map,marker11_parking); });
            google.maps.event.addListener(marker12_parking, 'click', function() { infowindow_marker12_parking.open(map,marker12_parking); });
            google.maps.event.addListener(marker13_parking, 'click', function() { infowindow_marker13_parking.open(map,marker13_parking); });
            google.maps.event.addListener(marker14_parking, 'click', function() { infowindow_marker14_parking.open(map,marker14_parking); });
            google.maps.event.addListener(marker15_parking, 'click', function() { infowindow_marker15_parking.open(map,marker15_parking); });
            google.maps.event.addListener(marker16_parking, 'click', function() { infowindow_marker16_parking.open(map,marker16_parking); });
    
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
            if(hazard_report[0]) 
            {
                //zeroHaz = "other"
                //zeroCmt = "comment\nline 2"
                marker1_hazard = new google.maps.Marker({
                    position: {
                        lat: shelters[0].latitude, lng: shelters[0].longitude
                    },
                    map: map,
                    title: 'Marker 1',
                    icon: '/images/hazard_spots.png',   
                });
                    
                google.maps.event.addListener(marker1_hazard, 'click', function() {
                    var infowindow_marker1_hazard = new google.maps.InfoWindow({
                        content:'<div>' +
                        '<h1>Type of Hazard:</h1>' +
                        '<p>'+zeroHaz+'</p>'+
                        '<h2>User Comment</h2>' +
                        '<textArea readonly style = "min-width:200px; min-height:100px; max-width:200px; max-height:100px; resize:none; border: none; outline: none;">'+zeroCmt+'</textArea>'+
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
                var infowindow_marker2_hazard = new google.maps.InfoWindow({
                    content:'<div>' +
                        '<h1>Type of Hazard:</h1>' +
                        '<p>'+oneHaz+'</p>'+
                        '<h2>User Comment</h2>' +
                        '<textArea readonly style = "min-width:200px; min-height:100px; max-width:200px; max-height:100px; resize:none; border: none; outline: none;">'+oneCmt+'</textArea>'+
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
                        '<h1>Type of Hazard:</h1>' +
                        '<p>'+twoHaz+'</p>'+
                        '<h2>User Comment</h2>' +
                        '<textArea readonly style = "min-width:200px; min-height:100px; max-width:200px; max-height:100px; resize:none; border: none; outline: none;">'+twoCmt+'</textArea>'+
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
                        '<h1>Type of Hazard:</h1>' +
                        '<p>'+threeHaz+'</p>'+
                        '<h2>User Comment</h2>' +
                        '<textArea readonly style = "min-width:200px; min-height:100px; max-width:200px; max-height:100px; resize:none; border: none; outline: none;">'+threeCmt+'</textArea>'+
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
                    '<h1>Type of Hazard:</h1>' +
                    '<p>'+fourHaz+'</p>'+
                    '<h2>User Comment</h2>' +
                    '<textArea readonly style = "min-width:200px; min-height:100px; max-width:200px; max-height:100px; resize:none; border: none; outline: none;">'+fourCmt+'</textArea>'+
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
                        '<h1>Type of Hazard:</h1>' +
                        '<p>'+fiveHaz+'</p>'+
                        '<h2>User Comment</h2>' +
                        '<textArea readonly style = "min-width:200px; min-height:100px; max-width:200px; max-height:100px; resize:none; border: none; outline: none;">'+fiveCmt+'</textArea>'+
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
                        '<h1>Type of Hazard:</h1>' +
                        '<p>'+sixHaz+'</p>'+
                        '<h2>User Comment</h2>' +
                        '<textArea readonly style = "min-width:200px; min-height:100px; max-width:200px; max-height:100px; resize:none; border: none; outline: none;">'+sixCmt+'</textArea>'+
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
                        '<h1>Type of Hazard:</h1>' +
                        '<p>'+sevenHaz+'</p>'+
                        '<h2>User Comment</h2>' +
                        '<textArea readonly style = "min-width:200px; min-height:100px; max-width:200px; max-height:100px; resize:none; border: none; outline: none;">'+sevenCmt+'</textArea>'+
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
                        '<h1>Type of Hazard:</h1>' +
                        '<p>'+eightHaz+'</p>'+
                        '<h2>User Comment</h2>' +
                        '<textArea readonly style = "min-width:200px; min-height:100px; max-width:200px; max-height:100px; resize:none; border: none; outline: none;">'+eightCmt+'</textArea>'+
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
                        '<h1>Type of Hazard:</h1>' +
                        '<p>'+nineHaz+'</p>'+
                        '<h2>User Comment</h2>' +
                        '<textArea readonly style = "min-width:200px; min-height:100px; max-width:200px; max-height:100px; resize:none; border: none; outline: none;">'+nineCmt+'</textArea>'+
                        '</div>'
                        });
                infowindow_marker10_hazard.open(map,marker10_hazard);
            });
        }

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
          
    
    /////////////////////////////////////////////////////////////////////
    //
    // Work for the custom Trips Below
    //
    /////////////////////////////////////////////////////////////////////
    
    // Add event listener for startingLocationSelect
    startingLocationSelect.addEventListener("change", () => {
        // Get the selected value
        const selectedStartingLocationName = startingLocationSelect.value;
    
        var endingLoc = $('#ending-location').val();
        if(endingLoc == '') {
            endingLoc = 0;
        }
        var request = {
            origin: {lat: shelters[selectedStartingLocationName].latitude, lng: shelters[selectedStartingLocationName].longitude},
            destination: {lat: shelters[endingLoc].latitude, lng: shelters[endingLoc].longitude},
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

        var startingLoc = $('#starting-location').val();
        if(startingLoc == '') {
            startingLoc = 0;
        }
        var request = {
            origin: {lat: shelters[startingLoc].latitude, lng: shelters[startingLoc].longitude},
            destination: {lat: shelters[selectedEndingLocationName].latitude, lng: shelters[selectedEndingLocationName].longitude},
            travelMode: google.maps.DirectionsTravelMode.WALKING
        };
        directionsService.route(request, function(result, status) {
            if(status == 'OK') directionsDisplay.setDirections(result);
        });
    });

    
    // define a global array to store the marker data
    let savedMarkers = [];

    // add event listener to "Save Trips" button
    const saveButton = document.querySelector('.Save-Trips');
    saveButton.addEventListener('click', saveMarkers);

    // function to save the marker data
    function saveMarkers() {
   
    $('.Custom-Trip3').css({display:'none'});
    console.log('Markers saved:', savedMarkers);
    
    }
    ///////////////////////////////////////////////////////////////////
    //
    // Work for the Saved Trips Below
    //
    /////////////////////////////////////////////////////////////////////
    
    var saved_trips_tab = document.getElementById('saved_button');
    saved_trips_tab.addEventListener('click', function () {
        document.getElementById('saved_trips_box').innerHTML = '';
        for(let i = 0; i < saved_trips.number_of_trips; i++) {
            document.getElementById('saved_trips_box').innerHTML += `<div id="saved_trip${i}_box" class="Saved_Trip_Box" >`
            +`<label for="trip${i}"><b>${saved_trips.Trips[i].Name}</b></label>`
            +` <input class = "chkbx" id="saved_trip${i}" type="checkbox" onclick = "chkbox(${i})" name="trip${i}" required>`
            +`<p class = "Distance-of-Hike">Total Distance: ${saved_trips.Trips[i].Total_Distance} Miles</p>`
            +`</div>`;
        } 
        const trip = new Array(saved_trips.number_of_trips);
        for(let i = 0; i < saved_trips.number_of_trips; i++) {
            trip[i] = document.getElementById(`saved_trip${i}`);
            trip[i].addEventListener('change', function () {
                if(trip[i].checked) {
                    waypts = [];
                    if(saved_trips.Trips[i].Waypoints.length != 0) {
                        for(let j = saved_trips.Trips[i].Waypoints[0]; j <= saved_trips.Trips[i].Waypoints[saved_trips.Trips[i].Waypoints.length - 1]; j++) {
                            waypts.push({
                                location:new google.maps.LatLng(shelters[j].latitude,shelters[j].longitude)
                            });
                        }
                    }
                    var request = {
                        origin: {lat: shelters[saved_trips.Trips[i].Days[0].Starting_Location].latitude, lng: shelters[saved_trips.Trips[i].Days[0].Starting_Location].longitude},
                        destination: {lat: shelters[saved_trips.Trips[i].Days[saved_trips.Trips[i].Days.length - 1].Ending_Location].latitude, lng: shelters[saved_trips.Trips[i].Days[saved_trips.Trips[i].Days.length - 1].Ending_Location].longitude},
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
        }
        console.log(saved_trips);
    });
    
   
    // Add the sidebar to the map
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(sidebar);

   
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
    var arr_index, arr_index_end, distance = 0, waypoints_int = [], num_of_days = 1;
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
        }
        document.getElementById('TH_Trip1').innerHTML = "Total Distance: " + distance + " miles";
        document.getElementById('TH_Trip2').innerHTML = "Total Distance: " + distance + " miles";

    });
    checkbox1_TH.addEventListener('change', function () {
        if(checkbox1_TH.checked){
            waypts = [];
            waypoints_int = [];
            arr_index = Number(arr_index);
            arr_index_end = Number(arr_index_end);
            if(arr_index < arr_index_end) {
                for(let i = (1 + arr_index); i < arr_index_end; i++) {
                    if(waypoints_int.length == (Number(num_of_days)-1)) break;
                    waypts.push({
                        location:new google.maps.LatLng(shelters[i].latitude,shelters[i].longitude)
                    });
                    waypoints_int.push(i);
                }
            }
            else {
                for(let i = (arr_index - 1); i > arr_index_end; i--) {
                    if(waypoints_int.length == (Number(num_of_days)-1)) break;
                    waypts.push({
                        location:new google.maps.LatLng(shelters[i].latitude,shelters[i].longitude)
                    });
                    waypoints_int.push(i);   
                }
            }
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
    checkbox2_TH.addEventListener('change', function () {
        if(checkbox2_TH.checked){
            waypts = [];
            waypoints_int = [];
            arr_index = Number(arr_index);
            arr_index_end = Number(arr_index_end);
            if(arr_index < arr_index_end) {
                for(let i = (1 + arr_index); i < arr_index_end; i++) {
                    if(i <= (arr_index_end - Number(num_of_days))) continue;
                    if(waypoints_int.length == (Number(num_of_days)-1)) break;
                    waypts.push({
                        location:new google.maps.LatLng(shelters[i].latitude,shelters[i].longitude)
                    });
                    waypoints_int.push(i);
                }
            }
            else {
                for(let i = (arr_index - 1); i > arr_index_end; i--) {
                    if(i > (arr_index - Number(num_of_days))) continue;
                    if(waypoints_int.length == (Number(num_of_days)-1)) break;
                    waypts.push({
                        location:new google.maps.LatLng(shelters[i].latitude,shelters[i].longitude)
                    });   
                    waypoints_int.push(i);
                }
            }
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
    
    //This is the Button that creates the trip, once all specs have been chosen
    choose_trips_TH.addEventListener('click', function () {
        var trip_name = document.getElementById('Numb');
        const trip_TH = new Trip(trip_name.value, Number(num_of_days), [], distance, waypoints_int);
        console.log("Waypoints Length: " + waypoints_int.length);
        for(let i = 0; i <= waypoints_int.length; i++) {
            if(waypoints_int.length == 0) { //if there is only 1 day
                const day = new Day(`Day ${i+1}`, arr_index, arr_index_end);
                trip_TH.Days.push(day);
            }
            else if(i == 0){
                const day = new Day(`Day ${i+1}`, arr_index, waypoints_int[i]);
                trip_TH.Days.push(day);
            }else if(i == waypoints_int.length) {
                const day = new Day(`Day ${i+1}`, waypoints_int[i-1], arr_index_end);
                trip_TH.Days.push(day);
            }else {
                const day = new Day(`Day ${i+1}`, waypoints_int[i-1], waypoints_int[i]);
                trip_TH.Days.push(day);
            }
        }
        UploadTrip(trip_TH);
        DownloadTrips();
    });

}
//////////////////////////////////////////////////////////////////////////////
//
//
// Starting Main Function Up
//
//
//////////////////////////////////////////////////////////////////////////////

window.onload = function () {
    if(document.readyState == 'complete') {
        initMap;
    }
   
}

//////////////////////////////////////////////////////////////////////////////
//
//
// Hazard Report Code
//
//
//////////////////////////////////////////////////////////////////////////////

function addHaz(hz, cm, campp) {
    //alert("hazardreport")
    var hazType = hz;
    console.log("hazType", hz);
    var userComment = cm;
    console.log("comment", cm);
    console.log("camp", campp);

    switch(Number(campp)){
        case 0:
            zeroCmt = userComment;
            zeroHaz = hazType;
            hazard_report[0] = 1;
            break;
        case 1:
            oneCmt = userComment;
            oneHaz = hazType;
            hazard_report[1] = 1;
            break;
        case 2:
            twoCmt = userComment;
            twoHaz = hazType;
            hazard_report[2] = 1;
            break;
        case 3:
            threeCmt = userComment;
            threeHaz = hazType;
            hazard_report[3] = 1;
            break;
        case 4:
            fourCmt = userComment;
            fourHaz = hazType;
            hazard_report[4] = 1;
            break;
        case 5:
            fiveCmt = userComment;
            fiveHaz = hazType;
            hazard_report[5] = 1;
            break;
        case 6:
            sixCmt = userComment;
            sixHaz = hazType;
            hazard_report[6] = 1;
            break;
        case 7:
            sevenCmt = userComment;
            sevenHaz = hazType;
            hazard_report[7] = 1;
            break;
        case 8:
            eightCmt = userComment;
            eightHaz = hazType;
            hazard_report[8] = 1;
            break;
        case 9:
            nineCmt = userComment;
            nineHaz = hazType;
            hazard_report[9] = 1;
            break;
    }
    
    //marker.setMap(map);
}

//////////////////////////////////////////////////////////////////////////////
//
//
// Functions used by Custom Trip
//
//
//////////////////////////////////////////////////////////////////////////////

function chkbox(gum){
    var elements = document.getElementsByClassName('chkbx');
    for (let i = 0; i < elements.length; i++) {
        elements[i].checked = false;
    }

    document.getElementById("saved_trip"+ gum).checked = true;
}


var waypoints_int_CT = [];
var num_of_days_CT = 0;
var days_CT = [];    
var distance_CT = 0;

function CustomTripStart() {
    waypoints_int_CT = [];
    num_of_days_CT = 0;
    days_CT = [];
    distance_CT = 0;
    counter = 1;
    let day = document.getElementById("Day-Number");
    day.innerHTML = "Day " + 1;
}

function AddDays() {
        
    const dayTitle = document.getElementById("Day-Title").value;
    const startingLocation = document.getElementById("starting-location").value;
    const endingLocation = document.getElementById("ending-location").value;
    
    let day = document.getElementById("Day-Number");
    let dayValue = day.innerHTML.split(" ")[1]; 
    let newDayValue = parseInt(dayValue) + 1; 
    day.innerHTML = "Day " + newDayValue;

    if (counter >= max_days) {
        const newDay = new Day(dayTitle, startingLocation, endingLocation);
        for(let i = startingLocation; i < endingLocation; i++) {
            distance_CT += distances[i];
        }
        num_of_days_CT = counter;
        waypoints_int_CT.push(Number(endingLocation));
        days_CT.push(newDay);
        document.getElementById("Day-Title").value = "";
        const addDayButton = document.getElementById("add-day-btn");
        addDayButton.disabled = true;
    } else {
        const newDay = new Day(dayTitle, startingLocation, endingLocation);
        for(let i = startingLocation; i < endingLocation; i++) {
            distance_CT += distances[i];
        }
        num_of_days_CT = counter;
        waypoints_int_CT.push(Number(endingLocation));
        days_CT.push(newDay);
        document.getElementById("Day-Title").value = "";
        counter++;
        console.log(counter);
    }
}
    

    
function SaveTrips() {
    const dayTitle = document.getElementById("Day-Title").value;
    const startingLocation = document.getElementById("starting-location").value;
    const endingLocation = document.getElementById("ending-location").value;

    if (counter >= max_days) {
        const addDayButton = document.getElementById("add-day-btn");
        addDayButton.disabled = true;
    } else {
        const newDay = new Day(dayTitle, startingLocation, endingLocation);
        for(let i = startingLocation; i < endingLocation; i++) {
            distance_CT += distances[i];
        }
        num_of_days_CT = counter;
        days_CT.push(newDay);
       
    }

    var trip_name = document.getElementById("trip_name_textbox");
    const trip_CT = new Trip(trip_name.value, Number(num_of_days_CT), days_CT, distance_CT, waypoints_int_CT);
    console.log(trip_CT);
    UploadTrip(trip_CT);
    DownloadTrips();
}
  