class Articulo {
    constructor(tipo, marca, modelo, talle, color, stock, precio) {
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.talle = talle;
        this.color = color;
        this.stock = stock;
        this.precio = precio;
    }
    hayStock(cant) {
        this.stock = this.stock - cant;
    }
    precioFinal() {
        this.precio *= 1.21;
    }
}

const articulo1 = new Articulo("REMERA", "skreep", "manga corta", 'L', "negra", 10, 2500);
const articulo2 = new Articulo("CAMISA", "skreep", "manga carga", 'M', "blanca", 4, 2500);
const articulo3 = new Articulo("CAMPERA RUNNING", "skreep", "runner", 'S', "gris", 7, 8000);

let seguirComprando = 'NO';


function comprobarStock(stock) {
    if (stock > 0) {
        return true;
    } else {
        return false;
    } // revisa si hay stock suficiente para realizar la venta ANDA BIEN
}




function precioTotal(cant, article) { //calcula el total de la operacion al multiplicar el precio final del articulo con la cantidad de articulos a comprar.
    let precioTotal = 0;

    precioTotal = article.precioFinal * cant;
    return precioTotal;
}

function comprando(article) {
    let cantidad = Number(prompt("Cuantas " + article.tipo + " desea comprar ?"));
    let priceTotal = 0;
    console.log(cantidad);
    console.log(article.stock);
    if (cantidad < article.stock) { // revisa si la cantidad a comprar es mayor al stock del producto
        article.hayStock(cantidad); // esto si funciona, 
        priceTotal = precioTotal(cantidad, article); // NO FUNCA
        console.log("sirve precio final ?? " + precioTotal);
        console.log("sirve precio final funcion ? " + precioTotal(cantidad, article));
        return priceTotal;
    } else {
        alert("No disponemos de tantos items");
        return priceTotal;
    }
}

function realizarCompra() {
    let compra = prompt("Que tipo de prenda buscabas ? \nREMERA\nCAMISA\nCAMPERA RUNNING").toUpperCase();
    let answerPrice = 0;

    switch (compra) {
        case articulo1.tipo:
            if (comprobarStock(articulo1.stock)) {
                articulo1.precioFinal();
                alert("Disponemos de:"+"\nProducto: "+articulo1.tipo+"\nCantidad: "+articulo1.stock+"\nColor: "+articulo1.color+"\nTalle: "+articulo1.talle+"\nEl precio por unidad es de: "+articulo1.precio);
              
                // a partir de aca anda mal !! REVISAR !!
                answerPrice = Number(comprando(articulo1));
                    console.log("que muestra answerPrice ?" + answerPrice);
                if (answerPrice > 0) {
                    alert("El monto a pagar es de " + answerPrice);
                } else {
                    alert("No se puede realizar la venta, stock insuficiente");
                }

            } else {
                alert("No quedan mas " + articulo1.tipo + " en nuestro stock."); // ANDA BIEN
            }
            break;
        case articulo2.tipo:
            if (comprobarStock(articulo2.stock)) {
                articulo2.precioFinal();
                alert("Disponemos de:"+"\nProducto: "+articulo2.tipo+"\nCantidad: "+articulo2.stock+"\nColor: "+articulo2.color+"\nTalle: "+articulo2.talle+"\nEl precio por unidad es de: "+articulo2.precio);
                quiero = prompt("Desea comprar ? \nSI\nNO").toUpperCase();
                if (quiero === 'SI') {
                    answerPrice = comprando(articulo2);
                    if (answerPrice > 0) {
                        alert("El monto a pagar es de " + answerPrice);
                    } else {
                        alert("No se puede realizar la venta, stock insuficiente");
                    }
                } else {
                    alert("Usted decidio no comprar nada.");
                }
            } else {
                alert("No quedan mas " + articulo2.tipo);
            }
            break;
        case articulo3.tipo:
            if (comprobarStock(articulo3.stock)) {
                articulo3.precioFinal();
                alert("Disponemos de:"+"\nProducto: "+articulo3.tipo+"\nCantidad: "+articulo3.stock+"\nColor: "+articulo3.color+"\nTalle: "+articulo3.talle+"\nEl precio por unidad es de: "+articulo3.precio);
                quiero = prompt("Desea comprar ? \nSI\nNO").toUpperCase();
                if (quiero === 'SI') {
                    answerPrice = comprando(articulo3);
                    if (answerPrice > 0) {
                        alert("El monto a pagar es de " + answerPrice);
                    } else {
                        alert("No se puede realizar la venta, stock insuficiente");
                    }
                } else {
                    alert("Usted decidio no comprar nada.");
                }
            } else {
                alert("No quedan mas " + articulo3.tipo);
            }
            break;
        default:
            alert("Objeto no encontrado.")
            break;
    }
}

do {

    realizarCompra();

    seguirComprando = prompt("Desea seguir comprando ?? \nSI \nNO").toUpperCase();
} while (seguirComprando === 'SI');
