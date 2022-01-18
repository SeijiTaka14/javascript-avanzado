let $title = document.querySelector('#title');
let $mensaje = document.querySelector('#mensaje');
let $btnMensaje = document.querySelector('#btnMensaje');
let $spanError = document.querySelector('span');

//addEventListener agrega un evento al elemento
$btnMensaje.addEventListener('click', () => {
    console.log('no me presiones, me da amsiedad');
});


$mensaje.addEventListener('keyup', (e) => {
    
    console.log(e.target.value);
    
    if(e.target.value.length < 3) {
        $spanError.classList.remove('hide');
        $spanError.classList.add('error');
    } else {
        $spanError.classList.add('hide');
        $spanError.classList.remove('error');
    }

    /*console.log(e);*/

    /*console.log('te veo, escrbibiste algo');*/
});