/*Crear una clase carro, el carro va a tener los atributos: marca, color, modelo, velocidad y NumeroPuertas.
Debe tener los métodos: acelerar(), frenar(), reversa().

Debe tener un método llamado toString() que muestre los datos del auto y la velocidad actual.

Cáda vez que se use el método acelerar, se aumentará uno en velocidad, cada vez que se use el método reversa se restará 1.
(la velocidad puede ser negativa). Al usar el método frenar, se fijará la velocidad en 0.
*/
class Carro{
    constructor(marca, color, modelo, velocidad, numeroPuertas){

        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.numeroPuertas = numeroPuertas;
    }

    acelerar(){
        this.velocidad += 1; 
    }

    frenar(){
    this.velocidad = 0;
    }

    reversa(){
        this.velocidad -= 1;
    }

    toString(){
        
        let mensaje = `El ${this.marca} es un modelo ${this.modelo} de color ${this.color} con ${this.numeroPuertas} puertas y una velocidad de ${this.velocidad} <br>`
        
        return document.write(mensaje);
    }


}

const carro1 = new Carro("Volvo", "Negro", "Carisimo", 120, "4");

carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();

carro1.toString();

carro1.reversa();
carro1.reversa();
carro1.reversa();
carro1.reversa();
carro1.reversa();
carro1.reversa();

carro1.toString();

carro1.frenar();
carro1.toString();