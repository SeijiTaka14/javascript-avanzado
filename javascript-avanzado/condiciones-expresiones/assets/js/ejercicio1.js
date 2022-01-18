cadena = prompt('Escriba una palabra y la pondremos  invertida: ')


function invertirPalabra(cadena) {
    let arreglo = cadena.split(''); //Convirtiendo la cadena en un arreglo
    
    arreglo.reverse(); //Invirtiendo el arreglo
    
    let cadenaInvertida = arreglo.join(''); //Une los elementos de un arreglo y regresa un string
    
    return document.write('Su palabra invertida es: ' + cadenaInvertida);
} 

invertirPalabra(cadena);