$(window).on('load', function () {
  const myModal = new mdb.Modal(document.getElementById('ediVideo'), {});
  myModal.toggle();

  let videoPlay = document.querySelector('.video-play-wrapper');

  if (videoPlay) {
    let ediVid = document.querySelector('#edi-video');
    let videoPauseCTA = document.querySelector('.video-pause-cta');
    $(videoPlay).click(function () {
      $(ediVid).trigger('play');
    });
    $(ediVid).on('play', function () {
      $(videoPlay).addClass('hide');
      $(ediVid).removeClass('hide');
      $(videoPauseCTA).removeClass('show');
    });
    $(ediVid).on('ended', function () {
      $(ediVid).addClass('hide');
      $(videoPauseCTA).addClass('show');
    });
  }
});
