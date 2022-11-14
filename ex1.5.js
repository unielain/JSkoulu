/* a simple program that calculates if the year given by user is a leap year */

let year = prompt(`Enter a year: `);
year = parseInt(year);
if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year.`);
}
