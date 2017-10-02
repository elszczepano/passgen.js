let password = '';
let receivePassword = document.querySelector('#passwordReceiveBox');
function generatePassword() {
  let passwordLength = document.querySelector('#passwordLength').value;
  if(passwordLength < 8) {
    notification.innerHTML='Strong password require minimum 8 characters!';
  }
  else if (passwordLength > 50) {
    notification.innerHTML='You will not remember too long password';
  }
  else {
    for(let i=0; i<passwordLength; i++) {
        let character = 33 + Math.floor(Math.random()*92);
        password += String.fromCharCode(character);
    }

  }
}

const generateButton = document.querySelector('#generatePassword');
generateButton.addEventListener('click',generatePassword);
