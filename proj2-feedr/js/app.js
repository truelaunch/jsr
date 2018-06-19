/* FEEDr */

var root = "https://content.guardianapis.com/search";
var key = "830e55a9-fe2e-4cb2-9de4-0ba66be99e23";
var section = "technology";

$.ajax({
  url: `${root}?section=${section}&api-key=${key}`,
	method: "GET"
}).then(function(data) {
	console.log(data);
  addTitlesToDom(data);
});

function addTitlesToDom(data) {
  // response object. results is an object with 10 articles
  var results = data.response.results;
  // get an object of all the articleContent h3s in the DOM
  var titleElementObj = $(".articleContent h3");

  // loop through each articleContent h3 and insert respective title
  for(var i=0; i < titleElementObj.length; i++) {
   titleElementObj[i].innerText = results[i].webTitle;
  }
}
