const productosH = [];  // seccion hombres - este arreglo va a tener los objetos en venta
const productosM = []; // seccion mujeres
let arrayTalle = [];
let arTMujeres =[];

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
productosH.push(new Articulo(3,"REMERA", "FIVE BORO", "MANGA CORTA",arrayTalle, 7300,"Remera skater", "remera masculina de manga corta","../assets/images/hombre/remera_skate.jpg"));

arrayTalle =[
    new Inventario('L',3),
    new Inventario('M',1),
    new Inventario('S',0)
];
productosH.push(new Articulo(5,"REMERA", "FUTBOL", "MANGA CORTA",arrayTalle, 6200,"Remera Brasil 2014", "remera masculina de manga corta","../assets/images/hombre/remera_ball.jpg"));

arrayTalle =[
    new Inventario('L',2),
    new Inventario('M',1),
    new Inventario('S',7)
];
productosH.push(new Articulo(7,"REMERA", "MOON", "MANGA CORTA",arrayTalle, 8200,"Remera con un gran diseño de un astronauta en la luna", "remera masculina de manga corta","../assets/images/hombre/remera_moon.jpg"));

arrayTalle =[
    new Inventario('L',1),
    new Inventario('M',7),
    new Inventario('S',4)
];
productosH.push(new Articulo(9,"REMERA", "SKREEP", "MANGA LARGA",arrayTalle, 7500,"Remera lisa", "remera masculina de manga corta","../assets/images/hombre/remera_bird.jpg"));

arrayTalle =[
    new Inventario('L',4),
    new Inventario('M',20),
    new Inventario('S',0)
];
productosH.push(new Articulo(11,"CAMPERA", "SKREEP", "MANGA LARGA",arrayTalle, 45000,"Campera de microfibia, ideal para entrenar en climas templados o con fuertes viento", "campera masculina microfibia","../assets/images/hombre/Campera-microfibra-deportiva.jpg"));

arrayTalle =[
    new Inventario('L',0),
    new Inventario('M',0),
    new Inventario('S',33)
];
productosH.push(new Articulo(13,"REMERA", "SKREEP", "MANGA CORTA",arrayTalle, 6350,"Remera con tabla de skate fantasmagórica", "remera masculina de manga corta","../assets/images/hombre/remera_ghost.jpg"));

arrayTalle =[
    new Inventario('L',11),
    new Inventario('M',0),
    new Inventario('S',23)
];
productosH.push(new Articulo(15,"ZAPATILLAS", "SKREEP", "RUNNING",arrayTalle, 29000,"Estas zapatillas de running tienen una mediasuela Jetboost que proporciona el increíble retorno de energía de Boost", "zapatillas runnging hombre","../assets/images/hombre/ellos_tennis.jpg"));

// --- arreglos mujer ---

arTMujeres =[
    new Inventario('L',1),
    new Inventario('M',9),
    new Inventario('S',3)
];
productosM.push(new Articulo(2,"BUZO", "CHESIRE", "MANGA LARGA",arTMujeres, 8000,"Buzo con el gato cheshire, de la película Alicia en el país de las maravillas.", "remera femenina de manga larga, femenina, a dos tonos, con un gato cheshire", "../assets/images/mujer/cheshire.jpg"));

arTMujeres =[
    new Inventario('L',0),
    new Inventario('M',0),
    new Inventario('S',3)
];
productosM.push(new Articulo(4,"REMERA", "DBZ", "MANGA CORTA",arTMujeres, 6500, "Remera con dibujo de dragon ball.", "remera femenina de manga corta, negra, con la leyenda: BLACK LEVEL, y con el dibujo de goku versión niño", "../assets/images/mujer/ella_goku.jpg"));

arTMujeres =[
    new Inventario('L',1),
    new Inventario('M',0),
    new Inventario('S',0)
];
productosM.push(new Articulo(6,"REMERA", "BASEBALL", "MANGA CORTA",arTMujeres, 6200, "Remera con caricatura jugando al baseball.", "remera femenina de manga corta, azul claro, con una caricatura de un oso jugando al baseball", "../assets/images/mujer/ella_bbal.jpg"));

arTMujeres =[
    new Inventario('L',21),
    new Inventario('M',10),
    new Inventario('S',0)
];
productosM.push(new Articulo(8,"REMERA", "RUFFIAN", "MANGA CORTA",arTMujeres, 5250, "Remera con caricatura.", "remera femenina de manga corta, color celeste, con la leyenda: ruffian y la caricatura de un perro delincuente", "../assets/images/mujer/ella_dog.jpg"));

arTMujeres =[
    new Inventario('L',0),
    new Inventario('M',0),
    new Inventario('S',0)
];
productosM.push(new Articulo(10,"REMERA", "MOON", "MANGA CORTA", arTMujeres, 5800, "Remera con caricatura.", "remera femenina de manga corta, negra, con una caricatura de un hombre vestido de traje", "../assets/images/mujer/ella_rubio.jpg"));

arTMujeres =[
    new Inventario('L',1),
    new Inventario('M',10),
    new Inventario('S',3)
];
productosM.push(new Articulo(12,"CAMPERA", "SKREEP", "MANGA LARGA",arTMujeres, 57000, "Campera térmica, con pluma de ganso.", "campera femenina, de color negra con detalles en rosa, muy abrigada, ideal para climas fríos", "../assets/images/mujer/campera_ella.jpg"));

arTMujeres =[
    new Inventario('L',0),
    new Inventario('M',20),
    new Inventario('S',3)
];
productosM.push(new Articulo(14,"ZAPATILLAS", "SKREEP", "RUNNING",arTMujeres, 28000, "Zapatillas livianas, ideales para running.", "zapatillas femeninas, de color naranja claro, muy livianas, ideales para running", "../assets/images/mujer/ellas_orange.jpg"));

arTMujeres =[
    new Inventario('L',1),
    new Inventario('M',0),
    new Inventario('S',0)
];
productosM.push(new Articulo(16,"ZAPATILLAS", "SKREEP", "RUNNING", arTMujeres, 35000, "Zapatillas ultraboost, para running de alto rendimiento.", "zapatillas femeninas, colores: violeta, celeste y rosa, livianas, ideales para entrenar", "../assets/images/mujer/ella_fila.jpg"));
