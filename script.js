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
const auth = firebase.auth();
const db = firebase.firestore();


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


db.collection("coltonc1214@gmail.com").doc("trip1").set({
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
nme = "coltonc1214@gmail.com";
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
// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}





function setup_account_openForm() {
  document.getElementById("setup-account").style.display = "block";
  document.getElementById("login").style.display = "none";
  document.getElementById("forgot-password").style.display = "none";
  document.getElementById("verify-code").style.display = "none";
  document.getElementById("change-password").style.display = "none";
}

function setup_account_closeForm() {
  document.getElementById("setup-account").style.display = "none";
}

function login_openForm() {
  document.getElementById("login").style.display = "block";
  document.getElementById("setup-account").style.display = "none";
  document.getElementById("forgot-password").style.display = "none";
  document.getElementById("verify-code").style.display = "none";
  document.getElementById("change-password").style.display = "none";
}

function login_closeForm() {
  document.getElementById("login").style.display = "none";
}

function forgot_password_openForm() {
  document.getElementById("forgot-password").style.display = "block";
  document.getElementById("login").style.display = "none";
}

function forgot_password_closeForm() {
  document.getElementById("forgot-password").style.display = "none";
  
}

function verify_code_openForm() {

auth.sendPasswordResetEmail(document.getElementById("for-email").value)
  .then(function() {
    // Password reset email sent.
    document.getElementById("forgot-password").style.display = "none";
    document.getElementById("verify-code").style.display = "block";
  })
  .catch(function(error) {
    alert("Failed")
  });
  
  
}

function verify_code_closeForm() {
  document.getElementById("verify-code").style.display = "none";
}

function change_password_openForm() {
  
  code_validate();
}

function change_password_closeForm() {
  document.getElementById("change-password").style.display = "none";
}

function create_account_validate() {
  var a = document.getElementById("pwd1").value;
  var b = document.getElementById("pwd2").value;
  
  if(a == b)
  {
      email = document.getElementById('email').value
      password = document.getElementById('pwd1').value
      full_name = document.getElementById('full_name').value
      NAME = email;
     
      // Validate input fields
      if (validate_email(email) == false) {
        document.querySelector('#b0').insertAdjacentHTML("afterbegin","<p id = 'message'>Invalid Email</p>");
        return
        // Don't continue running the code
      }
      if(validate_password(password) == false){
        document.querySelector('#b0').insertAdjacentHTML("afterbegin","<p id = 'message'>Invalid Password</p>");

      }
     
     
      // Move on with Auth
      auth.createUserWithEmailAndPassword(email, password)
      .then(function() {
        // Declare user variable
        var user = auth.currentUser
    
        // Add this user to Firebase Database
        
    
        // Create User data
        var user_data = {
          email : email,
          full_name : full_name,
          last_login : Date.now()
        }
    
        // Push to Firebase Database
        
    
        // DOne
        
        db.collection("User").doc("user").set({
            UserEmail: email
          
        });

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
        
        document.getElementById("cre").style.display = 'none';
        document.getElementById("cre2").style.display = 'block';
      })
      .catch(function(error) {
        // Firebase will use this to alert of its errors
        var error_code = error.code
        var error_message = error.message
    
        document.querySelector('#b0').insertAdjacentHTML("afterbegin","<p id = 'message'>"+error_message+ "</p>");
      })
  }
  else
  {
      $('#message').remove();
      document.querySelector('#b0').insertAdjacentHTML("afterbegin","<p id = 'message'>Password don't match</p>");
  }
}


function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


function login_validate() {

  var check = 0;

  email = document.getElementById('user').value
  password = document.getElementById('password').value
  NAME = email
  
  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
      $('#message').remove();
      document.querySelector('#b1').insertAdjacentHTML("afterbegin","<p id = 'message'>Username or password is incorrect</p>");
    return
    // Don't continue running the code
  }

  auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    

    // Create User data
    var user_data = {
      last_login : Date.now()
    }

    // Push to Firebase Database
    

    // DOne
    
    db.collection("User").doc("user").set({
      UserEmail: email
    
    });
    
    
    
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
    //location.href="Mainpage.html";
    document.getElementById("logg").style.display = 'none';
    document.getElementById("log2").style.display = 'block';
    
    
    
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message
    

  
    $('#message').remove();
      document.querySelector('#b1').insertAdjacentHTML("afterbegin","<p id = 'message'>"+error_message+"</p>");
  })
  
    
}
function login(){
  
  location.href = '/Mainpage.html';
    
}

function email_validate() {
  if(document.getElementById("email").value == "user")
  {
      location.href="valid.html";
  }
  else
  {
      /*$('#message').remove();
      document.querySelector('#b').insertAdjacentHTML("afterbegin","<p id = 'message'>email is envalid</p>");
  */
 }
}

function code_validate() {
  if(document.getElementById("verifyCode").value == "123")
  {
      document.getElementById("verify-code").style.display = "none";
      document.getElementById("change-password").style.display = "block";
  
      //alert(document.getElementById("verify-code").value);
      //alert(document.getElementById("verifyCode").value);
  }
  else
  {
      $('#message').remove();
      document.querySelector('#b3').insertAdjacentHTML("afterbegin","<p id = 'message'>incorrect number</p>");
  }
}

function change_password_validate() {
  var a = document.getElementById("password1").value;
  var b = document.getElementById("password2").value;
  
  if(a == b)
  {
      login_openForm();
  }
  else
  {
      $('#message').remove();
      document.querySelector('#b4').insertAdjacentHTML("afterbegin","<p id = 'message'>Password don't match</p>");
  }
}








