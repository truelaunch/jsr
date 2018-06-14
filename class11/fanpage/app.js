// Initialize Firebase
var config = {
  apiKey: 'AIzaSyAjkcz3B6aqcGUD6x52qvu-S5OwUL809R4',
  authDomain: 'joanna-class11.firebaseapp.com',
  databaseURL: 'https://joanna-class11.firebaseio.com',
  storageBucket: 'joanna-class11.appspot.com'
};
firebase.initializeApp(config);


$(document).ready(function() {
  var database = firebase.database();
  // create a section for messages data in your db
  var messagesReference = database.ref('messages');


  // CREATE
  var database = firebase.database();

  $('#message-form').submit(function(event) {
    // by default a form submit reloads the DOM which will subsequently reload all our JS
    // to avoid this we preventDefault()
    event.preventDefault();

    // grab user message input
    var message = $('#message').val();

    // clear message input (for UX purposes)
    $('#message').val('');

    // use the set method to save data to the messages
    messagesReference.push({
      message: message,
      votes: 0
    });
  });
  getFanMessages();

  // READ
  function getFanMessages() {
    // use reference to app database to listen for changes in messages data
    // hint: use something referring to 'value'
    messagesReference.on('value', function(data){
      var messageValue = data.val();
      // iterate through results coming from database call; messages
      // using a "for in" loop to iterate through values in an object
      for (var i in messageValue) {
        $(".message-board").append("<li>" +  messageValue[i].message + "</li>");
      }
    });
  }
});
