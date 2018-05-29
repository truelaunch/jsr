// add an event listener to the form to submit Dave's message

// create a function for HAL to respond to Dave's messages with variable logic based upon
// Dave's inputs

// create a function for HAL to open the chat with "Good morning, Dave"

// invoke the opening message


// Global vars:
var rosieChatPane = document.getElementById("rosie");
var wordsHi = ["hello", "hey", "hi"];
var wordsWeather = ["weather", "outside", "temperature", "conditions", "forecast"];
var wordsDinner = ["supper", "dinner", "eating", "eat"];
var wordsThanks = ["thanks", "thank"];
var wordsBye = ["bye", "goodbye", "later"];

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
  rosieChatPane.innerHTML += `<li>Hi Judy!</li>`;
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
    // Check if any of the words entered (converted to lowercase) are included in any of the wordsX arrays.
  // If so, rosie will respond appropriately
  for (var i=0; i < wordsEntered.length; i++) {
    if (wordsHi.includes(wordsEntered[i])) {
      rosieChatPane.innerHTML += `<li>What can I help you with today, Judy?</li>`;
      return;
    }
    else if (wordsWeather.includes(wordsEntered[i])) {
      rosieChatPane.innerHTML += `<li>Today's forecase is cloudy with a chance of asteroids.</li>`;
      return;
    }
    else if (wordsDinner.includes(wordsEntered[i])) {
      rosieChatPane.innerHTML += `<li>I'll be serving spaceballs and spaghetti.</li>`;
      return;
    }
    else if (wordsThanks.includes(wordsEntered[i])) {
      rosieChatPane.innerHTML += `<li>You're very welcome, Judy!</li>`;
      return;
    }
    else if (wordsBye.includes(wordsEntered[i])) {
      rosieChatPane.innerHTML += `<li>Goodbye Judy! It was nice chatting.</li>`;
      return;
    }
  }  
}