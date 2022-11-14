/*Write a voting program as described below for small-scale meeting use. (8p)
The program asks for the number of candidates.
Then the program asks for the names of the candidates: 'Name for candidate 1
Store the candidates' names and initial vote count in objects like this:*/

const number_of_candidates = parseInt(prompt(`Give a number of candidates: `));
const candidates = [];
let vote = ` `;
let voted = [];
let sum_of_votes = [];
let index = 0;
for(let i = 0; i < number_of_candidates; i++){
    name = prompt(`Name for canditate ${i +1}: `);
    let candidate = {
        name: name,
        votes: 0,
    };
    candidates.push(candidate)
    sum_of_votes.push(0)
}

console.log(candidates);

/*The program asks for the number of voters.
The program asks each voter in turn who they will vote for.
Voter should enter candidate name. If the voter enters an empty value instead of the voting number,
it will be interpreted as an empty vote.
The program announces the name of the winner and the results by printing it to the console:*/

const number_of_voters = parseInt(prompt(`How many voters? `));
for(let i = 0; i < number_of_voters; i++) {
    vote = prompt(`Voter number ${i + 1}: `);
    for(let f = 0; f < candidates.length; f++){
        if(vote == candidates[f].name){
            candidates[f].votes += 1
            voted.push(vote)

        }
    }
}

for(let n = 0; n < candidates.length; n++){
    for(let b = 0; b < voted.length; b++){
        if(candidates[n].name == voted[b]){
            sum_of_votes[n] += 1;
        }
    }
}

sum_of_votes.sort((a,b) => b-a);
for(let u = 0; u < candidates.length; u++){
    if(sum_of_votes[0] === candidates[u].votes){
        index = u;
    }
}

console.log(candidates);
console.log(`The winner is ${candidates[index].name} with ${candidates[index].votes} votes`);