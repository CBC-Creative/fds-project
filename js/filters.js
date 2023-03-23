$('.clear-btn').click(function () {
  $('.download-accordion').find('.form-check-input').each(function( index ) {
    if($(this).is(':checked')) {
      $(this).prop('checked', false); 
  }
    });
});