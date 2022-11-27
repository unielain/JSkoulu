const button = document.querySelector(`#start`);

function calculator(number1, number2, op){
    let result = 0;
    if (op === `add`){
        result = number1 + number2;
    } else if (op === `sub`) {
        result = number1 - number2;
    } else if (op === `multi`) {
        result = number1 * number2;
    } else if (op === `div`) {
        result = number1 / number2;
    }
    return result
}

button.addEventListener(`click`, ()=> {
    let result = 0;
    const num1 = parseInt(document.querySelector(`#num1`).value);
    const num2 = parseInt(document.querySelector(`#num2`).value);
    const choose = document.querySelector(`#operation`);
    const operation = choose.options[choose.selectedIndex].getAttribute(`value`);
    result = calculator(num1, num2, operation);
    const target = document.querySelector(`#result`)
    const target_text = document.createTextNode(`${result}`);
    target.appendChild(target_text);

});

