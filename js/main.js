// hacer 2 variables globales ?? una de cantidad de objetos vendidos, y otra de precioMultiple ??
// no mezclar ingles con español -- se enoja juan 

class Articulo {
    constructor(tipo, marca, modelo, talle, color, stock, precio) {
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.talle = talle;
        this.color = color;
        this.cantidad = stock; 
        this.stock = stock;
        this.precio = precio;
        this.finalPrice = precio;
        this.multiplePrice = precio; 
        this.newPrice = precio;
    }
    hayStock() {
        this.stock = this.stock - this.cantidad;
    }
    precioFinal() {
        this.finalPrice = Math.round(this.precio * 1.21);
    }
    multiplePriceE(){
        this.multiplePrice = this.finalPrice * this.cantidad;
    }
    fifteenOff() {
        this.newPrice = Math.round(this.multiplePrice - (this.multiplePrice * 0.10));
    }
    threeWithoutI() {
        this.newPrice = Math.round(this.multiplePrice / 3);
    }
    twelveWithI() {
        this.newPrice = Math.round((this.multiplePrice * 1.10) / 12);
    }
}
const productos = [];

// const articuloR1 = new Articulo("REMERA", "skreep", "manga corta", 'L', "negra", 10, 4000);
// const articuloR2 = new Articulo("REMERA", "skreep", "manga corta", 'L', "negra", 10, 4000);
// const articuloR3 = new Articulo("REMERA", "skreep", "manga corta", 'L', "negra", 10, 4000);
// const articuloR4 = new Articulo("REMERA", "skreep", "manga corta", 'L', "negra", 10, 4000);
// const articuloC1 = new Articulo("CAMISA", "skreep", "manga carga", 'M', "blanca", 4, 9000);
// const articuloC2 = new Articulo("CAMISA", "skreep", "manga carga", 'M', "blanca", 4, 9000);
// const articuloC3 = new Articulo("CAMISA", "skreep", "manga carga", 'M', "blanca", 4, 9000);
// const articuloC4 = new Articulo("CAMISA", "skreep", "manga carga", 'M', "blanca", 4, 9000);
// const articuloCR1 = new Articulo("CAMPERA RUNNING", "skreep", "runner", 'S', "gris", 7, 18000);
// const articuloCR2 = new Articulo("CAMPERA RUNNING", "skreep", "runner", 'S', "gris", 7, 18000);
// const articuloCR3 = new Articulo("CAMPERA RUNNING", "skreep", "runner", 'S', "gris", 7, 18000);
// const articuloCR4 = new Articulo("CAMPERA RUNNING", "skreep", "runner", 'S', "gris", 7, 18000);

// productos.push(articuloR1);
// productos.push(articuloR2);
// productos.push(articuloR3);
// productos.push(articuloR4);
// productos.push(articuloC1);
// productos.push(articuloC2);
// productos.push(articuloC3);
// productos.push(articuloC4);
// productos.push(articuloCR1);
// productos.push(articuloCR2);
// productos.push(articuloCR3);
// productos.push(articuloCR4);

productos.push(new Articulo("REMERA", "SKREEP", "MANGA CORTA", 'L', "NEGRA", 10, 4000));
productos.push(new Articulo("REMERA", "SKREEP", "MANGA CORTA", 'M', "ROJA", 10, 4000));
productos.push(new Articulo("REMERA", "SKREEP", "MANGA CORTA", 'S', "BLANCA", 10, 4000));
productos.push(new Articulo("REMERA", "SKREEP", "MANGA CORTA", 'S', "BLANCA", 10, 4000));
productos.push(new Articulo("CAMISA", "SKREEP", "MANGA LARGA", 'L', "GRIS", 4, 9000));
productos.push(new Articulo("CAMISA", "SKREEP", "MANGA LARGA", 'L', "GRIS", 4, 9000));
productos.push(new Articulo("CAMISA", "SKREEP", "MANGA LARGA", 'M', "ROJA", 4, 9000));
productos.push(new Articulo("CAMISA", "SKREEP", "MANGA LARGA", 'M', "BLANCA", 4, 9000));
productos.push(new Articulo("CAMPERA RUNNING", "SKREEP", "RUNNER", 'L', "NEGRA", 7, 18000));
productos.push(new Articulo("CAMPERA RUNNING", "SKREEP", "RUNNER", 'L', "ROJA", 7, 18000));
productos.push(new Articulo("CAMPERA RUNNING", "SKREEP", "RUNNER", 'M', "AZUL", 7, 18000));
productos.push(new Articulo("CAMPERA RUNNING", "SKREEP", "RUNNER", 'S', "GRIS", 7, 18000));

let seguirComprando = 'NO';


// HAY QUE CAMBIAR TODO XQ AHORA HAY Q TRABAJAR SOBRE ARREGLO, NO SOBRE OBJETOS




