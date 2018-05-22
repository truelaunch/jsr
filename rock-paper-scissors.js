//Your homework, should you want some, is to create a "Rock, Paper, Scissors" game.

// Requirements:
// Utilize a function that picks a random value for the computer
// Write a control statement to run the game more than once
// Utilize if/else statements
// Take user input via whatever means you'd like (form input if you know HTML or just the standard prompt() function in JS)
// Run at least 3 times
// Evaluate the best of 3 for player vs. computer
// Output the winner
// Keep in mind the major concepts we've learned so far: control structures, functions, scope, and objects. Utilize whatever structures you feel appropriate.

// Global vars
var computerPoints = 0;
var userPoints = 0;

var runGame = function() {
  // OBJECTS
  var rock = {
      stringRef: "rock",
      losesTo: "paper",
      winsTo: "scissors"
  }

  var paper = {
      stringRef: "paper",
      losesTo: "scissors",
      winsTo: "rock"
  }

  var scissors = {
      stringRef: "scissors",
      losesTo: "rock",
      winsTo: "paper"
  }

  // Vars within runGame scope:
  var computerOptions = ["rock", "paper", "scissors"];
  var computerChoice = computerOptions[getRandomNum()];
  var userChoice = prompt("Enter either rock, paper, or scissors");

  // function to generate a random number from 0 - 2 to utilize with options array
  function getRandomNum(maxNum) {
    return Math.floor(Math.random() * 3);
  }

  // userInput is a string, since that is what a prompt returns.
  // This function will convert the string into the var name that properly references the object
  function convertUserChoice(userInput) {
    if (userInput === "rock") {
      return rock;
    } else if (userInput === "scissors") {
      return scissors;
    } else if (userInput === "paper") {
      return paper;
    } else {
      console.log("Please enter a valid option. Refresh to try again.");
    }
  }

  function determineWinner(user, computer) {
    if (user.stringRef === computer) {
      console.log("It's a tie!");
      console.log(`User: ${userPoints}. Computer: ${computerPoints}`)
    } else if(user.losesTo === computer) {
      computerPoints++;
      console.log(`Sorry, the computer beat you! ${computerChoice} beats ${userChoice}`);
    } else if(user.winsTo === computer) {
      userPoints++;
      console.log(`You win! ${userChoice} beats ${computerChoice}`);
    } else {
      // Error state
      console.log("Please enter a valid option. Refresh to try again.");
    }
  }
  determineWinner(convertUserChoice(userChoice), computerChoice);
}

// Run game 3 times
for (var i=1; i<=3; i++) {
  runGame();
  console.log(`User: ${userPoints}. Computer: ${computerPoints}`)
  if(i===3) {
    // decide overall winner
    if (userPoints > computerPoints) {
      alert("You win the best of 3! Refresh to play again.");
    } else if (userPoints < computerPoints) {
      alert("The computer won the best of 3. Refresh to play again.");
    } else {
      alert("It's a tie overall! Refresh to play again");
    }
  }
}
