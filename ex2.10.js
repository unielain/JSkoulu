/*Write a voting program as described below for small-scale meeting use. (8p)
The program asks for the number of candidates.
Then the program asks for the names of the candidates: 'Name for candidate 1
Store the candidates' names and initial vote count in objects like this:*/

const number_of_candidates = parseInt(prompt(`Give a number of candidates: `));
const candidates = []

for(let i = 0; i < number_of_candidates; i++){
    name = prompt(`Name for canditate ${i +1}: `);
    let candidate = {
        name: name,
        votes: 0,
        a: { set() {
                this.votes = + 1
            }
    },
    };
    candidates.push(candidate);

}
console.log(candidates)

/*The program asks for the number of voters.
The program asks each voter in turn who they will vote for.
Voter should enter candidate name. If the voter enters an empty value instead of the voting number,
it will be interpreted as an empty vote.
The program announces the name of the winner and the results by printing it to the console:*/

const number_of_voters = parseInt(prompt(`Give the number of voters: `))
for(let i = 0; i < number_of_voters; i++){
    const vote = prompt(`Voter ${i + 1}, enter your candidate: `);
    if(vote === .candidate.valueOf(vote)){
        vote.candidate.votes = +1;
    }
}

console.log(candidates);

