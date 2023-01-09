const mediamax991 = window.matchMedia('(max-width: 991px)');
document.addEventListener('DOMContentLoaded', function () { 
if (mediamax991.matches) {
var explorebtn = document.getElementsByClassName('explorecateorybtn');
var listshow = document.getElementsByClassName('listtoshowonmobile');
for (let x = 0; x < explorebtn.length; x++) {  
  explorebtn[x].addEventListener('click', function () {    
    var bt = explorebtn[x];
    bt.previousElementSibling.classList.toggle('show');
    
  })
}  
}
});
function equalHeight() {
  var wallcaption = Array.from(document.getElementsByClassName('wall-slider-caption'));

  for (let w = 0; w < wallcaption.length; w++) {
    var setheightcaption = Math.max(wallcaption[0].scrollHeight);
    console.log(setheightcaption);
    wallcaption[w].style.height = setheightcaption + 'px';
  }
  var wallindicators = document.getElementsByClassName('wallsliderindicators');
  wallindicators[0].style.bottom = (setheightcaption - 58) + 'px';
}
equalHeight();