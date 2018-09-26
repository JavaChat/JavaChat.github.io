function toggleMobileNav() {
    var element = document.getElementById("nav-links");
    var display = element.style.display;
    if(display == "block"){
        element.style.display = "none";
    } else element.style.display = "block";
}