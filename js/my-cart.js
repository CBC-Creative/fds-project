document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('billingaddress').addEventListener('change', myFunction);
  function myFunction() {
    var addressdiv = document.getElementsByClassName('other-address-details');
    for (let bi = 0; bi < addressdiv.length; bi++) {
      addressdiv[bi].classList.toggle('checked');
    }
  }
  var toggleherder = document.getElementsByClassName('toggle-header');
  var togglebody = document.getElementsByClassName('toggle-body');

  var toggleherder1 = document.getElementsByClassName('toggle-headerpaypal');
  var togglebody1 = document.getElementsByClassName('toggle-bodypaypal');

  for (let to = 0; to < toggleherder.length; to++) {
    toggleherder[to].addEventListener('click', function () {
      for (let tb = 0; tb < togglebody.length; tb++) {
        togglebody[tb].classList.toggle('show');
      }
    });
  }
  for (let tog = 0; tog < toggleherder1.length; tog++) {
    toggleherder1[tog].addEventListener('click', function () {
      for (let tbg = 0; tbg < togglebody1.length; tbg++) {
        togglebody1[tbg].classList.toggle('show');
      }
    });
  }
});
