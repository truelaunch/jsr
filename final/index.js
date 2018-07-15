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
  }

  // by default, display brand info for first brand in array
  displayBrandInfo(brands[0]);

  // determine selected brand
  brandSelect.onchange = function() {
    currentBrand = brandSelect.selectedOptions[0].text;
    displayBrandInfo(currentBrand);
  }
}

function displayBrandInfo(selectedBrand) {
  const currentBrandObj = nailpolishObject.filter(result => result.brand === selectedBrand)[0];
  var brandInfoContainer = document.getElementById("brand-info");

  // Create brand info template
  brandInfoContainer.innerHTML = `
  <h3>Collection: ${currentBrandObj.name} </h3>
  <h4>Price: $${currentBrandObj.price} </h4>
  <ul id="product-hex"></ul>
  `;

  // add hex values to list
  var productHexList = document.getElementById("product-hex");
  for (let i=0; i < currentBrandObj.product_colors.length; i++) {
    var hexColor = currentBrandObj.product_colors[i].hex_value;
    var colorName = currentBrandObj.product_colors[i].colour_name;
    productHexList.innerHTML += `<li class="hex-block" style="background-color: ${hexColor}"><span>${colorName}</span></li>`;
  }

  // console.log(productColors);




  console.log(currentBrandObj);
}
