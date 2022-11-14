/*
A simple program that draws two numbers on a dice.
Prints the drawn numbers and their sum
 */

let first_dice = Math.floor(Math.random()*6) +1;
let second_dice = Math.floor(Math.random()*6) +1;
let sum_of_dice = parseInt(first_dice) + parseInt(second_dice);

console.log(`The first number: ${first_dice}\nThe second dice: ${second_dice}\nThe sum of dice: ${sum_of_dice}`)
