/* Ejercicio rápido

Buenos dias 6-11
Buenas tardes 12-18
buenas noches 19-23
dejame dormir 0-5

*/

//Esto se puede eliminar gg, está de más 
/*let dias = [6, 7, 8, 9, 10, 11];
let tardes = [12, 13, 14, 15, 16, 17, 18];
let noches = [19, 20, 21, 22, 23]
let dormir = [0, 1, 2, 3, 4, 5]*/ 

let hora = parseInt(prompt('¿Qué hora es?: '))

if(hora >= 6 && hora <= 11) {
    document.write('Buenos días');
} else if(hora >= 12 && hora <= 18) {
    document.write('Tardes ya');
} else if(hora >= 19 && hora <= 23) {
    document.write('Buenas noches');
} else if(hora >=0 && hora <=5) {
    document.write('Déjame dormir');
} else {
    document.write('No existe esa hora');
}

