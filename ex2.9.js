/*Write a function called even(), which receives an array containing numbers as a parameter.
The function returns a second (usually smaller) array which has the even numbers of the original array.
 The function must not make changes to the original table.
Example: In a three-item array, there are items 2, 7 and 4.
The function returns a two-item array with items 2 and 4.
Print both the original array and the new array to the console in the main program after you have called
the function.
You can hardcode the array, no need for prompt().*/

function even(array_func){
    const array = array_func;
    const even_numbers = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            even_numbers.push(array[i])
        }
    }
    return even_numbers;
}

const original_numbers = [1, 2, 66, 34, 74, 245, 42, 77];
console.log(original_numbers);
console.log(even(original_numbers));