function comprobarStock(article) { 
    if (article.stock > 0) {
        return true;
    } else {
        return false;
    } // revisa si hay stock suficiente para realizar la venta
}

function mostrarArticulo(article) { 
    article.precioFinal();
    alert("Disponemos de:" + "\nProducto: " + article.tipo + "\nCantidad: " + article.stock + "\nColor: " + article.color + "\nTalle: " + article.talle + "\nEl precio por unidad es de: " + article.precio + ", y con los impuestos queda en: " + article.finalPrice);
    // calcula el precio del producto con impuestos y muestra los detalles del producto
}

function comprando(article) {  
    article.cantidad = Number(prompt("Cuantas " + article.tipo + " desea comprar ?"));

    if (article.cantidad <= article.stock) { // revisa si la cantidad a comprar es menor al stock del producto
        article.multiplePriceE();
        return true;
    } else {
        alert("No disponemos de tantos items");
        return false;
    }
}

function quieroComprar(article){ 
    let quiero = "";
    quiero = prompt("Desea comprar ? \n1- SI\n2- NO").toUpperCase(); 
    if ((quiero === 'SI') || (quiero == '1')) {  // averigua si el usuario desea comprar el producto
        if (comprando(article)) {
            alert("El monto a pagar es de " + article.multiplePrice);
            opcionesDePago(article);
        } else {
            alert("No se puede realizar la venta, stock insuficiente");
        }
    } else {
        alert("Usted decidio no comprar nada.");
    }
}

function lessCode(article){
    if (comprobarStock(article)) { // reduce codigo
        mostrarArticulo(article); 
        quieroComprar(article); 
    } else {
        alert("No quedan mas " + article.tipo + " en nuestro stock."); 
    }
}

function opcionesDePago(article) {
    let quotaOption = 0;
    let paymentOption= prompt("Con que desea abonar: \n1) Efectivo (Obtendrás un 10% de descuento)\n2) Crédito (Podrás elegir entre 3 cuotas sin interes ó 12 cuotas con interés(10%))\n3) Cancelar".toUpperCase());

    switch(paymentOption){ // hay 2 opciones de pago efectivo o Credito
        case '1':
        case 'EFECTIVO':
            article.fifteenOff();
            alert("Has elegido efectivo/débito, el importe a pagar era de: " + article.multiplePrice + " y ahora es de: " + article.newPrice + "\n Gracias por su compra !!");
            article.hayStock(article);
            break;
        case '2':
        case 'CREDITO':
        case 'CRÉDITO':
            quotaOption = Number(prompt("Has elegido Crédito. Cuantas cuotas deseas? (Ingrese 1, 2, 3) \n\t1- 3 cuotas s/i \n\t2- 12 cuotas c/i (+10%) \n\t3- Salir"));
            if (quotaOption === 1) {
                article.threeWithoutI();
                alert("Has elegido 3 cuotas sin interés.\nDeberás pagar 3 cuotas de: " + article.newPrice);
                article.hayStock(article);
            } else if (quotaOption === 2) {
                article.twelveWithI();
                alert("Has elegido 12 cuotas con interés.\nDeberás pagar 12 cuotas de: " + article.newPrice);
                article.hayStock(article);
            } else if (quotaOption === 3) {
                alert("Has ingresado la opción 3. Operación cancelada");
            } else {
                alert("Opción Incorrecta. Operación cancelada");
            }
            break;
        case '3':
        case 'CANCELAR':
            alert("Has ingresado Cancelar. La operación se cancela.");
            break;
        default:
            alert("El dato ingresado es incorrecto. Operación cancelada.");
            break;
    }
}

function realizarPedido() {
    let compra = prompt("Que tipo de prenda buscabas ? \n1) REMERA\n2) CAMISA\n3) CAMPERA RUNNING").toUpperCase();

    const resultado = productos.filter((el) => el.tipo.includes(compra));

    if(resultado.length > 0){
        resultado.forEach((el)=> alert("Artículos encontrados: "+el.tipo+"\nMarca: "+el.marca+"\nModelo: "+el.modelo+"\nTalle: "+el.talle+"\nColor: "+el.color+"\nStock: "+el.stock+"\nPrecio: "+el.precio));
    }else{
        console.log("No disponemos de ese artículo");
    }
    
    // switch (compra) {
    //     case '1':
    //     case articulo1.tipo:
    //         lessCode(articulo1);
    //         break;
    //     case '2':
    //     case articulo2.tipo:
    //         lessCode(articulo2);
    //         break;
    //     case '3':
    //     case articulo3.tipo:
    //         lessCode(articulo3);
    //         break;
    //     default:
    //         alert("Objeto no encontrado.")
    //         break;
    // }


}

do {
    realizarPedido(); 
    seguirComprando = prompt("Desea seguir comprando ?? \n1- SI \n2- NO").toUpperCase();
} while (seguirComprando === 'SI' || seguirComprando == '1');