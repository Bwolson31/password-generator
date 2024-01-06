// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let characterPrompt = prompt ('How many characters would you like this password to be? Remember: it has to be 8 or higher')

if (characterPrompt != 8>100) {
    alert('It has to be 8 or higher')
  } else if (characterPrompt != 8>100) 
  alert('It has to be a number between 8 and 100')

  let casePrompt = prompt ('Would you like to include lowercase letters?')

  if (casePrompt != (yes || no))
  alert('You must answer yes or no')

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


