/* Código síncrono */

let variableSincrona;
variableSincrona = 10 * 3;
console.log(variableSincrona);

/*Código asíncrono */

let variableAsincrona;

setTimeout(() => {
    variableAsincrona = 10 * 3;
    console.log(variableAsincrona);
}, 3000);


