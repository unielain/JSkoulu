/*
a simple program that prompts the user for three integer numbers
and calculates the sum, product and average of the numbers
 */

const number1 = parseInt(prompt("first number: "));
const number2 = parseInt(prompt("second number: "));
const number3 = parseInt(prompt("third number: "));
document.querySelector("#numbers").innerHTML = `${number1}, ${number2}, ${number3}`;

const sum = (number1 + number2 + number3);
document.querySelector("#sum").innerHTML = `${sum}`;

const product = (number1 * number2 * number3);
document.querySelector("#product").innerHTML = `${product}`;

const average = (sum / 3);
document.querySelector("#average").innerHTML = `${average}`;

