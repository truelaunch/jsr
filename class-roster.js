// Homework:
// Write a program that:
// Has an array of first names
// Has an array of last names
// Has a numeric variable of "classSize"
// And then, randomly combines those names to create a class manifest of students, up until the size of the class.
// Requirements:
// Use Math.random()
// Use a function

let firstName = ["Julia", "Justin", "Joanna", "Abbie", "Dennis", "Chris"];
let lastName = ["Bennett", "Smith", "Dacko", "Sampson", "O'Connor", "McDonald"];
let classSize = 12;
let i = 1;

// Function to generate a random number
// param: maxNum. The highest random number to generate
let getRandomNum = function(maxNum) {
  return Math.floor(Math.random() * maxNum);
}

// While loop to spit out 12 random name combinations
while (i <= classSize) {
  // get a random number from 0-5 to use as random index for firstName and LastName
  let randomA = getRandomNum(firstName.length);
  let randomB = getRandomNum(lastName.length);
  console.log(`${firstName[randomA]} ${lastName[randomB]}`);
  i++;
}
