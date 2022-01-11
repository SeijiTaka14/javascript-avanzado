let añoActual = 2022;
let edad = document.getElementById('edad');

function getYear() {
    año = prompt('Tu año de nacimiento: ');
    let edadUsuario = añoActual - año;
    edad.textContent = 'Tu edad es: ' + edadUsuario + ' años';
}