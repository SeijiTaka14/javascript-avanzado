/*let miObjeto = {
    //pares de clave: 'valor'
    nombre: 'Seiji Takahashi'
};*/

let nombre = 'Seiji Takahashi';
let edad = 21;
let direccion = 'CDMX';
let numero = 123456789;

console.log(nombre);

let persona = {
    nombre: {
        apellidoPaterno: 'Takahashi',
        apellidoMaterno: 'Sánchez',
        nombre: 'Seiji'
    },
    edad: 21,
    direccion: {
        Estado: 'Ciudad de México',
        Alcaldía: 'Benito Juárez'
    },
    numero: [
        12345,
        12345
    ]
}

console.log(persona.nombre.apellidoPaterno);
//se utiliza el nombre del objeto (persona) seguido de .nombre.apellidoPaterno para que solo imprima apellidoPaterno, etc. 


//Arreglos vs objetos
//Ambos sirven para almacenar información de cualquiet tipo

//Arreglo
let arreglo = ['valor1', 'valor2', 'valor3']
arreglo[1];
console.log(arreglo)

//Objeto
let otroObjeto = {
    nombre: 'seiji',
    apellidos: 'takahashi'
}
console.log(otroObjeto.nombre);


//Ejercicio Tienda

let tenisBasket = {
    modelo: 'PG-1',
    color: 'azul',
    tallas: [
        25,
        25.5,
        26,
        27,
        28,
        28.5
    ],
    enStock: '13',
}
console.log(tenisBasket);

