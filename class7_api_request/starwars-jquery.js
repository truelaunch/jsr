var root = "https://swapi.co/api/";

$.ajax({
	url: root + "planets/3/",
	method: "GET"
}).then(function(data) {
	console.log(data);
  populateData(data);
});

function populateData(data) {
  // using jQuery to add text into the h1
  $("#planet-name").text(data.name);
  $("#population").text(data.population);
  $("#diameter").text(data.diameter);
}
