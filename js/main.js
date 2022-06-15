const productos = [];  // este arreglo va a tener los objetos en venta
let cantidad = 0;
let precioXCant = 0;
let seguirComprando = 'NO';

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
    hayStock() {
        this.stock = this.stock - cantidad;
    }
    precioFinal() {
        this.finalPrice = Math.round(this.precio * 1.21);
    }
    multiplePriceE() {
        precioXCant = this.finalPrice * cantidad;
    }
    fifteenOff() {
        this.newPrice = Math.round(precioXCant - (precioXCant * 0.10));
    }
    threeWithoutI() {
        this.newPrice = Math.round(precioXCant / 3);
    }
    twelveWithI() {
        this.newPrice = Math.round((precioXCant * 1.10) / 12);
    }
}

productos.push(new Articulo("REMERA", "CALIFORNIA REPUBLIC", "MANGA CORTA", 'L', "AZUL OSCURA", 10, 7400));
productos.push(new Articulo("REMERA", "FIVE BORO", "MANGA CORTA", 'M', "NEGRA", 8, 7300));
productos.push(new Articulo("REMERA", "FUTBOL", "MANGA CORTA", 'S', "BLANCA", 0, 6200));
productos.push(new Articulo("REMERA", "MOON", "MANGA CORTA", 'S', "AZUL OSCURO", 4, 8200));
productos.push(new Articulo("REMERA", "SKREEP", "MANGA LARGA", 'XL', "CREMA", 4, 7500));
productos.push(new Articulo("CAMPERA", "SKREEP", "MANGA LARGA", 'L', "AZUL", 12, 37000));
productos.push(new Articulo("REMERA", "SKREEP", "MANGA CORTA", 'M', "NEGRA", 6, 6350));
productos.push(new Articulo("ZAPATILLAS", "SKREEP", "RUNNING", 'M', "ROJAS", 4, 30000));
productos.push(new Articulo("REMERA", "CHESIRE", "MANGA LARGA", 'L', "GRIS", 7, 8000));
productos.push(new Articulo("REMERA", "DBZ", "MANGA CORTA", 'L', "NEGRA", 17, 6500));
productos.push(new Articulo("REMERA", "BASEBALL", "MANGA CORTA", 'M', "AZUL", 1, 6200));
productos.push(new Articulo("REMERA", "RUFFIAN", "MANGA CORTA", 'S', "CELESTE", 3, 5250));
productos.push(new Articulo("REMERA", "MOON", "MANGA CORTA", 'L', "NEGRA", 7, 5800));
productos.push(new Articulo("CAMPERA", "SKREEP", "MANGA LARGA", 'L', "ROJA", 17, 57000));
productos.push(new Articulo("ZAPATILLAS", "SKREEP", "RUNNING", 'M', "AZUL", 1, 28000));
productos.push(new Articulo("ZAPATILLAS", "SKREEP", "RUNNING", 'S', "GRIS", 3, 35000));



function arregloCargado(arreglo) { // con esta funcion corroboramos que el arreglo tenga elementos
    if (arreglo.length > 0) {
        return true;
    } else {
        return false;
    }
}

function suficienteStock(arreglo, cantidad) {
    return arreglo.filter((el) => el.stock >= cantidad);
}

function cuantosDesea(arreglo) {
    let arregloLocal = [];
    cantidad = 0; // como es una variable global hay q reiniciarla cada vez q entramos a la funcion
    while (cantidad === 0) {
        cantidad = Number(prompt("Cuantos desea comprar ?"));
    }
    arregloLocal = suficienteStock(arreglo, cantidad);
    // arregloLocal = (arreglo, cantidad) => {return arreglo.filter((el) => el.stock >= cantidad)};

    if (arregloCargado(arregloLocal)) { // esto revisa si stock es > 0  mal -- tengo que revisar si cantidad es > a stock
        arregloLocal.forEach((el) => el.hayStock(cantidad));
        arregloLocal.forEach((el) => el.multiplePriceE());
        arregloLocal.forEach((el) => alert("Usted ha elegido comprar " + cantidad + " de " + el.tipo + ", las cuáles tienen un costo final de " + precioXCant));
    } else {
        alert("No disponemos de tantas unidades.");
    }
}

function mostrarArticulo(arreglo) {
    if (arregloCargado(arreglo)) {
        for (const articulos of arreglo) {
            articulos.precioFinal();
            alert("Los articulos filtrados son: " + "\nProducto " + articulos.tipo + "\nColor " + articulos.color + "\nTalle " + articulos.talle + "\nCon un stock de: " + articulos.stock + "\nPrecio sin impuestos: "+articulos.precio+"\nPrecio con impuestos: "+articulos.finalPrice);
            cuantosDesea(arreglo);
        }
    } else {
        alert("No se han encontrado objetos que cumplan con sus condiciones");
    }
}

function comprobarStock(arreglo) {
    let otroArreglo = arreglo.filter((c) => c.stock > 0);
    return otroArreglo;
}

function revisarColores(arreglo) {
    let elegirColor = "";
    let muchosColores = ""; // va a concatenar los colores que se pueden elegir de los objetos elegidos
    let arregloColor = [];

    if (arregloCargado(arreglo)) {
        for (const color of arreglo) {
            muchosColores += color.color + "\n";
        }
    } else {
        alert("No disponemos de ese articulo");
    }
    while (elegirColor === "") {
        elegirColor = prompt("Cual de los siguientes colores desea ?? \n" + muchosColores).toUpperCase();
    }

    arregloColor = arreglo.filter((el) => el.color == elegirColor);
    return comprobarStock(arregloColor);
}

function busquedaPorTalle(arreglo) {
    let arregloRegresa = [];
    let talle = "";

    while (talle === "") {
        talle = prompt("Que talle buscaba ?\nL\nM\nS").toUpperCase();
    }

    let otraBusqueda = arreglo.filter((o) => o.talle.includes(talle)); // este arreglo lo utiliza para la busqueda de elementos a partir del talle
    if (arregloCargado(otraBusqueda)) {
        arregloRegresa = revisarColores(otraBusqueda);
        return arregloRegresa;
    } else {
        alert("Talle incorrecto");
    }
    return arregloRegresa;
}

function busquedaPorTipo() {
    let busqueda = "";
    let arregloFinal = [];
    let nuevoArreglo = [];

    while (busqueda === "") {
        busqueda = prompt("Que tipo de prenda buscabas ? \n REMERA\n CAMISA\n CAMPERA RUNNING").toUpperCase();
    }
    nuevoArreglo = productos.filter((el) => el.tipo.includes(busqueda));  // este arreglo lo voy a utilizar para la busqueda de elementos a partir del tipo

    if (arregloCargado(nuevoArreglo)) {
        nuevoArreglo.forEach((el) => alert("Artículos encontrados: " + el.tipo + "\nMarca: " + el.marca + "\nModelo: " + el.modelo + "\nTalle: " + el.talle + "\nColor: " + el.color + "\nStock: " + el.stock + "\nPrecio: " + el.precio));
        arregloFinal = busquedaPorTalle(nuevoArreglo);
        mostrarArticulo(arregloFinal);
    } else {
        alert("No disponemos de ese artículo");
    }
}

do {
    busquedaPorTipo();

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