/* Write a program that asks the user for an integer and tells if the number is a prime number. (2p)
Prime numbers are numbers that are only divisible by 1 and itself.
For example, number 13 is a prime number as it can only be divided by 1 or 13 so that the result is an integer.
On the other hand, number 21 for example is not a prime number as it can be also be divided by numbers 3 and 7.
Print the result on the HTML document.*/

const number = parseInt(prompt(`Give a number: `))
let test_number
let test_number2
for(let i = 2; i < 10; i ++){
    if ((i !== number) && (number % i === 0)){
        test_number = 5;
    } else {
        test_number2 = 1;
    }
}
if (test_number > 2){
    console.log(`${number} is not a prime number`)
} else {
    console.log(`${number} is a prime number`)
}