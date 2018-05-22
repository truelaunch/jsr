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

// OBJECTS
var rock = {
    losesTo: "paper",
    winsTo: "scissors"
}

var paper = {
    losesTo: "scissors",
    winsTo: "rock"
}

var scissors = {
    losesTo: "rock",
    winsTo: "paper"
}

// Global Variables:
var options = ["rock", "paper", "scissors"];
var computerChoice = options[getRandomNum()];
var userChoice = prompt("Enter either rock, paper, or scissors");

// function to generate a random number from 0 - 2 to utilize with options array
function getRandomNum(maxNum) {
  return Math.floor(Math.random() * 3);
}

if (userChoice === computerChoice) {
  console.log("It's a tie!");
} else if (userChoice === "rock") {
    if (rock.losesTo === computerChoice) {
      console.log(`Sorry, the computer beat you! ${computerChoice} beats ${userChoice}`);
    } else {
      console.log(`You win! ${userChoice} beats ${computerChoice}`);
    }
} else if (userChoice === "paper") {
    if (paper.losesTo === computerChoice) {
      console.log(`Sorry, the computer beat you! ${computerChoice} beats ${userChoice}`);
    } else {
      console.log(`You win! ${userChoice} beats ${computerChoice}`);
    }
} else if (userChoice === "scissors") {
    if (scissors.losesTo === computerChoice) {
      console.log(`Sorry, the computer beat you! ${computerChoice} beats ${userChoice}`);
    } else {
      console.log(`You win! ${userChoice} beats ${computerChoice}`);
    }
}
  // error state. Invalid entry
  else if (!options.includes(userChoice)) {
    console.log("Please enter a valid option. Refresh to try again.");
}
