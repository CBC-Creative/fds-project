function toggleSideNav() {
    document.getElementById("slide-out").style.display = "block";
    document.getElementById("hidden_div").style.display = "none";

}
document.querySelector(".input-circle").addEventListener("click", toggleSideNav);
document.querySelector(".arrow-right-main").addEventListener("click", toggleSideNav);



$('.crc-number-div .input-circle').click(function () {
        $('.arrow-right-main').addClass('arrow-down');
        $('.placeholder-active').val("Select Category");
        $('.select-circle').removeClass("selected-category");
});
$('.arrow-right-main').click(function () {
    $('.arrow-right-main').addClass('arrow-down');
    $('.placeholder-active').val("Select Category");
    $('.select-circle').removeClass("selected-category");
});
$('.placeholder-active').click(function () {
    $('.arrow-right-main').removeClass('arrow-down');
    $('.input-circle').val("Enter Numeric CRC#");
    $('.select-circle').addClass("selected-category");
});
$('.select-arrow').click(function () {
    $('.arrow-right-main').removeClass('arrow-down');
    $('.input-circle').val("Enter Numeric CRC#");
    $('.select-circle').addClass("selected-category");
});

function showDiv(divId, element) {
    document.getElementById("slide-out").style.display = "none";
    document.getElementById("hidden_div").style.display = "block"
    document.getElementById(divId).style.display = element.value != "Select Your Device Brand" ? 'block' : 'none';
}

document.querySelector(".placeholder-active").addEventListener("click", showDiv);
document.querySelector(".select-arrow").addEventListener("click", showDiv);