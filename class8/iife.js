// Example of an IIFE:

// Write an IIFE function in Codepen that takes a timer argument. The function will automatically execute and count up every second until the specified argument. Use the setInterval function to count up. Ping in Slack when finished.
// Hint: a second is the timer passed * 1000 (milliseconds).
// Remember your skeleton: (function(){})();

(function (timer) {
  var i = 0;
  var myInterval = setInterval(function() {

    console.log(i);

    if (i == timer) {
      clearInterval(myInterval);
    }
    i++;

  } , 1000)})(5);
