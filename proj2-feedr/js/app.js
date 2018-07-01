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

// Global vars
var articleResults;

//guardianAjaxCall();
nyTimesAjaxCall();

function guardianAjaxCall() {
  $.ajax({
    url: `${apiCreds.guardian.root}${apiCreds.guardian.key}`,
  	method: "GET"
  }).then(function(data) {
  	console.log(data);
    articleResults = data.response.results;
    let articleInfo = {
      id: [],
      title: [],
      body: [],
      category: [],
      thumb: [],
      url: [],
      wordCount: [],
    }
    for (var i=0; i < articleResults.length; i++) {
      articleInfo.id.push(articleResults[i].id);
      articleInfo.title.push(articleResults[i].webTitle);
      articleInfo.body.push(articleResults[i].fields.body);
      articleInfo.category.push(articleResults[i].sectionName);
      articleInfo.thumb.push(articleResults[i].fields.thumbnail);
      articleInfo.url.push(articleResults[i].webUrl);
      articleInfo.wordCount.push(articleResults[i].fields.wordcount);
    }
    console.log(articleInfo);
    addContentToDom(articleInfo);
  });
}

function nyTimesAjaxCall() {
  $.ajax({
    url: `${apiCreds.nyt.root}${apiCreds.nyt.key}`,
  	method: "GET"
  }).then(function(data) {
  	console.log(data);
    articleResults = data.results;
    let articleInfo = {
      id: [],
      title: [],
      body: [],
      category: [],
      thumb: [],
      url: [],
    }
    for (var i=0; i < articleResults.length; i++) {
      articleInfo.id.push(articleResults[i].short_url);
      articleInfo.title.push(articleResults[i].title);
      articleInfo.body.push(articleResults[i].abstract);
      articleInfo.category.push(articleResults[i].section);
      articleInfo.thumb.push(articleResults[i].multimedia[0].url);
      articleInfo.url.push(articleResults[i].url);
    }
    console.log(articleInfo);
    addContentToDom(articleInfo);
  });
}

function addContentToDom(data) {
  var articleElement = $(".article");
  // loop through each article element and insert content
  for(var i=0; i < articleElement.length; i++) {
    // add a data-article attribute with the id of the article
    var articleDataAttr = $(articleElement[i]).attr('data-article', `${data.id[i]}`);
    // DOM elements to attach content to
    var articleTitle = $(articleElement[i]).find("h3")[0];
    var categoryLabel = $(articleElement[i]).find("h6")[0];
    var articleThumb = $(articleElement[i]).find("img")[0];
    var articleWordCount = $(articleElement[i]).find(".impressions")[0];
    // insert content
    articleTitle.innerText = data.title[i];
    categoryLabel.innerText = data.category[i];
    $(articleThumb).attr("src", data.thumb[i]);
    // If there are wordCount stats, show them. Else, blank
    if (data.wordCount) {
      articleWordCount.innerText = `Word count: ${data.wordCount[i]}`;
    } else {
      articleWordCount.innerText = "";
    }
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
