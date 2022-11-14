/* A program that prompts the user for the start and end year.
The program prints all leap years from the interval given by the user.
Printing is done in an unordered list to the HTML document.
 */

leap_years = [];
const start_year = parseInt(prompt(`Give a start year: `));
const end_year = parseInt(prompt(`Give a end year: `));
for(let year = start_year; year < end_year; year++){
    if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
        leap_years.push(year);
    }
}
if((end_year % 4 === 0)&& (end_year % 100 !== 0) || (end_year % 400 === 0)){
    leap_years.push(end_year);
}

document.getElementById("ex2").innerHTML = `<li>` + leap_years.join(`</li><li>`) + `</i>`;

