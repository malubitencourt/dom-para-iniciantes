window.alert('Olá mundo');


const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;

h1Selecionado.addEventListener('click', function(){
  console.log('clicou em', h1Selecionado.innerText);
})