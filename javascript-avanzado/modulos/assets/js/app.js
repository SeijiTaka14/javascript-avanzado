import {sumar, multiplicar, mostrarResultado} from './calculadora.js';

let resultado = sumar(10, 20);
console.log(resultado);

let resultadoMultiplicar = multiplicar(11, 11);

mostrarResultado('multiplicacion', 11, 11, resultadoMultiplicar);