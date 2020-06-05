// Assignment Code

// Input Variables

var enter;
var numberEl;
var specialEL;
var uppercaseEL;
var lowercaseEL;
var choices;

// Password Variables

// Special Characters
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Alphabetical characters
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Space is for the Uppercase conversion
space = [];

// Function to convert letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// Variable for uppercase conversion
alphaUp = alphabet.map(toUpper);


// Generate button starts process for prompt
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  pass = writePassword();
  document.getElementById("password").placeholder = pass;
});

// Write password to the #password input
function writePassword() {
  enter = parseInt(prompt("How long would you like your password to be? Choose between 8 and 128 characters"));
  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("Password must be between 8 and 128 characters"));


  } else {
    // Propmts after input is confirmed
    numberEl = confirm("Will this password contain numbers?");
    specialEL = confirm("Will this password contain special characters?");
    uppercaseEL = confirm("Will this password contain uppercase letters?");
    lowercaseEL = confirm("Will this password contain lowercase letters?");
};

// In case of four negative options
if (!specialEL && !numberEl && !uppercaseEL && !lowercaseEL) {
    choices = alert("You must choose a criteria!");

}

// Else if for four positive options
else if (specialEL && numberEl && uppercaseEL && lowercaseEL) {

    choices = special.concat(number, alphabet, alphaUp);
}
// Else if for two postive options
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
// Else if for two positive options 
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
// Else if for one positive option
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

// Combines password array and converts it to a string using the join method.
var pass = password.join("");
UserInput(pass);
return pass;
}
// Puts the password value into the textbox
function UserInput(pass) {
  document.getElementById("password").textContent = pass;
}