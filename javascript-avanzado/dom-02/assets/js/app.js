/*el signo de $ se usa para indicar que una variable guarda algún elemento del dom, o de HTML en sí*/


/*let $titulo = document.getElementById('titulo');
console.log(titulo.textContent);
titulo.textContent = 'Título escrito desde JS';*/


    //Lo mismo pero el querySelector puedes seleccionar lo que quieras (class/id/tag)
let $titulo = document.querySelector('#titulo');
$titulo.textContent = 'Titulo escrito desde js';

let $parrafo = document.querySelector('p');
//console.log($parrafo.textContent);

let $parrafos = document.querySelectorAll('p');
//console.log($parrafos[1].textContent);

let subtitulo = document.createElement('h3');
subtitulo.textContent ='Subtitulo desde JS';
//document.body.append agrega un elemento dentro del body al final
/*document.body.insertAdjacentElement('beforebegin', subtitulo);*/
$titulo.insertAdjacentElement("afterend", subtitulo);
$titulo.remove();

let $contenido = document.querySelector('#contenido');
//Este solo edita el texto
/*console.log($contenido.textContent = '<br>');*/

//InnerHTML sirve para poner estructuras de HTML (este da un salto) y para modificar a los hijos (en este caso el p del div)

/*console.log($contenido.innerHTML = '<br>');*/
//console.log($contenido.outerHTML = 'hola')


let contenidoParrafo = document.createElement('p');
contenidoParrafo.textContent = 'Contenido de mi nuevo párrafo que es hijo de contenido (parrafo dentro del div)';
//Esto hace que contenidoParrafo sea el hijo de contenido
$contenido.appendChild(contenidoParrafo);



