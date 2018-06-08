$(document).ready(function() {
  // first select your container and set it to a variable so you don't need to find it every time
  var container = $(".container");

  // we need a counter in this scope to count our stickies
  var counter = 0;
  // next, a click handler for creaing the sticky
  var btn = $(".box-creator-button");

  // we need to create a new box each click
  btn.click(function() {
    // get the user input (hint: the .val method)
    var colorInput = $(".box-color-input").val();
    // get message from input
    var msgInput = $(".box-color-note").val();
    createBox(colorInput, msgInput);
    // clear the inputs
    $(".box-color-input").val("");
    $(".box-color-note").val("");
  });

  function createBox(color, msg) {
    // use your closure to increment the number of stickies
    counter+=1;
    // set the color of the sticky from user input (hint: the .css() method)
    // add message to sticky
    // stick your sticky in the DOM
    var sticky = container.append(`<div class="box" style="background: ${color}">${counter}. ${msg}</div>`);
  }
});
