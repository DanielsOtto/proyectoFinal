const productosH = [];  // seccion hombres - este arreglo va a tener los objetos en venta
const productosM = []; // seccion mujeres
let arrayTalle = [];


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
        this.precioPorCantidad = this.precioConImp; // nuevo
        this.cantidad = 0;
    }
  
    precioFinal(){
        this.precioConImp = Math.round(this.precio * 1.21);
    }
    reiniciarCantidad(){
        this.cantidad = 0;
    }
    descontarCantidad(b){
        this.cantidad -= b;
    }
    cantidadTotal(a){
        this.cantidad += a;
    }
    cantidadReducida(b){
        this.cantidad -= b;
    }
    precioXCant(){
        this.precioPorCantidad = this.precioConImp * this.cantidad; // nuevo
    }



}

class Inventario{
    constructor(talle,stock){
        this.talle = talle;
        this.stock = stock;

        this.cantidad = 0; // se usa en carrito -- lo usaba en Inventario
        this.vendido = false; // se usa en carrito -- lo usaba en Inventario
    }

    comprobarStock(){
        if(this.stock <= 0){
            return true;
        }else{
            return false;
        }
    }
    objetoVendido(){ 
        this.vendido = true;
    }
    quieroUnoMas(){  
        this.cantidad++;
    }
    quieroUnoMenos(){ 
        this.cantidad--;
    }
    reducirStock(){
        this.stock--;
    }

}


arrayTalle =[
    new Inventario('L',1),
    new Inventario('M',0),
    new Inventario('S',3)
];
productosH.push(new Articulo(1,"REMERA", "CALIFORNIA REPUBLIC", "MANGA CORTA", arrayTalle, 7400,"Remera California", "remera masculina de manga corta","../assets/images/hombre/remera_california.jpg"));

arrayTalle =[
    new Inventario('L',0),
    new Inventario('M',7),
    new Inventario('S',3)
];
productosH.push(new Articulo(2,"REMERA", "FIVE BORO", "MANGA CORTA",arrayTalle, 7300,"Remera skater", "remera masculina de manga corta","../assets/images/hombre/remera_skate.jpg"));

arrayTalle =[
    new Inventario('L',3),
    new Inventario('M',1),
    new Inventario('S',0)
];
productosH.push(new Articulo(3,"REMERA", "FUTBOL", "MANGA CORTA",arrayTalle, 6200,"Remera Brasil 2014", "remera masculina de manga corta","../assets/images/hombre/remera_ball.jpg"));

arrayTalle =[
    new Inventario('L',2),
    new Inventario('M',1),
    new Inventario('S',7)
];
productosH.push(new Articulo(4,"REMERA", "MOON", "MANGA CORTA",arrayTalle, 8200,"Remera con un gran diseño de un astronauta en la luna", "remera masculina de manga corta","../assets/images/hombre/remera_moon.jpg"));

arrayTalle =[
    new Inventario('L',1),
    new Inventario('M',7),
    new Inventario('S',4)
];
productosH.push(new Articulo(5,"REMERA", "SKREEP", "MANGA LARGA",arrayTalle, 7500,"Remera lisa", "remera masculina de manga corta","../assets/images/hombre/remera_bird.jpg"));

arrayTalle =[
    new Inventario('L',4),
    new Inventario('M',20),
    new Inventario('S',0)
];
productosH.push(new Articulo(6,"CAMPERA", "SKREEP", "MANGA LARGA",arrayTalle, 45000,"Campera de microfibia, ideal para entrenar en climas templados o con fuertes viento", "campera masculina microfibia","../assets/images/hombre/Campera-microfibra-deportiva.jpg"));

arrayTalle =[
    new Inventario('L',0),
    new Inventario('M',0),
    new Inventario('S',33)
];
productosH.push(new Articulo(7,"REMERA", "SKREEP", "MANGA CORTA",arrayTalle, 6350,"Remera con tabla de skate fantasmagórica", "remera masculina de manga corta","../assets/images/hombre/remera_ghost.jpg"));

arrayTalle =[
    new Inventario('L',11),
    new Inventario('M',0),
    new Inventario('S',23)
];
productosH.push(new Articulo(8,"ZAPATILLAS", "SKREEP", "RUNNING",arrayTalle, 29000,"Estas zapatillas de running tienen una mediasuela Jetboost que proporciona el increíble retorno de energía de Boost", "zapatillas runnging hombre","../assets/images/hombre/ellos_tennis.jpg"));







productosM.push(new Articulo(1,"BUZO", "CHESIRE", "MANGA LARGA", 'L', 7, 8000));
productosM.push(new Articulo(2,"REMERA", "DBZ", "MANGA CORTA", 'L', 17, 6500));
productosM.push(new Articulo(3,"REMERA", "BASEBALL", "MANGA CORTA", 'M', 1, 6200));
productosM.push(new Articulo(4,"REMERA", "RUFFIAN", "MANGA CORTA", 'S', 3, 5250));
productosM.push(new Articulo(5,"REMERA", "MOON", "MANGA CORTA", 'L', 7, 5800));
productosM.push(new Articulo(6,"CAMPERA", "SKREEP", "MANGA LARGA", 'L', 17, 57000));
productosM.push(new Articulo(7,"ZAPATILLAS", "SKREEP", "RUNNING", 'M', 1, 28000));
productosM.push(new Articulo(8,"ZAPATILLAS", "SKREEP", "RUNNING", 'S', 3, 35000));
