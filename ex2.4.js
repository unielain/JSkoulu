/*Write a program that asks the user for numbers until he gives zero.
The given numbers are printed in the console from the largest to the smallest.*/

let numbers = []

while (true){
    let number = parseInt(prompt(`Give a number 0 stops`))
    if (number === 0) {
        break
    }
    numbers.push(number)
}

numbers.sort((a,b) => b-a);
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}

