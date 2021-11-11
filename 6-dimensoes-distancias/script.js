// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
const imgTop = img.offsetTop;

console.log(imgTop);

// Retorne a soma da largura de todas as imagens
function somaImgs() {
  const imgs = document.querySelectorAll('img');
  let soma = 0;
  imgs.forEach((imgs) => {
    soma += imgs.offsetWidth;
  });
  console.log(soma);
};
window.onload = function() {
  somaImgs();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');
  links.forEach((link) => {
    const linkHeight = link.offsetHeight;
    const linkWidth = link.offsetWidth;
    if(linkHeight >= 48 && linkWidth >= 48) {
      console.log(link, 'Possui boa acessibilidade');
    } else{
      console.log(link, 'Não possui boa acessibilidade');
    }
  });




// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const small = window.matchMedia('(max-width: 720px)').matches;
const menu = document.querySelector('.menu')


if(small) {
  menu.classList.add('menu-mobile')
}
