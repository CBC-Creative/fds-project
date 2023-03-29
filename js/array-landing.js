// Custom JS Goes Here

// Setup Media Queries
var mqMax992 = window.matchMedia('(max-width: 991.98px)');

$(document).ready(function () {
  if (mqMax992.matches) {
    var tabdropdown = document.querySelector('.mobile-tab-dropdown');
    var tabList = document.querySelector('#purifiers-tabs');
    var tabItems = document.querySelectorAll('.purifiers-tab-item');

    $(tabdropdown).click(function () {
      $(tabList).toggleClass('show');
    });

    $.each(tabItems, function () {
      $(this).click(function () {
        $(tabdropdown).html($(this).children().text());
        $(tabList).removeClass('show');
      });
    });
  }
});
