document.getElementById("file-upload").onchange = function () {
    document.getElementById("uploadFile").value = this.value;
};

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('showemail').addEventListener('change', myFunction);
    function myFunction() {
      var addressdiv1 = document.getElementsByClassName('show-divonchecked');
      for (let bi1 = 0; bi1 < addressdiv1.length; bi1++) {
        addressdiv1[bi1].classList.toggle('checked');
      }
    }
})