// Assignment Code
let generateBtn = document.querySelector("#generate");

// Define character classes
let special = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lower = 'abcdefghijklmnopqrstuvwxyz'
let digits = '01234567890'

function getPasswdParams() {
  // Get password length
  let passwdLength = parseInt(prompt("Desired password length:"));
  console.log(passwdLength);
  // initialize empty array; we'll be adding the relevant groups of chars
  let arr = [];
  let useSpecial = confirm("Use special characters?");
  // console.log(useSpecial);
  if (useSpecial) {
    arr = special
  }
  console.log(arr);

  let useUpper = confirm("Use uppercase letters?");
  if (useUpper) {
    arr = arr + upper
  }
  console.log(arr);

  let useLower = confirm("Use lowercase letters?");
  if (useLower) {
    arr = arr + lower
  }
  console.log(arr);

  let useNumber = confirm("Use numbers?");
  if (useNumber) {
    arr = arr + digits
  }
  console.log(arr)
  console.log(useSpecial, useUpper, useLower, useNumber);
  console.log("Total number of chars = " + arr.length);

  //Generate password
  let password = []
  for (let i = 0; i < passwdLength; i++) {
    password += getRandom(arr)
  }
  console.log(password);
  alert("Your password is:\n" + password);
  // console.log(generatePassword(passwdLength));

  // case where all types are declined...
  if (useSpecial !== true && useUpper !== true && useLower !== true
    && useNumber !== true) {
      alert("What kind of fucking moron wants a password with no characters?");
      // break;
    }
}  //end getPasswdParams function

//maybe move password generator here as a function and call it from above

function getRandom(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  let randElement = arr[randIndex];
  return randElement;
}

/// No idea wtf is going on down here...

// I couldn't get the password to write to the screen....so I used an alert (line 49)
// Write password to the #password input
function writePassword() {
  // This seems to make the pop-up work
  generateBtn.addEventListener("click", getPasswdParams());

  let passwordText = document.querySelector("#password");
  // debugger;
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
