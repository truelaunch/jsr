// VANILLA JS API REQUEST

var api_url = 'https://swapi.co/api/';
var planets = 'planets/';

var request = new XMLHttpRequest();
request.open('GET', api_url + planets + '3', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var response = request.responseText;
    // parse the JSON into a JS object
    object = JSON.parse(response);
    console.log(object);
    populateData(object);
  } else {
    // We reached our target server, but it returned an error
    console.log("ERROR!");
  }
};
request.onerror = function() {
  // There was a connection error of some sort
};
request.send();


function populateData(data) {
  // using jQuery to add text into the h1
  document.getElementById("planet-name").innerHTML = data.name;
  document.getElementById("population").innerHTML = data.population;
  document.getElementById("diameter").innerHTML = data.diameter;
}
