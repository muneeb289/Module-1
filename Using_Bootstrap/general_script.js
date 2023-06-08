var sidebar = document.querySelector("col1");
var mainContent = document.querySelector("col2");
let collapse = true;

document.getElementById("nav").addEventListener("click", collaps, false)


function collaps() {
    if (collapse) {
        document.getElementById("nav").setAttribute("class", "col1")
        document.getElementById("contarea").setAttribute("class", "col2")
        collapse = false;
    }
    else {
        document.getElementById("nav").setAttribute("class", "col3")
        document.getElementById("contarea").setAttribute("class", "col4")
        collapse = true;
    }

}
