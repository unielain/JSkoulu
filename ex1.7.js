/*A program that asks the user for the number of dice. */
/*The program throws all the dice once and prints the sum of the numbers.*/
sum_of_dice = []
let dice
let i = 0
amount_of_dice = parseInt(prompt(`How many dice? `))
while (i < amount_of_dice) {
    dice = Math.floor((Math.random()*7)+1)
    sum_of_dice.push(dice)
    i++;
}

for (const val of sum_of_dice) {
    sum += val
}
console.log(`The sum of ${amount_of_dice} dice is ${sum}.`)