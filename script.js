// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowCaseCharCodes = generateArray(97, 122)

var upCaseCharCodes = generateArray(65, 90)

var numCharCodes = generateArray(48, 57)

var specCharCodes = generateArray(33, 47).concat(generateArray(58, 64)).concat(generateArray(91, 96)).concat(generateArray(123, 126))

// Prompt for user typing in a number between 8-128


// Generates array full of numbers from ascii code 
function generateArray(low, high) {
  var charArray = []
  for (var i = low; i <= high; i++) {
    charArray.push(i)
  }
  return charArray
}

// Translate array of ascii code numbers to characters

// Combine user choices to generate password
function generatePassword(){

  //  Prompt for user choosing length
  var lengthChoice = parseInt(prompt('Choose password length between 8 and 128 characters'))
  
  // Reload page if length is outside perameters
    if (lengthChoice >= 8 && lengthChoice <=128){
    } else location = location 

  // Confirm for user including lowercase
  var includeLowCase = confirm('Include lowercase letters?')

  // Confirm for user including uppercase
  var includeUpCase = confirm('Include uppercase letters?')

  // Confirm for user including numbers
  var includeNums = confirm('Include numbers?')

  // Confirm for user including special characters
  var includeSpecChars = confirm('Include special characters?') 

  if ((includeLowCase === false && includeUpCase === false) && (includeNums === false && includeSpecChars === false)) {
    location = location;
  } else {
    var finalCharArray = []
    if (includeLowCase === true) {
      finalCharArray = finalCharArray.concat(lowCaseCharCodes)
    }
    if (includeUpCase === true) {
      finalCharArray = finalCharArray.concat(upCaseCharCodes)
    }
    if (includeNums === true) {
      finalCharArray = finalCharArray.concat(numCharCodes)
    }
    if (includeSpecChars === true) {
      finalCharArray = finalCharArray.concat(specCharCodes)
    }
    var passwordArray = []
    for (var i = 0; i < lengthChoice; i++){
      var eachChar = finalCharArray[Math.floor(Math.random() * finalCharArray.length)]
      passwordArray.push(String.fromCharCode(eachChar))
    }
    return passwordArray.join('')
  }

    console.log(lengthChoice)
    console.log(includeLowCase)
    console.log(includeUpCase)
    console.log(includeNums)
    console.log(includeSpecChars)

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", passwordLength);
generateBtn.addEventListener("click", writePassword);

// Console log check
console.log(lowCaseCharCodes)
console.log(upCaseCharCodes)
console.log(numCharCodes)
console.log(specCharCodes)