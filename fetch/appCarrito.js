const recuperarArreglo = () => {
    return JSON.parse(localStorage.getItem("carritoEllos"));
}

const recuperarObjeto = (arreglo) => {

    arreglo.forEach(obj => {

        let el = new Articulo(obj.id, obj.tipo, obj.marca, obj.modelo, obj.talles, obj.precio, obj.descripcion, obj.alt, obj.img);
        el.precioFinal();

        carroDeCompras.push(el);
    })
}

const precioTotalCompra = (arreglo) => {

    valor = arreglo.reduce((acc, el) => acc + el.precioPorCantidad, 0);

    precioTotalC.innerText = valor;

    cajaValor.prepend(precioTotalC);
}


const galeriaCarrito = () => {

    sectionCarrito.innerHTML = "";

    recuperarObjeto(recuperarArreglo());

    carroDeCompras.forEach(obj => {
        for (let x = 0; x < obj.talles.length; x++) {
            if (obj.talles[x].vendido === true) {

                obj.cantidadTotal(obj.talles[x].cantidad)
                obj.precioXCant();
                const { id, talles: tl, alt: infoAlt, img: imagen, precioConImp: precioConIva } = obj;

                let articuloCarrito = document.createElement('article');
                articuloCarrito.className = "boxCarrito";
                articuloCarrito.innerHTML = `<div class="boxCarrito__columnA">
                                                <img src=${imagen} alt=${infoAlt}>
                                            </div>
                                            <div class="boxCarrito__columnB" id="contieneCantidad">
                                                <p class="desC">Cantidad: ${tl[x].cantidad}</p>
                                                <p class="desC" >Talle: ${tl[x].talle}</p>
                                            </div>                                                
                                            <div class="boxCarrito__columnC">
                                                <p class="desC" >Precio unidad: </p>
                                                <p class="subPrice"> $${precioConIva} </p>
                                            </div>
                                            <button id="btnLimpiar${id}${tl[x].talle}" class="btnElimina fondoBoton btn-floating halfway-fab waves-effect waves-light" title="eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                                </svg>
                                            </button>`;
         
                sectionCarrito.appendChild(articuloCarrito);

                let btnLimpiar = document.getElementById(`btnLimpiar${id}${tl[x].talle}`);
                precioTotalCompra(carroDeCompras);


                btnLimpiar.addEventListener('click', () => {

                    btnLimpiar.parentElement.remove();

                    if ((carroDeCompras.find((el) => el.id == obj.id))) {

                        let cont = 0;
                        let elemento = carroDeCompras.find((el) => el.id == obj.id);
                        for (let i = 0; i < elemento.talles.length; i++) {


                            if ((i !== x) && (elemento.talles[i].vendido)) {

                                elemento.cantidadReducida(elemento.talles[x].cantidad);
                                elemento.precioXCant();
                            } else {
                                cont++;
                            }

                            if (cont === 3) {
                                carroDeCompras = carroDeCompras.filter(el => el.id !== obj.id);
                            }
                        }

                        precioTotalCompra(carroDeCompras);
                    }

                    Toastify({
                        text: "Objeto eliminado!",
                        duration: 1000,
                        gravity: 'bottom',
                        position: 'center',
                        className: 'myToast',
                        style: {
                            background: 'linear-gradient(to bottom, #f2f4f5, #cccecf)',
                            color: 'red',
                        }
                    }).showToast();
                })
            }
        }
    })
}


btnComprar.addEventListener('click', () => {

    localStorage.setItem("ultimoCarrito", JSON.stringify(carroDeCompras));
   
    if(carroDeCompras.length >= 1){
        
        swal({
            title: "Compra realizada",
            icon: "success",
            text: `El valor de su compra es de $${valor}`,
            classList: 'myToast',
            buttons: ['Cancelar', 'Continuar']
        })
    }else {

        swal({
            icon: 'error',
            title: 'Oops...',
            text: 'El carrito se encuentra vacio.'
          })
    }

})

galeriaCarrito();