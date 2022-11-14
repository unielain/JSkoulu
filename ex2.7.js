/*Modify the function above so that it gets the number of sides on the dice as a parameter.
With the modified function you can for example roll a 21-sided role-playing dice.
The difference to the last exercise is that the dice rolling in the main program continues until the program gets
the maximum number on the dice, which is asked from the user at the beginning.*/

function roll_the_dice(sides) {
    return Math.floor(Math.random() * (sides + 1)) + 1;
}

const dice_rolls = []
const sides = parseInt(prompt(`How many sides does your dice have? `));
while (true) {
    const dice_roll = roll_the_dice(sides)
    window.alert(`You rolled: ${dice_roll}`)
    dice_rolls.push(dice_roll);
    if (dice_roll === sides) {
        break
    }

}
document.getElementById("dice_roll").innerHTML = `<li>` + dice_rolls.join(`</li><li>`) + `</li>`;