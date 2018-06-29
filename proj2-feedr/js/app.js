/* Feedr */

// API credential object
var apiCreds = {
  "guardian" : {
    root: "https://content.guardianapis.com/search?section=technology&show-fields=body,thumbnail,wordcount&api-key=",
    key: "830e55a9-fe2e-4cb2-9de4-0ba66be99e23",
  }
}

// Global vars
var articleResults;

guardianAjaxCall();

// write a function for each ajax call: getGuardianArticle, getNYTArticles, etc. x3

function guardianAjaxCall() {
  $.ajax({
    url: `${apiCreds.guardian.root}${apiCreds.guardian.key}`,
  	method: "GET"
  }).then(function(data) {
  	console.log(data);
    articleResults = data.response.results;
    var articleInfo = {
      title: [],
      body: [],
      category: [],
      thumb: [],
      url: [],
      wordCount: [],
    }
    for (var i=0; i < articleResults.length; i++) {
      articleInfo.title.push(articleResults[i].webTitle);
      articleInfo.body.push(articleResults[i].fields.body);
      articleInfo.category.push(articleResults[i].sectionName);
      articleInfo.thumb.push(articleResults[i].fields.thumbnail);
      articleInfo.url.push(articleResults[i].webUrl);
      articleInfo.wordCount.push(articleResults[i].fields.wordcount);
    }
    console.log(articleInfo);
    addContentToDom(data);
  });
}

function addContentToDom(data) {
  // response object. results is an object with 10 articles
  var results = data.response.results;
  var articleElement = $(".article");

  // loop through each article element and insert content
  for(var i=0; i < articleElement.length; i++) {
    // add a data-article attribute with the index of the article
    var articleDataAttr = $(articleElement[i]).attr('data-article', `${results[i].id}`);
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

// Delegated event handler: https://learn.jquery.com/events/event-delegation/
$(".article").on("click", "h3", function displayArticle() {
  // get data attribute value of article section clicked
  var articleId = $(this).closest(".article")[0].dataset.article;
  // show modal
  $("#popUp").removeClass("hidden");
  // search with .filter
  // use articleId to find the corresponding article
  const currentArticle = articleResults.filter(result => result.id === articleId)[0];
  console.log(currentArticle);
  //first 600 characters of article
  var articleSnippet = currentArticle.fields.body.substring(0,600) + "...";
  // add articleSnippet to paragraph in popup
  $("#popUp p")[0].innerHTML = articleSnippet;
  // add article title to h1 in popup
  $("#popUp h1")[0].innerText = currentArticle.webTitle;
  // add href to readMore link
  $(".readMore").attr("href", currentArticle.webUrl);

  // TODO: eventually have the loader class go away with use of a promise
  // for now, force hide the loader
  $("#popUp").removeClass("loader");
});


// Close popup
$(".closePopUp").click(function() {
  $("#popUp").addClass("hidden");
});
