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
  // response object. results is an object with 10 articles
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
  // get an object of all the articleContent h3s in the DOM
   var titleElementObj = $(".articleContent h3");
   
   // loop through each articleContent h3 and insert title
   for(var i=0; i < titleElementObj.length; i++) {
     titleElementObj[i].innerText = titles[i];
   }
}
