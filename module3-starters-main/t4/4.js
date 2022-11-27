'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const select = document.querySelector(`#target`);
select.name = `students`;


let option;
let item;
for(let i = 0; i < students.length; i++){
  option =  document.createElement(`option`);
  option.value = `${students[i].id}`;
  console.log(students[i].id);
  item = document.createTextNode(`${students[i].name}`);
  option.appendChild(item);
  select.appendChild(option);
}
