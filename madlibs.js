// Madlibs homework instructions
// https://gist.github.com/sonylnagale/47bb2aa56b37baa7515be344d10264ac

var companies = ["Uber", "Lyft", "Google", "Apple", "MailChimp"];
var animals = ["monkeys", "dogs", "giraffes", "emus", "sloths"];

// generate a random number from 1 - maxNum (which will always be 1 less than the param entered due to math.floor)
// use math.floor to round, since we want 0 - 4 as the range for the 0 indexed array.
function getRandomNum(maxNum) {
  return Math.floor(Math.random() * maxNum);
}


for (var i=0; i < companies.length; i++) {
  // Generate 2 random numbers
  // 5 is the parameter, since there are 5 items in each array
  var randomA = getRandomNum(5);
  var randomB = getRandomNum(5);
  console.log(`My company is an ${companies[randomA]} for ${animals[randomB]}!`);
}
