// Input Variables

var enter;
var numberEl;
var specialEL;
var uppercaseEL;
var lowercaseEL;

// Password Variables
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Alphabetical characters
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Space is for the Uppercase conversion
space = [];

var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
alphaUp = alphabet.map(toUpper);


// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  pass = writePassword();
  document.getElementById("password").placeholder = pass;
});

// Write password to the #password input
function writePassword() {
  enter = parseInt(prompt("How long would you like your password to be? Choose between 8 ans 128 characters"));
  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must choose between 8 and 128 characters"));


  } else {
    // Continues once user input is validated
    numberEl = confirm("Will this contain numbers?");
    specialEL = confirm("Will this contain special characters?");
    uppercaseEL = confirm("Will this contain Uppercase letters?");
    lowercaseEL = confirm("Will this contain Lowercase letters?");
};

// Else if for 4 negative options
if (!specialEL && !numberEl && !uppercaseEL && !lowercaseEL) {
    choices = alert("You must choose a criteria!");

}
// First if statement that uses user input prompts to determine choices
// Else if for 4 positive options
else if (specialEL && numberEl && uppercaseEL && lowercaseEL) {

    choices = special.concat(number, alphabet, alphaUp);
}
// Else if for 3 positive options
else if (specialEL && numberEl && uppercaseEL) {
    choices = special.concat(number, alphaUp);
}
else if (specialEL && numberEl && lowercaseEL) {
    choices = specialEL.concat(number, alphabet);
}
else if (specialEL && lowercaseEL && uppercaseEL) {
    choices = special.concat(alphabet, alphaUp);
}
else if (numberEl && lowercaseEL && uppercaseEL) {
    choices = special.concat(alphabet, alphaUp);
}
// Else if for 2 positive options 
else if (specialEL && numberEl) {
    choices = special.concat(number);

} else if (specialEL && lowercaseEL) {
    choices = special.concat(alphabet);

} else if (specialEL && uppercaseEL) {
    choices = special.concat(alphaUp);
}
else if (lowercaseEL && numberEl) {
    choices = alphabet.concat(number);

} else if (lowercaseEL && uppercaseEL) {
    choices = alphabet.concat(alphaUp);

} else if (numberEl && uppercaseEL) {
    choices = number.concat(alphaUp);
}
// Else if for 1 positive option
else if (specialEL) {
    choices = special;
}
else if (numberEl) {
    choices = number;
}
else if (lowercaseEL) {
    choices = alphaUp;
}
// Created space variable to fill uppercase conversion
else if (uppercaseEL) {
    choices = space.concat(alphaUp);
};

var password = [];

for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
}
// This joins the password array and converts it to a string
// Worked with a tutor to incorporate this option
var pass = password.join("");
UserInput(pass);
return pass;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(pass) {
  document.getElementById("password").textContent = pass;
}