/*

Create a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice.
Use the html and css code included in the starter code folder to get started.

Follow the steps below to write your code.
    * generate a random number between 1 - 6 and store to a variable, random1
    * generate a random number between 1 - 6 and store to a variable, random2
    * combine 'dice-' and random1 to form the random class for the first die, firstDie
    * combine 'dice-' and random2 to form the random class for the second die, secondDie
    * get the first die by ID and update the class to firstDie (hint: document.getElementById)
    * get the first die by ID and update the class to secondDie (hint:document.getElementById)

Check to see if the "Roll the Dice" button has been clicked; if it has, run the diceRoll function
(hint: document.getElementById)

*/

let btn = document.getElementById("roll-dice");

let diceRoll = function() {
  // create random numbers for each dice
  let random1 = Math.ceil(Math.random() * 6);
  let random2 = Math.ceil(Math.random() * 6);

  // create random class names
  let firstDiceClass = `dice-${random1}`;
  let secondDiceClass = `dice-${random2}`;

  // change the class names on the dice
  document.getElementById("first-die").className = firstDiceClass;
  document.getElementById("second-die").className = secondDiceClass;
}

btn.addEventListener('click', diceRoll);
