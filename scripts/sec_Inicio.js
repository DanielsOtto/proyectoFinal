const recuperarArr = () => {
    return JSON.parse(localStorage.getItem("ultimoCarrito"));
}
const recObj = () => {
    carroVendido = recuperarArr();
    ordenarPorMasVendido();
}
const ordenarPorMasVendido = () => {
    carroVendido.length >= 2 && (carroVendido.sort((a, b) => b.cantidad - a.cantidad));
    carroVendido.length > 3 && (carroVendido.length = 3);
}
const imagenSiguiente = () => {
    if (posActual >= (carroVendido.length - 1)) {
        posActual = 0;
    } else {
        posActual++;
    }
    renderizarImagen();
}
const imagenAnterior = () => {
    if (posActual <= 0) {
        posActual = (carroVendido.length - 1);
    } else {
        posActual--;
    }
    renderizarImagen();
}
const renderizarImagen = () => {
    contImagen.innerText = null;
    if (posActual <= 2) {
        let div = document.createElement('div');
        div.className = "totalVendido";
        let img = document.createElement('img');
        img.src = carroVendido[posActual].img;
        div.innerHTML = `<p id="infoProducto">${carroVendido[posActual].cantidad}</p>`;
        contImagen.appendChild(img);
        contImagen.appendChild(div);
    }
}
const playIntervalo = () => {
    intervalo = setInterval(imagenSiguiente, intervaloMS);
    btnSiguiente.setAttribute('disabled', true);
    btnSiguiente.className = 'deshabilitar';
    btnAtras.setAttribute('disabled', true);
    btnAtras.className = 'deshabilitar';
    btnPlay.setAttribute('disabled', true);
    btnPlay.className = 'deshabilitar__play';
    btnStop.removeAttribute('disabled');
    btnStop.className = 'btnCarousel__play';
}
const stopIntervalo = () => {
    clearInterval(intervalo);
    btnSiguiente.removeAttribute('disabled');
    btnSiguiente.className = 'btnCarousel';
    btnAtras.removeAttribute('disabled');
    btnAtras.className = 'btnCarousel';
    btnPlay.removeAttribute('disabled');
    btnPlay.className = 'btnCarousel__play';
    btnStop.setAttribute('disabled', true);
    btnStop.className = 'deshabilitar__play';
}

recObj();
btnSiguiente.addEventListener('click', imagenSiguiente);
btnAtras.addEventListener('click', imagenAnterior);
btnPlay.addEventListener('click', playIntervalo);
btnStop.addEventListener('click', stopIntervalo);
renderizarImagen();
