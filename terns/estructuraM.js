// --------------------------------------------------
//                   SECCION  MUJERES
// --------------------------------------------------
let carritoCompras = [];
const divGaleria__Mujeres = document.getElementById("galeria__mujeres"); // para la seccion de Mujeres
// -- faltan los filtros
// const filtroTipo = document.getElementById();
// const filtroPrecio = document.getElementById();


const agregarClases = (rButton, label) => { // bien

    rButton.className = "rButtonOff ";
    rButton.disabled = true;
    label.className = "filtroOff";
}

const revisarRadioButtons = (arreglo, oL, oM, oS, lL, lM, lS) => { // bien

    for(let i =0; i< arreglo.length; i++){

        if((arreglo[i].talle == 'L') && (arreglo[i].comprobarStock())){
            agregarClases(oL, lL);
        }else if((arreglo[i].talle == 'M') && (arreglo[i].comprobarStock())){
            agregarClases(oM, lM);
        }else if((arreglo[i].talle == 'S') && (arreglo[i].comprobarStock())){
            agregarClases(oS, lS);
        }
    }
}

// const cantTotal = (arreglo)=> {
     
//     return arreglo.reduce((acc, el) => acc + el.cantidad, 0);
// }

const agregarAlCarro = (elemento, pos) => {
    if(carritoCompras.length === 0){
        elemento.talles[pos].quieroUnoMas();
        carritoCompras.push(elemento);
    }else{
        if(carritoCompras.find( el => el.id == elemento.id)){
            let obj = carritoCompras.find(el => el.id == elemento.id);
            obj.talles[pos].quieroUnoMas();
        }else{
            elemento.talles[pos].quieroUnoMas();
            carritoCompras.push(elemento);
        }   
    }
    localStorage.setItem("carritoEllas", JSON.stringify(carritoCompras));
}

const mostrarGalMujeres = (arreglo)=> {

    divGaleria__Mujeres.innerHTML = null;
    arreglo.forEach(ele => {
        const { id, img: imagen, descripcion: desc, precio: precioSinIva, alt: altImg, talles} = ele;
        let divGaleria = document.createElement("div");
        divGaleria.className = "col-lg-6 col-md-10 col-sm-12";
        divGaleria.innerHTML = `<article class="shirt">
                                        <img class="imgRopa img-fluid img-thumbnail" src=${imagen}
                                        alt=${altImg}
                                        title="remera estilo california">
                                        <article class="shirt__info">
                                            <p>${desc}</p>
                                            <p>$${precioSinIva}</p>
                                            <form>
                                                <div class="filterArticle__talle">
                                                    <input id="opcionL${id}" class="opcionFiltroTalle" type="radio" name="talle" value="L">
                                                    <label id="labL${id}" form="filtroL" class="labelFiltro" for="tipoBuzo">large(44)</label>
                                                </div>
                                                <div class="filterArticle__talle">
                                                    <input id="opcionM${id}" class="opcionFiltroTalle" type="radio" name="talle" value="M">
                                                    <label id="labM${id}" form="filtroM" class="labelFiltro" for="tipoBuzo">medium(43)</label>
                                                </div>
                                                <div class="filterArticle__talle">
                                                    <input id="opcionS${id}" class="opcionFiltroTalle" type="radio" name="talle" value="S">
                                                    <label id="labS${id}" form="filtroS" class="labelFiltro" for="tipoBuzo">small(42)</label>
                                                </div>
                                                <a id="botonA${id}" class="agregarCarrito btn-floating halfway-fab waves-effect waves-light"><i class="material-icons"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-cart" viewBox="0 0 16 16">
                                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                              </svg></i></a>
                                            </form>
                                        </article>
                                    </article>`;
        divGaleria__Mujeres.appendChild(divGaleria);

        const opL = document.getElementById(`opcionL${id}`);
        const opM = document.getElementById(`opcionM${id}`);
        const opS = document.getElementById(`opcionS${id}`);
        const laL = document.getElementById(`labL${id}`);
        const laM = document.getElementById(`labM${id}`);
        const laS = document.getElementById(`labS${id}`);

        revisarRadioButtons(talles, opL, opM, opS, laL, laM, laS);

        const btonAgregar = document.getElementById(`botonA${id}`);
        btonAgregar.addEventListener('click', () => {
    
            while((opL.checked != false)||(opM.checked != false)||(opS.checked != false)){
               
                let x = 5;
                opL.checked === true && (x = 0);
                opM.checked === true && (x = 1);
                opS.checked === true && (x = 2);
                opL.checked = false;
                opM.checked = false;
                opS.checked = false;
    
                ele.talles[x].objetoVendido();
                agregarAlCarro(ele, x);

                Toastify({ 
                    text: "Agregado al carrito!", 
                    duration: 1000, 
                    gravity: 'bottom', 
                    position: 'center', 
                    className: 'myToast',
                    style: { 
                        background: 'linear-gradient(to right, #f2f4f5, #cccecf)', 
                        color: 'green', 
                    }
                }).showToast();

            }

        })
    })
} 

mostrarGalMujeres(productosM);