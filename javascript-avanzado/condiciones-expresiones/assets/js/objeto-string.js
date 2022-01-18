let cadena1 = 'Hola';
console.log(cadena1);

let cadena2 = new String('Adiós'); //Objeto string
console.log(cadena2);

let arreglo1 = new Array(1,2,4);
console.log(arreglo1);

//Includes, busca una cadena en otra y regresa true / false
console.log(cadena2.toLowerCase().includes('a'));

//Convierte a mayúsculas o minúsculas
console.log(cadena2.toLowerCase());
console.log(cadena2.toUpperCase());

//Cohersión y Conversión
//Cohersión, JS convierte en automático un tipo de dato en otro. 
console.log(cadena1.toLocaleLowerCase());

/* Función que recibe una palabra y la regresa pero invertida */

let palabra = 'Hola Mundo';
let arreglo = palabra.split('');
/*console.log(arreglo);

console.log(arreglo.reverse().join());*/

 cadena = prompt('Escriba una palabra y la pondremos en invertida: ')


function invertirPalabra(cadena) {
    let arreglo = cadena.split(''); //Convirtiendo la cadena en un arreglo
    
    arreglo.reverse(); //Invirtiendo el arreglo
    
    let cadenaInvertida = arreglo.join(''); //Une los elementos de un arreglo y regresa un string
    
    return document.write(cadenaInvertida);
} 



invertirPalabra(cadena);








/*function invertirPalabra2(cadena) {
    let arreglo = cadena.split('');
    arreglo.reverse();
    let cadenaInvertida = arreglo.join('');
    return console.log(cadenaInvertida);
}

invertirPalabra2('Seiji');*/



