/*A simple program that gives a random house from hp.
Since I refuse to support J.K Rowling who hates Jewish and trans people, I do this exercise using Rick Riordan's Percy Jackson series which has a similar sorting system*/

let name = prompt("Your name: ")
let cabin = Math.floor(Math.random() * 12) + 1

/* If the user doesn't input a name, they get a default name */
if (name == ``){
    name = "Peter Johnson";
}

switch (cabin) {
    case 1:
        cabin = "Zeus"
        break;
    case 2:
        cabin = "Hera"
        break;
    case 3:
        cabin = "Poseidon"
        break;
    case 4:
        cabin = "Hermes"
        break;
    case 5:
        cabin = "Aphrodite"
        break;
    case 6:
        cabin = "Hephaestus"
        break;
    case 7:
        cabin = "Athena"
        break;
    case 8:
        cabin = "Demeter"
        break;
    case 9:
        cabin = "Dionysus"
        break;
    case 10:
        cabin = "Aries"
        break;
    case 11:
        cabin = "Apollo"
        break;
    case 12:
        cabin = "Artemis"
        break;
}
const result = `Hi, ${name}, your cabin is ${cabin}`
console.log(result);
document.querySelector("#result").innerHTML = result;