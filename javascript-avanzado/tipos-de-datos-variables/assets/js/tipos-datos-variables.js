let nombre = 'Seiji Takahashi Sánchez';
let edad = 31;
let tienesTrabajo = true;
let variableNull = null;
let variableUndefined;

console.log(typeof(nombre)); //String
console.log(typeof(edad)); //Number
console.log(typeof(tienesTrabajo)); //Booelan
console.log(typeof(variableNull)); // Null
console.log(typeof(variableUndefined)); //Undefined

console.log(variableNull === variableUndefined);
console.log('1' === 1);
console.log(0 === false);

console.log(typeof(10 + 10)); //Number
console.log(typeof('10' + 10)); //String, siempre que se concatena un número, boolean, etc., con un string, el tipo de dato es un string

console.log(typeof(parseInt('11')));
//ParseInt convierte un texto / string con número a un dato de tipo number

let numero1 = 10;
console.log(numero1);

let numero2 = 10;
console.log((numero2.toString()));
//toString convierte un número en string (typeof())
//La diferencia es el color cuando lo ves en console
