export const sumar = (numero1, numero2) => {
    return numero1 + numero2;
}

export const restar = (numero1, numero2) => {
    return numero1 - numero2;
}

export const multiplicar = (numero1, numero2) => {
    return numero1 * numero2;
}

export const dividir = (numero1, numero2) => {
    return numero1 / numero2;
}

export const mostrarResultado = (operacion, numero1, numero2, resultado) => {
    const respuesta = document.createElement('h3');
    respuesta.textContent = `La ${operacion} de ${numero1} y el ${numero2} es ${resultado}`;
    
    document.body.appendChild(respuesta);
}


    //De esta manera exportas todo de una sola, en lugar de poner "export" antes de cada const (USA ESTO, ES MEJOR Y SENCILLO)
/*export {
    sumar, 
    restar, 
    multiplicar, 
    dividir,
    mostrarResultado
}*/
