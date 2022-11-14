    let answer;
    const calculate = confirm(`Should I calculate the square root?`);
    if (calculate === true) {
        const number = parseInt(prompt(`Give a positive number: `));
        if (number > 0) {
            answer = Math.sqrt(number)
        } else {
            answer = "The square root of a negative number is not defined."
        }
    } else {
        answer = "The square root is not calculated."
    }
    document.getElementById("ex").innerHTML = answer;



