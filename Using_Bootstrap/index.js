

var login = document.getElementById("login").addEventListener("click", loginvalidation, false)

var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,10}$/;      // Regular expression to check if the password is strong enough


function loginvalidation(e) {
    e.preventDefault();
    var loginemail = document.getElementById("email").value
    var loginpassword = document.getElementById("password").value

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(loginemail)) {               //emailcheck
        // alert("ok")
    } else {
        alert("Pls Add proper email")
        document.getElementById("email").focus();
        return false;

    }

    if (!loginpassword.match(passwordRegex)) {
        alert("Password must be 8 to 10 characters long and contain at least one lowercase letter, one uppercase letter, at least one symbol and one number");
        document.getElementById("password").focus();
        return false;

    }
    // console.log(123)
    location.replace('home.html')

}