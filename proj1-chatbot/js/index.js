// Project instructions are in the README

// Global vars:
var chatPane = document.getElementById("chatPane");
var knownWords = [
"hello", "hey", "hi",
"weather", "outside", "temperature", "conditions", "forecast",
"supper", "dinner", "eating", "eat",
"thanks", "thank",
"bye", "goodbye", "later",
"meeting"
];
var classRoster = ["Bernardo", "Brandon", "Courtney", "David", "Josh",
"Sonyl", "Alex", "Alexis", "Andrew", "Colburn", "Courtney", "Diana",
"Ejaz", "Brit", "Andreina", "Kaitlyn", "Kalynne", "Katie", "Kevin", "Myriam",
"Nikki", "Tenny", "Timothy"]

// Once DOM loaded:
document.addEventListener("DOMContentLoaded", function(event) {
  beginConvo();
});

document.getElementById('chatForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var textInput = document.getElementById('chatInput');
  var janeMsg = textInput.value;
  // display janeMsg on the page within a list item
  document.getElementById("chatPane").innerHTML += `<li class="jane">${janeMsg}</li>`;
  // clear the text input after submit
  textInput.value = "";
  parseJaneWords(janeMsg);
});

function beginConvo() {
  responseFormat("Hi Judy!");
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
// params: janeWords (string)
function parseJaneWords(janeWords) {
  // put all words entered into an array, replacing non alpha-numeric chars with a blank string
  let wordsEntered = janeWords.replace(/[^\w\s]/g, "").split(" ");
  // create a new array to push lowercase versions of words into to allow for case insenstive input
  var wordsEnteredLowercase = [];
  for (var i=0; i < wordsEntered.length; i++) {
    wordsEnteredLowercase.push(wordsEntered[i].toLowerCase());
  }
  rosieResponse(wordsEnteredLowercase, "Bob");
}

// rosieResponse defines all of Rosie's possible response statements
// params: wordsEntered (array)
function rosieResponse(wordsEntered, randomPerson) {
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
      responseFormat("What can I help you with today, Judy?");
      break;
    case 'weather':
    case 'outside':
    case 'temperature':
    case 'forecast':
      responseFormat("Today's forecase is cloudy with a chance of asteroids.");
      break;
    case 'supper':
    case 'dinner':
    case 'eating':
    case 'eat':
      responseFormat("I'll be serving spaceballs and spaghetti.");
      break;
    case 'thanks':
    case 'thank':
      responseFormat("You're very welcome, Judy!");
      break;
    case 'meeting':
      responseFormat(`You have a 4pm meeting with ${chooseRandomPerson()}`);
      break;
    case 'bye':
    case 'goodbye':
    case 'later':
      responseFormat("Goodbye Judy! It was nice chatting.");
      break;
    default:
      responseFormat("I'm sorry, I don't understand what you're saying, Judy.");
  }
}

// Format Rosie's response
// use setTimeout to delay her response by 1s to feel more natural
function responseFormat(statement) {
  setTimeout(function(){ chatPane.innerHTML += `<li class="rosie">${statement}</li>`; }, 1000);
}
