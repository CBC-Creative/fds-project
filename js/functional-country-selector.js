$('.choose-country-dropdown-select').click(function () {
  $('.country-list-div').toggleClass('d-block');
});
$('.country-list-div ul li').click(function () {
    var selectedcountry = $(this).html();
    console.log(selectedcountry);
    $('.choose-country-dropdown-select').html(selectedcountry)
    $('.country-list-div').removeClass('d-block');
})