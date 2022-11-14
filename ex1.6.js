    let answer
    let calculate = confirm(`Should I calculate the square root?`)
    if (calculate === true) {
        let number = prompt(`Give a positive number: `)
        number = parseInt(number)
        if (number > 0) {
            answer = Math.sqrt(number)
        } else {
            answer = "The square root of a negative number is not defined."
        }
    } else {
        answer = "The square root is not calculated."
    }
    document.getElementById("ex").innerHTML = answer;



