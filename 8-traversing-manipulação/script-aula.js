// const h1 = document.querySelector('h1');
// const animais = document.querySelector('.animais-descricao');
// console.log(h1.innerHTML);
// console.log(h1.outerHTML);

// // h1.innerText = '<p>Texto</p>';  a tag vai como texto.
// // h1.outerHTML = '<p>Texto</p>'; a tag vai com todo HTML do elemento.
// // h1.innerHTML = '<p>Texto</p>';  a tag é renderizada.

// console.log(animais.innerText); // texto, sem tags.
// console.log(animais.innerHTML); // html interno.

// const lista = document.querySelector('.animais-lista');

// console.log(lista.parentElement); // pai
// console.log(lista.parentElement); // pai do pai
// console.log(lista.previousElementSibling); //elemento acima
// console.log(lista.nextElementSibling); // elemento abaixo

// console.log(lista.children); // HTMLcollection com os filhos
// console.log(lista.children[0]); // primeiro filho
// console.log(lista.children[--lista.children.length]); // vai buscar sempre o úlitmo filho independente da quantidade 

// console.log(lista.querySelectorAll('li')); // nodelist com todas as LI's
// console.log(lista.querySelector('li:last-child')); // último filho 

// const animais = document.querySelector('.animais');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');
// const mapa = document.querySelector('.mapa');

// animais.appendChild(titulo) // move o item selecionado para o final da classe selecionada 
// contato.insertBefore(animais, titulo) //insere o primeiro item antes do segundo item selecionado nos ()
// contato.removeChild(titulo); // remove titulo de contato
// contato.replaceChild(mapa, titulo); // substitui titulo por mapa

// const novoh1 = document.createElement('h1'); // cria um novo elemento HTML
// novoh1.innerText = 'novo título'; // adiciona o que vai conter dentro desse h1
// novoh1.classList.add('titulo'); // adiciona uma classe ao elemento selecionado
// mapa.appendChild(novoh1) // move o item selecionado para o final da classe selecionada 
// console.log(novoh1);
const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');
const cloneh1 = h1.cloneNode(true); //cria um clone do item selecionado

cloneh1.classList.add('vermelho');

faq.appendChild(cloneh1);