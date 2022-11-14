/*A simple program that gives a random house from hp.
Since I refuse to support J.K Rowling, I stick with cabins of camp half blood from Percy Jackson series:
Hermes, Afrodite, Athene and Ares.
Trans women are real women. */

let name = prompt("Your name: ")
let cabin = Math.floor(Math.random() * 4)+ 1

switch (cabin){
    case 1:
        cabin = "Hermes"
        break;
    case 2:
        cabin = "Afrodite"
        break;
    case 3:
        cabin = "Athene"
        break;
    case 4:
        cabin = "Ares"
        break;

}
console.log(`Hi, ${name}, your cabin is ${cabin}`);
