function tocaSom (idElementoAudio) {
    const elemento=document.querySelector(SelectorAudio);
if(elemento===null){
     elemento.play();
}
    else{
    alert(´Elemento nao encontrado ou seletor invalido`);
} 

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
tecla.onkeydown=function(){
    (evento.code===´enter||evento.code===´space`) 
    tecla.classlist.add(´ativa`)
}
tecla.onkeyup=function(´ativa`)
}
