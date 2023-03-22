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
    document.getElementById("forgot-password").style.display = "none";
    document.getElementById("verify-code").style.display = "block";
    
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
        location.href="valid.html";
    }
    else
    {
        $('#message').remove();
        document.querySelector('#b0').insertAdjacentHTML("afterbegin","<p id = 'message'>Password don't match</p>");
    }
}

function login_validate() {
    if(   document.getElementById("user").value == "user"
       && document.getElementById("password").value == "password" )
    {
        location.href="valid.html";
    }
    else
    {
        $('#message').remove();
        document.querySelector('#b1').insertAdjacentHTML("afterbegin","<p id = 'message'>Username or password is incorrect</p>");
    }
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