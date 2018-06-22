var promise = new Promise(function(resolve, reject) {
  function addContent(result){
    var list = document.getElementById("list");
    for (var i = 0; i < result.length; i++){
      var newItem = document.createElement("li");
      var newText = document.createTextNode(result[i]);
      newItem.appendChild(newText);
      list.appendChild(newItem);
    }
  }

  var httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', 'https://baconipsum.com/api/?type=all-meat');
  httpRequest.send();
  httpRequest.onload = () => resolve(addContent(JSON.parse(httpRequest.responseText)));
  httpRequest.onerror = () => reject(httpRequest.statusText);
});

promise.then(function() {
  console.log("Stuff worked"); // "Stuff worked!"
}, function() {
  console.log("It broke"); // Error: "It broke"
});
