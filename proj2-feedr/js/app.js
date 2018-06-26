/* Feedr */
// GENERAL QUESTIONS:
// What should I do re article images?
// What about "impressions"? Can that be date instead?
// How do I deal with multiple API calls for 3 different news sources??
// Continue with click function for h3 below

// THE GUARDIAN API INFO
// put this in an object named API sources. The Guardian is the key with sub-object with this info:
var root = "https://content.guardianapis.com/search?section=technology&show-fields=body,thumbnail,wordcount&api-key=";
var key = "830e55a9-fe2e-4cb2-9de4-0ba66be99e23";
var section = "technology";

// Global vars
var articleResults;

$.ajax({
  url: `${root}${key}`,
	method: "GET"
}).then(function(data) {
	console.log(data);
  addContentToDom(data);
  articleResults = data.response.results;
});

// generic function that takes into account the name of what's inside the selection.
// use data-attribute in html
// trigger the code based on that to read what's inside the APIs response
// front page triggers the first one.

function addContentToDom(data) {
  // response object. results is an object with 10 articles
  var results = data.response.results;
  var articleElement = $(".articleContent");

  // loop through each article element and insert content
  for(var i=0; i < articleElement.length; i++) {
    var articleTitle = $(articleElement[i]).find("h3")[0];
    var categoryLabel = $(articleElement[i]).find("h6")[0];
    articleTitle.innerText = results[i].webTitle;
    categoryLabel.innerText = results[i].sectionName;

    var articleDataAttr = $(articleElement[i]).attr('data-article', `${i}`);
  }
}

$(".articleContent h3").on("click", function displayArticle() {
  // get data attribute value of article section clicked
  var articleIndex = $(this).closest(".articleContent")[0].dataset.article;
  let selectedArticleContent = articleResults[articleIndex];
  console.log("results!" , selectedArticleContent);
});

// $(".articleContent h3").on(function(article) {
//   console.log(this);
//   $("#popUp").removeClass("hidden");
//   $("#popUp").removeClass("loader");
//
//   // How to know which article was clicked so that article's content gets populated into popup?
//   // Use data-attribute to connect the HTML and the JS
//   // .parent().data("whatever")  <--
// });

$(".closePopUp").click(function() {
  $("#popUp").addClass("hidden");
});
