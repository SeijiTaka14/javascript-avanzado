class Pokemon {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    //metodos
    atacar() {
        return console.log(`${this.nombre}! ¡Ataca!`);
    }

    evolucionar() {
        return console.log(`¡${this.nombre} ha evolucionado!`)
    }

}

class Pikachu extends Pokemon {
    constructor(nombre, tipo, edad) {
        super(nombre, tipo);
        this.edad = edad;
    }
}

//Se puede seguir extendiendo las clases pero NO ES RECOMENDABLE

class Electrico extends Pikachu {
    constructor(nombre, tipo, edad, poder) {
        super(nombre, tipo, edad);
        this.poder = poder;
    }
}

const Electrico1 = new Electrico('Pancho', 'Eléctrico', 4, 'Poder: 123');
console.log(Electrico1);


//Pikachu, pertenece a la clase Pikachu
const Pikachu1 = new Pikachu('Pikachu', 'Eléctrico', 21);
console.log(Pikachu1);

Pikachu1.atacar();
Pikachu1.evolucionar();


//Charmander, pertenece a la clase Pokemon
const Charmander = new Pokemon('Charmander', 'Fuego');     
Charmander.atacar();
Charmander.evolucionar();