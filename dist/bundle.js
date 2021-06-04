/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/comunidade.js":
/*!*************************************!*\
  !*** ./src/assets/js/comunidade.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Comunidade\": () => (/* binding */ Comunidade)\n/* harmony export */ });\nclass Comunidade {\r\n    qualquerCoisa(){\r\n        /*menu-hamburguer*/\r\n        const botaoBarras = document.querySelector('.menu-responsivo');\r\n        const botaoXis = document.querySelector('.fechar-menu');\r\n        const menu = document.querySelector('.menu');\r\n        \r\n        botaoBarras.addEventListener('click', function(){\r\n            menu.classList.add('menu-open');\r\n            menu.classList.remove('menu');\r\n            botaoXis.classList.add('xis');\r\n            botaoBarras.classList.add('naoBarras');\r\n            botaoBarras.classList.remove('menu-responsivo');\r\n        });\r\n        \r\n        botaoXis.addEventListener('click', function(){\r\n            menu.classList.remove('menu-open');\r\n            menu.classList.add('menu');\r\n            botaoXis.classList.remove('xis');\r\n            botaoBarras.classList.remove('naoBarras');\r\n            botaoBarras.classList.add('menu-responsivo');\r\n        });\r\n        \r\n        /*barra de busca mobile*/\r\n        const lupaPesquisa = document.querySelector('.lupa-responsiva');\r\n        const lupaPesquisa2 = document.querySelector('.lupa-responsiva2');\r\n        const campoBusca = document.querySelector('.text-field');\r\n        const logoAlura = document.querySelector('.logo-alura');\r\n        \r\n        lupaPesquisa.addEventListener('click', function(){\r\n            lupaPesquisa.classList.add('lupa-naoaparece');\r\n            lupaPesquisa.classList.remove('lupa-responsiva');\r\n            lupaPesquisa2.classList.add('lupa2-aparece');\r\n            lupaPesquisa2.classList.remove('lupa-responsiva2');\r\n            campoBusca.classList.remove('text-field');\r\n            campoBusca.classList.add('text-field-aparece');\r\n            logoAlura.classList.add('logo-naoaparece');\r\n        });\r\n        \r\n        lupaPesquisa2.addEventListener('click', function(){\r\n            lupaPesquisa.classList.remove('lupa-naoaparece');\r\n            lupaPesquisa.classList.add('lupa-responsiva');\r\n            lupaPesquisa2.classList.remove('lupa2-aparece');\r\n            lupaPesquisa2.classList.add('lupa-responsiva2');\r\n            campoBusca.classList.remove('text-field-aparece');\r\n            campoBusca.classList.add('text-field');\r\n            logoAlura.classList.remove('logo-naoaparece');\r\n        });\r\n        \r\n        /*comunidade com localStorage*/\r\n        const comunniyContainer = document.querySelector('.comunidade');\r\n        \r\n        new function(){\r\n            mostraProjetos()\r\n        }\r\n        \r\n        function mostraProjetos(){\r\n            if(localStorage.length == 0){\r\n                return\r\n            }\r\n        \r\n            let projetos = []\r\n            for(let i = 0; i < localStorage.length; i++){\r\n                projetos.push(JSON.parse(localStorage.getItem(i)));\r\n            }\r\n        \r\n            projetos.forEach(projeto => {\r\n                const cartao = criaCartao(projeto);\r\n                comunniyContainer.innerHTML += cartao;\r\n            });\r\n        }\r\n        \r\n        function criaCartao(projeto) {\r\n            const cartao = `\r\n                <div id='projeto-card'>\r\n                    <div id='quadro-projeto' style='background:${projeto.detalhesDoProjeto.cor}'>\r\n                        <div id='projeto-codigo'>\r\n                            <div class='botoes'>\r\n                                <img class='ellipses' src='assets/imagens/ellipse-3.svg'>\r\n                                <img class='ellipses' src='assets/imagens/ellipse-2.svg'>\r\n                                <img class='ellipses' src='assets/imagens/ellipse-1.svg'>\r\n                            </div>\r\n                            <div id='text-editor'>\r\n                                <pre><code id='editor-pequeno' class=\"hljs ${projeto.detalhesDoProjeto.linguagem}\">${projeto.detalhesDoProjeto.codigo}</code></pre>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div id='projeto-info'>\r\n                        <h2 id=\"projeto-titulo\">${projeto.detalhesDoProjeto.nomeDoProjeto}</h2>\r\n                        <p id=\"projeto-descricao\">${projeto.detalhesDoProjeto.descricaoDoProjeto}</p>\r\n                    </div>\r\n                    <div class='projetos-info-hidden-desativado'>\r\n                        <div class='projetos-info-reacoes'>\r\n                            <div class='projetos-reacoes-comentario'>\r\n                                <img src='assets/imagens/comentario.svg'>\r\n                                <p class='projetos-reacoes'>5</p>\r\n                            </div>\r\n                            <div class='projetos-reacoes-curtida'>\r\n                                <img src='assets/imagens/curtida.svg'>\r\n                                <p class='projetos-reacoes'>21</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class='projetos-info-profile'>\r\n                            <img src='assets/imagens/author_foto.svg'>\r\n                            <p class='projetos-reacoes'>@Harry</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            `\r\n            return cartao\r\n        }\r\n        \r\n        /*tela de boas vindas, caso nao tenha projetos*/\r\n        const comunidadeSemProjeto = document.querySelector('.sem-projetos-desativado');\r\n        \r\n        if(localStorage.length == 0){\r\n            comunidadeSemProjeto.classList.remove('sem-projetos-desativado');\r\n            comunidadeSemProjeto.classList.add('sem-projetos');\r\n        }\r\n        \r\n        /*hover do card*/\r\n        const projetoCard = document.querySelector('#projeto-card');\r\n        const cardHover = document.querySelector('.projetos-info-hidden-desativado');\r\n        \r\n        projetoCard.addEventListener('mouseover', function(){\r\n            cardHover.classList.remove('projetos-info-hidden-desativado');\r\n            cardHover.classList.add('projetos-info-hidden');\r\n        });\r\n        \r\n        projetoCard.addEventListener('mouseout', function(){\r\n            cardHover.classList.add('projetos-info-hidden-desativado');\r\n            cardHover.classList.remove('projetos-info-hidden');\r\n        });\r\n        \r\n        /*aplicando o hljs em todos os code da pagina*/\r\n        hljs.highlightAll()\r\n    }\r\n} \n\n//# sourceURL=webpack:///./src/assets/js/comunidade.js?");

