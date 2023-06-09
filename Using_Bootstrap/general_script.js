var sidebar = document.querySelector("col1");
var mainContent = document.querySelector("col2");
let collapse = true;

document.getElementById("nav").addEventListener("click", collaps, false)


function collaps() {
    if (collapse) {

        document.getElementById("div_home_icon").innerHTML = `<a href="./home.html"><p>Home</p></a>`;
        document.getElementById("div_user_icon").innerHTML = `<a href="./profile.html"><p>Profile</p></a>`;
        document.getElementById("div_au_icon").innerHTML = `<a href="./about.html"><p>About Us</p></a>`;
        document.getElementById("div_cu_icon").innerHTML = `<a href="./contact-us.html"><p>Contact US</p></a>`;
        
        
        document.getElementById("div_lo_icon").innerHTML = `<p>Log Out</p>`;
        document.getElementById("nav").setAttribute("class", "col1")
        document.getElementById("contarea").setAttribute("class", "col2")
        console.log(123)

        collapse = false;
    }
    else {
        document.getElementById("nav").setAttribute("class", "col3")
        document.getElementById("contarea").setAttribute("class", "col4")

        document.getElementById("div_home_icon").innerHTML = `<img id="home_icon" class="nav_col_icon" src="./images/home.svg" alt="Home">`;
        document.getElementById("div_user_icon").innerHTML = `<img id="user_icon" class="nav_col_icon" src="./images/user.svg" alt="Profile">`;
        document.getElementById("div_au_icon").innerHTML = `<img id="au_icon" class="nav_col_icon" src="./images/au.svg" alt="About Us">`;
        document.getElementById("div_cu_icon").innerHTML = `<img id="cu_icon" class="nav_col_icon" src="./images/cu.svg" alt="Contact Us">`;
        document.getElementById("div_lo_icon").innerHTML = `<img id="lo_icon" class="nav_col_icon" src="./images/lo.svg" alt="Log Out">`;

        collapse = true;

    }

}

document.getElementById("div_lo_icon").addEventListener('click', () => {
    location.replace('index.html')
})
