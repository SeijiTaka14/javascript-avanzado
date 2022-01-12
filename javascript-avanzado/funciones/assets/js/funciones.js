/* Función
    Es un bloque de código reutilizable.
    Puede tener o no parámetros de entrada.
    Puede devolver o no un valor.
*/
    //Esta es la entrada con parámetros
function sumar(numero1, numero2)  {
    //Operaciones o código a ejectuar
    return numero1 + numero2;
    
    //El return debe ser lo último de la función
    console.log('Hola desde la función');
}

//SIN RETURN
function restar(numero1, numero2) {
   
    document.write(`la resta de ${numero1} y ${numero2} es ${numero1 - numero2} <br>`);

}

let numero1 = parseInt(prompt('Numero 1: '));
let numero2 = parseInt(prompt('Numero 2: '));
let suma = sumar(numero1, numero2);


//Se tiene que usar la comilla al revés `, ctrl + alt
document.write(`la suma de ${numero1} y ${numero2} es ${suma} <br>`);

restar(numero1, numero2);


