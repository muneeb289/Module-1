var login = document.getElementById("login").addEventListener("click", loginvalidation, false)


var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;      // Regular expression to check if the password is strong enough

function loginvalidation(e) {
    console.log(456)

    e.preventDefault();
    var loginemail = document.getElementById("email").value
    var loginpassword = document.getElementById("password").value

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(loginemail)) {               //emailcheck
        // alert("ok")
    } else {
        alert("Pls Add proper email")
        document.getElementById("email").focus();

    }
    //  true | false   abc123.match()
    if (!loginpassword.match(passwordRegex)) {
        alert("Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one symbol and one number");
        document.getElementById("password").focus();
        return false;

    }
      console.log(123)

    location.assign('home.html')
}