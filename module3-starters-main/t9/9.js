const button = document.querySelector(`#start`);

function calculator(number1, number2, op){
    let result = 0;
    if (op === `+`){
        result = number1 + number2;
    } else if (op === `-`) {
        result = number1 - number2;
    } else if (op === `*`) {
        result = number1 * number2;
    } else if (op === `/`) {
        result = number1 / number2;
    }
    return result
}

function string_to_operation(stringop){
    let ops = [`+`, `-`, `*`, `/`];
    let sensible = [];
    for(let i = 0; i < ops.length; i++){
        if (stringop.includes(ops[i])){
            sensible = stringop.split(ops[i]);
            sensible.push(ops[i]);
        }
    }
    return sensible

}

button.addEventListener(`click`, ()=> {
    let result;
    let chaotic_part = (document.querySelector(`#calculation`).value);
    chaotic_part = chaotic_part.toString();
    let list_to_op = string_to_operation(chaotic_part);
    let num1 = parseInt(list_to_op[0]);
    let num2 = parseInt(list_to_op[1]);
    let operation = list_to_op[2];
    result = calculator(num1,num2,operation);
    const target = document.querySelector(`#result`)
    let target_text = document.createTextNode(`${result}`);
    target.appendChild(target_text);

});

