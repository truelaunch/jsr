// Example of a constructor function with a method (this.cost)

function Pizza(toppings, size) {
	this.toppings = toppings;
  this.size = size;

  this.slices = function() {
    if(this.size == "small"){
      return 6;
    } else if (this.size == "large") {
      return 12;
    }
  }

  this.cost = function() {
    return Math.floor(this.slices() * 0.8);
  }

}

var pizzaJo = new Pizza("mushrooms", "small");
var pizzaJustin = new Pizza("pepperoni", "large");


console.log(`Your pizza will have ${pizzaJustin.slices()} slices and will cost ${pizzaJustin.cost()} dollars`);
