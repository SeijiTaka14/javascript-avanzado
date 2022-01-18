    //Esta es una forma de declarar un arreglo
/* const numeros = [5]; */

    //Esta es otra forma de declarar un arreglo
let numeros = new Array();
numeros = [1, 14, 23, 28, 35, 95, 1001];

console.log(numeros.length);

for(let i = 0; i < numeros.length; i++) {
    
    document.write(numeros[i] + '<br>');
}

