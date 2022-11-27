'use strict';
const names = ['John', 'Paul', 'Jones'];
document.querySelector(`#target`).innerHTML = `${targetList(names)}`

function targetList(array_of_choice) {
    let arr_to_str = ``;
    for (let i = 0; i < array_of_choice.length; i++) {
        arr_to_str += `<li>${names[i]}</li>`
    }
    return arr_to_str
}


