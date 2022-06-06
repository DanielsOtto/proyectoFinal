class Articulo {
    constructor(tipo, marca, modelo, talle, color, stock, precio) {
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.talle = talle;
        this.color = color;
        this.stock = stock;
        this.precio = precio;
        this.finalPrice = precio;
        this.newPrice = precio;
    }
    hayStock(cant) {
        this.stock = this.stock - cant;
    }
    precioFinal() {
        this.finalPrice = this.precio * 1.21;
    }
    fifteenOff() {
        this.newPrice = this.finalPrice - (this.finalPrice * 0.10);
    }
    threeWithoutI() {
        this.newPrice = this.finalPrice / 3;
    }
    twelveWithI() {
        this.newPrice = (this.finalPrice * 1.10) / 12;
    }
}

const articulo1 = new Articulo("REMERA", "skreep", "manga corta", 'L', "negra", 10, 2500);
const articulo2 = new Articulo("CAMISA", "skreep", "manga carga", 'M', "blanca", 4, 2500);
const articulo3 = new Articulo("CAMPERA RUNNING", "skreep", "runner", 'S', "gris", 7, 8000);

let seguirComprando = 'NO';


function comprobarStock(stock) { // funcion 2 
    if (stock > 0) {
        return true;
    } else {
        return false;
    } // revisa si hay stock suficiente para realizar la venta ANDA BIEN
}

function mostrarArticulo(article) { // funcion 3
    article.precioFinal();
    alert("Disponemos de:" + "\nProducto: " + article.tipo + "\nCantidad: " + article.stock + "\nColor: " + article.color + "\nTalle: " + article.talle + "\nEl precio por unidad es de: " + article.precio + ", y con los impuestos queda en: " + article.finalPrice);
}

function precioTotal(cant, article) { // Funcion 4 - A
    //calcula el total de la operacion al multiplicar el precio final del articulo con la cantidad de articulos a comprar.
    let precioTotal = 0;

    precioTotal = article.finalPrice * cant;
    return precioTotal;
}

function comprando(article) { // funcion 4
    let cantidad = Number(prompt("Cuantas " + article.tipo + " desea comprar ?"));
    let priceTotal = 0;

    console.log(cantidad);
    console.log(article.stock);
    if (cantidad <= article.stock) { // revisa si la cantidad a comprar es mayor al stock del producto
        article.hayStock(cantidad);
        priceTotal = precioTotal(cantidad, article); // funcion 4 A
        console.log("sirve precio final ?? " + precioTotal);
        console.log("sirve precio final funcion ? " + precioTotal(cantidad, article));
        return priceTotal;
    } else {
        alert("No disponemos de tantos items");
        return priceTotal;
    }
}

// function opcionesDePago(article) {
//     let paymentOption = '';
//     let quotaOption = 0;

//     paymentOption = prompt("Con que desea abonar: \n1) Efectivo o Débito (Obtendrás un 10% de descuento)\n2) Visa (Podrás elegir entre 3 cuotas sin interes ó 12 cuotas con interés(10%))\n3) Cancelar".toUpperCase();

//     switch(paymentOption) {
//         case '1':
//         case 'EFECTIVO':
//         case 'DEBITO':
//             article.fifteenOff();
//             alert("Has elegido efectivo/débito, el importe a pagar era de: " + article.finalPrice + " y ahora es de: " + article.newPrice + "\n Gracias por su compra !!");
//             break;
//         case '2':
//         case 'Visa':
//             quotaOption = prompt("Has elegido Visa. Cuantas cuotas deseas? (Ingrese 1, 2, 3) \n\t1- 3 cuotas s/i \n\t2- 12 cuotas c/i (+10%) \n\t3- Salir");
//             if (quotaOption === 1) {
//                 article.threeWithoutI();
//                 alert("Has elegido 3 cuotas sin interés.\nDeberás pagar 3 cuotas de: " + article.newPrice);
//             } else if (quotaOption === 2) {
//                 article.twelveWithI();
//                 alert("Has elegido 12 cuotas con interés.\nDeberás pagar 12 cuotas de: " + article.newPrice);
//             } else if (quotaOption === 3) {
//                 alert("Has ingresado la opción 3. Operación cancelada");
//             } else {
//                 alert("Opción Incorrecta. Operación cancelada");
//             }
//             break;
//         case '3':
//         case 'CANCELAR':
//             alert("Has ingresado Cancelar. La operación se cancela.")
//             break;
//         default:
//             alert("El dato ingresado es incorrecto. Operación cancelada.");
//             break;
//     }
// }

function realizarPedido() {// funcion 1
    let compra = prompt("Que tipo de prenda buscabas ? \n1) REMERA\n2) CAMISA\n3) CAMPERA RUNNING").toUpperCase();
    let answerPrice = 0;
    let quiero = "";

    switch (compra) {
        case '1':
        case articulo1.tipo:
            if (comprobarStock(articulo1.stock)) { // comprobarStock 2
                mostrarArticulo(articulo1); // mostrarArticulo 3

                    // quieroComprar(); --- 

                quiero = prompt("Desea comprar ? \n1- SI\n2- NO").toUpperCase();
                if ((quiero === 'SI') || (quiero == '1')) {
                    answerPrice = Number(comprando(articulo1)); // comprando 4  → 3 A
                    console.log("que muestra answerPrice ?" + answerPrice);
                    if (answerPrice > 0) {
                        alert("El monto a pagar es de " + answerPrice);
                    } else {
                        alert("No se puede realizar la venta, stock insuficiente");
                    }
                } else {
                    alert("Usted decidio no comprar nada.");
                }
            } else {
                alert("No quedan mas " + articulo1.tipo + " en nuestro stock."); // ANDA BIEN
            }
            break;
        case '2':
        case articulo2.tipo:
            if (comprobarStock(articulo2.stock)) {
                mostrarArticulo(articulo2);
                quiero = prompt("Desea comprar ? \n1- SI\n2- NO").toUpperCase();
                if ((quiero === 'SI') || (quiero == '1')) {
                    answerPrice = Number(comprando(articulo2));
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
        case '3':
        case articulo3.tipo:
            if (comprobarStock(articulo3.stock)) {
                mostrarArticulo(articulo3);
                quiero = prompt("Desea comprar ? \n1- SI\n2- NO").toUpperCase();
                if ((quiero === 'SI') || (quiero == '1')) {
                    answerPrice = Number(comprando(articulo3));
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
    realizarPedido(); // funcion 1

    seguirComprando = prompt("Desea seguir comprando ?? \n1- SI \n2- NO").toUpperCase();
} while (seguirComprando === 'SI' || seguirComprando == '1');
