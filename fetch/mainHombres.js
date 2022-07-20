
const agregarAlCarrito = (elemento, x) => {
    
    if(carritoDeCompras.length === 0){
        elemento.talles[x].quieroUnoMas();
        carritoDeCompras.push(elemento);
    }else{
        if(carritoDeCompras.find((el)=> el.id == elemento.id)){
            let obj = carritoDeCompras.find((el)=> el.id == elemento.id);
            obj.talles[x].quieroUnoMas();      
        }else{
            elemento.talles[x].quieroUnoMas();
            carritoDeCompras.push(elemento);
        }
    }  
    localStorage.setItem("carritoEllos", JSON.stringify(carritoDeCompras));
}

const addClass = (rButton, label) => {
    rButton.className = "rButtonOff ";
    rButton.disabled = true;
    label.className = "filtroOff";
}

const comprobarStock = (stock)=> {
    return stock >= 1 ? true : false;
}

const habilitarRadioButtons = (arreglo, opcL, opcM, opcS, labL, labM, labS) => {

    for (let x = 0; x < arreglo.length; x++) { // filtro
        if ((arreglo[x].talle == 'L') && (!comprobarStock(arreglo[x].stock))) {
            addClass(opcL, labL);
        } else if ((arreglo[x].talle == 'M') && (!comprobarStock(arreglo[x].stock))) {
            addClass(opcM, labM);
        } else if ((arreglo[x].talle == 'S') && (!comprobarStock(arreglo[x].stock))) {
            addClass(opcS, labS);
        } 
    }
}

const mostrarGaleria = (array, divGaleria) => {

    divGaleria.innerHTML = null;
    array.forEach(el => {

        const { id, img: imagen, descripcion: desc, precio, alt: altImg, talles} = el;
        let divObjeto = document.createElement("div");
        
        divObjeto.className = "col-lg-6 col-md-10 col-sm-12";
        divObjeto.innerHTML = `<article class="shirt">
                                        <img class="imgRopa img-fluid img-thumbnail" src=${imagen}
                                        alt=${altImg}
                                        title="remera estilo california">
                                        <article class="shirt__info">
                                            <p>${desc}</p>
                                            <p>$${precio}</p>
                                            <form>
                                                <div class="filterArticle__talle">
                                                    <input id="opcionL${id}" class="opcionFiltroTalle cursorP" type="radio" name="talle" value="L">
                                                    <label id="labL${id}" form="filtroL" class="labelFiltro" for="tipoBuzo">large(44)</label>
                                                </div>
                                                <div class="filterArticle__talle">
                                                    <input id="opcionM${id}" class="opcionFiltroTalle cursorP" type="radio" name="talle" value="M">
                                                    <label id="labM${id}" form="filtroM" class="labelFiltro" for="tipoBuzo">medium(43)</label>
                                                </div>
                                                <div class="filterArticle__talle">
                                                    <input id="opcionS${id}" class="opcionFiltroTalle cursorP" type="radio" name="talle" value="S">
                                                    <label id="labS${id}" form="filtroS" class="labelFiltro" for="tipoBuzo">small(42)</label>
                                                </div>
                                                <a id="botonA${id}" class="agregarCarrito btn-floating halfway-fab waves-effect waves-light"><i class="material-icons"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-cart" viewBox="0 0 16 16">
                                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                              </svg></i></a>
                                            </form>
                                        </article>
                                    </article>`;
        divGaleria.appendChild(divObjeto);
        
        const opcL = document.getElementById(`opcionL${id}`);
        const opcM = document.getElementById(`opcionM${id}`);
        const opcS = document.getElementById(`opcionS${id}`);
        const labL = document.getElementById(`labL${id}`);
        const labM = document.getElementById(`labM${id}`);
        const labS = document.getElementById(`labS${id}`);

        habilitarRadioButtons(talles, opcL, opcM, opcS, labL, labM, labS);

        const btnAgregar = document.getElementById(`botonA${id}`);
        btnAgregar.addEventListener('click', () => {

            while((opcL.checked !== false)||(opcM.checked !== false)||(opcS.checked !== false)){

                let pos = 5; 

                if(opcL.checked == true){
                    opcL.checked = false;  
                    pos = 0;
                }else if(opcM.checked == true){
                    opcM.checked = false;
                    pos = 1;
                }else{
                    opcS.checked = false;
                    pos = 2;
                }

                el.talles[pos].vendiendo();
                agregarAlCarrito(el, pos);

                Toastify({ 
                    text: "Agregado al carrito!", 
                    duration: 1000, 
                    gravity: 'bottom', 
                    position: 'center', 
                    addClass: 'myToast',
                        style:{ 
                            background: 'linear-gradient(to right, #f2f4f5, #cccecf)', 
                            color: 'green', 
                        }
                }).showToast();
            }
        })
    })
}

const recuperarObjTalle = (arreglo)=> { // funca

    let arregloTalles =[];
    arreglo.forEach( el => {

        arregloTalles.push(new Inventario(el.talle, el.stock))
    })
    return arregloTalles;
}

const transformarEnObjeto = (dato)=> { // funca

    let arreglo = [];
    let talles = [];
    dato.forEach( el => {

        talles = recuperarObjTalle(el.talles);
        arreglo.push(new Articulo(el.id, el.tipo, el.marca, el.modelo, talles, el.precio, el.descripcion, el.alt, el.img))
    })
    return arreglo;
}


const obtenerDatos = async (divGaleria) => { // funca

    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    let arreglo = transformarEnObjeto(datos);
    mostrarGaleria(arreglo, divGaleria);
}

obtenerDatos(divGaleriaHombres);

// const obtenerDatosM = async (divGaleria) => { // funca

//     const respuesta = await fetch(urlMujeres);
//     const datos = await respuesta.json();
//     let arreglo = transformarEnObjeto(datos);
//     mostrarGaleria(arreglo, divGaleria);
// }

// obtenerDatosM(divGaleriaMujeres);




