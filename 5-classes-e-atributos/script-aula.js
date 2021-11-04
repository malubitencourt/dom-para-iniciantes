const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('teste');
// menu.classList.toggle('teste');

if(menu.classList.contains('teste')) {
    menu.classList.add('teste-ativo');
} else {
    menu.classList.add('teste-inativo');
}

// console.log(menu.className);

const animais = document.querySelector('.animais');
console.log(animais.attributes['data-texto']); 


const img = document.querySelector('img');
const srcImg = img.getAttribute('src');
console.log(srcImg)

img.setAttribute('alt', 'imgaem de uma raposa');
const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);

const carro = {
    portas: 4,
    cor: 'preto',
    modelo: 'Palio',
    andar: function(km) {
        console.log(`andou ${km}km`);
    }
}