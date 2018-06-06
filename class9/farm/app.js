// prototype
var Bird = function() {
  this.mouth = "beak";
  this.name = "bird";
  this.image = "bird image";
  this.talk = "chirp chirp";
}

// sub classes
var Turkey = function() {
  Bird.call(this);
  this.name = "turkey";
  this.image = "turkey image";
  this.talk = "gobble gobble";
}

var Chicken = function() {
  Bird.call(this);
  this.name = "chicken";
  this.image = "chicken image";
  this.talk = "cluck cluck";
}

// instances
var henry = new Chicken();

console.log(henry);
