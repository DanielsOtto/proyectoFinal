let carritoDeCompras = [];
//-------------------------------

// --- galeria ---
const divRowFiltro__hombres = document.getElementById("zonaFiltro__hombres"); // para el filtro en hombres 
const div__galeria__hombres = document.getElementById("galeria__hombres"); // para la galeria en seccion Hombres
//---- filtro ---
const opcionTipo = document.getElementById("opcionTipo");
const opcionPrecio = document.getElementById("opcionPrecio");


function habilitarRadioButtons(arreglo, opcL, opcM, opcS) {
    for (let x = 0; x < arreglo.length; x++) { // hasta aca va bien
        if ((arreglo[x].comprobarStock()) && (arreglo[x].talle == 'L')) {
            opcL.disabled = true;
        }else if ((arreglo[x].comprobarStock()) && (arreglo[x].talle == 'M')) {
            opcM.disabled = true;
        }else if ((arreglo[x].comprobarStock()) && (arreglo[x].talle == 'S')) {
            opcS.disabled = true;
        }
    }

}




function mostrarGaleria(array) {  // repetir estructura para seccion mujeres
    div__galeria__hombres.innerHTML = "";
    array.forEach(el => {

        let divGaleria = document.createElement("div");
        divGaleria.className = "col-lg-6 col-md-10 col-sm-12";
        divGaleria.innerHTML = `<article class="shirt">
                                        <img class="imgRopa img-fluid img-thumbnail" src=${el.img}
                                        alt="remera masculina de manga corta, azul oscuro, con la leyenda: california republic"
                                        title="remera estilo california">
                                        <article class="shirt__info">
                                            <p>${el.descripcion}</p>
                                            <p>$${el.precio}</p>
                                            <form>
                                                <div class="filterArticle__talle">
                                                    <input id="opcionL${el.id}" class="opcionFiltroTalle" type="radio" name="talle" value="L">
                                                    <label form="filtroL" class="labelFiltro" for="tipoBuzo">large(44)</label>
                                                </div>
                                                <div class="filterArticle__talle">
                                                    <input id="opcionM${el.id}" class="opcionFiltroTalle" type="radio" name="talle" value="M">
                                                    <label form="filtroM" class="labelFiltro" for="tipoBuzo">medium(43)</label>
                                                </div>
                                                <div class="filterArticle__talle">
                                                    <input id="opcionS${el.id}" class="opcionFiltroTalle" type="radio" name="talle" value="S">
                                                    <label form="filtroS" class="labelFiltro" for="tipoBuzo">small(42)</label>
                                                </div>
                                                <a id="botonA${el.id}" class="agregarCarrito btn-floating halfway-fab waves-effect waves-light"><i class="material-icons"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-cart" viewBox="0 0 16 16">
                                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                              </svg></i></a>
                                            </form>
                                        </article>
                                    </article>`;
        div__galeria__hombres.appendChild(divGaleria);
        let opcL = document.getElementById(`opcionL${el.id}`);
        let opcM = document.getElementById(`opcionM${el.id}`);
        let opcS = document.getElementById(`opcionS${el.id}`);


        habilitarRadioButtons(el.talles,opcL, opcM, opcS);

        // let btnAgregar = document.getElementById(`botonA${el.id}`);
        // btnAgregar.addEventListener('click', () => {

        //     el.precioFinal();
        //     agregarAlCarrito(el.id, array);
        // });

    })
}

function agregarAlCarrito(id, array) { // repetir para mujeres 

    let agregandoProducto = array.find(el => el.id === id);
    carritoDeCompras.push(agregandoProducto);
    galeriaCarrito(carritoDeCompras);
    actualizarCarrito();
}

function galeriaCarrito(array) {  // falta un clase para hacerlo andar -- no hace falta repetir ---- carrito 

    let articleCarrito = document.createElement('article');
    articleCarrito.className = "boxCarrito";
    articleCarrito.innerHTML = `<div class="boxCarrito__columnA">
                                        <img src=${array.img}
                                            alt=${array.alt}>
                                    </div>
                                    <div class="boxCarrito__columnB">
                                        <form>
                                            <input type="number" class="form-control">
                                        </form>
                                        viewBox="0 0 16 16">
                                        <button id="btnLimpiar${array.id}" class="btn-floating halfway-fab waves-effect waves-light"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-trash3-fill"
                                            <path
                                                d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                            </svg>
                                        </button>            
                                    </div>                                                
                                    <div class="boxCarrito__columnC">
                                        <p class="subPrice">${array.precioConImp}</p>
                                    </div>`;
    sectionCarrito.appendChild(articleCarrito);

    let btnLimpiar = document.getElementById(`btnLimpiar${array.id}`);
    btnLimpiar.addEventListener('click', () => {
        btnLimpiar.parentElement.remove();
        carritoDeCompras.contextText = carritoDeCompras.filter(el => el.id !== articleCarrito.id);
        actualizarCarrito();
    })
}


function arregloVacio(arreglo) {
    if (arreglo.length == 0) {
        div__galeria__hombres.innerHTML = "";
        const div = document.createElement('div');
        div.innerHTML = `<p class="textoInformativo"> No se han encontrado elementos con las características solicitadas. Pruebe nuevamente con otras características. Gracias!</p>`;
        div__galeria__hombres.appendChild(div);
    } else {
        mostrarGaleria(arreglo);
    }
}


// -- filtro por tipo de producto
opcionTipo.addEventListener('change', () => {

    if (opcionTipo.value === 'TODOS') {
        mostrarGaleria(productosH);
    } else {
        let filtroArreglo = productosH.filter((el) => el.tipo === opcionTipo.value);
        arregloVacio(filtroArreglo);
    }
})


// -- filtro por rango de precio
opcionPrecio.addEventListener('change', () => {

    if (opcionPrecio.value === 'TODOS') {
        mostrarGaleria(productosH);
    } else if (opcionPrecio.value <= 15000) {
        let filtroArreglo = productosH.filter((el) => el.precio <= 15000);
        arregloVacio(filtroArreglo);
    } else if ((opcionPrecio.value <= 30000) && (opcionPrecio.value > 15000)) {
        let filtroArreglo = productosH.filter((el) => (el.precio > 15000) && (el.precio <= 30000));
        arregloVacio(filtroArreglo);
    } else {
        let filtroArreglo = productosH.filter((el) => el.precio >= 30001);
        arregloVacio(filtroArreglo);
    }
})


mostrarGaleria(productosH);