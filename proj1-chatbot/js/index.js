// add an event listener to the form to submit Dave's message

// create a function for HAL to respond to Dave's messages with variable logic based upon
// Dave's inputs

// create a function for HAL to open the chat with "Good morning, Dave"

// invoke the opening message


//CLUES:

document.getElementById('chatForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var textInput = document.getElementById('chatInput');
  var janeMsg = textInput.value;
  document.getElementById("jane").innerHTML += `<li>${janeMsg}</li>`;
  textInput.value = "";
  parseJaneWords(janeMsg);
});

function parseJaneWords(janeWords) {
  let wordsEntered = janeWords.replace(/[^\w\s]/g, "").split(" ");
  rosieResponse(wordsEntered);
}

function rosieResponse(wordsEntered) {
  var wordsEnteredLowercase = [];
  var wordsHi = ["hello", "hey", "hi"];
  var wordsDinner = ["supper", "dinner", "eating", "eat"];
  var wordsThanks = ["thanks", "thank"];
  var wordsBye = ["bye", "goodbye"];
  // convert wordsEntered to lowercase to be case insensitive
  for (var i=0; i < wordsEntered.length; i++) {
    wordsEnteredLowercase.push(wordsEntered[i].toLowerCase());
  }

    // Check if any of the words entered (converted to lowercase) are included in any of the wordsX arrays.
  // If so, rosie will respond appropriately
  for (var i=0; i < wordsEntered.length; i++) {
    if (wordsHi.includes(wordsEnteredLowercase[i])) {
      document.getElementById("rosie").innerHTML += `<li>Hi Judy!</li>`;
    }
    else if (wordsDinner.includes(wordsEnteredLowercase[i])) {
      document.getElementById("rosie").innerHTML += `<li>I'll be serving spaceballs and spaghetti.</li>`;
    }
    else if (wordsThanks.includes(wordsEnteredLowercase[i])) {
      document.getElementById("rosie").innerHTML += `<li>You're very welcome, Judy!</li>`;
    }
    else if (wordsBye.includes(wordsEnteredLowercase[i])) {
      document.getElementById("rosie").innerHTML += `<li>Goodbye Judy! It was nice chatting.</li>`;
    }
    else {
      document.getElementById("rosie").innerHTML += `<li>I'm sorry, Judy. I don't understand what you're saying.</li>`;
    }
  }
}