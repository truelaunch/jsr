// Global vars
var nailpolishObject;

// API request
var api_url = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish';

var request = new XMLHttpRequest();
request.open('GET', api_url, true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var response = request.responseText;
    // parse the JSON into a JS object
    nailpolishObject = JSON.parse(response);
    var brands = getBrands(nailpolishObject);
    var selectedBrand = populateDom(brands);
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
    brandSelect.options[i] = new Option(brands[i], brands[i]);
    //console.log(brands[i]);
  }

  // determine selected brand
  brandSelect.onchange = function() {
    var currentBrand = brandSelect.selectedOptions[0].text;
    displayBrandInfo(currentBrand);
  }
}

function displayBrandInfo(selectedBrand) {
  const currentBrandObj = nailpolishObject.filter(result => result.brand === selectedBrand)[0];
  var brandInfoContainer = document.getElementById("brand-info");

  brandInfoContainer.innerHTML = `
  <h2>${currentBrandObj.name} </h2>
  <h3>Price: $${currentBrandObj.price} </h3>

  `;

  console.log(currentBrandObj);
}
