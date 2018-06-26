/* Feedr */

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

function addContentToDom(data) {
  // response object. results is an object with 10 articles
  var results = data.response.results;
  var articleElement = $(".article");

  // loop through each article element and insert content
  for(var i=0; i < articleElement.length; i++) {
    // add a data-article attribute with the index of the article
    var articleDataAttr = $(articleElement[i]).attr('data-article', `${i}`);
    // DOM elements to attach content to
    var articleTitle = $(articleElement[i]).find("h3")[0];
    var categoryLabel = $(articleElement[i]).find("h6")[0];
    var articleThumb = $(articleElement[i]).find("img")[0];
    var articleWordCount = $(articleElement[i]).find(".impressions")[0];
    articleTitle.innerText = results[i].webTitle;
    categoryLabel.innerText = results[i].sectionName;
    articleWordCount.innerText = `Word count: ${results[i].fields.wordcount}`;
    // add article thumbnail
    $(articleThumb).attr("src", results[i].fields.thumbnail);
  }
}

$(".articleContent h3").on("click", function displayArticle() {
  // get data attribute value of article section clicked
  var articleIndex = $(this).closest(".article")[0].dataset.article;
  // show modal
  $("#popUp").removeClass("hidden");
  //first 600 characters of article
  var articleSnippet = articleResults[articleIndex].fields.body.substring(0,600) + "...";
  // add articleSnippet to paragraph in popup
  $("#popUp p")[0].innerHTML = articleSnippet;
  // add article title to h1 in popup
  $("#popUp h1")[0].innerText = articleResults[articleIndex].webTitle;
  // add href to readMore link
  $(".readMore").attr("href", articleResults[articleIndex].webUrl);

  // TODO: eventually have the loader class go away with use of a promise
  // for now, force hide the loader
  $("#popUp").removeClass("loader");
});


// Close popup
$(".closePopUp").click(function() {
  $("#popUp").addClass("hidden");
});
