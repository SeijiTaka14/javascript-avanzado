/*El flujo es el orden en el que se van ejecutando las instrucciones que nosotros escribimos*/

let miVariable = 10;
//console.log(miVariable);

/*Estructura de control de flujo*/

/*let edad = 17;
let tienesIne = false;

if(edad >= 18 || tienesIne == true){
    console.log('puedes entrar');
} else {
    console.log('No puedes entrar');
} */

/* Operador ternario */
/*
(Condición a evaluar) ? se ejecuta si es verdadero : se ejecuta si es falso;
*/

let edad1 = 19;
(edad1 >=18) 
    ? console.log('Mayor de edad') //si es verdadera
    : console.log('Menor de edad') //si es falsa


let pregunta = (edad1 >= 18)
    ? 'Mayor de edad'
    : 'Menor de edad';

console.log(pregunta)



let edad2 = 17
let preguntaEdad = `Tengo ${edad2} años y soy ${(edad2 >= 18) ? 'Mayor de edad' : 'Menor de edad'}`;

console.log(preguntaEdad);

//EJERCICIO
/* 
Domingo - 0
Lunes - 1
Martes - 2
Miercoles - 3
Jueves - 4
Viernes - 5
Sábado - 6
*/

/*

Esto es una posible solución

let dia = 1;

if(dia === 0) {
    console.log('domingo');
} else if(dia === 1) {
    console.log('lunes');
} else if(dia === 2) {
    console.log('martes');
} else if(dia === 3) {
    console.log('miercoles');
} else if(dia ===4) {
    console.log('jueves');
} else if(dia === 5) {
    console.log('viernes');
} else if(dia === 6) {
    console.log('sabado');
} else {
    console.log('ese no es un día');
}
*/

//La otra solución es SWITCH - CASE

let dia2 = 5;

switch(dia2) {
    case 0:
        console.log('domingo');
    break;
    case 1:
        console.log('lunes');
    break
    case 2:
        console.log('martes');
    break
    case 3:
        console.log('miercoles');
    break
    case 4:
        console.log('jueves');
    break
    case 5:
        console.log('viernes');
    break
    case 6:
        console.log('sabado');
    break
    default:
        console.log('ese no es un día');
    break
}


let cuponDescuento = 'Oro';
let descuento;

switch(cuponDescuento) {
    case 'Bronce':
        descuento = 5;
    break
    case 'Plata':
        descuento = 10;
    break
    case 'Oro':
        descuento = 15;
    break
    default:
        console.log('Cupón vencido');
    break
}

console.log(descuento);



