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
    multiplePriceE() {
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
const productos = [];  // este arreglo va a tener los objetos en venta
let seguirComprando = 'NO';

productos.push(new Articulo("REMERA", "SKREEP", "MANGA LARGA", 'L', "NEGRA", 10, 4000));
productos.push(new Articulo("REMERA", "SKREEP", "MANGA CORTA", 'M', "ROJA", 8, 4000));
productos.push(new Articulo("REMERA", "SKREEP", "MANGA LARGA", 'S', "AZUL", 0, 4000));
productos.push(new Articulo("REMERA", "SKREEP", "MANGA CORTA", 'S', "BLANCO", 4, 4000));
productos.push(new Articulo("CAMISA", "SKREEP", "MANGA LARGA", 'L', "GRIS", 4, 9000));
productos.push(new Articulo("CAMISA", "SKREEP", "MANGA CORTA", 'L', "AZUL", 2, 9000));
productos.push(new Articulo("CAMISA", "SKREEP", "MANGA CORTA", 'M', "ROJA", 6, 9000));
productos.push(new Articulo("CAMISA", "SKREEP", "MANGA LARGA", 'M', "BLANCO", 4, 9000));
productos.push(new Articulo("CAMPERA RUNNING", "SKREEP", "RUNNER", 'L', "NEGRA", 7, 18000));
productos.push(new Articulo("CAMPERA RUNNING", "SKREEP", "RUNNER", 'L', "ROJA", 17, 18000));
productos.push(new Articulo("CAMPERA RUNNING", "SKREEP", "RUNNER", 'M', "AZUL", 1, 18000));
productos.push(new Articulo("CAMPERA RUNNING", "SKREEP", "RUNNER", 'S', "GRIS", 3, 18000));

// HAY QUE CAMBIAR TODO XQ AHORA HAY Q TRABAJAR SOBRE ARREGLO, NO SOBRE OBJETOS








// function comprando(article) {
//     article.cantidad = Number(prompt("Cuantas " + article.tipo + " desea comprar ?"));

//     if (article.cantidad <= article.stock) { // revisa si la cantidad a comprar es menor al stock del producto
//         article.multiplePriceE();
//         return true;
//     } else {
//         alert("No disponemos de tantos items");
//         return false;
//     }
// }

// function quieroComprar(article) {
//     let quiero = "";
//     quiero = prompt("Desea comprar ? \n1- SI\n2- NO").toUpperCase();
//     if ((quiero === 'SI') || (quiero == '1')) {  // averigua si el usuario desea comprar el producto
//         if (comprando(article)) {
//             alert("El monto a pagar es de " + article.multiplePrice);
//             opcionesDePago(article);
//         } else {
//             alert("No se puede realizar la venta, stock insuficiente");
//         }
//     } else {
//         alert("Usted decidio no comprar nada.");
//     }
// }
//--------

function mostrarArticulo(arreglo) {

    if(arreglo.length > 0){
        for (const articulos of arreglo) {
            articulos.precioFinal();
            alert("Los articulos filtrados son: " + "\nProdcuto " + articulos.tipo + "\nColor " + articulos.color + "\nTalle " + articulos.talle + "\nPrecio sin impuestos " + articulos.precio + "\n, con impuestos " + articulos.finalPrice);
        } // ANDA
    }else {
        alert("No se han encontrado objetos que cumplan con sus condiciones");
    }
}

function comprobarStock(arreglo) {
    let otroArreglo = arreglo.filter((c) =>c.stock > 0);
    return otroArreglo; // ahora si ANDA esto  -- hay que comparar arreglo.length a 0 para corrobar q el arreglo esta cargado
}

function revisarColores(arreglo) {
    let elegirColor = "";
    let muchosColores = ""; // va a concatenar los colores que se pueden elegir de los objetos elegidos
    let arregloColor = [];

    if (arreglo.length > 1) {
        for (const color of arreglo) {
            muchosColores += color.color + "\n";
        }
    } else {
        alert("No disponemos de ese articulo");
    }
    elegirColor = prompt("Cual de los siguientes colores desea ?? \n" + muchosColores).toUpperCase();

    arregloColor = arreglo.filter((el) => el.color == elegirColor);
    return comprobarStock(arregloColor);
}

function busquedaPorTalle(arreglo) {
    let arregloRegresa = [];
    let talle = prompt("Que talle buscaba ?\nL\nM\nS").toUpperCase();
    let otraBusqueda = arreglo.filter((o) => o.talle.includes(talle)); // este arreglo lo utiliza para la busqueda de elementos a partir del talle

    arregloRegresa = revisarColores(otraBusqueda);
    if (arregloRegresa.length === 0) {
        alert("function busquedaPorTalle ERROR");
    }
    return arregloRegresa;
}

function realizarPedido() {
    let busqueda = prompt("Que tipo de prenda buscabas ? \n REMERA\n CAMISA\n CAMPERA RUNNING").toUpperCase();

    let nuevoArreglo = productos.filter((el) => el.tipo.includes(busqueda));  // este arreglo lo voy a utilizar para la busqueda de elementos a partir del tipo

    if (nuevoArreglo.length > 0) {
        nuevoArreglo.forEach((el) => alert("Artículos encontrados: " + el.tipo + "\nMarca: " + el.marca + "\nModelo: " + el.modelo + "\nTalle: " + el.talle + "\nColor: " + el.color + "\nStock: " + el.stock + "\nPrecio: " + el.precio));
        let arregloFinal = busquedaPorTalle(nuevoArreglo);
        mostrarArticulo(arregloFinal); // ANDA
    } else {
        alert("No disponemos de ese artículo");
    }
}

do {
    realizarPedido();
    seguirComprando = prompt("Desea seguir comprando ?? \n1- SI \n2- NO").toUpperCase();
} while (seguirComprando === 'SI' || seguirComprando == '1');







// function opcionesDePago(article) {
//     let quotaOption = 0;
//     let paymentOption= prompt("Con que desea abonar: \n1) Efectivo (Obtendrás un 10% de descuento)\n2) Crédito (Podrás elegir entre 3 cuotas sin interes ó 12 cuotas con interés(10%))\n3) Cancelar".toUpperCase());

//     switch(paymentOption){ // hay 2 opciones de pago efectivo o Credito
//         case '1':
//         case 'EFECTIVO':
//             article.fifteenOff();
//             alert("Has elegido efectivo/débito, el importe a pagar era de: " + article.multiplePrice + " y ahora es de: " + article.newPrice + "\n Gracias por su compra !!");
//             article.hayStock(article);
//             break;
//         case '2':
//         case 'CREDITO':
//         case 'CRÉDITO':
//             quotaOption = Number(prompt("Has elegido Crédito. Cuantas cuotas deseas? (Ingrese 1, 2, 3) \n\t1- 3 cuotas s/i \n\t2- 12 cuotas c/i (+10%) \n\t3- Salir"));
//             if (quotaOption === 1) {
//                 article.threeWithoutI();
//                 alert("Has elegido 3 cuotas sin interés.\nDeberás pagar 3 cuotas de: " + article.newPrice);
//                 article.hayStock(article);
//             } else if (quotaOption === 2) {
//                 article.twelveWithI();
//                 alert("Has elegido 12 cuotas con interés.\nDeberás pagar 12 cuotas de: " + article.newPrice);
//                 article.hayStock(article);
//             } else if (quotaOption === 3) {
//                 alert("Has ingresado la opción 3. Operación cancelada");
//             } else {
//                 alert("Opción Incorrecta. Operación cancelada");
//             }
//             break;
//         case '3':
//         case 'CANCELAR':
//             alert("Has ingresado Cancelar. La operación se cancela.");
//             break;
//         default:
//             alert("El dato ingresado es incorrecto. Operación cancelada.");
//             break;
//     }
// }

// function lessCode(arreglo){
//     if (comprobarStock(article)) { // reduce codigo
//         mostrarArticulo(article);
//         quieroComprar(article);
//     } else {
//         alert("No quedan mas " + article.tipo + " en nuestro stock.");
//     }
// }