const productosH = [];  // seccion hombres - este arreglo va a tener los objetos en venta
const productosM = []; // seccion mujeres

let cantidad = 0;
let precioXCant = 0;

class Articulo {
    constructor(id, tipo, marca ,modelo, talle, precio, descripcion, alt, img) {
        this.id = id;
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.talles = talle;
        this.precio = precio;
        this.descripcion = descripcion;
        this.alt = alt;
        this.img = img;
        this.precioConImp = precio;
        this.newPrice = precio;
    }

  
    precioFinal() {
        this.precioConImp = Math.round(this.precio * 1.21);
    }
    multiplePriceE() {
        precioXCant = this.precioConImp * cantidad;
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

class Inventario{
    constructor(talle,stock){
        this.talle = talle;
        this.stock = stock;
    }

    comprobarStock(){
        if(this.stock <= 0){
            return true;
        }else{
            return false;
        }
    }
    reducirStock(){
        this.stock--;
    }

}


const tallesH1 = [new Inventario('L',7),('M',4),('S',0)]
productosH.push(new Articulo(1,"REMERA", "CALIFORNIA REPUBLIC", "MANGA CORTA", tallesH1, 7400,"Remera California", "remera masculina de manga corta","../assets/images/hombre/remera_california.jpg"));
const tallesH2 = [new Inventario('L',7),('M',4),('S',0)]
productosH.push(new Articulo(2,"REMERA", "FIVE BORO", "MANGA CORTA",tallesH2, 7300,"Remera skater", "remera masculina de manga corta","../assets/images/hombre/remera_skate.jpg"));
const tallesH3 = [new Inventario('L',7),('M',0),('S',4)]
productosH.push(new Articulo(3,"REMERA", "FUTBOL", "MANGA CORTA",tallesH3, 6200,"Remera Brasil 2014", "remera masculina de manga corta","../assets/images/hombre/remera_ball.jpg"));
const tallesH4 = [new Inventario('L',7),('M',4),('S',2)]
productosH.push(new Articulo(4,"REMERA", "MOON", "MANGA CORTA",tallesH4, 8200,"Remera con un gran diseño de un astronauta en la luna", "remera masculina de manga corta","../assets/images/hombre/remera_moon.jpg"));
const tallesH5 = [new Inventario('L',0),('M',4),('S',1)]
productosH.push(new Articulo(5,"REMERA", "SKREEP", "MANGA LARGA",tallesH5, 7500,"Remera lisa", "remera masculina de manga corta","../assets/images/hombre/remera_bird.jpg"));
const tallesH6 = [new Inventario('L',7),('M',41),('S',3)]
productosH.push(new Articulo(6,"CAMPERA", "SKREEP", "MANGA LARGA",tallesH6, 45000,"Campera de microfibia, ideal para entrenar en climas templados o con fuertes viento", "campera masculina microfibia","../assets/images/hombre/Campera-microfibra-deportiva.jpg"));
const tallesH7 = [new Inventario('L',7),('M',4),('S',7)]
productosH.push(new Articulo(7,"REMERA", "SKREEP", "MANGA CORTA",tallesH7, 6350,"Remera con tabla de skate fantasmagórica", "remera masculina de manga corta","../assets/images/hombre/remera_ghost.jpg"));
const tallesH8 = [new Inventario('L',0),('M',4),('S',9)]
productosH.push(new Articulo(8,"ZAPATILLAS", "SKREEP", "RUNNING",tallesH8, 29000,"Estas zapatillas de running tienen una mediasuela Jetboost que proporciona el increíble retorno de energía de Boost", "zapatillas runnging hombre","../assets/images/hombre/ellos_tennis.jpg"));







productosM.push(new Articulo(1,"BUZO", "CHESIRE", "MANGA LARGA", 'L', 7, 8000));
productosM.push(new Articulo(2,"REMERA", "DBZ", "MANGA CORTA", 'L', 17, 6500));
productosM.push(new Articulo(3,"REMERA", "BASEBALL", "MANGA CORTA", 'M', 1, 6200));
productosM.push(new Articulo(4,"REMERA", "RUFFIAN", "MANGA CORTA", 'S', 3, 5250));
productosM.push(new Articulo(5,"REMERA", "MOON", "MANGA CORTA", 'L', 7, 5800));
productosM.push(new Articulo(6,"CAMPERA", "SKREEP", "MANGA LARGA", 'L', 17, 57000));
productosM.push(new Articulo(7,"ZAPATILLAS", "SKREEP", "RUNNING", 'M', 1, 28000));
productosM.push(new Articulo(8,"ZAPATILLAS", "SKREEP", "RUNNING", 'S', 3, 35000));



// class Inventario{
//     constructor(id, talle, stock){
//         this.id = id;
//         this.talle = talle;
//         this.stock = stock;
//     }

//     hayStock() {
//         this.stock = this.stock - cantidad;
//     }

//     comprobarStock(){
//         if(this.stock <= 0){
//             return true;
//         }else{
//             return false;
//         }
//     }

// }

// inventarioH.push(new Inventario(1,'L',10));
// inventarioH.push(new Inventario(1,'M',0));
// inventarioH.push(new Inventario(1,'S',6));
// inventarioH.push(new Inventario(2,'L',4));
// inventarioH.push(new Inventario(2,'M',2));
// inventarioH.push(new Inventario(2,'S',6));
// inventarioH.push(new Inventario(3,'L',6));
// inventarioH.push(new Inventario(3,'M',6));
// inventarioH.push(new Inventario(3,'S',6));
// inventarioH.push(new Inventario(4,'L',6));
// inventarioH.push(new Inventario(4,'M',6));
// inventarioH.push(new Inventario(4,'S',6));
// inventarioH.push(new Inventario(5,'L',6));
// inventarioH.push(new Inventario(5,'M',6));
// inventarioH.push(new Inventario(5,'S',6));
// inventarioH.push(new Inventario(6,'L',6));
// inventarioH.push(new Inventario(6,'M',6));
// inventarioH.push(new Inventario(6,'S',6));
// inventarioH.push(new Inventario(7,'L',6));
// inventarioH.push(new Inventario(7,'M',6));
// inventarioH.push(new Inventario(7,'S',6));
// inventarioH.push(new Inventario(8,'L',6));
// inventarioH.push(new Inventario(8,'M',6));
// inventarioH.push(new Inventario(8,'S',6));