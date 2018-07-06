/* Feedr */

// API credential object
var apiCreds = {
  "guardian" : {
    root: "https://content.guardianapis.com/search?section=technology&show-fields=body,thumbnail,wordcount&api-key=",
    key: "830e55a9-fe2e-4cb2-9de4-0ba66be99e23",
  },
  "nyt" : {
    root: "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=",
    key : "904a5be84c984dbcbe6395e5cd41d7fd",
  }
}

// by default, load Guardian api
guardianAjaxCall();

// Nav click handler.
// Select which API to load
$("#select").on("click", "a", function selectApi() {
  switch($(this)[0].id) {
    case "guardian":
        guardianAjaxCall();
        break;
    case "nyt":
        sourceName = "New York Times";
        nyTimesAjaxCall();
        break;
    default:
        guardianAjaxCall();
      }
});

// Global vars
var articleInfo;

function guardianAjaxCall() {
  // set the correct name in the nav
  $("#sourceName")[0].innerText = "The Guardian";
  $.ajax({
    url: `${apiCreds.guardian.root}${apiCreds.guardian.key}`,
  	method: "GET"
  }).then(function(data) {
    var articleResults = data.response.results;

    // articleInfo gets populated via for loop
    articleInfo = [];
    for (var i=0; i < articleResults.length; i++) {
      let article = {
          "id": articleResults[i].id,
          "title": articleResults[i].webTitle,
          "body": articleResults[i].fields.body,
          "category": articleResults[i].sectionName,
          "thumb": articleResults[i].fields.thumbnail,
          "url": articleResults[i].webUrl,
          "wordCount": articleResults[i].fields.wordcount
      };
      articleInfo.push(article);
    }
    addContentToDom(articleInfo);
  });
}

function nyTimesAjaxCall() {
  $("#sourceName")[0].innerText = "New York Times";
  $.ajax({
    url: `${apiCreds.nyt.root}${apiCreds.nyt.key}`,
  	method: "GET"
  }).then(function(data) {
    var articleResults = data.results;

    // articleInfo gets populated via for loop
    articleInfo = [];
    for (var i=0; i < articleResults.length; i++) {
      let article = {
          "id": articleResults[i].short_url,
          "title": articleResults[i].title,
          "body": articleResults[i].abstract,
          "category": articleResults[i].section,
          // ternary stmt to add placeholder image if article doesn't have image
          "thumb": articleResults[i].multimedia.length > 0 ? articleResults[i].multimedia[0].url : "https://picsum.photos/75",
          "url": articleResults[i].url,
      };
      articleInfo.push(article);
    }
    addContentToDom(articleInfo);
  });
}

function addContentToDom(data) {
  var articleElement = $(".article");
  // loop through each article element and insert content
  for(var i=0; i < articleElement.length; i++) {
    // add a data-article attribute with the id of the article
    var articleDataAttr = $(articleElement[i]).attr('data-article', `${data[i].id}`);
    // DOM elements to attach content to
    var articleTitle = $(articleElement[i]).find("h3")[0];
    var categoryLabel = $(articleElement[i]).find("h6")[0];
    var articleThumb = $(articleElement[i]).find("img")[0];
    var articleWordCount = $(articleElement[i]).find(".impressions")[0];
    // insert content
    articleTitle.innerText = data[i].title;
    categoryLabel.innerText = data[i].category;
    $(articleThumb).attr("src", data[i].thumb);
    // If there are wordCount stats, show them. Else, blank
    if (data[i].wordCount) {
      articleWordCount.innerText = `Word count: ${data[i].wordCount}`;
    } else {
      articleWordCount.innerText = "";
    }
  }
}

$(".article").on("click", "h3", function displayArticle() {
  // get data attribute value of article section clicked
  var articleId = $(this).closest(".article")[0].dataset.article;
  // show modal
  $("#popUp").removeClass("hidden");
  // search with .filter
  // use articleId to find the corresponding article
  // .filter replaces the need of a for loop for searching through an array
  const currentArticle = articleInfo.filter(result => result.id === articleId)[0];
  //first 600 characters of article
  var articleSnippet = currentArticle.body.substring(0,600) + "...";
  // add articleSnippet to paragraph in popup
  $("#popUp p")[0].innerHTML = articleSnippet;
  // add article title to h1 in popup
  $("#popUp h1")[0].innerText = currentArticle.title;
  // add href to readMore link
  $(".readMore").attr("href", currentArticle.url);

  // TODO: eventually have the loader class go away with use of a promise
  // for now, force hide the loader
  $("#popUp").removeClass("loader");
});


// Close popup
$(".closePopUp").click(function() {
  $("#popUp").addClass("hidden");
});
