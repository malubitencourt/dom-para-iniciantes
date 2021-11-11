const img = document.querySelector('img');
function callBack(event) {
  console.log(event);
};
img.addEventListener('click', callBack)

const animaisLista = document.querySelector('.animais-lista');
function callbacklista(event) {
  console.log(event.currentTarget); //mostra qual nome do elemento selecionado
  console.log(event.target);
  console.log(event.type);
}

// animaisLista.addEventListener('click', callbacklista);


const linkExterno = document.querySelector('a[href^="http"]');
function handleLinkExterno(event){
  event.preventDefault();
  console.log(event.currentTarget);  // é igual a console.log(this); 
  console.log(this.getAttribute('href')); // da pra usar o this no lugar do event pra puxar propriedades
};
 linkExterno.addEventListener('click', handleLinkExterno);

const h1 = document.querySelector('h1');
function callBack(event) {
  // console.log(event.type, event);
}

// h1.addEventListener('click', callBack);
// h1.addEventListener('mouseenter', callBack); mostra qual o mouse entra na area do objeto selecionado
// 
// h1.addEventListener('mousemove', callBack); mostra cada movimento do mouse *usar com caltela
// 
// window.addEventListener('scroll', callBack);
// window.addEventListener('resize', callBack);
// window.addEventListener('keyup', callBack);
// window.addEventListener('keydown', callBack);

function handleKeyboard(event) {
  if(event.key === 'f') {
    document.body.classList.toggle('fullscreen')
  }else if(event.key === 'a'){
  document.body.classList.toggle('azul');
  }else if(event.key === 'v'){
  document.body.classList.toggle('vermelho');}

}
window.addEventListener('keydown', handleKeyboard);

const imgs = document.querySelectorAll('img');

function handleImg(event)  {
  console.log(event.target.getAttribute('src'));
};

imgs.forEach((img) => {
  img.addEventListener('click', handleImg);
});
