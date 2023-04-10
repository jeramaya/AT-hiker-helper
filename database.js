//  web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBPmh_3VhPPDQj_HWUSDLpfqNd09p6TKd4",
  authDomain: "athikinghelper.firebaseapp.com",
  projectId: "athikinghelper",
  storageBucket: "athikinghelper.appspot.com",
  messagingSenderId: "984907808152",
  appId: "1:984907808152:web:50db8758ac73fba45abfed"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const db = firebase.firestore()


var NAME

function storedata(){
  /*

The first thing we need to do when the page loads is to run through to see 
how many trips the user has (likely a large for loop). Once we find the 
current # of trips we set a Golbal variable to that number. This variable
will be used in the creationof new trips as "trip" + variable in the following
set structure. The username aka email will also be stored in a global variable
The camps will be variables as well based on the form in which we are using them
for example



  db.collection(emailStringVariable).doc("trip" + numberOfTripsVariable+1).set({
    start: firstcampStringVariable,
    end: SecondCampStringVariable,
    distance: distanceVariable
}).then(() => {
  console.log("Document successfully written!");
})
.catch((error) => {
  console.error("Error writing document: ", error);
});


The get function will be used to populate the saved trips tab which 
will also use the number of trips global variable to create the currently 
saved trips, but instead of hard coding starting & ending locations along
with trip names it will query the database to get that information

*/
console.log(NAME);

db.collection(NAME).doc("trip1").set({
  day1: {
    dayName:"dai 1",
    start:"camp1",
    end:"camp2"
  },
  day2: {
    dayName:"dai 2",
    start:"camp3",
    end:"camp4"
  }
  
}).then(() => {
console.log("Document successfully written!");
})
.catch((error) => {
console.error("Error writing document: ", error);
});

var pass = 1;
nme = "colton1214@gmail.com";
var arr = ["trip1", "trip2", "trip3" ];
for(let i =0; i< 4; i++)
  db.collection(nme).doc(arr[i]).get().then((doc) => {
    if (doc.exists) {
        console.log("dayname: ", doc.data().day1.dayName);
        console.log("end camp: ", doc.data().day1.end);
        console.log("distance: ", doc.data().day1.distance);
        var tst= doc.data().dist //If the thing you're looking for 
        if(!tst)console.log("works");
        
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        pass = 0;
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });

 
}