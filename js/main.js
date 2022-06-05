class Articulo{
    constructor(tipo, marca, modelo, talle, color, stock, precio){
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.talle = talle;
        this.color = color;
        this.stock = stock;
        this.precio = precio;
    }
    hayStock(cant){
        this.stock = this.stock - cant;
    }
    precioFinal(){
        this.precio *= 1.21;
    }
}

const articulo1 = new Articulo("REMERA","skreep","manga corta",'L',"negra",10,2500);
const articulo2 = new Articulo("CAMISA","skreep","manga carga",'M',"blanca",4,2500);
const articulo3 = new Articulo("CAMPERA RUNNING","skreep","runner",'S',"gris",7,8000);

let seguirComprando = 'NO';

function comprobarStock(stock){
    if (stock > 0){
        return true;
    }else{
        return false;
    }
}
function precioTotal(cant, article){
    let precioTotal = 0;

    precioTotal = article.precioFinal * cant;
    return precioTotal;
}

function comprando(article){
    let cantidad = Number(prompt("Cuantas "+article.tipo+" desea comprar ?"));
    let priceTotal = 0;
    if(cantidad < article.stock){
        article.hayStock(cantidad);
        priceTotal = precioTotal(cant, article);
        return priceTotal;
    }else{
        alert("No disponemos de tantos items");
        return priceTotal;
    }
}

function realizarCompra(){
    let compra = prompt("Que tipo de prenda buscabas ? \nREMERA\nCAMISA\nCAMPERA RUNNING").toUpperCase();
    let quiero = 'NO';
    let answerPrice = 0;
    let price = 0;

    switch(compra){
        case articulo1.tipo:  
            if(comprobarStock(articulo1.stock)){
                price = articulo1.precioFinal();
                alert("Disponemos de "+articulo1.stock+" "+articulo1.tipo+" "+articulo1.color+" "+articulo1.talle+". El precio por unidad es de: "+price);
                quiero = prompt("Desea comprar ? \nSI\nNO").toUpperCase();
                if (quiero === 'SI'){
                    answerPrice = comprando(articulo1);
                    if(answerPrice > 0){
                        alert("El monto a pagar es de "+answerPrice);
                    }else{
                        alert("No se puede realizar la venta, stock insuficiente");
                    }
                }else{  
                    alert("Usted decidio no comprar nada.");   
                }
            }else{
                alert("No quedan mas "+articulo1.tipo);
            } 
            break;
        case articulo2.tipo:
            if(comprobarStock(articulo2.stock)){
                alert("Disponemos de "+articulo2.stock+" "+articulo2.tipo+" "+articulo2.color+" "+articulo2.talle+". El precio por unidad es de: "+articulo2.precioFinal);
                quiero = prompt("Desea comprar ? \nSI\nNO").toUpperCase();
                if (quiero === 'SI'){
                    answerPrice = comprando(articulo2);
                    if(answerPrice > 0){
                        alert("El monto a pagar es de "+answerPrice);
                    }else{
                        alert("No se puede realizar la venta, stock insuficiente");
                    }
                }else{  
                    alert("Usted decidio no comprar nada.");   
                }
            }else{
                alert("No quedan mas "+articulo2.tipo);
            } 
            break;
        case articulo3.tipo:
            if(comprobarStock(articulo3.stock)){
                alert("Disponemos de "+articulo3.stock+" "+articulo3.tipo+" "+articulo3.color+" "+articulo3.talle+". El precio por unidad es de: "+articulo3.precioFinal);
                quiero = prompt("Desea comprar ? \nSI\nNO").toUpperCase();
                if (quiero === 'SI'){
                    answerPrice = comprando(articulo3);
                    if(answerPrice > 0){
                        alert("El monto a pagar es de "+answerPrice);
                    }else{
                        alert("No se puede realizar la venta, stock insuficiente");
                    }
                }else{  
                    alert("Usted decidio no comprar nada.");   
                }
            }else{
                alert("No quedan mas "+articulo3.tipo);
            } 
            break;
        default:
            alert("Objeto no encontrado.")
            break;
    }
}

do{
    realizarCompra();

    seguirComprando = prompt("Desea seguir comprando ?? \nSI \nNO").toUpperCase();
}while(seguirComprando==='SI');
