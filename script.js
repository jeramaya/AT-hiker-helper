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
const database = firebase.database()

var NAME

// Set up our register function
function register () {
  // Get input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value
  full_name = document.getElementById('full_name').value
  
  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is incorrect')
    return
    // Don't continue running the code
  }
 
 
  // Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      email : email,
      full_name : full_name,
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).set(user_data)

    // DOne
    alert('User Created!!')
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}

// Set up our login function
function login () {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return
    // Don't continue running the code
  }

  auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).update(user_data)

    // DOne
   

  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
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
        var database_ref = database.ref()
    
        // Create User data
        var user_data = {
          email : email,
          full_name : full_name,
          last_login : Date.now()
        }
    
        // Push to Firebase Database
        database_ref.child('users/' + user.uid).set(user_data)
    
        // DOne
        
        
        location.href="Mainpage.html";
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

function login_validate() {



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
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).update(user_data)

    // DOne
    
    
    location.href="Mainpage.html";

  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

  
    $('#message').remove();
      document.querySelector('#b1').insertAdjacentHTML("afterbegin","<p id = 'message'>"+error_message+"</p>");
  })


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








