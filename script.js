// Assignment code 

var generateBtn = document.querySelector("#generate");

// Declared variables 

var upper = ["A", "B", "c", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["@", "!", "#", "$", "%"];

console.log(upper[Math.floor(Math.random() * upper.length)]);
// prompts after password is generated

function generatePassword() {
  var passwordLength = parseInt(prompt("Choose a length of at least 8 characters and no more than 128 characters."));
  var library = [];
  //holds the password that was randomly generate
  var password = "";
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid")
    return;
  }
  var userSpecial = confirm("Do you want to use special characters?"); //returns true or false
  //if true add special characters
  if (userSpecial) {
    library = library.concat(special)
  }


  var userUpper = confirm("Doyou want to use uppercase?"); //returns true of false
  if (userUpper) [
    library = library.concat(upper)
  ]


  var userLower = confirm("Do you want to use lowercase?"); //returns true or false
  if (userLower) [
    library = library.concat(lower)
  ]


  var userNumbers = confirm("Do you want to use numbers?"); //returns true or false
  if (userNumbers) [
    library = library.concat(numbers)
  ]
  console.log(library)

  console.log(Math.random())

// generates random password
  for (var i = 0; i < passwordLength; i++) {
    var randomCharacter = library[Math.floor(Math.random() * library.length)];
    password += randomCharacter;
    console.log(password)
  }
//gives password
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Generate button
generateBtn.addEventListener("click", writePassword);


