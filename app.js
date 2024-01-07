let navMenu = document.getElementById("nav-menu");
let newUsername = document.getElementById("new-username").value;
let newEmail = document.getElementById("new-email").value;
let newPassword = document.getElementById("new-password").value;
let loginForm = document.getElementById('login-form');
let signupForm = document.getElementById('signup-form');
let loginLink = document.getElementById('login-link');
let signupLink = document.getElementById('signup-link');
let username = document.getElementById("username")
let new_username = document.getElementById("new-username")
let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Responsive sidebar
function showMenu(){
    navMenu.style.right = "0";
}
function hideMenu(){
    navMenu.style.right = "-200px";
}

// Switch login & Signup
loginLink.addEventListener('click', (event) => {
    event.preventDefault();
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
});
signupLink.addEventListener('click', (event) => {
    event.preventDefault();
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
});

// Password Validation
function validatePassword(password) {
    return passwordRegex.test(password);
}

// Login / Signup successful
function login() {
    alert(username.value+", You are now logged in.")
}
function signup() {
    if (!validatePassword(newPassword)) {
        alert("Password must have at least 1 capital letter, minimum 8 characters, at least 1 symbol, and at least 1 number.");
    }
    if (validatePassword(newPassword)) {
        alert(newUsername + ", You successfully created an account!");
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}

