const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n",
    "o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", 
    "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
    "$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
    ",","|",":",";","<",">",".","?","/"];


const passWordEl = {
    passWord1El: document.getElementById("passWord1"),
    passWord2El: document.getElementById("passWord2")
}

function getRandomNumber () {
    let randomNumber = Math.floor(Math.random() * characters.length);
    return randomNumber;
}

function generatePassword() {
    let passWord = "";
    for (let i = 0; i < 15; i += 1) {
        passWord += characters[getRandomNumber()]
    }
    return passWord;
}

function generate2Passwords() {
    let passWord1 = generatePassword();
    let passWord2 = generatePassword();
    passWordEl.passWord1El.textContent = passWord1;
    passWordEl.passWord2El.textContent = passWord2;
}
