// Even
// function isEven(num) {
//   return num % 2 === 0;
// }
// console.log(isEven(64));
// console.log(isEven(93));


// Even or Odd
// function isEvenorOdd(num) {
//   if(num % 2 === 0) {
//     return "even";
//   }
//   return "odd";
// }
//
// console.log(isEvenorOdd(64));
// console.log(isEvenorOdd(93));


// MESSED UP HOISTING ISSUE
// var text = 'outside';
// function logIt(){
//     console.log(text);
//     var text = 'inside';
// };
// logIt();


// SCOPE example
// var myStatement = "Hello, Sonyl!";
//
// function fizz(qux) {
//   var quzzle = qux + " hello again!";
//   return quzzle;
// }
//
// console.log(fizz(myStatement));
// // this wont log anything because quzzle is defined in a different scope
// console.log(quzzle);


// OBJECTS
// var myPuppy = {
// 	breed: "Scottish Terrier",
// 	color: "black",
// 	age: 2,
// 	owners: ["Joanna", "Justin"],
// 	name: "Scotty"
// }
// myPuppy.owners.push("Sam");
//
// console.log(myPuppy.owners);
// logs [ 'Joanna', 'Justin', 'Sam' ]

// More with OBJECTS
var reservation = {
  url: "www.hotels.com",
  arrivalDate: "May-12-2018",
  roomType: "QQ",
  isSmoking: false,
  guests: ["betty","bae"],
  paymentCard: "amex",
  price: 100,
  nightsStayed: 2,
  total() {
    return reservation.price * reservation.nightsStayed;
  }
}

var person = {
  firstName: "betty",
  lastName: "bee",
  address: "xx",
}

console.log(reservation.total());
