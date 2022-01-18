/* Operadores Aritméticos*/
// +, -, /, *, %, ()

let operacion = 3 * 5 + (10-5);
console.log(operacion);
// 20, jerarquía de operaciones

let operacion2 = 3 - 5/2 * 4;
console.log(operacion2);
//-7, primero es la multiplicación y luego división


/* Operadores relacionales */
// <, >, <=, >=, ==, ===, !=, !==
// El resultado es un booleano (true / false)

console.log(7 < 7);
console.log(7 <= 7);

console.log(7 == '7'); //Compara el valor
console.log(7 === '7'); // Compara valor y tipo de dato

console.log(7 != '7');
console.log(7 !== '7');

/*Incremento y decremento */
//+=, -=, *=, /=

let incremento = 5;
incremento += 5; //incremento = incremento + 5
console.log(incremento); //10

incremento -= 5; //incremento = incremento - 5
console.log(incremento); //5

incremento *= 5; // incremento = incremento * 5
console.log(incremento); //25

incremento /= 5; //incrmeento = incremento / 5
console.log(incremento); //5

/* Operador unario */
// ++, --
//Incremento y decremento
//Sumar uno, restar uno

let sumar = 0;
console.log(sumar + ' linea 47')
sumar++;
console.log(sumar + ' linea 49');
sumar++;
console.log(sumar + ' linea 51');
sumar--;
sumar--;
console.log(sumar); // 0 

/**/
for(let i = 0; i < 10; i++) {
    /*Código*/
}

/*
++variable = pre incremento: primero modifica el valor y ya después hace uso de la variable
variable++ = post incremento
*/
let num = 5;
console.log(num++); // 5, y ya despúes le va a sumar 1, pero DESPUES
console.log(num); //6, porque en el anterior console ya se le sumó 1 con el ++, por estar despues de la var

for(let i = 0; i < 5; i++) {
    //iteración
    //primer iteración, se detiene y el 'for' que está dentro se ejecuta
    console.log('Este es el ciclo padre');
    for(let j = 0; j < 5; j++) {
        //hace una iteración 
        console.log('Este es el ciclo hijo');
    }
}

