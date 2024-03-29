
//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
var passwordLength = document.getElementById("slider");
var flashMsg = document.getElementById("flashMsg");
var sliderNum = document.getElementById("slider");

//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password
function checkBoxes() {
    var index = 0;
    if (specialChar.checked)   index++;
    if (numericChar.checked)   index++;     
    if (lowerCaseChar.checked) index++;     
    if (upperCaseChar.checked) index++; 
    return index;
}
function getPoolOfChar() {
    
    var poolOfChar = "";

    if (specialChar.checked)                    poolOfChar += "~!@#$%^&*";
    if (numericChar.checked)                   poolOfChar += "0123456789";
    if (lowerCaseChar.checked) poolOfChar += "abcdefghijklmnopqrstuvwxyz";
    if (upperCaseChar.checked) poolOfChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    return poolOfChar;
}

function generatePassword() {
    //YOUR CODE HERE
    var password = "";
    characterPool = getPoolOfChar()
    while (password.length < passwordLength.value) {
    password += characterPool[Math.floor(Math.random() * characterPool.length)];
    } 
    return password;
}

// Write password to the #password input
function writePassword() {
    if (checkBoxes() === 0)  
    {
        flashMsg.textContent = "Please check a minimum of one box. Try again.";
    
    } else 
    {
        flashMsg.textContent = "";
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;

        copyBtn.removeAttribute("disabled");
        copyBtn.focus();
    }
}

function changeColor(color) {
    document.querySelector(".box").style.backgroundColor = color;
    document.querySelector(".box").style.borderColor = color;
}

function boxColor(event) {
    var index = checkBoxes();
    if (index === 0) changeColor("red");
    if (index === 1) changeColor("darkorange");
    if (index >= 2) changeColor("seagreen");
}

function copyToClipboard(event) {
    // BONUS 
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

function slideNumber() {
    document.querySelector("#ch").textContent = "Number of Characters: " + sliderNum.value;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyToClipboard);
document.addEventListener("change", boxColor);
sliderNum.addEventListener("change", slideNumber);

// BONUS EVENT LISTENER