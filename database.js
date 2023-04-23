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

var NAME;

db.collection("User").doc("user").get().then((doc) => {
  if (doc.exists) {
      NAME =  doc.data().UserEmail //If the thing you're looking for 
      
  } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    
  }
}).catch((error) => {
  console.log("Error getting document:", error);
});





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

console.log(saved_trips);


/*
*
*
*The Following code is used for getting all the trips from the database if they exist. In order to use them in the Saved Trips tab
* the console.log("TripName: ", trip_TH_1.Name); should be replaced with the code to add it to the saved trips object
*
*
*
*/

var trip_TH_1;

//Get the Number or Trips
var tripNum;
  db.collection(NAME).doc("NumTrips").get().then((doc) => {
    if (doc.exists) {
      tripNum = doc.data().NextTripNum;
      console.log("Number of trips + 1 =", tripNum);
    }else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
     
  }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });

for(let i=1; i < tripNum; i++){
  
  db.collection(NAME).doc('trip'+i).get().then((doc) => {
    if (doc.exists) {
        if(doc.data()){
          console.log("tripname", doc.data().TripName);
          console.log(doc.data().NumberOfDays);
          console.log(doc.data().distance);
          console.log(doc.data().Days.Day1.DayName);
          console.log(doc.data().Days.Day1.start);
          console.log(doc.data().Days.Day1.end);
  
          trip_TH_1 = new Trip(doc.data().TripName, doc.data().NumberOfDays, [], doc.data().distance);
          if(doc.data().Days.Day1){
            const day = new Day(doc.data().Days.Day1.DayName, doc.data().Days.Day1.start, doc.data().Days.Day1.end);
            trip_TH_1.Days.push(day);
          }
          if(doc.data().Days.Day2){
            const day = new Day(doc.data().Days.Day2.DayName, doc.data().Days.Day2.start, doc.data().Days.Day2.end);
            trip_TH_1.Days.push(day);
          }
          if(doc.data().Days.Day3){
            const day = new Day(doc.data().Days.Day3.DayName, doc.data().Days.Day3.start, doc.data().Days.Day3.end);
            trip_TH_1.Days.push(day);
          }
          if(doc.data().Days.Day4){
            const day = new Day(doc.data().Days.Day4.DayName, doc.data().Days.Day4.start, doc.data().Days.Day4.end);
            trip_TH_1.Days.push(day);
          }
          if(doc.data().Days.Day5){
            const day = new Day(doc.data().Days.Day5.DayName, doc.data().Days.Day5.start, doc.data().Days.Day5.end);
            trip_TH_1.Days.push(day);
          }
        }
        

        console.log("TripName: ", trip_TH_1.Name);


    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });

}




  /*

db.collection(NAME).doc("trip1").set({
  
  
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

 */
}

function addTrip(tripObj){
  var tripNum;
  db.collection(NAME).doc("NumTrips").get().then((doc) => {
    if (doc.exists) {
      tripNum = doc.data().NumTrips.NextTripNum;
    }else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      pass = 0;
  }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });

  switch(tripObj.Number_of_days){
    case 1:
      db.collection(NAME).doc("trip"+tripNum).set({
        TripName: tripObj.Name,
        NumberOfDays:tripObj.Number_of_days,
        distance: tripObj.Total_Distance,
        Days: {
          Day1:{
            DayName:"",
            start:"",
            end:""
          }
        }
      
      }).then(() => {
      console.log("Document successfully written!");
      db.collection(NAME).doc("NumTrips").set({
        NextTripNum: tripNum + 1
      });
      })
      .catch((error) => {
      console.error("Error writing document: ", error);
      });
      break;


    case 2:
      db.collection(NAME).doc("trip"+tripNum).set({
        TripName:"",
        NumberOfDays:5,
        distance: 12,
        Days: {
          Day1:{
            DayName:"",
            start:"",
            end:""
          },
          Day2:{
            DayName:"",
            start:"",
            end:""
          }
        }
        
          
      }).then(() => {
      console.log("Document successfully written!");
      db.collection(NAME).doc("NumTrips").set({
        NextTripNum: tripNum + 1
      });
      })
      .catch((error) => {
      console.error("Error writing document: ", error);
      });
      break;




    case 3:
      db.collection(NAME).doc("trip"+tripNum).set({
        TripName:"",
        NumberOfDays:5,
        distance: 12,
        Days: {
          Day1:{
            DayName:"",
            start:"",
            end:""
          },
          Day2:{
            DayName:"",
            start:"",
            end:""
          },
          Day3:{
            DayName:"",
            start:"",
            end:""
          },
        }
        
          
      }).then(() => {
      console.log("Document successfully written!");
      db.collection(NAME).doc("NumTrips").set({
        NextTripNum: tripNum + 1
      });
      })
      .catch((error) => {
      console.error("Error writing document: ", error);
      });
      break;



    case 4:
      db.collection(NAME).doc("trip"+tripNum).set({
        TripName:"",
        NumberOfDays:5,
        distance: 12,
        Days: {
          Day1:{
            DayName:"",
            start:"",
            end:""
          },
          Day2:{
            DayName:"",
            start:"",
            end:""
          },
          Day3:{
            DayName:"",
            start:"",
            end:""
          },
          Day4:{
            DayName:"",
            start:"",
            end:""
          }
        }
        
          
      }).then(() => {
      console.log("Document successfully written!");
      db.collection(NAME).doc("NumTrips").set({
        NextTripNum: tripNum + 1
      });
      })
      .catch((error) => {
      console.error("Error writing document: ", error);
      });
      break;




    case 5:
      db.collection(NAME).doc("trip"+tripNum).set({
        TripName:"",
        NumberOfDays:5,
        distance: 12,
        Days: {
          Day1:{
            DayName:"",
            start:"",
            end:""
          },
          Day2:{
            DayName:"",
            start:"",
            end:""
          },
          Day3:{
            DayName:"",
            start:"",
            end:""
          },
          Day4:{
            DayName:"",
            start:"",
            end:""
          },
          Day5:{
            DayName:"",
            start:"",
            end:""
          }
        }
        
          
      }).then(() => {
      console.log("Document successfully written!");
      db.collection(NAME).doc("NumTrips").set({
        NextTripNum: tripNum + 1
      });
      })
      .catch((error) => {
      console.error("Error writing document: ", error);
      });
      break;

  }
  

  

}


function logout(){
  auth.signOut().then(() => {
    alert('yes');
  }).catch((error) => {
    alert("no" + error);
  });
  location.href = '/index.html'

}
