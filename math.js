// IF statement

// var myFavThing = "popcorn!";
// var yourFavThing = "pizza!";
//
// if (myFavThing === yourFavThing) {
//   console.log("we like the same thing!");
// } else {
//   console.log("we like different things");
// }

// Area of a triangle
// https://gist.github.com/sonylnagale/b37a204ed887c18eeed8391ce0bed3e4

//parseInt to turn the string returned by prompt into a number
var a = parseInt(window.prompt("Enter a value for side 1 of the triangle"));
var b = parseInt(window.prompt("Enter a value for side 2 of the triangle"));
var c = parseInt(window.prompt("Enter a value for side 3 of the triangle"));

// half the perimeter
var hp = (a + b + c)/2;

// perimeter
var p = hp*(hp-a)*(hp-b)*(hp-c);

// area of triangle
var area = Math.sqrt(p);

alert(`The area of your triangle is ${area}`);
