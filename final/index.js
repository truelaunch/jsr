var api_url = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish';

var request = new XMLHttpRequest();
request.open('GET', api_url, true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var response = request.responseText;
    // parse the JSON into a JS object
    object = JSON.parse(response);
    var brands = getBrands(object);
    var addContentToDom = populateDom(brands);
  } else {
    // We reached our target server, but it returned an error
    alert("Oops! Can't access the data");
  }
};
request.onerror = function() {
  // There was a connection error of some sort
  alert("Uh ohs. Error connecting");
};
request.send();

// create an array of all unique brands
function getBrands(data) {
  console.log(data);
  var brandList = [];
  for (var i=0; i < data.length; i++) {
    // console.log(data[i].brand);
    if (!brandList.includes(data[i].brand)) {
      brandList.push(data[i].brand);
    }
  }
  return brandList;
}

function populateDom(brands) {
  // Populate select menu with brands
  var brandSelect = document.getElementById("brands");
  for (var i=0; i < brands.length; i++) {
    brandSelect.options[i] = new Option(brands[i]);
  }
}
