/*Write a program that prompts for user's name and then greets the user.
 Print the result to the HTML document: Hello, Name! (2p)*/

const name = prompt(`What is your name? `);
document.getElementById("greeting").innerHTML = `Hello, ${name}!`;
