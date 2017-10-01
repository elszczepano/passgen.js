let notification = document.querySelector('.notification');
let password = '';
function generatePassword() {
  let passwordLength = document.querySelector('#passwordLength').value;
  notification.innerHTML = '';
  if(passwordLength < 8) {
    notification.innerHTML='<div class="alert alert-danger" role="alert">Strong password require minimum 8 characters!</div>';
  }
  else if (passwordLength > 30) {
    notification.innerHTML='<div class="alert alert-danger" role="alert">You will not remember too long password</div>';
  }
  else {
    for(let i=0; i<passwordLength; i++) {
        let character = 33 + Math.floor(Math.random()*92);
        password += String.fromCharCode(character);
    }
    notification.innerHTML=password;
  }
}

const generateButton = document.querySelector('#generatePassword');
generateButton.addEventListener('click',generatePassword);
