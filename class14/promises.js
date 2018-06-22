var promise = new Promise(function(resolve, reject) {

  var api_url = 'https://baconipsum.com/api/?type=meat-and-filler';

  var request = new XMLHttpRequest();
  request.open('GET', api_url, true);
  var object;

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var response = request.responseText;
      // parse the JSON into a JS object
      object = JSON.parse(response);

     doSomething(object);
    } else {
      // We reached our target server, but it returned an error
      console.log("ERROR!");
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
  };

  request.send();

  function doSomething (object){
      if (object != null) {
      resolve("Stuff worked!");
      console.log(object);
    }
    else {
      reject(Error("It broke"));
    }
  }
});

promise.then(function(result) {  console.log(result);}, function(err) {  console.log(err);});
