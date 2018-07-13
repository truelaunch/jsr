var api_url = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish';

var request = new XMLHttpRequest();
request.open('GET', api_url, true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var response = request.responseText;
    // parse the JSON into a JS object
    object = JSON.parse(response);
    doStuff(object);
  } else {
    // We reached our target server, but it returned an error
    alert("Oops! Can't access the data");
  }
};
request.onerror = function() {
  // There was a connection error of some sort
  alert("Uh ohs. Error connecting");
};
request.send();

function doStuff(data) {
  console.log(data);
}
