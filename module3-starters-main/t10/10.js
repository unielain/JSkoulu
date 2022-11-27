const form = document.querySelector(`#source`);
const submit = document.getElementsByName(`submit`);
let firstname = document.querySelector(`input[name=firstname]`).value;
const fname = firstname.toString();
let lastname = document.querySelector(`input[name=lastname]`).value;
const lname = lastname.toString();
const p = document.querySelector(`p`);

form.addEventListener(`submit`, function (evt) {
    evt.preventDefault();
    const message = document.createTextNode(`Your name is ${fname} ${lname}`);
    p.appendChild(message);

});
