/*Write a program that asks the user for the number of participants.
 After this, the program asks for the names of all participants.
 Finally, the program prints the names of the participants on the web page in an ordered list
(<ol>) in the same order as they were entered. */

let participants = []
number_of_participants = parseInt(prompt(`How many participants: `))
for (let i = 0; i < number_of_participants; i++){
    name = prompt(`Give a name: `)
    participants.push(name)
}
document.getElementById("ex").innerHTML = `<li>` + participants.join(`</li><li>`) + `</li>`;