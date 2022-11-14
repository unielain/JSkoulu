/*Write a function called concat(), which receives an array of strings as a parameter.
The function returns a string formed by concatenating the elements of the array. */

function concat(array){
    let array_to_string = ``;
    for(let i = 0; i < array.length; i++){
         array_to_string += array[i].toString();

    }
    return array_to_string
}
const heroes_iliad = [`Hector`, `Achilles`, `Odysseus`];
document.getElementById("concat").innerHTML=concat(heroes_iliad)