// add an event listener to the form to submit Dave's message

// create a function for HAL to respond to Dave's messages with variable logic based upon
// Dave's inputs

// create a function for HAL to open the chat with "Good morning, Dave"

// invoke the opening message


// Global vars:
var rosieChatPane = document.getElementById("rosie");
var knownWords = [
"hello", "hey", "hi",
"weather", "outside", "temperature", "conditions", "forecast",
"supper", "dinner", "eating", "eat",
"thanks", "thank",
"bye", "goodbye", "later",
];

// Once DOM loaded:
document.addEventListener("DOMContentLoaded", function(event) {
  beginConvo();
});

document.getElementById('chatForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var textInput = document.getElementById('chatInput');
  var janeMsg = textInput.value;
  document.getElementById("jane").innerHTML += `<li>${janeMsg}</li>`;
  textInput.value = "";
  parseJaneWords(janeMsg);
});

function beginConvo() {
  responseFormat("Hi Judy!");
}

function parseJaneWords(janeWords) {
  // put all words entered into an array, replacing non alpha-numeric chars with a blank string
  let wordsEntered = janeWords.replace(/[^\w\s]/g, "").split(" ");
  // create a new array to push lowercase versions of words into to allow for case insenstive input
  var wordsEnteredLowercase = [];
  for (var i=0; i < wordsEntered.length; i++) {
    wordsEnteredLowercase.push(wordsEntered[i].toLowerCase());
  }
  rosieResponse(wordsEnteredLowercase);
}

function rosieResponse(wordsEntered) {
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
function responseFormat(statement) {
  rosieChatPane.innerHTML += `<li>${statement}</li>`;
}
