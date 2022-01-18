/*Crear un arreglo con 20 números. Mostrar en HTML la suma de dichos números y el promedio*/



let calif = new Array();

calif = [5, 6, 8, 9, 9, 10, 10, 7, 8, 10, 9, 7, 7, 3, 5, 1, 10, 7, 9, 9];
document.write('Las calificaciones son: ' + calif + '<br>');

let suma = 0;

for(let i = 0; i < calif.length; i++) {
    suma += calif[i];
}

document.write('<br>' +'Las suma de las calificaciones es: ' + suma + '<br>' );

document.write('<br>' + 'El promedio del salón es: ' + suma / calif.length + '<br>');