


// console.log("Testing");
// GLOBAL VARIABLES
var playerKeys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessNumber = 9;
var guessLeft = [];
var playerGuesses = "";

// EVENTS
document.onkeyup = function(event) {
  var playerPick = String.fromCharCode(event.keyCode).toLowerCase();
  if (guessNumber == 9) {
    var userPick = playerKeys[Math.floor(Math.random() * playerKeys.length)];
    playerGuesses = userPick;
  }
  var userCheck = guessLeft.indexOf(playerPick);
  if (userCheck < 0) {
    if (playerPick == playerGuesses) {
      wins++;
      guessNumber = 9;
      guessLeft = [];
    } else {
      guessLeft.push(playerPick);
      guessNumber--;
    }
  }
  if (guessNumber == 0) {
    losses++;
    guessNumber = 9;
    guessLeft = [];
  }
  var html = "<p>Guess a letter, any letter!</p>" +
    "<p>Lucky Guesses: " +
    wins +
    "</p>" +
    "<p>You Lose: " +
    losses +
    "</p>" +
    "<p>Guesses Left: " +
    guessNumber +
    "</p>" +
    "<p>Guesses: " +
    guessLeft +
    "</p>";
  document.querySelector('#game').innerHTML = html;
}



