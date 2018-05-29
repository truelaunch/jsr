// add an event listener to the form to submit Dave's message

// create a function for HAL to respond to Dave's messages with variable logic based upon
// Dave's inputs

// create a function for HAL to open the chat with "Good morning, Dave"

// invoke the opening message


// Global vars:
var wordsHi = ["hello", "hey", "hi"];
var wordsDinner = ["supper", "dinner", "eating", "eat"];
var wordsThanks = ["thanks", "thank"];
var wordsBye = ["bye", "goodbye"];


document.getElementById('chatForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var textInput = document.getElementById('chatInput');
  var janeMsg = textInput.value;
  document.getElementById("jane").innerHTML += `<li>${janeMsg}</li>`;
  textInput.value = "";
  parseJaneWords(janeMsg);
});

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
      document.getElementById("rosie").innerHTML += `<li>Hi Judy!</li>`;
      return;
    }
    else if (wordsDinner.includes(wordsEntered[i])) {
      document.getElementById("rosie").innerHTML += `<li>I'll be serving spaceballs and spaghetti.</li>`;
      return;
    }
    else if (wordsThanks.includes(wordsEntered[i])) {
      document.getElementById("rosie").innerHTML += `<li>You're very welcome, Judy!</li>`;
      return;
    }
    else if (wordsBye.includes(wordsEntered[i])) {
      document.getElementById("rosie").innerHTML += `<li>Goodbye Judy! It was nice chatting.</li>`;
      return;
    }
    else {
      document.getElementById("rosie").innerHTML += `<li>I'm sorry, Judy. I don't understand what you're saying.</li>`;
    }
  }
}