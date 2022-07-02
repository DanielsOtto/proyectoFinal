//------------------//
///--- CARRITO --- ///
//------------------//

const sectionCarrito = document.getElementById("rowCarrito"); // para la galeria en Carrito
const divContenedor = document.getElementById("contieneCantidad"); // sera cierto ?
const cajaValor = document.getElementById("cajaValor");
const precioTotalC = document.getElementById("valorTotal");
let masID = 01;

const recuperarArreglo = ()=> {
    return JSON.parse( localStorage.getItem("carrito"));

}
 
const actualizarCarrito = (arreglo)=> { // no funca

    precioTotalC.contentText = arreglo.reduce((acc)=> acc + el.precioConImp , 0);  
    cajaValor.append(precioTotalC);
    console.log(precioTotalC);
}

const galeriaCarrito = ()=> {  // falta un clase para hacerlo andar -- no hace falta repetir ---- carrito 

    sectionCarrito.innerHTML = "";
    let objeto = recuperarArreglo();  
      
    console.log("llegue ?? ");

    objeto.forEach( obj => {
        
        for(let x=0; x < obj.talles.length; x++ ){  
            if(obj.talles[x].vendido === true){
                let articuloCarrito = document.createElement('article');
                articuloCarrito.className = "boxCarrito";
                articuloCarrito.innerHTML = `<div class="boxCarrito__columnA">
                                                <img src=${obj.img} alt=${obj.alt}>
                                            </div>
                                            <div class="boxCarrito__columnB" id="contieneCantidad">
                                                <p id="cantidadReducida">${obj.talles[x].cantidad}</p>
                                                <p>Talle solicitado: ${obj.talles[x].talle}</p>
                                            </div>                                                
                                            <div class="boxCarrito__columnC">
                                                <p class="subPrice">$${obj.precioXCantidad}</p>
                                            </div>
                                            <button id="btnLimpiar${obj.id}${masID}" class="fondoBoton btn-floating halfway-fab waves-effect waves-light" title="eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                                </svg>
                                            </button>`;
                sectionCarrito.appendChild(articuloCarrito);
 
        // <form>
        // <input type="number" class="form-control" value=${obj.cantidad}>  --- hasta no saber usarlo no lo pongo
        // </form>   

            let btnLimpiar = document.getElementById(`btnLimpiar${obj.id}${masID}`);
            btnLimpiar.addEventListener('click', ()=>{

            // debugger;
                if(obj.talles[x].cantidad === 1){   //-- lo hacia cuando cantidad era atributo del objeto Articulo
                    btnLimpiar.parentElement.remove();
                    carritoDeCompras.contextText = carritoDeCompras.filter( el => el.id !== articuloCarrito.id);
                    actualizarCarrito(carritoDeCompras);
                }else{
                    obj.talles[x].cantidad -= 1;  // como hago para mostrar el nuevo valor ?
                    const menor = document.getElementById("cantidadReducida");
                    menor.contentText = ``;
                    menor.contentText = `<p id="cantidadReducida">${obj.talles[x].cantidad-1}</p>`;
                    console.log(menor);
                    divContenedor.append(menor);
                    actualizarCarrito(carritoDeCompras);
                }
 
        
            // hay q modificar el total del carrito !
            })
            masID++; // -- si logro q los objetos no se repitan al entrar al carrito, no sirve mas esto

            }
        }
    })
}

galeriaCarrito();






// sectionCarrito.innerHTML = "";
    // let objeto = recuperarArreglo();  
      
    //     console.log("llegue ?? ");
    //     let x = recuperarPosicion();
        
    //     // let elemento = objeto.find(ele => Math.max(ele.talles[x].cantidad));

    //     console.log(objeto.length);
    //         // console.log("El objeto con mayor cantidad de elementos "+JSON.stringify(obj)+" "+obj.talles[posicion].cantidad);

    //     let articuloCarrito = document.createElement('article');
    //     articuloCarrito.className = "boxCarrito";
    //     articuloCarrito.innerHTML = `<div class="boxCarrito__columnA">
    //                                     <img src=${objeto.img} alt=${objeto.alt}>
    //                                 </div>
    //                                 <div class="boxCarrito__columnB">
    //                                     <p>${objeto.talles[x].cantidad}</p>
    //                                     <p>Talle solicitado: ${objeto.talles[x].talle}</p>
    //                                 </div>                                                
    //                                 <div class="boxCarrito__columnC">
    //                                     <p class="subPrice">$${objeto.precioConImp}</p>
    //                                 </div>
    //                                 <button id="btnLimpiar${objeto.id}${masID}" class="fondoBoton btn-floating halfway-fab waves-effect waves-light" title="eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
    //                                     <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
    //                                     </svg>
    //                                 </button>`;
    //     sectionCarrito.appendChild(articuloCarrito);
