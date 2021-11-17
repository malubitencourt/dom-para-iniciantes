const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabMenu.length && tabContent.length) { //verifica se existe itens nessa nas constantes selecionadas para depois passar os codigo dentro da verificação.

    tabContent[0].classList.add('ativo') //adiciona a classe ativo sempre no primeiro item da lista.

    // função que adiciona a classe ativo no elemento selecionado e remove dos demais usando o loop.
    function activeTab(index) { 
        tabContent.forEach((content) => { 
            content.classList.remove('ativo'); //loop que remove a classe das os outros elementos.
        });
        tabContent[index].classList.add('ativo'); //adiciona a classe.
    };

    //loop que adiciona um evento de 'click' em todos os itens que quando ocorrer  retornara a função anterior usando o index do item clicado. 
    tabMenu.forEach((itemMenu, index) => { 
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        } )
    });
};