// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numericalCharacters = '0123456789';
const specialCharacters = '!@#$%^&*()~`{}|[]\_-+=<>?,./:";';

function writePassword() {
  let characterPrompt  = false;

  // state of character sets to include (default false)
  let lowerCaseConfirm = false; 
  let upperCaseConfirm = false;
  let numericConfirm = false;
  let specialConfirm = false; 

  characterPrompt = prompt ('How many characters would you like this password to be? Remember: it has to be between 8 and 128 characters');

  if (isNaN(characterPrompt)) { 
      alert('Remember: it has to be a number between 8 and 128 characters.');
      return;
  }

  if (characterPrompt < 8 || characterPrompt > 128) {  
      alert('Remember: it has to be between 8 and 128 characters.');
      return;
  }    

  // What if they enter a decimal value betweeen 8 and 128?

  // check if lowercase is included
  lowerCaseConfirm = confirm('Do you want to include lowercase letters in your password?') 

  // check if upper case is included
  upperCaseConfirm = confirm('Do you want to include uppercase letters in your password?');

  // check if numbers are included
  numericConfirm = confirm('Do you want to include numbers in your password?');

  // check if special characters are included
  specialConfirm = confirm('Do you want to include special characters in your password?');

  // make sure at least one of the confirms are true
  if(!lowerCaseConfirm && !upperCaseConfirm && !numericConfirm && !specialConfirm) {
    alert('Please select at least one of the previous options.');
    return;
  }

  // create a character set based on selected character sets
  let passwordCharactersToUse = "";
  
  if(lowerCaseConfirm) {
    passwordCharactersToUse += lowerCaseCharacters;
  }

  if(upperCaseConfirm) {
    passwordCharactersToUse += upperCaseCharacters;
  }

  if(numericConfirm) {
    passwordCharactersToUse += numericalCharacters;
  }

  if(specialConfirm) {
    passwordCharactersToUse += specialCharacters;
  }

  let password = "";

  // generate our password using the character sets that have been included and for the length specified
  for(i = 0; i < characterPrompt; i++) {
      password += passwordCharactersToUse[ Math.floor(Math.random()*passwordCharactersToUse.length) ];
  }

  // Update our html page with the generated password
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



 




 



