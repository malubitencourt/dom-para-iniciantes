// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLinksInternos(event)  {
  //previne o comportamento padrão do link interno
  event.preventDefault(); 

  //loop dentro da função para remover a classe 'ativo' do item
    linksInternos.forEach((link) => { 
    link.classList.remove('ativo');
  });

  //parametro this. usado no lugar de event.currentTarget para simplificar o codigo e adicionar a classe 'ativo' no item
  this.classList.add('ativo');
};

//loop criado para acionar a função quando o 'click' acontecer em todos os itens selecionados
linksInternos.forEach((item) => {
  item.addEventListener('click', handleLinksInternos);
});



// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const body = document.querySelectorAll('body *');

function handleBody(event) {
  event.currentTarget.remove();
  // console.log(event.currentTarget);
};

// body.forEach((item) => {
//   item.addEventListener('click', handleBody);
// });

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 


function handleKeyboard(event) {
  if(event.key === 't'){
    document.documentElement.classList.toggle('textoMaior');
  };
};
window.addEventListener('keydown', handleKeyboard)