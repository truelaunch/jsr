/* Feedr */
// GENERAL QUESTIONS:
// What should I do re article images?
// What about "impressions"? Can that be date instead?
// How do I deal with multiple API calls for 3 different news sources??
// Continue with click function for h3 below

// THE GUARDIAN API INFO
// put this in an object named API sources. The Guardian is the key with sub-object with this info:
var root = "https://content.guardianapis.com/search";
var key = "830e55a9-fe2e-4cb2-9de4-0ba66be99e23";
var section = "technology";

$.ajax({
  url: `${root}?section=${section}&api-key=${key}`,
	method: "GET"
}).then(function(data) {
	console.log(data);
  addContentToDom(data);
});

// generic function that takes into account the name of what's inside the selection.
// use data-attribute in html
// trigger the code based on that to read what's inside the APIs response
// front page triggers the first one.

function addContentToDom(data) {
  // response object. results is an object with 10 articles
  var results = data.response.results;
  // get an object of all the articleContent h3s in the DOM
  var titleElementObj = $(".articleContent h3");
  // get an object of all the article h6s in the DOM
  var categoryElementObj = $(".articleContent h6");

  // loop through each articleContent h3 and insert respective title
  for(var i=0; i < titleElementObj.length; i++) {
   titleElementObj[i].innerText = results[i].webTitle;
   categoryElementObj[i].innerText = results[i].sectionName;
  }
}

$(".articleContent h3").click(function() {
  console.log(this);
  $("#popUp").removeClass("hidden");

  // How to know which article was clicked so that article's content gets populated into popup?
  // Use data-attribute to connect the HTML and the JS
  // .parent().data("whatever")  <--
});

$(".closePopUp").click(function() {
  $("#popUp").addClass("hidden");
});
