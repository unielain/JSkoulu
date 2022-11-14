/*Write a function that returns a random dice roll between 1 and 6. The function should not have any parameters. Write a main program that rolls the dice until the result is 6.
The main program should print out the result of each roll in an unordered list (<ul>). */

function roll_the_dice() {
    return Math.floor(Math.random() * 7) + 1;
}

const dice_rolls = []
while (true) {
    const roll_or_not = confirm(`Roll the dice?`);
    if (roll_or_not === true) {
        const dice_roll = roll_the_dice()
        window.alert(`You rolled: ${dice_roll}`)
        dice_rolls.push(dice_roll);
    } else {
        break
    }

}
document.getElementById("dice_roll").innerHTML = `<li>` + dice_rolls.join(`</li><li>`) + `</li>`;


