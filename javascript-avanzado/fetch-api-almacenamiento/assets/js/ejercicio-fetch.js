let $btnCard = document.querySelector('#btnCard')

$btnCard.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));

  let caja = document.createElement('card');
  caja.src = [0].url;
  document.body.appendChild(caja);

})

