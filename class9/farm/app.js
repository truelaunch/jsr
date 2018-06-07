// prototype
var FarmAnimal = function() {
  this.name;
  this.image;
  this.talk;
}

// sub classes
var Bird = function() {
  FarmAnimal.call(this);
  this.mouth = "beak";
  this.img = "bird image";
  this.talk = "chirp chirp";
}

var Turkey = function(name) {
  Bird.call(this);
  this.name = name;
  this.image = "http://www.freepngimg.com/download/turkey_bird/5-2-turkey-png.png";
  this.talk = "gobble gobble";
}

var Chicken = function(name) {
  Bird.call(this);
  this.name = name;
  this.image = "https://i2.wp.com/myfoodyshop.com/wp-content/uploads/2017/03/cobb700.png?fit=400%2C529&ssl=1";
  this.talk = "cluck cluck";
}

// instances
var henry = new Chicken("Henry");
var thomas = new Turkey("Thomas");

// animal node vars
var chickenNode = document.getElementById("chicken");
var turkeyNode = document.getElementById("turkey");

//images for each animal
chickenNode.style.backgroundImage = `url(${henry.image})`;
turkeyNode.style.backgroundImage = `url(${thomas.image})`;


// event listeners
chickenNode.addEventListener("click", function() {
  alert(`${henry.talk}`);
})

turkeyNode.addEventListener("click", function() {
  alert(`${thomas.talk}`);
})
