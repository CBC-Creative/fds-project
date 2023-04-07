// $('body').click(function() {
//   $('.quick-search-input').addClass('d-none');
//   $('.quick-search-input').removeClass('d-block');
//     $('.button-search').addClass('d-block');
//     $('.button-search').removeClass('d-none');
// });
$('.button-search').click(function(event) {
  event.stopPropagation();
    $('.quick-search-input').addClass('d-block');
    $('.quick-search-input').removeClass('d-none');
    $(this).addClass('d-none');
    $(this).removeClass('d-block');
});
$('body').click(function() {
  $(this).find('.dropdown-menu-filter').removeClass('d-block');
});
$('.dropdown-filter').click(function(event) {
  event.stopPropagation();
    $(this).find('.dropdown-menu-filter').toggleClass('d-block');
});
$('.quick-search-box-clear').click(function(event) {
  event.stopPropagation();
    $('.quick-search-box').val('');
});


$(document).ready(function(){
  $("#ideas-list li").slice(0,8).show();
  $(".load-more").click(function(e){
    e.preventDefault();
    $("#ideas-list li:hidden").slice(0,8).fadeIn("slow");
    
    if($("#ideas-list li:hidden").length == 0){
       $(".load-more").fadeOut("slow");
      }
  });
})
