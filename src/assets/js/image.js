import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
const quadro = document.querySelector('#quadro');
const botao = document.querySelector('#botao-exportar');

botao.addEventListener('click', function(){
    domtoimage.toPng(quadro)
    .then(function (blob) {
        window.saveAs(blob, 'code.png');
    });
});