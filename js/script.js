function mostrarIdiomas() {
    const listaIdiomas = document.querySelector('.lista-idiomas')

    if(listaIdiomas.style.display != 'block') {
        listaIdiomas.style.display = 'block'
    } else {
        listaIdiomas.style.display = 'none'
    }
}


function mostrarTexto(){
    const maisTexto = document.getElementById("textoEscondido");
    const botao = document.getElementById("botaoVerMais");
    if (maisTexto.style.display == "none"){
        maisTexto.style.display="inline";
        botao.innerHTML="ver menos";

    } else{
        maisTexto.style.display="none";
    }

    if (maisTexto.style.display == "none"){
        botao.innerHTML="ver mais";
    }
}

function criaTopico(){
    const discussao = document.getElementById("discussao");
    const formulario = document.getElementById("divFormulario");
    if (discussao.style.display == "flex");{
    discussao.style.display ="none";
    formulario.style.display ="flex";
    }
}
