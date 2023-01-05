document.addEventListener('DOMContentLoaded', function () { 
  var maincarousel = document.getElementsByClassName('multi-carousel-inner');
  var logodivmain = document.getElementsByClassName('logo-content-main');
  for (let one = 0; one < maincarousel.length; one++) {
    var adddynamicclass = maincarousel[one].children;
    //console.log(adddynamicclass);
    adddynamicclass.forEach(element => {
      element.setAttribute('data-item', 'item' + [one++] )
      
    });      
    
  }
  for (let logoone = 0; logoone < logodivmain.length; logoone++) {
    var adddynamicclasslogo = logodivmain[logoone].children;
    //console.log(adddynamicclass);
    adddynamicclasslogo.forEach(element => {
      element.setAttribute('data-content-item', 'item' + [logoone++] )
    });
    
  }
});

function logofunction() { 
var imageclick = document.getElementsByClassName('slideimageclick');
  for (let imageindex = 0; imageindex < imageclick.length; imageindex++) {
    imageclick[imageindex].addEventListener('click', function () { 
      var imageParent = this.parentNode;
      var currentItem = imageParent.parentNode.getAttribute('data-item');
      var removeactive = document.getElementsByClassName("multi-carousel-item"); //divsToHide is an array
      for(var re = 0; re < removeactive.length; re++){
        removeactive[re].classList.remove('active');
      }
      imageParent.parentNode.classList.add('active');
     // console.log(imageParent.parentNode.classList);
      var divsToHide = document.getElementsByClassName("logo-slide"); //divsToHide is an array
      for(var i = 0; i < divsToHide.length; i++){
          divsToHide[i].style.display = "none"; // depending on what you're doing
      }
      document.querySelector('[data-content-item="'+currentItem+'"]').style.display = "block";
    });
    
  }
};
document.addEventListener('DOMContentLoaded', function () { 
  logofunction();
});   

const nextprevclick = document.getElementsByClassName('carousel-control');
for (let nepre = 0; nepre < nextprevclick.length; nepre++) {
  nextprevclick[nepre].addEventListener('click', function () {
    logofunction();
  });
}