/*Write a program that prompts the user for numbers.
When the user enters one of the numbers they previously entered,
the program will announce that the number has already been given and stops its operation
and then prints all the given numbers to the console in ascending order. */

const numbers = [];

while(true){
    const number = parseInt(prompt(`Give a number: `));
    if(numbers.includes(number)){
        numbers.sort((a,b) =>a-b);
        for(let i = 0; i < numbers.length; i++){
            console.log(numbers[i])

        }
        break
    }
    numbers.push(number);

}