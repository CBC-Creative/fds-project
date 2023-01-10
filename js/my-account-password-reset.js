let state = false;
let password = document.getElementById("NewPassword");
let passwordStrength = document.getElementById("password-strength");
let lowUpperCase = document.querySelector(".low-upper-case");
let upUpperCase = document.querySelector(".up-upper-case");
let number = document.querySelector(".one-number");
let specialChar = document.querySelector(".one-special-char");
let eightChar = document.querySelector(".eight-character");

password.addEventListener("keyup", function(){
    let pass = document.getElementById("NewPassword").value;
    checkStrength(pass);
});

function checkPassword() {
    let password1 = document.getElementById('NewPassword').value;
    let password2 = document.getElementById('cNewPassword').value;

    // If password not entered
    if (password1 == '')
        alert ("Please enter Password");
          
    // If confirm password not entered
    else if (password2 == '')
        alert ("Please enter confirm password");
          
    // If Not same return False.    
    else if (password1 != password2) {
        alert ("Password did not match: Please try again...")
        return false;
    }

    // If same return True.
    else{
        alert("Password Match")
        return true;
    }
}

var btnclickpasswordcheck = document.getElementsByClassName('passwordcheck');
for (var p = 0; p < btnclickpasswordcheck.length; p++) {
    btnclickpasswordcheck[p].addEventListener('click', function(){
        checkPassword();
    })
    
}

function toggle(){
    if(state){
        document.getElementById("NewPassword").setAttribute("type","password");
        state = false;
    }else{
        document.getElementById("NewPassword").setAttribute("type","text")
        state = true;
    }
}

function myFunction(show){
    show.classList.toggle("fa-eye-slash");
}

function checkStrength(password) {
    let strength = 0;

    //If password contains both lower and uppercase characters
    if (password.match(/([a-z])/)) {
        strength += 1;
        lowUpperCase.classList.add('checked');
    } else {
        lowUpperCase.classList.remove('checked');
    }
    if (password.match(/([A-Z])/)) {
        strength += 1;
        upUpperCase.classList.add('checked');
    } else {
      upUpperCase.classList.remove('checked');
    }
    //If it has numbers and characters
    if (password.match(/([0-9])/)) {
        strength += 1;
        number.classList.add('checked');
    } else {
        number.classList.remove('checked');
    }
    //If it has one special character
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
        strength += 1;
        specialChar.classList.add('checked');
    } else {
        specialChar.classList.remove('checked');
    }
    //If password is greater than 7
    if (password.length > 8 && password.length < 16) {
        strength += 1;
        eightChar.classList.add('checked');
    } else {
        eightChar.classList.remove('checked');   
    }

  
}