/*Escribir un programa que detecte el cupón que tiene el usuario

Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%

-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un 
 cupón equivocado*/
	
let precio = parseInt(prompt('Total de su compra: '));

let cuponDescuento = prompt('¿Cuál es su cupón? (Bronce/Plata/Oro/Platino): ');


switch(cuponDescuento) {
    case 'Bronce':
        descuento = precio * .95
    break
    case 'Plata':
        descuento = precio * .90
    break
    case 'Oro':
        descuento = precio * .80
    break
    case 'Platino':
        descuento = precio * .75
    break
    default:
        console.log('Cupón no válido');
    break
}

console.log('Precio original: ' + precio)
console.log('Total con descuento: ' + descuento)