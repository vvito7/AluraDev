export class DomToImage{
    qualquerCoisa(){
        import domtoimage from 'dom-to-image';
        const quadro = document.querySelector('#quadro');
        const botao = document.querySelector('#botao-exportar');
        
        botao.addEventListener('click', function(){
            domtoimage.toBlob(quadro)
            .then(function (blob) {
                saveAs(blob, 'code.png');
            });
        });
    }
}