/*Write a program that prompts the user for five numbers and prints them in the reverse order
they were entered. Print the result to the console.(2p)
Save the numbers to an array, then use for-loop to iterate in reverse order.
Do not use array.reverse() function. */

let numbers = []

for (let i = 0; i < 5; i++){
    let number = parseInt(prompt(`Give a number: `))
    numbers.push(number)
}

for (let f = 4; f > -1; f--){
    let value = numbers[f]
    console.log(value)
}