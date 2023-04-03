// poster frame click event
$('.fellowes_webinars_video').on('click', '.js-videoPoster', function(ev) {
  ev.preventDefault();
  var $poster = $(this);
  var $wrapper = $poster.closest('.js-videoWrapper');
  videoPlay($wrapper);
});

// play the targeted video (and hide the poster frame)
function videoPlay($wrapper) {
  var $iframe = $wrapper.find('.js-videoIframe');
  var src = $iframe.data('src');
  // hide poster
  $wrapper.addClass('videoWrapperActive');
  // add iframe src in, starting the video
  $iframe.attr('src', src);
}

// stop the targeted/all videos (and re-instate the poster frames)
$('.fellowes_webinars_video').on('click', '.stop_video', function(ev) {

  // if we're stopping all videos on page
  if (!$wrapper) {
      var $wrapper = $('.js-videoWrapper');
      var $iframe = $('.js-videoIframe');
      // if we're stopping a particular video
  } else {
      var $iframe = $wrapper.find('.js-videoIframe');
  }
  // reveal poster
  $wrapper.removeClass('videoWrapperActive');
  // remove youtube link, stopping the video from playing in the background
  $iframe.attr('src', '');
});

$(document).ready(function() {
  function checkWidth() {
      var windowSize = $(window).width();

      if (windowSize <= 1199) {
         var copycontacthtml = $('.copy-contacthtml').html();
         $('.mobile-contact-content').html(copycontacthtml);
      }
  }

  // Execute on load
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);
});