/***/ }),

/***/ "./src/assets/js/editor.js":
/*!*********************************!*\
  !*** ./src/assets/js/editor.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Editor\": () => (/* binding */ Editor)\n/* harmony export */ });\nclass Editor{\r\n    qualquerCoisa(){\r\n        /*cor do editor*/\r\n        const quadroNoHtml = document.querySelector('#quadro');\r\n        const selecionaCorEditor = document.querySelector('#selecionar-cor');\r\n        \r\n        selecionaCorEditor.addEventListener('input', function(event){\r\n            let corEscolhida = event.target.value ;\r\n            quadroNoHtml.style = `background: ${corEscolhida}`;\r\n        });\r\n        \r\n        /*hightlight*/\r\n        const areaDoCodigo = document.querySelector('#text-editor');\r\n        const linguagem = document.querySelector('#selecionar-linguagem');\r\n        const botao = document.querySelector('#botao-highlight');\r\n        \r\n        function mudaLinguagem(){\r\n            const codigo = areaDoCodigo.querySelector('code');\r\n            areaDoCodigo.innerHTML = `<code id='editor' class='hljs ${linguagem.value}' contenteditable='true'></code>`;\r\n            areaDoCodigo.firstChild.innerText = codigo.innerText;\r\n        }\r\n        \r\n        linguagem.addEventListener('change', function(){\r\n            mudaLinguagem();\r\n        });\r\n        \r\n        botao.addEventListener('click', function(){\r\n            const codigo = areaDoCodigo.querySelector('code');\r\n            hljs.highlightBlock(codigo);\r\n        });\r\n        \r\n        /*menu-hamburguer*/\r\n        const botaoBarras = document.querySelector('.menu-responsivo');\r\n        const botaoXis = document.querySelector('.fechar-menu');\r\n        const menu = document.querySelector('.menu');\r\n        \r\n        botaoBarras.addEventListener('click', function(){\r\n            menu.classList.add('menu-open');\r\n            menu.classList.remove('menu');\r\n            botaoXis.classList.add('xis');\r\n            botaoBarras.classList.add('naoBarras');\r\n            botaoBarras.classList.remove('menu-responsivo');\r\n        });\r\n        \r\n        botaoXis.addEventListener('click', function(){\r\n            menu.classList.remove('menu-open');\r\n            menu.classList.add('menu');\r\n            botaoXis.classList.remove('xis');\r\n            botaoBarras.classList.remove('naoBarras');\r\n            botaoBarras.classList.add('menu-responsivo');\r\n        });\r\n        \r\n        /*barra de busca mobile*/\r\n        const lupaPesquisa = document.querySelector('.lupa-responsiva');\r\n        const lupaPesquisa2 = document.querySelector('.lupa-responsiva2');\r\n        const campoBusca = document.querySelector('.text-field');\r\n        const logoAlura = document.querySelector('.logo-alura');\r\n        \r\n        lupaPesquisa.addEventListener('click', function(){\r\n            lupaPesquisa.classList.add('lupa-naoaparece');\r\n            lupaPesquisa.classList.remove('lupa-responsiva');\r\n            lupaPesquisa2.classList.add('lupa2-aparece');\r\n            lupaPesquisa2.classList.remove('lupa-responsiva2');\r\n            campoBusca.classList.remove('text-field');\r\n            campoBusca.classList.add('text-field-aparece');\r\n            logoAlura.classList.add('logo-naoaparece');\r\n        });\r\n        \r\n        lupaPesquisa2.addEventListener('click', function(){\r\n            lupaPesquisa.classList.remove('lupa-naoaparece');\r\n            lupaPesquisa.classList.add('lupa-responsiva');\r\n            lupaPesquisa2.classList.remove('lupa2-aparece');\r\n            lupaPesquisa2.classList.add('lupa-responsiva2');\r\n            campoBusca.classList.remove('text-field-aparece');\r\n            campoBusca.classList.add('text-field');\r\n            logoAlura.classList.remove('logo-naoaparece');\r\n        });\r\n        \r\n        /*pegando informações e mandando para um objeto js*/\r\n        const tituloProjeto = document.querySelector('#nome-projeto');\r\n        const descricaoProjeto = document.querySelector('#descricao-projeto');\r\n        const botaoSalvar = document.querySelector('#salvar');\r\n        \r\n        botaoSalvar.addEventListener('click', function(){\r\n            if (typeof(Storage) !== \"undefined\") {\r\n                const projeto = montaProjeto();\r\n                salvaLocalStorage(projeto);\r\n            }\r\n        });\r\n        \r\n        function montaProjeto(){\r\n            let projeto = {\r\n                'id': atribuiId(),\r\n                'detalhesDoProjeto': {\r\n                    'nomeDoProjeto': tituloProjeto.value,\r\n                    'descricaoDoProjeto': descricaoProjeto.value,\r\n                    'linguagem': linguagem.value,\r\n                    'cor': selecionaCorEditor.value,\r\n                    'codigo': areaDoCodigo.querySelector('code').innerText\r\n                }\r\n            }\r\n            return projeto;\r\n        }\r\n        \r\n        let numeroId = 1\r\n        \r\n        if(localStorage.length > 0) {\r\n            numeroId = localStorage.length\r\n        }\r\n        \r\n        function atribuiId() {\r\n            if(localStorage.length == 0) {\r\n                return 0;\r\n            } else {\r\n                if(localStorage.length == numeroId) {\r\n                    let novoId = numeroId;\r\n                    numeroId++;\r\n                    return novoId;\r\n                }\r\n            }\r\n        }\r\n        \r\n        function salvaLocalStorage(objetoJson) {\r\n            localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/editor.js?");

/***/ }),

/***/ "./src/assets/js/image.js":
/*!********************************!*\
  !*** ./src/assets/js/image.js ***!
  \********************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: 'import' and 'export' may only appear at the top level (3:8)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| export class DomToImage{\\n|     qualquerCoisa(){\\n>         import domtoimage from 'dom-to-image';\\n|         const quadro = document.querySelector('#quadro');\\n|         const botao = document.querySelector('#botao-exportar');\");\n\n//# sourceURL=webpack:///./src/assets/js/image.js?");

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.js */ \"./src/assets/js/editor.js\");\n/* harmony import */ var _comunidade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comunidade */ \"./src/assets/js/comunidade.js\");\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ \"./src/assets/js/image.js\");\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_image__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/main.js");
/******/ 	
/******/ })()
;