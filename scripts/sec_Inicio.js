let carroVendido = [];  // --- no anda
const divPadre = document.getElementById("containCarousel");


const recuperarArr = ()=> {
    
    return JSON.parse(localStorage.getItem("ultimoCarrito"));
}

const ordenarPorMasVendido = ()=> {

    carroVendido.length >= 2 && (carroVendido.sort((a, b) => b.cantidad - a.cantidad));

    carroVendido.length > 3 && (carroVendido.length = 3);
}

const recObj = ()=> {

    carroVendido = recuperarArr();
    ordenarPorMasVendido();
}

const galeriaCarousel = ()=> {
    
    recObj();


    let divHijo = document.createElement("div");
        divHijo.className = "aside-carl";
        divHijo.innerHTML = `<div class="carousel-item active" data-bs-interval="10000">
                                <img src=${carroVendido[0].img} class="d-block w-100"
                                    alt=${carroVendido[0].alt}>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src=${carroVendido[1].img} class="d-block w-100"
                                    alt=${carroVendido[1].alt}>
                            </div>
                            <div class="carousel-item">
                                <img src=${carroVendido[2].img} class="d-block w-100"
                                    alt=${carroVendido[2].alt}>
                            </div> `;
    
    
        divPadre.append(divHijo);




}

galeriaCarousel();
