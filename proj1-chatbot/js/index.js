// Project instructions are in the README

// Global vars:
var chatPane = document.getElementById("chatPane");
var knownWords = [
"hello", "hey", "hi",
"weather", "outside", "temperature", "conditions", "forecast",
"supper", "dinner", "eating", "eat",
"thanks", "thank",
"bye", "goodbye", "later",
"meeting", "meet"
];
var classRoster = ["Bernardo", "Brandon", "Courtney", "David", "Josh",
"Sonyl", "Alex", "Alexis", "Andrew", "Colburn", "Courtney", "Diana",
"Ejaz", "Brit", "Andreina", "Kaitlyn", "Kalynne", "Katie", "Kevin", "Myriam",
"Nikki", "Tenny", "Timothy"]

// Once DOM loaded, begin convo
document.addEventListener("DOMContentLoaded", function(event) {
  // Rosie begins conversation
  writeMsgToThread("Hi Jane!", false);
});

// Listen for the form to be submitted
// capture the text in the input, and display it as Jane's chat bubbles
// call parseJaneWords() to kick off function re how Rosie will respond
document.getElementById('chatForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var textInput = document.getElementById('chatInput');
  var userMsg = textInput.value;
  // display the user's message
  writeMsgToThread(userMsg, true);
  // generate an array out of the user's words
  var arrayOfUserWords = parseUserWords(userMsg);
  // Determine Rosie's response
  var response = determineResponseFromWords(arrayOfUserWords);
  // display Rosie's message.
  // Wrap in setTimeout to delay her response by 1s to feel more natural
  setTimeout(function(){writeMsgToThread(response, false)}, 1000);
  // clear the text input after submit
  textInput.value = "";
});

// Function to add user or Rosie msg to the DOM
// includes a ternary stmt. If isUser is true (vs being Rosie), add the class of jane, otherwise use the class rosie
function writeMsgToThread(textToWrite, isUser) {
  document.getElementById("chatPane").innerHTML += `<li class="${isUser ? 'jane' : 'rosie'}">${textToWrite}</li>`;
}

// Function to generate a random number
// param: maxNum. The highest random number to generate
let getRandomNum = function(maxNum) {
  return Math.floor(Math.random() * maxNum);
}

// Select a random person from the class roster
// This gets used in RosieResponse() if someone enters the word "meeting"
function chooseRandomPerson() {
  var randomPerson = classRoster[getRandomNum(classRoster.length)];
  return randomPerson;
}

// parseJaneWords makes a lowercase array out of words Jane entered
// params: userWords (string)
function parseUserWords(userWords) {
  // put all words entered into an array, replacing non alpha-numeric chars with a blank string
  let wordsEntered = userWords.replace(/[^\w\s]/g, "").split(" ");
  // create a new array to push lowercase versions of words into to allow for case insenstive input
  var wordsEnteredLowercase = [];
  for (var i=0; i < wordsEntered.length; i++) {
    wordsEnteredLowercase.push(wordsEntered[i].toLowerCase());
  }
   return wordsEnteredLowercase;
}

// rosieResponse defines all of Rosie's possible response statements
// params: wordsEntered (array)
function determineResponseFromWords(wordsEntered) {
  var positiveWord="";
    // Check if any of the words entered (converted to lowercase) are included in the knownWords array.
  // If so, add to positiveWord var
  for (var i=0; i < wordsEntered.length; i++) {
    if (knownWords.includes(wordsEntered[i])) {
      positiveWord = wordsEntered[i];
    }
  }
  // Rosie responds according to postiveWord recognized
  switch (positiveWord) {
    case 'hello':
    case 'hey':
    case 'hi':
      return "What can I help you with today, Jane?";
    case 'weather':
    case 'outside':
    case 'temperature':
    case 'forecast':
      return "Today's forecast is cloudy with a chance of asteroids.";
    case 'supper':
    case 'dinner':
    case 'eating':
    case 'eat':
      return "I'll be serving spaceballs and spaghetti.";
    case 'thanks':
    case 'thank':
      return "You're very welcome, Jane!";
    case 'meeting':
    case 'meet':
      return `You have a 4pm meeting with ${chooseRandomPerson()}`;
    case 'bye':
    case 'goodbye':
    case 'later':
      return "Goodbye Jane! It was nice chatting.";
    default:
      return "I'm sorry, I don't understand what you're saying, Jane.";
  }
}
