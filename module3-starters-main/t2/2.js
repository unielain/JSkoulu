const ul = document.querySelector(`#target`);
const arr_of_items = [`First item`,`Second item`,`Third item`];
let list;
let item;

for(let i = 0; i < arr_of_items.length; i++){
    list = document.createElement(`li`);
    item = document.createTextNode(arr_of_items[i]);
    if( i=== 1){
        list.classList.add(`my-item`)
    }
    list.appendChild(item);
    ul.appendChild(list);
}


