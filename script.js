
//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
var passwordLength = document.getElementById("slider");
var flashMsg = document.getElementById("flashMsg");

//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password

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
    if (!(specialChar.checked || numericChar.checked || lowerCaseChar.checked || upperCaseChar.checked))  
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

function copyToClipboard() {
    // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER