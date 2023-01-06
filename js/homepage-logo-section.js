document.addEventListener('DOMContentLoaded', function () {
  var maincarousel = document.getElementsByClassName('multi-carousel-inner');
  var logodivmain = document.getElementsByClassName('logo-content-main');
  for (let one = 0; one < maincarousel.length; one++) {
    var adddynamicclass = maincarousel[one].children;
    //console.log(adddynamicclass);
    adddynamicclass.forEach((element) => {
      element.setAttribute('data-item', 'item' + [one++]);
    });
  }
  for (let logoone = 0; logoone < logodivmain.length; logoone++) {
    var adddynamicclasslogo = logodivmain[logoone].children;
    //console.log(adddynamicclass);
    adddynamicclasslogo.forEach((element) => {
      element.setAttribute('data-content-item', 'item' + [logoone++]);
    });
  }
});

function logofunction() {
  var imageclick = document.getElementsByClassName('slideimageclick');
  for (let imageindex = 0; imageindex < imageclick.length; imageindex++) {
    imageclick[imageindex].addEventListener('click', function () {
      var imageParent = this.parentNode;
      var currentItem = imageParent.parentNode.getAttribute('data-item');
      //console.log(currentItem);
      var removeactive = document.getElementsByClassName('multi-carousel-item'); //divsToHide is an array
      for (var re = 0; re < removeactive.length; re++) {
        removeactive[re].classList.remove('active');
      }
      imageParent.parentNode.classList.add('active');
      // console.log(imageParent.parentNode.classList);
      var divsToHide = document.getElementsByClassName('logo-slide'); //divsToHide is an array
      for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = 'none'; // depending on what you're doing
      }
      document.querySelector('[data-content-item="' + currentItem + '"]').style.display = 'block';
    });
  }
}
document.addEventListener('DOMContentLoaded', function () {
  logofunction();
});


const nextprevclick = document.getElementsByClassName('carousel-control');
for (let nepre = 0; nepre < nextprevclick.length; nepre++) {
  nextprevclick[nepre].addEventListener('click', function () {
    logofunction();
  });
}



const mediaMax767 = window.matchMedia('(max-width: 767.98px)');
document.addEventListener('DOMContentLoaded', function () {
  if(mediaMax767.matches){
    const nextclick = document.getElementsByClassName('carousel-control-next');
    const prevclick = document.getElementsByClassName('carousel-control-prev');
  
    for (let nex = 0; nex < nextclick.length; nex++) {
      nextclick[nex].addEventListener('click', function () {
        var imageclick1 = document.getElementsByClassName('slideimageclick');
        var imageParent1 = imageclick1[1].parentNode;
        var currentItem1 = imageParent1.parentNode.getAttribute('data-item');
        var removeactive1 = document.getElementsByClassName('multi-carousel-item'); //divsToHide is an array
        for (var re1 = 0; re1 < removeactive1.length; re1++) {
          removeactive1[re1].classList.remove('active');
        }
        imageParent1.parentNode.classList.add('active');
        var divsToHide1 = document.getElementsByClassName('logo-slide'); //divsToHide is an array
        for (var i = 0; i < divsToHide1.length; i++) {
          divsToHide1[i].style.display = 'none'; // depending on what you're doing
        }
        document.querySelector('[data-content-item="' + currentItem1 + '"]').style.display = 'block';
        
      });
    }
  
    for (let prev = 0; prev < prevclick.length; prev++) {
      prevclick[prev].addEventListener('click', function () {
        var imageclick1 = document.getElementsByClassName('slideimageclick');
        var imageParent1 = imageclick1[0].parentNode;
        var currentItem1 = imageParent1.parentNode.getAttribute('data-item');
        console.log(currentItem1);
        var removeactive1 = document.getElementsByClassName('multi-carousel-item'); //divsToHide is an array
        for (var re1 = 0; re1 < removeactive1.length; re1++) {
          removeactive1[re1].classList.remove('active');
        }
        imageParent1.parentNode.classList.add('active');
        var divsToHide1 = document.getElementsByClassName('logo-slide'); //divsToHide is an array
        for (var i = 0; i < divsToHide1.length; i++) {
          divsToHide1[i].style.display = 'none'; // depending on what you're doing
        }
        document.querySelector('[data-content-item="' + currentItem1 + '"]').style.display = 'block';
        
      });
    }
    document.querySelector(".multi-carousel").addEventListener("swipeleft",function(event){
      var imageclick1 = document.getElementsByClassName('slideimageclick');
        var imageParent1 = imageclick1[1].parentNode;
        var currentItem1 = imageParent1.parentNode.getAttribute('data-item');
        var removeactive1 = document.getElementsByClassName('multi-carousel-item'); //divsToHide is an array
        for (var re1 = 0; re1 < removeactive1.length; re1++) {
          removeactive1[re1].classList.remove('active');
        }
        imageParent1.parentNode.classList.add('active');
        var divsToHide1 = document.getElementsByClassName('logo-slide'); //divsToHide is an array
        for (var i = 0; i < divsToHide1.length; i++) {
          divsToHide1[i].style.display = 'none'; // depending on what you're doing
        }
        document.querySelector('[data-content-item="' + currentItem1 + '"]').style.display = 'block';
    })
    document.querySelector(".multi-carousel").addEventListener("swiperight",function(event){
      var imageclick1 = document.getElementsByClassName('slideimageclick');
        var imageParent1 = imageclick1[0].parentNode;
        var currentItem1 = imageParent1.parentNode.getAttribute('data-item');
        console.log(currentItem1);
        var removeactive1 = document.getElementsByClassName('multi-carousel-item'); //divsToHide is an array
        for (var re1 = 0; re1 < removeactive1.length; re1++) {
          removeactive1[re1].classList.remove('active');
        }
        imageParent1.parentNode.classList.add('active');
        var divsToHide1 = document.getElementsByClassName('logo-slide'); //divsToHide is an array
        for (var i = 0; i < divsToHide1.length; i++) {
          divsToHide1[i].style.display = 'none'; // depending on what you're doing
        }
        document.querySelector('[data-content-item="' + currentItem1 + '"]').style.display = 'block';
    })
  }
  
});