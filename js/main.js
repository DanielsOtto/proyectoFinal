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
const productos = [];  // este arreglo va a tener los objetos en venta
let muchosColores = " "; // este arreglo va a concatenar los colores que se pueden elegir de los objetos elegidos



productos.push(new Articulo("REMERA", "SKREEP", "MANGA LARGA", 'L', "NEGRA", 10, 4000));
productos.push(new Articulo("REMERA", "SKREEP", "MANGA CORTA", 'M', "ROJA", 8, 4000));
productos.push(new Articulo("REMERA", "SKREEP", "MANGA LARGA", 'S', "AZUL", 0, 4000));
productos.push(new Articulo("REMERA", "SKREEP", "MANGA CORTA", 'S', "BLANCA", 4, 4000));
productos.push(new Articulo("CAMISA", "SKREEP", "MANGA LARGA", 'L', "GRIS", 4, 9000));
productos.push(new Articulo("CAMISA", "SKREEP", "MANGA CORTA", 'L', "AZUL", 2, 9000));
productos.push(new Articulo("CAMISA", "SKREEP", "MANGA CORTA", 'M', "ROJA", 6, 9000));
productos.push(new Articulo("CAMISA", "SKREEP", "MANGA LARGA", 'M', "BLANCA", 4, 9000));
productos.push(new Articulo("CAMPERA RUNNING", "SKREEP", "RUNNER", 'L', "NEGRA", 7, 18000));
productos.push(new Articulo("CAMPERA RUNNING", "SKREEP", "RUNNER", 'L', "ROJA", 17, 18000));
productos.push(new Articulo("CAMPERA RUNNING", "SKREEP", "RUNNER", 'M', "AZUL", 1, 18000));
productos.push(new Articulo("CAMPERA RUNNING", "SKREEP", "RUNNER", 'S', "GRIS", 3, 18000));

// HAY QUE CAMBIAR TODO XQ AHORA HAY Q TRABAJAR SOBRE ARREGLO, NO SOBRE OBJETOS




function comprobarStock(arreglo) { 
    if (arreglo.stock > 0) {
        return true;
        alert("LLEGUE !");
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

function busquedaPorTalle(arreglo){
    let talle = prompt("Que talle buscaba ?\nL\nM\nS").toUpperCase();
    const otraBusqueda = arreglo.filter((o) => o.talle.includes(talle)); // este arreglo lo utiliza para la busqueda de elementos a partir del talle
    revisarColores(otraBusqueda);
}

function revisarColores(arreglo){
    let elegirColor = " ";

    if(arreglo.length > 0){
        // lessCode(arreglo);
        if(arreglo.length > 1){
            for(const color of arreglo){
                muchosColores += "\n" + color.color;
            }
            let elegirColor = prompt("Cual de los siguientes colores desea ?? \n"+muchosColores).toUpperCase;
        }else if(arreglo.length == 1){
            let elegirColor = prompt("Solo disponemos del color: \n"+arreglo.color).toUpperCase;
        }else{
            alert("ERROR");
        }
    }else{
        alert("No disponemos de ese articulo");
    }

    const resultado = arreglo.find((el) => el.color === elegirColor);
    // comprobarStock(resultado);  ESTOY ACA
}


function realizarPedido() {
    
    let busqueda = prompt("Que tipo de prenda buscabas ? \n REMERA\n CAMISA\n CAMPERA RUNNING").toUpperCase(); 

    const nuevoArreglo = productos.filter((el) => el.tipo.includes(busqueda));  // este arreglo lo voy a utilizar para la busqueda de elementos a partir del tipo

    if(nuevoArreglo.length > 0){
        nuevoArreglo.forEach((el)=> alert("Artículos encontrados: "+el.tipo+"\nMarca: "+el.marca+"\nModelo: "+el.modelo+"\nTalle: "+el.talle+"\nColor: "+el.color+"\nStock: "+el.stock+"\nPrecio: "+el.precio));
        busquedaPorTalle(nuevoArreglo);
    }else{
        alert("No disponemos de ese artículo");
    }

    // let pregunta = prompt("Desea realizar por tipo de producto o por talle ??\n1) Remera - Camisa - Campera Running\n2) L - M - S").toUpperCase();

    // switch(pregunta){
    //     case '1':
    //     case 'REMERA':
    //     case 'CAMISA':
    //     case 'CAMPERA RUNNING':
    //         busquedaPorTipo();
    //         break;
    //     case '2':
    //     case 'L':
    //     case 'M':
    //     case 'S':
    //         busquedaPorTalle();
    //         break;
    //     default:
    //         alert("Opción no válida");
    //         break;
    // }
}

do {
    let seguirComprando = 'NO';

    realizarPedido(); 
    seguirComprando = prompt("Desea seguir comprando ?? \n1- SI \n2- NO").toUpperCase();
} while (seguirComprando === 'SI' || seguirComprando == '1');