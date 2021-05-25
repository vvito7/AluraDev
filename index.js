const quadroNoHtml = document.querySelector('#quadro');
const selecionaCorEditor = document.querySelector('#selecionar-cor');

selecionaCorEditor.addEventListener('input', function(event){
    let corEscolhida = event.target.value ;
    quadroNoHtml.style = `background: ${corEscolhida}`;
});