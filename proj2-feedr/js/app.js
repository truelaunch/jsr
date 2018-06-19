/* FEEDr */

var root = "https://content.guardianapis.com/search";
var key = "830e55a9-fe2e-4cb2-9de4-0ba66be99e23";
var section = "technology";

$.ajax({
  url: `${root}?section=${section}&api-key=${key}`,
	method: "GET"
}).then(function(data) {
	console.log(data);
  var getTitles = getTitlesArray(data);
  var addTitles = addTitlesToDom(getTitles);
});

function getTitlesArray(data) {
  // response object
  var results = data.response.results;
  var titlesArray = [];
  //get each article title. Push into titlesArray
  for(var i=0; i < results.length; i++) {
    var title = results[i].webTitle;
    titlesArray.push(title);
  }
  return titlesArray;
}

function addTitlesToDom(titles) {
  $(".articleContent h3").text(titles[0]);
}
