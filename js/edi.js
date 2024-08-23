$(window).on('load', function () {
  const myModal = new mdb.Modal(document.getElementById('ediVideo'), {});
  myModal.toggle();

  let videoPlay = document.querySelector('.video-play-wrapper');
  let videoPauseCTA = document.querySelector('.video-pause-cta');
  if (videoPlay) {
    let ediVid = document.querySelector('#edi-video');
    $(videoPlay).click(function () {
      $(ediVid).trigger('play');
    });
    $(ediVid).on('play', function () {
      $(videoPlay).addClass('hide');
    });
    $(ediVid).on('ended', function () {
      $(ediVid).addClass('hide');
      $(videoPauseCTA).addClass('show');
    });
  }
});
