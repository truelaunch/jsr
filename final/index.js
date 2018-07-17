// Global vars
var filteredObject;

// API request
var api_url = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish';

var request = new XMLHttpRequest();
request.open('GET', api_url, true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var response = request.responseText;
    // hide loader
    document.getElementById("loader").classList += "hidden";
    // parse the JSON into a JS object
    object = JSON.parse(response);
    // filter out any brands that don't contain product colors
    filteredObject = filter(object);
    // get a list of unique brands (no duplicates)
    var brands = getBrands(filteredObject);
    // add content to DOM
    populateDom(brands);
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

// return: object with only brands that contain product_colors
// solution from: https://stackoverflow.com/questions/15287865/remove-array-element-based-on-object-property
function filter(object) {
  for (var i = object.length - 1; i >= 0; --i) {
    if (object[i].product_colors.length < 1) {
        object.splice(i,1);
    }
  }
  return object;
}

// return: string array of all unique brands
function getBrands(data) {
  var brandList = [];
  for (var i=0; i < data.length; i++) {
    if (data[i].product_colors.length > 0 && !brandList.includes(data[i].brand)) {
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

// Adds most content to DOM
function displayBrandInfo(selectedBrand) {
  const currentBrandObj = filteredObject.filter(result => result.brand === selectedBrand)[0];
  var brandInfoContainer = document.getElementById("brand-info");

  // Create brand info template
  brandInfoContainer.innerHTML = `
  <h3>Collection: ${currentBrandObj.name} </h3>
  <h4>Price: $${currentBrandObj.price} </h4>
  <ul id="product-list"></ul>
  `;

  // add hex values to list
  var productHexList = document.getElementById("product-list");
  for (let i=0; i < currentBrandObj.product_colors.length; i++) {
    var hexColor = currentBrandObj.product_colors[i].hex_value;
    var colorName = currentBrandObj.product_colors[i].colour_name;
    productHexList.innerHTML += `<li class="hex-block" style="background-color: ${hexColor}" data-hex="${hexColor}" title="${colorName}"><span>${colorName}</span></li>`;
  }

  // click event for Hex List
  productHexList.addEventListener("click", function fillColor(evt) {
    var hexVal = evt.target.dataset.hex;
    var siblings = this.childNodes;
    var manicure = document.getElementById("manicure");
    // remove active class from any swatches that have it
    for(var i=0; i < siblings.length; i++) {
      if (siblings[i].classList.contains("active")) {
        siblings[i].classList.remove("active");
      }
    }
    // add active class to currently clicked swatch
    evt.target.classList.toggle("active");
    // change background color of manicure underlay
    manicure.style.background = hexVal;
  });
}
