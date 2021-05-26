/*cor do editor*/
const quadroNoHtml = document.querySelector('#quadro');
const selecionaCorEditor = document.querySelector('#selecionar-cor');

selecionaCorEditor.addEventListener('input', function(event){
    let corEscolhida = event.target.value ;
    quadroNoHtml.style = `background: ${corEscolhida}`;
});

/*hightlight*/
const areaDoCodigo = document.querySelector('#text-editor');
const linguagem = document.querySelector('#selecionar-linguagem');
const botao = document.querySelector('#botao-highlight');

function mudaLinguagem(){
    const codigo = areaDoCodigo.querySelector('code');
    areaDoCodigo.innerHTML = `<code id='editor' class='hljs ${linguagem.value}' contenteditable='true'></code>`;
    areaDoCodigo.firstChild.innerText = codigo.innerText;
}

linguagem.addEventListener('change', function(){
    mudaLinguagem();
});

botao.addEventListener('click', function(){
    const codigo = areaDoCodigo.querySelector('code');
    hljs.highlightBlock(codigo);
});