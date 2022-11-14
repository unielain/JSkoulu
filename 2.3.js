/*Write a program that asks for the names of six dogs.
The program prints dog names to unordered list <ul> in reverse alphabetical order.  */
dogs = []
for (let i = 0; i < 6; i ++){
    let dog = prompt(`Give dogs name: `)
    dogs.push(dog)
}
document.getElementById("ex").innerHTML = `<li>` + dogs.join(`</li><li>`) + `</li>`;