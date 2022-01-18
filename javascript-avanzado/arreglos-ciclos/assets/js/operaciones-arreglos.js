let numeros = [1, 14, 18, 23, 35, 79, 1001, 2002, 3003];

/*Lo mismo pero con una función de flecha

numeros.forEach(numero => {
    document.write(numero + ', ');
});

*/

numeros.forEach(function(elemento) {
    document.write(elemento + ', ');
});


let numeros2 = numeros.map(function(elemento){
    return elemento * 2;
});
document.write('<br>' + numeros2 + '<br>');


//Ejemplo de por qué usar map() y no solo "="

/*
let frutas = ['mango', 'uva', 'piña'];
let frutas2 = frutas;

document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');

frutas2.push('pera');
document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>'); */

//Con map() copias el arreglo pero NO es el mismo arreglo, es uno nuevo.

    

    //Aquí se demuestra la funcionalidad de map(); crea un NUEVO arreglo pero igual a frutas, por eso solo modifica a Frutas2.

    /*
    let frutas = ['mango', 'uva', 'piña'];
    let frutas2 = frutas.map(function(elemento){
        return elemento;
    })

    document.write('<br>' + frutas + '<br>');
    document.write('<br>' + frutas2 + '<br>');

    frutas2.push('pera');
    document.write('<br>' + frutas + '<br>');
    document.write('<br>' + frutas2 + '<br>'); */



/* Includes */

//Te dice si un elemento está en el arreglo o no
document.write('<br>' + numeros.includes('hola') + '<br>');

/*Filter, filtra los elementos que cumplen con la condición*/

let numerosPares = numeros.filter((elemento) => {
    /*if(elemento % 7 == 0){
        return true;
    } else {
        return false
    }*/
    //Esto da el mismo resultado que en el if, pero diferente

    /*return elemento % 7 == 0;*/
    if(elemento >= 35) {
        return true
    }
});

document.write('<br>' + numerosPares + '<br>');


let frutas = ['Mango', 'uva', 'piña', 'Mandarina', 'Manzana', 'aguacuate', 'sandia'];


let frutasFiltro = frutas.filter((fruta) => {
    /*if(fruta.includes(s')) {
        return true;
    }*/

    //Mismo resultado que arriba, pero diferente
    return fruta.toLowerCase().includes('m');
})

document.write('<br>' + frutasFiltro + '<br>')

/* Sort */
let otrosNumeros = [9, 2, 3, 5, 1, 4, 8, 6, 7]

document.write('<br>' + otrosNumeros.sort() + '<br>');

/* Reverse, invierte el orden de los elementos de un arreglo */

document.write('<br>' + numeros.reverse() + '<br>');

/* Find, obtiene el primer elemento que cumpla con una condición */

let frutaEncontrada = frutas.find((elemento) => {
    return elemento.toLowerCase().includes('manzana');
});

document.write('<br>' + frutaEncontrada + '<br>');

