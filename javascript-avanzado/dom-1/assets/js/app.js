let title = document.getElementById('title');

console.log(title);
title.textContent = 'Este texto esta escrito desde JavaScript';

let parrafos = document.getElementsByTagName('p');
console.log(parrafos);

/*parrafos[0].textContent = 'hola, seiji';*/

/*for(let i = 0; i < parrafos.length; i++) { 
    parrafos[i].textContent = 'Párrafo ' + i + ' escritos desde JavaScript'
}*/

let email = document.getElementById('email');
let password = document.getElementById('password');

function getInformation() {
    console.log(email.value);
    console.log(password.value);
}