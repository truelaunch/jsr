/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.

*/

/*

Bonus:

When they click submit without typing anything, alert the user
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/

window.onload = function() {
  // when someone clicks the button...
  document.getElementById("new-thing-button").onclick = function(e) {
    e.preventDefault();
    addToList();
  };
};

function addToList() {
  var listContainer = document.getElementById("fav-list");
  // get user input
  var userInput = document.getElementById("new-thing").value;

  if (userInput === "") {
    alert("Please enter a value.");
  } else {
    // create an empty li
    var newListItem = document.createElement("li");
    // populate the li with the userInput
    newListItem.innerHTML = userInput;
    // append the newListItem to the overall list
    listContainer.appendChild(newListItem);
    // clear the input box
    document.getElementById("new-thing").value = "";
  }
}
