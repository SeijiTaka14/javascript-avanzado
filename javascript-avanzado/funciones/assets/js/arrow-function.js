/* Arrow function / función de flecha
    Función de flecha 
    
    Es un bloque de código reutilizable.
    Puede tener o no parámetros de entrada.
    Puede devolver o no un valor.
*/
    //Esta es una función normal

/*function sumar(numero1, numero2)  {
    //Operaciones o código a ejectuar
    return numero1 + numero2;
}*/

    //Esto es una función de flecha
const sumar = (numero1, numero2) => {
    return numero1 + numero2;
}

let numero1 = parseInt(prompt('Numero 1: '));
let numero2 = parseInt(prompt('Numero 2: '));
let suma = sumar(numero1, numero2);

document.write(`la suma de ${numero1} y ${numero2} es ${suma} <br>`);