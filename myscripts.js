var sf = document.getElementById('sf').addEventListener("click", submitForm, false)

function submitForm(e) {
    e.preventDefault();
    var fnametrim = fname.value.trim();
    // console.log(fnametrim.split(""))
    if (fnametrim.length == 0) {
        alert("Pls Fill Full Name")
        document.getElementById("fname").focus();

    } else {
        if (fnametrim[0] !== fnametrim[0].toUpperCase()) {
            alert(fname.value + " The first letter of the FullName is not a capital letter.\n FullName should start with a capital letter.");
            document.getElementById("fname").focus();
        } else {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(femail.value)) {               //emailcheck
                // alert("Pls Add proper email")
            } else {
                alert("Pls Add proper email")
                document.getElementById("femail").focus();
            }
        }
    }
}
