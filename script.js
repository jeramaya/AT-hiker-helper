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
    document.getElementById("verify-code").style.display = "none";
    document.getElementById("change-password").style.display = "block";
}

function change_password_closeForm() {
    document.getElementById("change-password").style.display = "none";
}