/* a simple program that calculates if the year given by user is a leap year */

let year = prompt(`Enter a year: `);
year = parseInt(year);
let result;
if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
    result = `${year} is a leap year`;
} else {
    result = `${year} is not a leap year.`;
}
console.log(result);
document.querySelector("#result").innerHTML = result;