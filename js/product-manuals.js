function toggleSideNav() {
    document.getElementById("slide-out").style.display = "block";
    document.getElementById("hidden_div").style.display = "none";

}
document.querySelector(".arrow-right-main").addEventListener("click", toggleSideNav);




function showDiv(divId, element) {
    document.getElementById("slide-out").style.display = "none";
    document.getElementById("hidden_div").style.display = "block"
    document.getElementById(divId).style.display = element.value != "Select Your Device Brand" ? 'block' : 'none';
}