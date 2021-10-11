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
    if (maisTexto.style.display != "inline"){
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

// function enviaFeedback(){
//     const feedback = document.getElementById("feedbadivFormulariockEnviado");
//     const discussao = document.getElementById("discussao");
//     const formulario = document.getElementById("divFormulario");
//     if (feedback.style.display == "none");{
//         feedback.style.display = "flex";
//         discussao.style.display = "none";
//         formulario.style.display = "none";
//     }
// }

function topicoExpandido(){
   const respostas = document.getElementById("cardTopico");
   if (respostas.style.display !="flex"){
    respostas.style.display ="flex";
   } else {
       respostas.style.display = "none";
   }



}

function topicoExpandido2(){
    const respostas2 = document.getElementById("cardTopico2");
    if (respostas2.style.display !="flex") {
        respostas2.style.display ="flex";
    } else {
        respostas2.style.display ="none";
    }

}

function mostraMenu(){
    const menu = document.getElementById("menu");
    if (menu.style.display !="flex") {
        menu.style.display ="flex";
    } else {
        menu.style.display ="none";
    }

}

function enviaFeedback() {
    const assunto = document.getElementById ('assunto').value;
    const conteudo = document.getElementById ('conteudo').value;

    const feedback = document.getElementById("feedbackEnviado");
    const discussao = document.getElementById("discussao");
    const formulario = document.getElementById("divFormulario");
    document.getElementById("assuntoNovo").textContent= assunto;
    document.getElementById("perguntaNova").textContent= conteudo;
    if (feedback.style.display == "none");{
        feedback.style.display = "flex";
        discussao.style.display = "none";
        formulario.style.display = "none";
    }



}
