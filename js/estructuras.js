let carritoDeCompras = [];


//-------------------------------
// --- galeria ---
const divRowFiltro__hombres = document.getElementById("zonaFiltro__hombres"); // para el filtro en hombres 
const div__galeria__hombres = document.getElementById("galeria__hombres"); // para la galeria en seccion Hombres
//---- filtro ---
const opcionTipo = document.getElementById("opcionTipo");
const opcionPrecio = document.getElementById("opcionPrecio");





const habilitarRadioButtons = (arreglo, opcL, opcM, opcS) => {
    for (let x = 0; x < arreglo.length; x++) { // filtro
        if ((arreglo[x].talle == 'L') && (arreglo[x].comprobarStock())) {
            opcL.disabled = true;
        } else if ((arreglo[x].talle == 'M') && (arreglo[x].comprobarStock())) {
            opcM.disabled = true;
        } else if ((arreglo[x].talle == 'S') && (arreglo[x].comprobarStock())) {
            opcS.disabled = true;
        }
    }

}

// const reducirStock = (elemento) => {

//     for(let y = 0; y<3; y++){

//         if(elemento.talles[y].vendido === true){
//             elemento.talles[y].reducirStock();
//             console.log("stock como andas ? "+ elemento.talles[y].stock);
//         }
//     }
// }

const agregarAlCarrito = (elemento, x) => { // repetir para mujeres ??
    
    if(carritoDeCompras.length === 0){

        elemento.talles[x].quieroUnoMas();
        elemento.talles[x].reducirStock(); 
        carritoDeCompras.push(elemento);
        localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
    }else{
        if(carritoDeCompras.find((el)=> el.id == elemento.id)){

            let obj = carritoDeCompras.find((el)=> el.id == elemento.id);
            obj.talles[x].quieroUnoMas();
            obj.talles[x].reducirStock(); 
            obj.multiplePriceE(obj.talles[x].cantidad);
            localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
        }else{

            elemento.talles[x].quieroUnoMas();
            elemento.talles[x].reducirStock();
            carritoDeCompras.push(elemento);
            localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
        }
    } // anda perfecto, 
}

const mostrarGaleria = (array) => {  // repetir estructura para seccion mujeres
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

        
        habilitarRadioButtons(el.talles, opcL, opcM, opcS);


        let btnAgregar = document.getElementById(`botonA${el.id}`);
        btnAgregar.addEventListener('click', () => {

            // debugger;
            while((opcL.checked !== false)||(opcM.checked !== false)||(opcS.checked !== false)){
                el.precioFinal();

                let pos = 5; 

                if(opcL.checked == true){
                    console.log("pero antes quiero ver el stock "+el.talles[0].stock);
                    opcL.checked = false;  
                    console.log("quiero ver que pasa con cantidad "+ el.talles[0].cantidad); 
                    pos = 0;
                }else if(opcM.checked == true){
                    opcM.checked = false;
                    pos = 1;
                }else{
                    opcS.checked = false;
                    pos = 2;
                }

                el.talles[pos].objetoVendido();
                agregarAlCarrito(el, pos);
                
                // revisar como deshabilitar el boton si no hay stock
            }
        });

    })
}


const arregloVacio = (arreglo) => { // verifica que el arreglo nuevo tenga valores
    if (arreglo.length == 0) {
        div__galeria__hombres.innerHTML = "";
        const div = document.createElement('div');
        div.innerHTML = `<p class="textoInformativo"> No se han encontrado elementos con las características solicitadas. Pruebe nuevamente con otras características. Gracias!</p>`;
        div__galeria__hombres.appendChild(div);
    } else {
        mostrarGaleria(arreglo);
    }
}

opcionTipo.addEventListener('change', () => {
    // -- filtro por tipo de producto
    if (opcionTipo.value === 'TODOS') {
        mostrarGaleria(productosH);
    } else {
        let filtroArreglo = productosH.filter((el) => el.tipo === opcionTipo.value);
        arregloVacio(filtroArreglo);
    }
})

opcionPrecio.addEventListener('change', () => {
    // -- filtro por rango de precio
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


