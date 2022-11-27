const trigger = document.querySelector(`#trigger`);
const target = document.querySelector(`#target`);


function change_img(){
    target.setAttribute(`src`, `img/picB.jpg`);
}

function back_img(){
    target.setAttribute(`src`, `img/picA.jpg`);
}
trigger.addEventListener(`mouseover`, change_img);
trigger.addEventListener(`mouseout`, back_img);

