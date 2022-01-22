class Animalito {
    constructor(nombre, edad, especie, revisado){
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
        this.enfermo = false;
        this.revisado = revisado;
    }

    //método
    saludar() {
        return console.log(`Hola mi nombre es ${this.nombre}, tengo ${this.edad} años y soy un ${this.especie}`)
    }
}

class Veterinario {
    constructor(){
        this.cantidadPacientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = [];
    }

    //método
    agregarPaciente(paciente) {
        this.listaPacientes.push(paciente);
        this.cantidadPacientes += 1;
        let mensaje = `Paciente agregado <br>`;
        return document.write(mensaje);
    }

    modificarPacientesRevisados() {
        this.pacientesRevisados++;
    }


    revisarPaciente(paciente) {
        if(paciente.revisado === false){
            paciente.revisado = true;
            this.modificarPacientesRevisados();//Llamando a otro método pero de la misma clase

            //this.pacientesRevisados++;
            document.write('<br>' + 'El paciente ha sido revisado' + '<br>');
        } else {
            document.write('<br>' + 'Este paciente ya fue revisado');
        }
    }

    //método
    mostrarLista() {
        for(let i = 0; i < this.listaPacientes.length; i++) {
            document.write(" " + this.listaPacientes[i].nombre)
        }
        document.write(`<br> Cantidad de pacientes: ${this.cantidadPacientes} <br> Pacientes revisados: ${this.pacientesRevisados} <br>`);
    }

}
const Paciente1 = new Veterinario();

//Objetos creados de la clase Animalito

//objeto 1
const Animalito1 = new Animalito('Manchas', 5, 'perro', false); 
//objeto 2
const Animalito2 = new Animalito('Galleta', 2, 'Gato', true)
console.log(Animalito1);
console.log(Animalito2);

Paciente1.agregarPaciente(Animalito1);
Paciente1.agregarPaciente(Animalito2);
console.log(Paciente1.listaPacientes);

Paciente1.mostrarLista();
Paciente1.revisarPaciente(Animalito1);
Paciente1.mostrarLista();

Paciente1.revisarPaciente(Animalito2);

//operador de corto-circuito

let variable = 0;
console.log();

