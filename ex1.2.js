
/*
a simple program that prompts the user for three integer numbers
and calculates the sum, product and average of the numbers
 */

let number1 = prompt("first number: ")
let number2 = prompt("second number: ")
let number3 = prompt("third number: ")

let sum = parseInt(number1) + parseInt(number2) + parseInt(number3)
let product = parseInt(number1) * parseInt(number2) * parseInt(number3)
let average = (parseInt(number1) + parseInt(number2) + parseInt(number3)) / 2

console.log(`the sum is: ${sum}`);
console.log(`the product is: ${product}`);
console.log(`the average is: ${average}`);
