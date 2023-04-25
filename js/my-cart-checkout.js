document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('billingaddress').addEventListener('change', myFunction);
    document.getElementById('billingaddresspaypal').addEventListener('change', myFunction);
    function myFunction() {
      var addressdiv = document.getElementsByClassName('other-address-details');
      for (let bi = 0; bi < addressdiv.length; bi++) {
        addressdiv[bi].classList.toggle('checked');
      }
    }

    var continuebtn = document.getElementsByClassName('continue-btn');

    for (let con = 0; con < continuebtn.length; con++) {
      continuebtn[con].addEventListener('click', function () {
        var nextiembutton =
          continuebtn[con].parentNode.nextSibling.parentNode.parentNode.nextElementSibling;          
        var fieldvalues =
          continuebtn[con].parentNode.nextSibling.parentNode.parentNode.firstElementChild;
        var triggerclick = nextiembutton.firstElementChild.firstElementChild;
        //console.log(nextiembutton)
        triggerclick.click();
        fieldvalues.classList.add('showfiledvalues');
        //console.log(fieldvalues)
      });
    }

    var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('accordionItemHeading');
    for (i = 0; i < accHD.length; i++) {
      accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
      var itemClass = this.parentNode.className;
      for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
      }
      if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
      }
    }
  });

  $(document).on("click", ".continue-btn-popup", function(){
    var getparent = $(this).parents().find('.accordion-item').next();
    var nextitem = getparent[0];    
    var nextaccordianbtn = $(nextitem).children().find('.accordion-button');
    $(nextaccordianbtn).trigger('click');
  });
