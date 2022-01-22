//Clases, molde que nos permite crear objetos

class Animal {
    
    //Constructor es una función
    constructor(nombre, especie) {
        //this hace referencia al contexto en que se está utilizando
        this.nombre = nombre;
        this.especie = especie;
    }

    //getters y setters
    //solo tienen este propósito, leer o modificar el atributo respectivamente 
    get getNombre() {
        return this.nombre;
    }

    set setNombre(nombre) {
        this.nombre = nombre;
    }

    get getEspecie() {
        return this.especie;
    }

    set setEspecie(especie) {
        this.especie = especie; 
    }
    
    //metodos == funcion
    presentarse() {
        document.write(`Hola soy un ${this.especie} y me llamo ${this.nombre} <br>`)
    }

    cambiarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
        let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.especie} <br>`
        return document.write(mensaje);
    }

    //Métodos estáticos
    //Pertenece sólo a la clase y no se hereda a los objetos
    static saludar() {
        return console.log('Hola, soy un método estático');
    }
}

Animal.saludar();


//Heredan los atributos y los métodos de la clase que están utilizando
const Animal1 = new Animal('Scooby', 'perro'); //Creamos un objeto
//instanciar = hacer una copia, crear un objeto
console.log(Animal1);

const Animal2 = new Animal('Pecas', 'gato');
console.log(Animal2);

const Animal3 = new Animal();
console.log(Animal3);

Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();

console.log(Animal1.nombre);
Animal1.nombre = 'Scrappy'; //notación de punto para cambiar valor
console.log(Animal1.nombre);
console.log(Animal1);

Animal1.cambiarNombre('Oddie'); //utilizamos un método para cambiar el valor

    //Getters y Setters
//get = obtener el valor de un atributo
//set = fijar o cambiar el valor de un atributo
//get y set se utilizan como si fueran atributos, no funciones (sin los paréntesis de una función)



console.log(Animal1.getNombre);
Animal1.setNombre = 'Manchas';
console.log(Animal1.getNombre);
console.log(Animal1);


