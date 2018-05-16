// IF stmt for age
var age = 16;

if (age >= 62) {
  console.log("you've got social security benefits");
} else if (age >= 35) {
  console.log("you can run for president");
} else if (age >= 25) {
  console.log("you can rent a car");
} else if (age >= 21) {
  console.log("you can drink alcohol");
} else if (age >= 18) {
  console.log("you can vote");
} else if (age >= 16) {
  console.log("you can drive");
} else {
  console.log("you only go to school");
}

// FIZZBUZZ exercise:
// https://gist.github.com/sonylnagale/1b2edce04658c5a03cf5d365a6083ec5

// For loop FIZZBUZZ
for(i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
    } else if(i % 3 === 0) {
        console.log('fizz')
    } else if( i % 5 === 0) {
        console.log('buzz')
    } else {
        console.log(i)
    }
}

// ES6 Fanciness FIZZBUZZ
// let isDivideByThree = (num) => num % 3 === 0;
// let isDivideByFive = (num) => num % 5 === 0;
// for(let num =1; num <=100; num++) {
//     let output = ''
//     if(isDivideByThree(num)) output += 'fizz'
//     if(isDivideByFive(num)) output += 'buzz'
//     console.log(output || num)
// }
