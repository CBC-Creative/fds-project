$('.clear-btn').click(function () {
  $('.download-accordion').find('.form-check-input').each(function( index ) {
    if($(this).is(':checked')) {
      $(this).prop('checked', false); 
  }
    });
});
$('.loop-image').click(function () {
    var clickedattr = $(this).attr('data-loop-array-image');
    console.log(clickedattr);
    $('.loop-image').removeClass('loop-image-active');
    $(this).addClass('loop-image-active');
    $('.loop-array-main .data-to-show').removeClass('active');
    $(".loop-array-main .data-to-show[data-loop-array='" + clickedattr + "']").addClass('active');
});