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

/*comunidade com localStorage*/
const comunniyContainer = document.querySelector('.comunidade');

new function(){
    mostraProjetos()
}

function mostraProjetos(){
    if(localStorage.length == 0){
        return
    }

    let projetos = []
    for(let i = 0; i < localStorage.length; i++){
        projetos.push(JSON.parse(localStorage.getItem(i)));
    }

    projetos.forEach(projeto => {
        const cartao = criaCartao(projeto);
        comunniyContainer.innerHTML += cartao;
    });
}

function criaCartao(projeto) {
    const cartao = `
        <div id='projeto-card'>
            <div id='quadro-projeto' style='background:${projeto.detalhesDoProjeto.cor}'>
                <div id='projeto-codigo'>
                    <div class='botoes'>
                        <img class='ellipses' src='assets/imagens/ellipse-3.svg'>
                        <img class='ellipses' src='assets/imagens/ellipse-2.svg'>
                        <img class='ellipses' src='assets/imagens/ellipse-1.svg'>
                    </div>
                    <div id='text-editor'>
                        <pre><code id='editor-pequeno' class="hljs ${projeto.detalhesDoProjeto.linguagem}">${projeto.detalhesDoProjeto.codigo}</code></pre>
                    </div>
                </div>
            </div>
            <div id='projeto-info'>
                <h2 id="projeto-titulo">${projeto.detalhesDoProjeto.nomeDoProjeto}</h2>
                <p id="projeto-descricao">${projeto.detalhesDoProjeto.descricaoDoProjeto}</p>
            </div>
        </div>
    `
    return cartao
}

hljs.highlightAll()