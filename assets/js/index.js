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

/*menu-hamburguer*/
const botaoBarras = document.querySelector('.menu-responsivo');
const botaoXis = document.querySelector('.fechar-menu');
const menu = document.querySelector('.menu');

botaoBarras.addEventListener('click', function(){
    menu.classList.add('menu-open');
    menu.classList.remove('menu');
    botaoXis.classList.add('xis');
    botaoBarras.classList.add('naoBarras');
    botaoBarras.classList.remove('menu-responsivo');
});

botaoXis.addEventListener('click', function(){
    menu.classList.remove('menu-open');
    menu.classList.add('menu');
    botaoXis.classList.remove('xis');
    botaoBarras.classList.remove('naoBarras');
    botaoBarras.classList.add('menu-responsivo');
});

/*barra de busca mobile*/
const lupaPesquisa = document.querySelector('.lupa-responsiva');
const lupaPesquisa2 = document.querySelector('.lupa-responsiva2');
const campoBusca = document.querySelector('.text-field');
const logoAlura = document.querySelector('.logo-alura');

lupaPesquisa.addEventListener('click', function(){
    lupaPesquisa.classList.add('lupa-naoaparece');
    lupaPesquisa.classList.remove('lupa-responsiva');
    lupaPesquisa2.classList.add('lupa2-aparece');
    lupaPesquisa2.classList.remove('lupa-responsiva2');
    campoBusca.classList.remove('text-field');
    campoBusca.classList.add('text-field-aparece');
    logoAlura.classList.add('logo-naoaparece');
});

lupaPesquisa2.addEventListener('click', function(){
    lupaPesquisa.classList.remove('lupa-naoaparece');
    lupaPesquisa.classList.add('lupa-responsiva');
    lupaPesquisa2.classList.remove('lupa2-aparece');
    lupaPesquisa2.classList.add('lupa-responsiva2');
    campoBusca.classList.remove('text-field-aparece');
    campoBusca.classList.add('text-field');
    logoAlura.classList.remove('logo-naoaparece');
});

/*pegando informações e mandando para um objeto*/
const tituloProjeto = document.querySelector('#nome-projeto');
const descricaoProjeto = document.querySelector('#descricao-projeto');
const botaoSalvar = document.querySelector('#salvar');

botaoSalvar.addEventListener('click', function(){
    if (typeof(Storage) !== "undefined") {
        const projeto = montaProjeto();
        salvaLocalStorage(projeto);
    }
});

function montaProjeto(){
    let projeto = {
        'id': atribuiId(),
        'detalhesDoProjeto': {
            'nomeDoProjeto': tituloProjeto.value,
            'descricaoDoProjeto': descricaoProjeto.value,
            'linguagem': linguagem.value,
            'cor': selecionaCorEditor.value,
            'codigo': areaDoCodigo.querySelector('code').innerText
        }
    }
    return projeto;
}

let numeroId = 1

if(localStorage.length > 0) {
    numeroId = localStorage.length
}

function atribuiId() {
    if(localStorage.length == 0) {
        return 0;
    } else {
        if(localStorage.length == numeroId) {
            let novoId = numeroId;
            numeroId++;
            return novoId;
        }
    }
}

function salvaLocalStorage(objetoJson) {
    localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))
}