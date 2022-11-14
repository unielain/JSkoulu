/* Make a program that asks the user for the number of dice and the sum of the eye
numbers of interest to the user.
The purpose of your program is now to find out with what probability the number of dice
given by the user produces the sum of the number of eyes given by the user.
For example, if the user enters 3 as the number of dice and 15 as the sum of the eyes,
the program calculates the probability that the sum of the three dice's eye numbers is 15. (5p)
Solve the problem by simulating: Have the program roll a given number of dice in a for-loop (e.g. 10,000 times) and calculate what proportion of the repetitions produced the sum of eye numbers of interest to the user.
Print the result on the HTML document: */

const number_of_dice = parseInt(prompt(`Give a number of dice: `))
const sum_of_the_eye = parseInt(prompt(`Give a sum of the eyes: `))
let roll_sum = 0;
let num = 0;
let roll;

for (let i = 0; i < 10000; i++){
    for (let f = 0; f < number_of_dice; f++){
        roll = (Math.floor(Math.random()*7)+1);
        roll_sum += roll;
    }
        if(roll_sum === sum_of_the_eye){
            num++;
    }
    roll_sum = 0;
}

let probability = Math.round((num / 10000) * 100);
answer = `Probability to get sum ${sum_of_the_eye} with ${number_of_dice} dice is ${probability}%`
document.getElementById("ex").innerHTML = answer;