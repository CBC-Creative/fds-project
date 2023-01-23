const mediamax991 = window.matchMedia('(max-width: 991.99px)');
document.addEventListener('DOMContentLoaded', function () {
  if (mediamax991.matches) {
    const titanCatBlock = document.querySelector('.titanvategorybg');
    const voloCatBlock = document.querySelector('.volovategorybg');
    const trendCatBlock = document.querySelector('.trendwallvategorybg');
    const titan_showOnMobile = document.querySelector('.titan_showOnMobile');
    const volo_showOnMobile = document.querySelector('.volo_showOnMobile');
    const trend_showOnMobile = document.querySelector('.trend_showOnMobile');

    titan_showOnMobile.classList.add('show');

    titanCatBlock.addEventListener('click', function () {
      document.querySelector('.showOnMobile.show').classList.remove('show');
      titan_showOnMobile.classList.add('show');
    });

    voloCatBlock.addEventListener('click', function () {
      document.querySelector('.showOnMobile.show').classList.remove('show');
      volo_showOnMobile.classList.add('show');
    });

    trendCatBlock.addEventListener('click', function () {
      document.querySelector('.showOnMobile.show').classList.remove('show');
      trend_showOnMobile.classList.add('show');
    });
  }
});
function equalHeight() {
  var wallcaption = Array.from(document.getElementsByClassName('wall-slider-caption'));

  for (let w = 0; w < wallcaption.length; w++) {
    var setheightcaption = Math.max(wallcaption[0].scrollHeight);
    wallcaption[w].style.height = setheightcaption + 'px';
  }
  var wallindicators = document.getElementsByClassName('wallsliderindicators');
  wallindicators[0].style.bottom = setheightcaption - 58 + 'px';
}
equalHeight();
