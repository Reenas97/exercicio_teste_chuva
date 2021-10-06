function mostrarIdiomas() {
    const listaIdiomas = document.querySelector('.lista-idiomas')

    if(listaIdiomas.style.display != 'block') {
        listaIdiomas.style.display = 'block'
    } else {
        listaIdiomas.style.display = 'none'
    }
}