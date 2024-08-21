$(window).on('load', function () {
  const myModal = new mdb.Modal(document.getElementById('ediVideo'), {});
  myModal.toggle();

  let videoPlay = document.querySelector('.video-play-wrapper');
  if (videoPlay) {
    let ediVid = document.querySelector('#edi-video');
    $(videoPlay).click(function () {
      $(ediVid).trigger('play');
    });
    $(ediVid).on('play', function () {
      $(videoPlay).addClass('hide');
    });
  }
});
