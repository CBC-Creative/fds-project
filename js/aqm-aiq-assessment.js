$(window).on('load', function () {
  let videoPlay = document.querySelector('.video-play-wrapper');

  if (videoPlay) {
    let designVid = document.querySelector('#assessment-vid');
    $(videoPlay).click(function () {
      $(designVid).trigger('play');
    });
    $(designVid).on('play', function () {
      $(videoPlay).addClass('hide');
      $(designVid).removeClass('hide');
    });
    $(designVid).on('ended', function () {
      $(designVid).addClass('hide');
      $(videoPlay).removeClass('hide');
    });
  }
});
