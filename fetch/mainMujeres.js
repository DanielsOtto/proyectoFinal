const agregarAlCarrito = (elemento, x) => {
    if(carritoComprasEllas.length === 0){
        elemento.talles[x].quieroUnoMas();
        carritoComprasEllas.push(elemento);
    }else{
        if(carritoComprasEllas.find((el)=> el.id == elemento.id)){
            let obj = carritoComprasEllas.find((el)=> el.id == elemento.id);
            obj.talles[x].quieroUnoMas();      
        }else{
            elemento.talles[x].quieroUnoMas();
            carritoComprasEllas.push(elemento);
        }
    }  
    localStorage.setItem("carritoEllas", JSON.stringify(carritoComprasEllas));
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

const mostrarGaleria = (array) => {
    divGaleriaMujeres.innerHTML = null;
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
        divGaleriaMujeres.appendChild(divObjeto);
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
                opcL.checked === true && (pos = 0);
                opcM.checked === true && (pos = 1);
                opcS.checked === true && (pos = 2);
                opcL.checked = false;
                opcM.checked = false;
                opcS.checked = false;

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

const recuperarObjTalle = (arreglo)=> { 
    let arregloTalles =[];
    arreglo.forEach( el => {
        arregloTalles.push(new Inventario(el.talle, el.stock))
    })
    return arregloTalles;
}

const transformarEnObjeto = (dato)=> { 
    let arreglo = [];
    let talles = [];
    dato.forEach( el => {
        talles = recuperarObjTalle(el.talles);
        arreglo.push(new Articulo(el.id, el.tipo, el.marca, el.modelo, talles, el.precio, el.descripcion, el.alt, el.img))
    })
    return arreglo;
}

const obtenerDatos = async () => { 
    const respuesta = await fetch(urlMujeres);
    const datos = await respuesta.json();
    productosM = transformarEnObjeto(datos);
    mostrarGaleria(productosM);
}

obtenerDatos();

const talleElegido = (botn, pos) => {
    return productosM.filter(e => e.talles[pos].talle == botn.value && e.talles[pos].stock >= 1);
}

const tallesElegidos = (talleA, posA, talleB, posB)=> {
    let arreglo = [];
    productosM.forEach( obj => {
        if(obj.talles[posA].talle == talleA.value && obj.talles[posA].stock >= 1){
            if(obj.talles[posB].talle == talleB.value && obj.talles[posB].stock >= 1){
                arreglo.push(obj);
            }
        }
    })
    return arreglo;
}

const todosLosTalles = (talleA, posA, talleB, posB, talleC, posC)=> {
    let arreglo = [];
    productosM.forEach( obj => {
        if(obj.talles[posA].talle == talleA.value && obj.talles[posA].stock >= 1){
            if(obj.talles[posB].talle == talleB.value && obj.talles[posB].stock >= 1){
                if(obj.talles[posC].talle == talleC.value && obj.talles[posC].stock >= 1){
                    arreglo.push(obj);
                }
            }
        }
    })
    return arreglo;
}

const filtrosPorTalle = () => {
    let arreglo = [];    
    if ((filtroTalleL.checked === true)&&(filtroTalleM.checked === false)&&(filtroTalleS.checked === false)){
        arreglo = talleElegido(filtroTalleL, 0);
    }else if ((filtroTalleL.checked === false)&&(filtroTalleM.checked === true)&&(filtroTalleS.checked === false)){
        arreglo = talleElegido(filtroTalleM, 1);
    }else if ((filtroTalleL.checked === false)&&(filtroTalleM.checked === false)&&(filtroTalleS.checked === true)){
        arreglo = talleElegido(filtroTalleS, 2);
    }else if ((filtroTalleL.checked === true)&&(filtroTalleM.checked === true)&&(filtroTalleS.checked === false)){
        arreglo = tallesElegidos(filtroTalleL, 0, filtroTalleM, 1);
    }else if((filtroTalleL.checked === false)&&(filtroTalleM.checked === true)&&(filtroTalleS.checked === true)){
        arreglo = tallesElegidos(filtroTalleM, 1, filtroTalleS, 2);
    }else if((filtroTalleL.checked === true)&&(filtroTalleM.checked === false)&&(filtroTalleS.checked === true)){
        arreglo = tallesElegidos(filtroTalleL, 0, filtroTalleS, 2);
    }else if((filtroTalleL.checked === true)&&(filtroTalleM.checked === true)&&(filtroTalleS.checked === true)){
        arreglo = todosLosTalles(filtroTalleL, 0, filtroTalleM, 1, filtroTalleS, 2);
    }
    return arreglo;
}

const precioElegido = (montoA, montoB) => {
    return productosM.filter(e => e.precio >= montoA && e.precio <= montoB);
}

const filtosPorPrecio = () => {
    let arreglo = [];
    if (filtroPrec1.checked === true) {
        arreglo = precioElegido(1, 15000);
    } else if (filtroPrec2.checked === true) {
        arreglo = precioElegido(15001, 30000);
    } else if (filtroPrec3.checked === true) {
        arreglo = precioElegido(30001, 100000);
    }
    return arreglo;
}

const sinResultados = ()=> {
    divGaleriaMujeres.innerHTML = "";
    const div = document.createElement('div');
    div.innerHTML = `<article class="shirt"> <p class="textoInformativo"> No se han encontrado elementos con las características solicitadas. Pruebe nuevamente con otras características. Gracias!</p></article>`;
    divGaleriaMujeres.appendChild(div);
}

const resetFiltros = ()=> {
    filtroTalleL.checked = false;
    filtroTalleM.checked = false;
    filtroTalleS.checked = false;
    filtroPrec1.checked = false;
    filtroPrec2.checked = false;
    filtroPrec3.checked = false;
}

btnVerTodo.addEventListener('click', (e)=> {
    resetFiltros();
    mostrarGaleria(productosM);
})

btnLimpiarFs.addEventListener('click', (e)=> {
    e.preventDefault();
    resetFiltros();
})

btnBuscarFs.addEventListener('click', (e) => {
    e.preventDefault();

    let newA = [];
    let newB = [];
    let arrayD = [];
    newA = filtrosPorTalle();
    newB = filtosPorPrecio();
    if((newA.length > 0) && (newB.length > 0)){
        newA.forEach(obj => {
            if(newB.find(ele => ele.id === obj.id)){  
                arrayD.push(obj);
            }
        }) 
        if(arrayD.length > 0){

            mostrarGaleria(arrayD);
        }else {
            sinResultados();
        }
    }else{
        if(newA.length > 0){
            mostrarGaleria(newA);
        }else if(newB.length > 0){
            mostrarGaleria(newB);
        }
    }
})