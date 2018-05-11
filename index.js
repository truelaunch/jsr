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

var a = 5;
var b = 6;
var c = 7;

// half the perimeter
var hp = (a + b + c)/2;

// perimeter
var p = hp*(hp-a)*(hp-b)*(hp-c);

// area of triangle
var area = Math.sqrt(p);

console.log(area);
