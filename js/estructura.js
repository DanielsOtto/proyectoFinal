let carritoDeCompras = [];

// --- galeria ---
const divRowFiltro__hombres = document.getElementById("zonaFiltro__hombres"); // para el filtro en hombres 
const div__galeria__hombres = document.getElementById("galeria__hombres"); // para la galeria en seccion Hombres
//---- filtro ---
const opcionTipo = document.getElementById("opcionTipo");
const opcionPrecio = document.getElementById("opcionPrecio");


function mostrarGaleria (array){  // repetir estructura para seccion mujeres
        div__galeria__hombres.innerHTML = "";
        array.forEach( el => {
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
                                                    <input id="opcionL" class="opcionFiltroTalle" type="radio" name="talle" value="L">
                                                    <label form="filtroL" class="labelFiltro" for="tipoBuzo">large(44)</label>
                                                </div>
                                                <div class="filterArticle__talle">
                                                    <input id="opcionM" class="opcionFiltroTalle" type="radio" name="talle" value="M">
                                                    <label form="filtroM" class="labelFiltro" for="tipoBuzo">medium(43)</label>
                                                </div>
                                                <div class="filterArticle__talle">
                                                    <input id="opcionS" class="opcionFiltroTalle" type="radio" name="talle" value="S">
                                                    <label form="filtroS" class="labelFiltro" for="tipoBuzo">small(42)</label>
                                                </div>
                                                <a id="botonA${el.id}" class="agregarCarrito btn-floating halfway-fab waves-effect waves-light"><i class="material-icons"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-cart" viewBox="0 0 16 16">
                                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                              </svg></i></a>
                                            </form>
                                        </article>
                                    </article>`;
            div__galeria__hombres.appendChild(divGaleria);
        })
}

// -- funcion llamada por los filtros --- 
function arregloVacio(arreglo){
    if(arreglo.length == 0){
        div__galeria__hombres.innerHTML = "";
        const div = document.createElement('div');
        div.innerHTML = `<p class="textoInformativo"> No se han encontrado elementos con las características solicitadas. Pruebe nuevamente con otras características. Gracias!</p>`;
        div__galeria__hombres.appendChild(div);
    }else{
        mostrarGaleria(arreglo);
    }
}

// -- filtro por tipo de producto
opcionTipo.addEventListener('change', ()=>{

    if(opcionTipo.value === 'TODOS'){
        mostrarGaleria(productosH);
    }else{
        let filtroArreglo = productosH.filter((el)=> el.tipo === opcionTipo.value);
        arregloVacio(filtroArreglo);
    }
})

// -- filtro por rango de precio

opcionPrecio.addEventListener('change', ()=>{

    if(opcionPrecio.value === 'TODOS'){
        mostrarGaleria(productosH);    
    }else if(opcionPrecio.value <= 15000){
        let filtroArreglo = productosH.filter((el)=> el.precio <= 15000);
        arregloVacio(filtroArreglo);
    }else if((opcionPrecio.value<= 30000)&&(opcionPrecio.value > 15000)){
        let filtroArreglo = productosH.filter((el)=> (el.precio> 15000) && (el.precio<=30000));
        arregloVacio(filtroArreglo);
    }else{ 
        let filtroArreglo = productosH.filter((el)=> el.precio >= 30001);
        arregloVacio(filtroArreglo);
    }
})


mostrarGaleria(productosH);


